import { GitHubMemberData } from "@/lib/type";

export default function MainContributors({ githubPayload }: { githubPayload: GitHubMemberData[] }) {
  return (
    <div>
      {githubPayload.map((member) => (
        <span key={member.id}>{member.login}</span>
      ))}
    </div>
  );
}