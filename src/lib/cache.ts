import { unstable_cache } from "next/cache";
import seed from "@/data/github-seed.json";

const SEED = seed as Record<string, unknown>;
const SEED_PATH = "src/data/github-seed.json";

const isBuild = () => process.env.NEXT_PHASE === "phase-production-build";

/**
 * Last-known-good snapshot of GitHub-backed data, bundled with the app.
 *
 * Every successful `next build` records the live data into
 * src/data/github-seed.json (commit it occasionally). When GitHub is
 * unreachable AND nothing is cached yet (first request on a cold edge, or a
 * build that ran while GitHub was down) we serve this snapshot, so visitors
 * and crawlers see real, slightly older data, never zeros or blank lists.
 */
function readSeed<T>(key: string): T | undefined {
  return SEED[key] as T | undefined;
}

const writtenThisProcess = new Set<string>();

async function writeSeed(key: string, value: unknown) {
  // Build-time only, once per key per process, and never overwrite good data
  // with an empty list.
  if (!isBuild() || writtenThisProcess.has(key)) return;
  if (Array.isArray(value) && value.length === 0) return;
  writtenThisProcess.add(key);
  try {
    const [{ readFile, writeFile, rename }, path] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);
    const file = path.join(process.cwd(), SEED_PATH);
    // Several build workers write this file. Replace it atomically, then verify
    // our key survived a concurrent writer and retry if it did not.
    for (let attempt = 0; attempt < 5; attempt++) {
      let current: Record<string, unknown> = {};
      try {
        current = JSON.parse(await readFile(file, "utf8"));
      } catch {}
      current[key] = value;
      const tmp = `${file}.${process.pid}.${attempt}.tmp`;
      await writeFile(tmp, JSON.stringify(current, null, 2) + "\n");
      await rename(tmp, file);
      try {
        if (key in JSON.parse(await readFile(file, "utf8"))) return;
      } catch {}
      await new Promise((r) => setTimeout(r, 25 + Math.random() * 75));
    }
  } catch {
    // The snapshot is a best-effort safety net; never fail a build over it.
  }
}

/**
 * Data is resolved through these layers, newest first:
 *   1. Cached value (`unstable_cache`). Served instantly. After `revalidate`
 *      seconds the next request still gets it while a refresh runs in the
 *      background; if that refresh throws, the cached value is kept.
 *   2. Live fetch, when nothing is cached.
 *   3. Snapshot from the last successful build (see above).
 *   4. The empty `fallback`, only if there is no snapshot either.
 *
 * Loaders must THROW on failure: anything they return, even `[]`, is cached
 * for the whole window.
 */
export async function cachedOrFallback<T>(
  load: () => Promise<T>,
  keyParts: string[],
  options: { revalidate: number; tags: string[] },
  fallback: T
): Promise<T> {
  const key = keyParts.join(":");
  try {
    const value = await unstable_cache(load, keyParts, options)();
    await writeSeed(key, value);
    return value;
  } catch (error) {
    const snapshot = readSeed<T>(key);
    if (snapshot !== undefined) {
      console.error(`[cache] "${key}" failed to load; serving last-known-good snapshot.`, error);
      return snapshot;
    }
    console.error(`[cache] "${key}" failed to load and no snapshot exists; using fallback.`, error);
    return fallback;
  }
}
