// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { githubFetch } from "@/lib/githubFetch";

// Minimal in-memory stand-in for Cloudflare's caches.default
function installFakeCache() {
  const store = new Map<string, Response>();
  (globalThis as { caches?: unknown }).caches = {
    default: {
      match: async (req: Request) => store.get(req.url)?.clone(),
      put: async (req: Request, res: Response) => void store.set(req.url, res),
    },
  };
  return store;
}

const URL_ = "https://api.github.com/orgs/x";
const ok = (body: unknown) => new Response(JSON.stringify(body), { status: 200 });

describe("githubFetch (edge cache)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    delete (globalThis as { caches?: unknown }).caches;
  });

  it("passes straight through when there is no edge cache (Node / build)", async () => {
    fetchMock.mockResolvedValue(ok({ n: 1 }));
    const res = await githubFetch(URL_);
    expect(await res.json()).toEqual({ n: 1 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("serves a fresh cached copy without calling GitHub", async () => {
    installFakeCache();
    fetchMock.mockResolvedValue(ok({ n: 1 }));
    await githubFetch(URL_);
    vi.setSystemTime(Date.now() + 5 * 60 * 1000); // 5 min later: still fresh
    const res = await githubFetch(URL_);
    expect(await res.json()).toEqual({ n: 1 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("refetches once the copy is older than the fresh window", async () => {
    installFakeCache();
    fetchMock.mockResolvedValueOnce(ok({ n: 1 })).mockResolvedValueOnce(ok({ n: 2 }));
    await githubFetch(URL_);
    vi.setSystemTime(Date.now() + 31 * 60 * 1000);
    const res = await githubFetch(URL_);
    expect(await res.json()).toEqual({ n: 2 });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("serves the stale copy when GitHub rate-limits (403/429)", async () => {
    installFakeCache();
    fetchMock
      .mockResolvedValueOnce(ok({ n: 1 }))
      .mockResolvedValueOnce(new Response("rate limited", { status: 403 }));
    await githubFetch(URL_);
    vi.setSystemTime(Date.now() + 2 * 60 * 60 * 1000);
    const res = await githubFetch(URL_);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ n: 1 });
  });

  it("serves the stale copy when GitHub is unreachable", async () => {
    installFakeCache();
    fetchMock.mockResolvedValueOnce(ok({ n: 1 })).mockRejectedValueOnce(new Error("network down"));
    await githubFetch(URL_);
    vi.setSystemTime(Date.now() + 2 * 60 * 60 * 1000);
    expect(await (await githubFetch(URL_)).json()).toEqual({ n: 1 });
  });

  it("surfaces the error when there is no cached copy to fall back on", async () => {
    installFakeCache();
    fetchMock.mockRejectedValueOnce(new Error("network down"));
    await expect(githubFetch(URL_)).rejects.toThrow("network down");
  });

  it("never caches non-GET requests", async () => {
    installFakeCache();
    fetchMock.mockResolvedValue(ok({}));
    await githubFetch(URL_, { method: "POST", body: "{}" });
    await githubFetch(URL_, { method: "POST", body: "{}" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
