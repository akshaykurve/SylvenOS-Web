import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
// import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
// import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// OPTIONAL: persistent cache (R2). Currently OFF because R2 is not enabled on
// the Cloudflare account, which makes `opennextjs-cloudflare deploy` fail with
// "Please enable R2 through the Cloudflare Dashboard" (error 10042).
//
// While it is off, the app is still protected from empty data by the bundled
// last-known-good snapshot (src/data/github-seed.json, see src/lib/cache.ts).
// What R2 adds on top: refreshed pages and GitHub data survive across Worker
// isolates and deploys instead of being re-fetched on every cold start.
//
// To turn it on:
//   1. Cloudflare Dashboard -> Storage & databases -> R2 -> enable R2.
//   2. Uncomment the three imports above and the two options below.
//   3. Uncomment the [[r2_buckets]] block in wrangler.toml.
//      (The deploy creates the bucket automatically once R2 is enabled.)
export default defineCloudflareConfig({
  // incrementalCache: withRegionalCache(r2IncrementalCache, { mode: "long-lived" }),
  // queue: memoryQueue,
});
