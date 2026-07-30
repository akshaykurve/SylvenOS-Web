import OrganizationRankings from "./features/OrganizationRankings";
import TopContributors from "./features/TopContributors";

export default function MainContributors({ githubPayload }:any) {
  return (
    <div>
      {/* Passes down the live dataset; limit prop determines how many nodes to isolate */}
      {/* <OrganizationRankings/> */}
      {githubPayload}
    </div>
  );
}