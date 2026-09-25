import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/github";
import { SITE_URL } from "@/lib/seo";
import { STATIC_ROUTES } from "@/lib/generated/static-routes";

// Per-path SEO tuning for known routes. Any static route NOT listed here
// (e.g. a brand new page.tsx someone adds later) still gets included
// automatically — via STATIC_ROUTES — with the DEFAULT_TUNING fallback below,
// so nothing needs to be hand-added to this file for it to show up here.
const ROUTE_TUNING: Record<string, { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/projects": { changeFrequency: "daily", priority: 0.9 },
  "/contributors": { changeFrequency: "daily", priority: 0.8 },
  "/about": { changeFrequency: "monthly", priority: 0.7 },
  "/contact": { changeFrequency: "yearly", priority: 0.3 },
  "/privacy": { changeFrequency: "yearly", priority: 0.2 },
  "/terms": { changeFrequency: "yearly", priority: 0.2 },
};

const DEFAULT_TUNING = { changeFrequency: "monthly" as const, priority: 0.5 };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(ROUTE_TUNING[path] ?? DEFAULT_TUNING),
  }));

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
