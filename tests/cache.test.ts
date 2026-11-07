import { afterEach, describe, expect, it, vi } from "vitest";

// unstable_cache needs the Next runtime; for these tests it just runs the loader.
vi.mock("next/cache", () => ({
  unstable_cache: (fn: () => Promise<unknown>) => fn,
}));

// A snapshot exists for "known" only.
vi.mock("@/data/github-seed.json", () => ({
  default: { known: ["snapshot-item"] },
}));

import { cachedOrFallback } from "@/lib/cache";

const options = { revalidate: 3600, tags: ["t"] };
const fail = () => Promise.reject(new Error("GitHub rate limit"));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("cachedOrFallback", () => {
  it("returns loaded data on success", async () => {
    await expect(
      cachedOrFallback(async () => ["real"], ["unknown"], options, [])
    ).resolves.toEqual(["real"]);
  });

  it("serves the last-known-good snapshot, never empty data, when loading fails", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PHASE", "");
    await expect(cachedOrFallback(fail, ["known"], options, [])).resolves.toEqual([
      "snapshot-item",
    ]);
  });

  it("serves the snapshot during `next build` too, so CI never bakes empty pages", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubEnv("NEXT_PHASE", "phase-production-build");
    await expect(cachedOrFallback(fail, ["known"], options, [])).resolves.toEqual([
      "snapshot-item",
    ]);
  });

  it("uses the empty fallback only when there is no snapshot at all", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    await expect(cachedOrFallback(fail, ["unknown"], options, ["empty"])).resolves.toEqual([
      "empty",
    ]);
  });
});
