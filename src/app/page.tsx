import Hero from '@/components/Homepage/Hero';
import Features from '@/components/Homepage/Features';
import MissionVision from '@/components/Homepage/Mission';
import WhySylvenOS from '@/components/Homepage/Why';
import HowItWorks from '@/components/Homepage/HowItWorks';
import ContributionAreas from '@/components/Homepage/ContributionArea';
import CommunityValues from '@/components/Homepage/Values';
import EcosystemRoadmap from '@/components/Homepage/Roadmap';
import FinalCTA from '@/components/Homepage/CTA';
import { getFeaturedProjects, getGithubStats } from '@/lib/github';
import FeaturedProjects from '@/components/Projects/FeaturedProjects';
import { speakableJsonLd } from '@/lib/seo';

export default async function Home() {
    // Start both GitHub-backed reads together. Hero reads the stats from the same
    // cache, so awaiting here removes a sequential round trip on a cold cache.
    const [featuredProjects] = await Promise.all([
      getFeaturedProjects("sylvenos"),
      getGithubStats(),
    ]);

    const jsonLd = speakableJsonLd(['[data-speakable="about"]']);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <MissionVision/>
      <WhySylvenOS/>
      <HowItWorks/>
      <FeaturedProjects projects={featuredProjects}/>
      <ContributionAreas/>
      <CommunityValues/>
      <EcosystemRoadmap/>
      <FinalCTA/>
    </main>
  );
}