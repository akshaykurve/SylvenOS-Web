export interface GitHubMember {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface GitHubPlan {
  name: string;
  space: number;
  private_repos: number;
  filled_seats: number;
  seats: number;
}

export interface GitHubOrgData {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string | null;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  twitter_username: string | null;
  is_verified: boolean;
  has_organization_projects: boolean;
  has_repository_projects: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
  type: "Organization" | string;
  total_private_repos: number;
  owned_private_repos: number;
  private_gists: number | null;
  disk_usage: number | null;
  collaborators: number | null;
  billing_email: string | null;
  default_repository_permission: string | null;
  members_can_create_repositories: boolean;
  two_factor_requirement_enabled: boolean | null;
  members_allowed_repository_creation_type: string;
  members_can_create_public_repositories: boolean;
  members_can_create_private_repositories: boolean;
  members_can_create_internal_repositories: boolean;
  members_can_create_pages: boolean;
  members_can_fork_private_repositories: boolean;
  web_commit_signoff_required: boolean;
  deploy_keys_enabled_for_repositories: boolean;
  members_can_delete_repositories: boolean;
  members_can_change_repo_visibility: boolean;
  members_can_invite_outside_collaborators: boolean;
  members_can_delete_issues: boolean;
  display_commenter_full_name_setting_enabled: boolean;
  readers_can_create_discussions: boolean;
  members_can_create_teams: boolean;
  members_can_view_dependency_insights: boolean;
  default_repository_branch: string;
  members_can_create_public_pages: boolean;
  members_can_create_private_pages: boolean;
  plan: GitHubPlan;
}

export interface GitHubMemberData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null; // Nullable if the profile display name isn't set
}

export interface GitHubStatsPayload {
  contributors: number;
  repos: number;
  membersData: GitHubMember[];
  orgData: GitHubOrgData;
}

// Type contract mapping to stats payload inside src/app/contributors/page.tsx
export interface GitHubStatsResponse {
  repos: number;
  contributors: number;
  orgData: GitHubOrgData;
  membersData: GitHubMemberData[];
}

export interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number; // Rendered straight from the live GitHub sync
  type: string;
  [key: string]: any;
}

export interface TopContributorsProps {
  contributors: GitHubContributor[];
  limit?: number;
}

export interface RepoContribution {
  repoName: string;
  contributions: number;
}

export interface ContributionActivity {
  id: string;
  repoName: string;
  type: "PullRequest" | "Commit" | "Issue" | "CodeReview";
  title: string; // Commit message, PR title, or Issue subject
  timestamp: string; // e.g., "2 hours ago" or "July 08"
  url: string; // Direct web hyperlink to the GitHub asset
}

export interface AggregatedContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  totalContributions: number;
  rank: number;
  repoBreakdown: RepoContribution[];
  recentActivity: ContributionActivity[]; // The semantic "what" array
  name?: string;
}


//project data 
export interface ArchitectureLayer {
  layer: string;
  description: string;
}

export interface CurrentProgress {
  percentage: number;
  phase: string;
}

export interface ProjectData {
  name: string;
  slug: string;
  description: string;
  avatarUrl: string;
  status: string; // e.g., 'Active' | 'Archived' | 'In Progress'
  difficulty: string; // e.g., 'Beginner' | 'Intermediate' | 'Advanced'
  techStack: string[];
  language: string;
  stars: number;
  contributorsCount: number;
  openIssuesCount: number;
  license: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  repoUrl: string;
  docsUrl: string;
  overview: string;
  goals: string[];
  features: string[];
  architecture: ArchitectureLayer[];
  contributionGuide: string;
  currentProgress: CurrentProgress;
}

// Since your console log outputs an array of these objects:
export type ProjectDataList = ProjectData[];


export interface featuredProjects {
 name: string;
 description: string;
 avatarUrl: string;
 status: string;
 difficulty: string;
 techStack: string[];
 lastUpdated: string;
 openIssues: number;
 repoUrl: string;
 docsUrl: string;
}