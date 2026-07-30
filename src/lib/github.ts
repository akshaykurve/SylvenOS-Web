import { localProjectRegistry } from "@/config/projectMetadata";
import { Octokit } from "@octokit/rest";
import { unstable_cache } from "next/cache";

// 1. Unified Octokit Initialization
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GITHUB_ACCESS_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN || undefined,
});

const DEFAULT_ORG_NAME = "SylvenOS";

// ==========================================
// HELPER UTILITIES
// ==========================================

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function parseRepoTopics(topics: string[] = []) {
  const statusTopic = topics.find((t) => t.startsWith("status-"));
  const diffTopic = topics.find((t) => t.startsWith("difficulty-"));

  const rawStatus = statusTopic ? capitalize(statusTopic.split("-")[1] || "") : "Active";
  const status = ["Active", "Planning", "Completed", "Archived", "Beta"].includes(rawStatus)
    ? rawStatus
    : "Active";

  const rawDiff = diffTopic ? capitalize(diffTopic.split("-")[1] || "") : "Intermediate";
  const difficulty = ["Beginner", "Intermediate", "Advanced"].includes(rawDiff)
    ? rawDiff
    : "Intermediate";

  const techStack = topics
    .filter((t) => !t.startsWith("status-") && !t.startsWith("difficulty-") && t !== "featured")
    .map((t) => {
      if (t === "nextjs") return "Next.js";
      if (t === "nodejs") return "Node.js";
      if (t === "react") return "React";
      if (t === "typescript") return "TypeScript";
      return capitalize(t);
    });

  return { status, difficulty, techStack };
}

function buildDefaultMetadata(repoName: string, primaryLanguage: string) {
  return {
    overview: `The ${repoName} module serves as a core infrastructure component within our ecosystem, engineered specifically to handle high-performance operations utilizing modern ${primaryLanguage} paradigms with near-zero runtime overhead.`,
    goals: [
      `Optimize execution performance in ${primaryLanguage} workloads`,
      `Expose clean, standardized API surfaces for developers`,
      `Expand test suite coverage past the 85% threshold`,
    ],
    features: [
      `Modular runtime configuration settings`,
      `Asynchronous event loop tracking built in ${primaryLanguage}`,
      `Comprehensive, structured logging and diagnostics out of the box`,
    ],
    architecture: [
      {
        layer: "Application Layer",
        description: `Primary interfaces and application runtime executed via ${primaryLanguage}.`,
      },
      {
        layer: "Utility Layer",
        description: "Localized schema parsing, safety validation, and process optimization modules.",
      },
    ],
    contributionGuide: `We love open-source contributions! To get started on ${repoName}:\n\n1. Fork the repository and create a descriptive branch.\n2. Add your features, bug fixes, or enhancements.\n3. Open a Pull Request back to the master branch. All tests must pass prior to merge consideration.`,
  };
}

// ==========================================
// RAW UNCACHED INTERNAL FETCHERS
// ==========================================

async function fetchGithubStatsRaw() {
  const orgName = DEFAULT_ORG_NAME;

  if (process.env.NODE_ENV === "development" && !GITHUB_TOKEN) {
    return {
      contributors: 13,
      repos: 6,
      orgData: {
        id: 1,
        login: orgName,
        public_repos: 6,
        followers: 16,
        location: "India",
        description: "nexus point of tech community",
      },
      membersData: [
        {
          login: "Abhishek3285",
          id: 168811316,
          avatar_url: "https://avatars.githubusercontent.com/u/168811316?v=4",
          html_url: "https://github.com/Abhishek3285",
          name: "Abhishek Kumar",
        },
      ],
    };
  }

  try {
    const [orgResponse, membersResponse] = await Promise.all([
      octokit.rest.orgs.get({ org: orgName }),
      octokit.rest.orgs.listMembers({ org: orgName, per_page: 100 }),
    ]);

    const orgData = orgResponse.data;
    const baselineMembers = membersResponse.data;

    const enrichedMembers = await Promise.all(
      baselineMembers.map(async (member) => {
        try {
          const userResponse = await octokit.rest.users.getByUsername({
            username: member.login,
          });

          return {
            id: member.id,
            login: member.login,
            avatar_url: member.avatar_url,
            html_url: member.html_url,
            name: userResponse.data.name || null,
          };
        } catch {
          return {
            id: member.id,
            login: member.login,
            avatar_url: member.avatar_url,
            html_url: member.html_url,
            name: null,
          };
        }
      })
    );

    return {
      repos: orgData.public_repos || 0,
      contributors: enrichedMembers.length,
      orgData,
      membersData: enrichedMembers,
    };
  } catch (error) {
    console.error("Critical failure during Octokit collection handling:", error);
    return {
      contributors: 0,
      membersData: [],
      orgData: { id: 1, login: orgName, public_repos: 0, followers: 0, location: "Global" },
      repos: 0,
    };
  }
}

async function fetchEcosystemStatsRaw(orgName: string) {
  try {
    const { data: repos } = await octokit.rest.repos.listForOrg({
      org: orgName,
      type: "public",
      per_page: 100,
    });

    const uniqueContributors = new Set<string>();

    await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: contributors } = await octokit.rest.repos.listContributors({
            owner: orgName,
            repo: repo.name,
            per_page: 100,
          });

          for (const contributor of contributors) {
            if (contributor.login && contributor.type === "User") {
              uniqueContributors.add(contributor.login);
            }
          }
        } catch {}
      })
    );

    return {
      repositories: repos.length,
      contributors: uniqueContributors.size,
      projects: repos.length > 0 ? 1 : 0,
    };
  } catch (error) {
    console.error("Failed to aggregate GitHub telemetry:", error);
    return { repositories: 1, contributors: 0, projects: 1 };
  }
}

