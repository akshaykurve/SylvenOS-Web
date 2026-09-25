// Shared SEO / structured-data constants used across metadata exports and JSON-LD blocks.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://sylvenos.com").replace(/\/$/, "");

export const SITE_NAME = "Sylven OS";

export const SITE_TAGLINE = "Learn. Build. Educate.";

export const SITE_DESCRIPTION =
  "Sylven OS is a global, community-driven open-source organization where developers learn, build real-world software, and teach others through collaborative engineering.";

// Broad but genuine coverage: exact brand terms, generic category terms, and the
// long-tail phrasing people actually type when searching for a community like this.
// Every term here reflects something the site truly is or does (see SITE_DESCRIPTION
// and the About/Contributors pages) — breadth without keyword-stuffing.
export const SITE_KEYWORDS = [
  // Brand
  "Sylven OS",
  "SylvenOS",
  "Sylven OS open source",
  "Sylven OS GitHub organization",
  // Category / entity
  "open source community",
  "open source organization",
  "open source projects",
  "developer community",
  "tech community",
  "GitHub organization",
  "open source ecosystem",
  // Intent: learning
  "learn to code",
  "learn to code by building projects",
  "learn software engineering",
  "software engineering education",
  "coding community for beginners",
  "beginner friendly open source",
  "good first issue projects",
  "learn web development open source",
  // Intent: contributing
  "contribute to open source",
  "how to contribute to open source",
  "open source projects to contribute to",
  "open source for beginners",
  "first open source contribution",
  "open source mentorship",
  // Intent: building/collaborating
  "build real world projects",
  "collaborative software development",
  "student developer community",
  "developer portfolio projects",
  // Tech stack signals (matches what the org actually builds in)
  "Next.js open source projects",
  "React open source community",
  "TypeScript open source projects",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/sylvenos",
  twitter: "https://x.com/sylvenos_",
  linkedin: "https://linkedin.com/company/sylvenos",
  discord: "https://discord.com/invite/HNrEcrSBs6",
};

export const DEFAULT_OG_IMAGE = {
  url: "/IMG_20260628_143818.png",
  width: 512,
  height: 512,
  alt: SITE_NAME,
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Organization schema.org JSON-LD, describing Sylven OS itself.
// Included site-wide so search engines and LLM crawlers can reliably identify the
// entity and associate it with the topics it's actually about (knowsAbout).
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    alternateName: "SylvenOS",
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE.url),
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: SITE_DESCRIPTION,
    slogan: SITE_TAGLINE,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.twitter, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.discord],
    knowsAbout: [
      "Open source software development",
      "Software engineering education",
      "Next.js",
      "React",
      "TypeScript",
      "Open source contribution mentorship",
      "Collaborative software development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@sylvenos.com",
      url: SOCIAL_LINKS.discord,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// BreadcrumbList JSON-LD, generic across pages. `crumbs` is ordered from the
// homepage down to the current page: [{ name, path }]. `path` "/" is allowed
// for the homepage crumb.
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

// HowTo JSON-LD for a linear process (e.g. "how to contribute to Sylven OS").
export function howToJsonLd(opts: {
  name: string;
  description: string;
  steps: { title: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

// ItemList JSON-LD for a collection of GitHub-backed projects, so search/AI
// engines can enumerate the org's real projects rather than guessing.
export function projectListJsonLd(
  projects: { name: string; slug?: string; description: string; repoUrl: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.description,
        url: project.slug ? absoluteUrl(`/projects/${project.slug}`) : project.repoUrl,
        codeRepository: project.repoUrl,
      },
    })),
  };
}

// Person JSON-LD for core team / notable contributors.
export function peopleJsonLd(people: { name: string; url: string; avatarUrl: string }[]) {
  return people.map((person) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.url,
    image: person.avatarUrl,
    memberOf: { "@id": absoluteUrl("/#organization") },
  }));
}

// Speakable JSON-LD (AEO): tells voice assistants and answer engines which
// on-page CSS selectors hold the short, self-contained summary worth reading
// aloud or quoting directly, as opposed to full page markup.
export function speakableJsonLd(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
