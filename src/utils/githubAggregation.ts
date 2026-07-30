// utils/githubAggregation.ts
import {
  AggregatedContributor,
  ContributionActivity,
  RepoContribution,
} from "@/lib/type";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getOrganizationRankings(
  orgName: string,
): Promise<AggregatedContributor[]> {
  try {
    // 1. Fetch all public repositories belonging to the organization
    const { data: repos } = await octokit.repos.listForOrg({
      org: orgName,
      type: "public",
      per_page: 100,
    });

    const contributionMap: Record<
      string,
      {
        id: number;
        avatar_url: string;
        html_url: string;
        total: number;
        repos: Record<string, number>;
      }
    > = {};

    // 2. Fetch repo-specific contributor totals
    await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: contributors } = await octokit.repos.listContributors({
            owner: orgName,
            repo: repo.name,
            per_page: 100,
          });

          for (const contributor of contributors) {
            if (!contributor.login || contributor.type === "Bot") continue;

            if (!contributionMap[contributor.login]) {
              contributionMap[contributor.login] = {
                id: contributor.id ?? 0, // 👈 Fallback for number
                avatar_url: contributor.avatar_url ?? "", // 👈 Fallback for string
                html_url: contributor.html_url ?? "", // 👈 Fallback for string
                total: 0,
                repos: {},
              };
            }

            contributionMap[contributor.login].total +=
              contributor.contributions;
            contributionMap[contributor.login].repos[repo.name] =
              contributor.contributions;
          }
        } catch (e) {
          console.warn(`Skipping empty repo: ${repo.name}`);
        }
      }),
    );

    // 3. Transform profiles and search historical commit registries
    const contributorProfiles = await Promise.all(
      Object.entries(contributionMap).map(async ([login, details]) => {
        let recentActivity: ContributionActivity[] = [];

        try {
          // Robust deep-history search filter targeting this specific author inside the organization
          const { data: searchResults } = await octokit.search.commits({
            q: `org:${orgName} author:${login}`,
            sort: "author-date",
            order: "desc",
            per_page: 15,
          });

          recentActivity = searchResults.items.map((item: any) => ({
            id: item.sha,
            repoName: item.repository.name, // Extracted directly from the commit metadata object
            type: "Commit",
            title: item.commit.message.split("\n")[0], // Capture the main commit title summary line
            timestamp: new Date(item.commit.author.date).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              },
            ),
            url: item.html_url,
          }));
        } catch (err) {
          console.error(
            `Failed searching commit histories for node: ${login}`,
            err,
          );
        }

        const repoBreakdown: RepoContribution[] = Object.entries(details.repos)
          .map(([repoName, contributions]) => ({ repoName, contributions }))
          .sort((a, b) => b.contributions - a.contributions);

        return {
          login,
          id: details.id,
          avatar_url: details.avatar_url,
          html_url: details.html_url,
          totalContributions: details.total,
          rank: 0,
          repoBreakdown,
          recentActivity,
        };
      }),
    );

    return contributorProfiles
      .sort((a, b) => b.totalContributions - a.totalContributions)
      .map((profile, index) => ({ ...profile, rank: index + 1 }));
  } catch (error) {
    console.error(
      "Critical failure during organization data compilation pipeline:",
      error,
    );
    return [];
  }
}
