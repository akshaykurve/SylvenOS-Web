// Shared SEO / structured-data constants used across metadata exports and JSON-LD blocks.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://sylvenos.com").replace(/\/$/, "");

export const SITE_NAME = "Sylven OS";

export const SITE_TAGLINE = "Learn. Build. Educate.";

export const SITE_DESCRIPTION =
  "Sylven OS is a global, community-driven open-source organization where developers learn, build real-world software, and teach others through collaborative engineering.";

export const SITE_KEYWORDS = [
  "Sylven OS",
  "open source community",
  "open source projects",
  "learn to code",
  "contribute to open source",
  "developer community",
  "GitHub organization",
  "software engineering education",
  "beginner friendly open source",
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
// Included site-wide so search engines and LLM crawlers can reliably identify the entity.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: SITE_DESCRIPTION,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.twitter, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.discord],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
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
