import { AggregatedContributor } from "@/lib/type";
import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";

// Forces Next.js & Cloudflare CDN to cache this GET route's output for 1 hour
export const revalidate = 3600;

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const ORG_NAME = "sylvenos";

export async function getOrganizationRankings(orgName: string): Promise<AggregatedContributor[]> {
  try {
    // 1. Fetch public repos
    const { data: repos } = await octokit.repos.listForOrg({
      org: orgName,
      type: "public",
      per_page: 100,
    });

    const contributionMap: Record<string, { id: number; avatar_url: string; html_url: string; count: number }> = {};

    // 2. Aggregate contributors per repo
    await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: contributors } = await octokit.repos.listContributors({
            owner: orgName,
            repo: repo.name,
            per_page: 100,
          });

          for (const contributor of contributors) {
            // Filter out bots and anonymous entries
            if (!contributor.login || contributor.type !== "User") continue;

            if (!contributionMap[contributor.login]) {
              contributionMap[contributor.login] = {
                id: contributor.id ?? 0,
                avatar_url: contributor.avatar_url ?? "",
                html_url: contributor.html_url ?? "",
                count: 0,
              };
            }
            contributionMap[contributor.login].count += contributor.contributions ?? 0;
          }
        } catch {
          console.warn(`Skipping empty or inaccessible repo: ${repo.name}`);
        }
      })
    );

    // 3. Enrich unique user profiles
    const uniqueLogins = Object.keys(contributionMap);

    const enrichedContributors = await Promise.all(
      uniqueLogins.map(async (login) => {
        const details = contributionMap[login];
        try {
          const { data: userData } = await octokit.users.getByUsername({ username: login });

          return {
            login,
            id: details.id,
            avatar_url: details.avatar_url,
            html_url: details.html_url,
            totalContributions: details.count,
            name: userData.name || null,
            rank: 0,
          };
        } catch {
          return {
            login,
            id: details.id,
            avatar_url: details.avatar_url,
            html_url: details.html_url,
            totalContributions: details.count,
            name: null,
            rank: 0,
          };
        }
      })
    );

    // 4. Sort descending by count and attach ranks
    return enrichedContributors
      .sort((a, b) => b.totalContributions - a.totalContributions)
      .map((node, index) => ({
        ...node,
        rank: index + 1,
        repoBreakdown: [],
        recentActivity: [],
      } as unknown as AggregatedContributor));

  } catch (error) {
    console.error("Failed to compile global organization telemetry map:", error);
    return [];
  }
}

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
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}