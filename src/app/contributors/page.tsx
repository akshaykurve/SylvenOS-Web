import CommunityOverview from '@/components/Contributors/CommunityOverview'
import ContributionPhilosophy from '@/components/Contributors/ContributionPolicy';
import DynamicCoreTeam from '@/components/Contributors/CoreTeam';
import OrganizationRankings from '@/components/Contributors/features/OrganizationRankings';
import HeroSection from '@/components/Contributors/HeroSection'
import MainContributors from '@/components/Contributors/MainContributors';
import ContributorRoles from '@/components/Contributors/Roles';
import { getGithubStats } from '@/lib/github';
import { getOrganizationRankings } from '../api/contributors/route';
import RecognitionRewards from '@/components/Contributors/RecognitionRewards';
import BecomeContributorCTA from '@/components/Contributors/BecomeContributorCTA';

export const revalidate = 3600;

const Contribute = async() => {
    const stats = await getGithubStats();
    // console.log("🚀 ~ Contribute ~ stats:", stats)
   const dynamicRankings = await getOrganizationRankings("SylvenOS");
    // console.log(stats)
  return (
    <main>
        <HeroSection/>
        <CommunityOverview stats={stats} />
        <ContributionPhilosophy/>
        <ContributorRoles/>
        <OrganizationRankings rankedContributors={dynamicRankings}/>
        <DynamicCoreTeam members={stats.membersData} orgDescription={stats.orgData?.description} />
        <RecognitionRewards/>
        <BecomeContributorCTA/>
        {/* <MainContributors githubPayload={stats.membersData}/> */}
    </main>
  )
}

export default Contribute