async function fetchFeaturedProjectsRaw(orgName: string) {
  try {
    const { data: repos } = await octokit.rest.repos.listForOrg({
      org: orgName,
      type: "public",
      sort: "updated",
      per_page: 20,
    });

    const featuredRepos = repos.filter((repo) => repo.topics?.includes("featured")).slice(0, 6);

    return featuredRepos.map((repo) => {
      const { status, difficulty, techStack } = parseRepoTopics(repo.topics);

      const lastUpdated = repo.updated_at
        ? new Date(repo.updated_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Recently";

      return {
        name: repo.name,
        description: repo.description || "No project description provided yet.",
        avatarUrl: repo.owner.avatar_url,
        status,
        difficulty,
        techStack: techStack.length > 0 ? techStack : ["TypeScript"],
        lastUpdated,
        openIssues: repo.open_issues_count || 0,
        repoUrl: repo.html_url,
        docsUrl: repo.homepage || `${repo.html_url}/wiki`,
      };
    });
  } catch (error) {
    console.error("Failed to query GitHub repository structures:", error);
    return [];
  }
}

async function fetchAllProjectsRaw(orgName: string) {
  try {
    const { data: repos } = await octokit.rest.repos.listForOrg({
      org: orgName,
      type: "public",
      per_page: 100,
    });

    const taggedRepos = repos.filter((repo) =>
      repo.topics?.some(
        (topic) =>
          topic.startsWith("status-") ||
          topic.startsWith("difficulty-") ||
          topic === "featured"
      )
    );

    return await Promise.all(
      taggedRepos.map(async (repo) => {
        let contributorsCount = 0;

        try {
          const { data: contributors } = await octokit.rest.repos.listContributors({
            owner: orgName,
            repo: repo.name,
            per_page: 100,
            anon: "0",
          });
          contributorsCount = contributors.filter((c) => c.type === "User").length;
        } catch {}

        const repoNameLower = repo.name.toLowerCase();
        const primaryLanguage = repo.language || "TypeScript";
        const { status, difficulty, techStack } = parseRepoTopics(repo.topics);

        const customData = localProjectRegistry[repoNameLower];
        const defaultData = buildDefaultMetadata(repo.name, primaryLanguage);

        return {
          name: repo.name,
          slug: repoNameLower.replace(/[^a-z0-9]+/g, "-"),
          description: repo.description || "System framework utility layer under development.",
          avatarUrl: repo.owner.avatar_url,
          status,
          difficulty,
          techStack: techStack.length > 0 ? techStack : [primaryLanguage],
          language: primaryLanguage,
          stars: repo.stargazers_count || 0,
          contributorsCount,
          openIssuesCount: repo.open_issues_count || 0,
          license: repo.license?.spdx_id || "MIT",
          createdAt: repo.created_at || new Date().toISOString(),
          updatedAt: repo.updated_at || new Date().toISOString(),
          repoUrl: repo.html_url,
          docsUrl: repo.homepage || `${repo.html_url}/wiki`,

          overview: customData?.overview || defaultData.overview,
          goals: customData?.goals || defaultData.goals,
          features: customData?.features || defaultData.features,
          architecture: customData?.architecture || defaultData.architecture,
          contributionGuide: customData?.contributionGuide || defaultData.contributionGuide,

          currentProgress: {
            percentage: status === "Completed" ? 100 : status === "Planning" ? 15 : 70,
            phase:
              status === "Completed"
                ? "Phase 3: Production Maintenance"
                : status === "Planning"
                ? "Phase 1: Architecture Blueprinting"
                : "Phase 2: Active Beta",
          },
        };
      })
    );
  } catch (error) {
    console.error("Critical Failure: Unable to fetch repository arrays from GitHub:", error);
    return [];
  }
}

// ==========================================
// EXPORTED CACHED WRAPPERS (`unstable_cache`)
// ==========================================

export const getGithubStats = unstable_cache(
  async () => fetchGithubStatsRaw(),
  ["github-stats-v1"],
  {
    revalidate: 3600, // Revalidates every 1 hour (3600 seconds)
    tags: ["github-telemetry", "org-stats"],
  }
);

export async function getEcosystemStats(orgName: string = DEFAULT_ORG_NAME) {
  return unstable_cache(
    async () => fetchEcosystemStatsRaw(orgName),
    ["ecosystem-stats-v1", orgName],
    {
      revalidate: 3600,
      tags: ["github-telemetry", `org-${orgName}`],
    }
  )();
}

export async function getFeaturedProjects(orgName: string = DEFAULT_ORG_NAME) {
  return unstable_cache(
    async () => fetchFeaturedProjectsRaw(orgName),
    ["featured-projects-v1", orgName],
    {
      revalidate: 3600,
      tags: ["github-telemetry", "projects", `org-${orgName}`],
    }
  )();
}

export async function getAllProjects(orgName: string = DEFAULT_ORG_NAME) {
  return unstable_cache(
    async () => fetchAllProjectsRaw(orgName),
    ["all-projects-v1", orgName],
    {
      revalidate: 3600,
      tags: ["github-telemetry", "projects", `org-${orgName}`],
    }
  )();
}