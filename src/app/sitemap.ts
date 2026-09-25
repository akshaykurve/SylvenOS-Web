import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/github";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/contributors`, changeFrequency: "daily", priority: 0.8 },
  ];

  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projects = await getAllProjects("sylvenos");
    projectRoutes = projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch {
    // Fall back to static routes only if the GitHub API is unavailable at build time.
  }

  return [...staticRoutes, ...projectRoutes];
}
