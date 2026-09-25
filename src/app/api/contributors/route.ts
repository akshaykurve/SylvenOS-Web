import { getOrganizationRankings } from "@/utils/githubAggregation";
import { NextResponse } from "next/server";

// Forces Next.js & Cloudflare CDN to cache this GET route's output for 1 hour
export const revalidate = 3600;

const ORG_NAME = "sylvenos";

export async function GET() {
  try {
    const contributors = await getOrganizationRankings(ORG_NAME);

    return NextResponse.json(
      { success: true, data: contributors },
      {
        headers: {
          // Instructs Cloudflare CDN Edge to hold the cache for 1 hour
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}