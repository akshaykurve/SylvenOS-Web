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
import { CONTRIBUTION_STEPS } from '@/lib/data/contributionSteps';
import { breadcrumbJsonLd, howToJsonLd, peopleJsonLd } from '@/lib/seo';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Contributors',
  description:
    'Meet the Sylven OS community: contributor rankings, the core team, and how contribution and recognition work across the organization.',
  keywords: [
    'Sylven OS contributors',
    'Sylven OS core team',
    'open source contributor rankings',
    'how to contribute to Sylven OS',
    'open source community members',
  ],
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

    const jsonLd = [
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Contributors', path: '/contributors' },
      ]),
      howToJsonLd({
        name: 'How to contribute to Sylven OS',
        description: 'The step-by-step process for joining Sylven OS and getting a pull request merged.',
        steps: CONTRIBUTION_STEPS,
      }),
      ...peopleJsonLd(
        stats.membersData.slice(0, 20).map((member) => ({
          name: member.name || member.login,
          url: member.html_url,
          avatarUrl: member.avatar_url,
        }))
      ),
    ];

  return (
    <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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