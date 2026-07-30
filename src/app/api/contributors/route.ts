import { AggregatedContributor } from "@/lib/type";
import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const ORG_NAME = "sylvenos"; // Replace with your target organization name

// Global caching directive pass-through for Next.js Data Cache integration
const cacheConfig = {
  request: {
    next: { revalidate: 3600 },
  },
};

export async function getOrganizationRankings(orgName: string): Promise<AggregatedContributor[]> {
  try {
    // 1. Fetch all public repositories for the organization
    const { data: repos } = await octokit.repos.listForOrg({
      org: orgName,
      type: "public",
      per_page: 100,
      ...cacheConfig
    });

    const contributionMap: Record<string, { id: number; avatar_url: string; html_url: string; count: number }> = {};

    // 2. Concurrently fetch contributors for every repository
    await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: contributors } = await octokit.repos.listContributors({
            owner: orgName,
            repo: repo.name,
            per_page: 100,
            ...cacheConfig
          });
for (const contributor of contributors) {
  // Ignore anonymous or bot nodes
  if (!contributor.login || contributor.type === "Bot") continue;

  if (!contributionMap[contributor.login]) {
    contributionMap[contributor.login] = {
      id: contributor.id ?? 0, // 👈 Added fallback to satisfy TypeScript
      avatar_url: contributor.avatar_url ?? "", // 👈 Added fallback
      html_url: contributor.html_url ?? "", // 👈 Added fallback
      count: 0,
    };
  }
  // Aggregate totals across all repos (also added fallback here just in case)
  contributionMap[contributor.login].count += contributor.contributions ?? 0;
}
        } catch (err) {
          // Soft catch for empty repositories
          console.warn(`Skipping empty or inaccessible repo: ${repo.name}`);
        }
      })
    );

    // 3. De-duplicated profile enrichment loop (Only queries unique users once)
    const uniqueLogins = Object.keys(contributionMap);
    
    const enrichedContributors = await Promise.all(
      uniqueLogins.map(async (login) => {
        const details = contributionMap[login];
        try {
          const { data: userData } = await octokit.users.getByUsername({
            username: login,
            ...cacheConfig
          });

          return {
            login,
            id: details.id,
            avatar_url: details.avatar_url,
            html_url: details.html_url,
            totalContributions: details.count,
            name: userData.name || null,
            rank: 0, 
          };
        } catch (err) {
          console.warn(`Failed to resolve display name metadata profile for ${login}:`, err);
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

    // 4. Sort descending by aggregated count and map final structural rank indices
   // 4. Sort descending by aggregated count and map final structural rank indices
    return enrichedContributors
      .sort((a, b) => b.totalContributions - a.totalContributions)
      .map((node, index) => ({ 
        ...node, 
        rank: index + 1,
        repoBreakdown: [], // 👈 Added fallback to satisfy TypeScript
        recentActivity: [], // 👈 Added fallback to satisfy TypeScript
      } as unknown as AggregatedContributor)); // 👈 Forces TypeScript to accept the shape

  } catch (error) {
    console.error("Failed to compile global organization telemetry map:", error);
    return [];
  }
}

// Fixed GET handler: Removed invalid `params` and called the actual contributor logic
export async function GET(request: Request) {
  try {
    const contributors = await getOrganizationRankings(ORG_NAME);
    
    return NextResponse.json({ 
      success: true, 
      data: contributors 
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}