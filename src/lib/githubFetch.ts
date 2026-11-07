/**
 * A `fetch` for the GitHub client that persists responses in Cloudflare's
 * edge Cache API (free, no bucket or account setup).
 *
 * Why: on Workers the Next.js data cache is not persistent without R2/KV, so a
 * cold Worker would call GitHub again for every request, and if GitHub is
 * rate-limiting or down the visitor would get nothing. This layer fixes both:
 *
 *  - fresh (< FRESH_SECONDS): served from the edge cache, no GitHub call.
 *  - older, GitHub healthy: refetched and the cache updated.
 *  - older, GitHub failing (network error, 403/429 rate limit, 5xx): the stale
 *    copy is served instead of an error ("stale-if-error"), up to KEEP_SECONDS.
 *
 * In Node (local dev, `next build`) there is no Cache API, so it is a plain
 * pass-through, and the snapshot in src/lib/cache.ts covers failures there.
 */
const FRESH_SECONDS = 30 * 60;
const KEEP_SECONDS = 7 * 24 * 60 * 60;
const STAMP = "x-edge-cached-at";

type EdgeCache = {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
};

function getEdgeCache(): EdgeCache | undefined {
  const cacheStorage = (globalThis as { caches?: { default?: EdgeCache } }).caches;
  return cacheStorage?.default;
}

export const githubFetch: typeof fetch = async (input, init) => {
  const request = new Request(input as RequestInfo, init);
  const cache = getEdgeCache();

  // Only plain GETs are cacheable; everything else goes straight through.
  if (!cache || request.method !== "GET") return fetch(request);

  // Key on the URL alone so the auth header never splits or leaks cache entries.
  const key = new Request(request.url, { method: "GET" });
  const cached = await cache.match(key).catch(() => undefined);

  const ageSeconds = cached
    ? (Date.now() - Number(cached.headers.get(STAMP) ?? 0)) / 1000
    : Infinity;
  if (cached && ageSeconds < FRESH_SECONDS) return cached;

  try {
    const response = await fetch(request);

    if (response.ok) {
      const headers = new Headers(response.headers);
      headers.set(STAMP, String(Date.now()));
      headers.set("Cache-Control", `public, max-age=${KEEP_SECONDS}`);
      headers.delete("set-cookie");
      const stored = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
      await cache.put(key, stored).catch(() => {});
      return response;
    }

    // Rate limited / server error: prefer older real data over an error.
    if (cached && (response.status === 403 || response.status === 429 || response.status >= 500)) {
      return cached;
    }
    return response;
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
};
