import type { Metadata } from 'next'
import CommunityOverview from '@/components/Contributors/CommunityOverview'
import ContributionPhilosophy from '@/components/Contributors/ContributionPolicy';
import DynamicCoreTeam from '@/components/Contributors/CoreTeam';
import OrganizationRankings from '@/components/Contributors/features/OrganizationRankings';
import HeroSection from '@/components/Contributors/HeroSection'
import ContributorRoles from '@/components/Contributors/Roles';
import { getGithubStats } from '@/lib/github';
import { getOrganizationRankings } from '@/utils/githubAggregation';
import RecognitionRewards from '@/components/Contributors/RecognitionRewards';
import BecomeContributorCTA from '@/components/Contributors/BecomeContributorCTA';
import HowCommunityWorks from '@/components/Contributors/HowCommunityWorks';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Contributors',
  description:
    'Meet the Sylven OS community: contributor rankings, the core team, and how contribution and recognition work across the organization.',
  alternates: { canonical: '/contributors' },
  openGraph: {
    title: 'Sylven OS Contributors',
    description:
      'Community overview, contributor rankings, and the core team behind Sylven OS.',
    url: '/contributors',
  },
}

const Contribute = async() => {
    const stats = await getGithubStats();
   const dynamicRankings = await getOrganizationRankings("SylvenOS");
  return (
    <main>
        <HeroSection/>
        <CommunityOverview stats={stats} />
        <OrganizationRankings rankedContributors={dynamicRankings}/>
        <DynamicCoreTeam members={stats.membersData} orgDescription={stats.orgData?.description} />
        <ContributionPhilosophy/>
        <HowCommunityWorks/>
        <ContributorRoles/>
        <RecognitionRewards/>
        <BecomeContributorCTA/>
    </main>
  )
}

export default Contribute