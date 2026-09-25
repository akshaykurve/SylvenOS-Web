import type { Metadata } from "next";
import { breadcrumbJsonLd, projectListJsonLd } from "@/lib/seo";
import ProjectExplorer from "@/components/Projects/AllProjects";
import ProjectCategories from "@/components/Projects/Categories";
import ContributionGuide from "@/components/Projects/ContributionGuide";
import StartContributingCTA from "@/components/Projects/CTAprojects";
import DynamicTechStack from "@/components/Projects/DynamicTech";
import FAQSection from "@/components/Projects/Faqs";
import HeroSection from "@/components/Projects/ProjectHeroSection";
import ProjectLifecycle from "@/components/Projects/ProjectLifeCycle";
import ProjectStatistics from "@/components/Projects/ProjectStatistics";
import { getAllProjects, getEcosystemStats } from "@/lib/github";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse every open-source project maintained by Sylven OS, pulled live from GitHub with tech stack, difficulty, and contribution status for each repository.",
  keywords: [
    "Sylven OS projects",
    "open source projects to contribute to",
    "GitHub open source repositories",
    "beginner friendly open source projects",
    "Next.js open source projects",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Sylven OS Projects",
    description:
      "Live registry of open-source repositories maintained by the Sylven OS community.",
    url: "/projects",
  },
};

export default async function Page() {
  // Fetch live stats during build time / on revalidation intervals
  const stats = await getEcosystemStats("sylvenos");

  const allProjects = await getAllProjects("sylvenos")

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
    projectListJsonLd(allProjects),
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProjectStatistics
        repoCount={stats.repositories}
        contributorCount={stats.contributors}
        projectCount={stats.projects}
      />
      <ProjectCategories/>
      <ProjectExplorer projects={allProjects}/>
      <ProjectLifecycle/>
      <DynamicTechStack projects={allProjects}/>
      <ContributionGuide/>
      <FAQSection/>
      <StartContributingCTA/>
    </main>
  );
};


