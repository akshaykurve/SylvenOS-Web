import ProjectExplorer from "@/components/Projects/AllProjects";
import ProjectCategories from "@/components/Projects/Categories";
import ContributionGuide from "@/components/Projects/ContributionGuide";
import StartContributingCTA from "@/components/Projects/CTAprojects";
import DynamicTechStack from "@/components/Projects/DynamicTech";
import FAQSection from "@/components/Projects/Faqs";
import FeaturedProjects from "@/components/Projects/FeaturedProjects";
import HeroSection from "@/components/Projects/ProjectHeroSection";
import ProjectLifecycle from "@/components/Projects/ProjectLifeCycle";
import ProjectStatistics from "@/components/Projects/ProjectStatistics";
import { getAllProjects, getEcosystemStats, getFeaturedProjects } from "@/lib/github";
import React from "react";

export const revalidate = 1800;

export default async function Page() {
  // Fetch live stats during build time / on revalidation intervals
  const stats = await getEcosystemStats("sylvenos");
  const featuredProjects = await getFeaturedProjects("sylvenos")
  
  const allProjects = await getAllProjects("sylvenos")
  
  return (
    <main>
      <HeroSection />
      <ProjectStatistics 
        repoCount={stats.repositories} 
        contributorCount={stats.contributors}
        projectCount={stats.projects}
      />
      <ProjectCategories/>
      <FeaturedProjects projects={featuredProjects}/>
      <ProjectExplorer projects={allProjects}/>
      <ProjectLifecycle/>
      <DynamicTechStack projects={allProjects}/>
      <ContributionGuide/>
      <FAQSection/>
      <StartContributingCTA/>
    </main>
  );
};


