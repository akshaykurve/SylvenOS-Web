import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// Why this exists (SEO): without a persistent incremental cache, a Cloudflare
// Worker starts every cold isolate with an empty cache. Revalidated pages and
// `unstable_cache` GitHub data could not be saved, so a crawler could hit a
// cold Worker and trigger live GitHub calls (or get empty data if they fail).
//
// With R2 behind it, the last good HTML and data survive across isolates and
// deploys. Visitors and Googlebot get the stored copy immediately; Next
// refreshes it in the background once it is older than `revalidate`, and if the
// refresh fails the stored copy keeps being served.
//
// One-time setup: create the bucket named in wrangler.toml
//   npx wrangler r2 bucket create sylvenosweb-cache
export default defineCloudflareConfig({
  // Regional Cache API in front of R2: far fewer R2 reads per request.
  incrementalCache: withRegionalCache(r2IncrementalCache, { mode: "long-lived" }),
  // Runs the background (time-based) revalidation after a stale response.
  queue: memoryQueue,
});
