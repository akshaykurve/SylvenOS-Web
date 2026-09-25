import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SOCIAL_LINKS,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sylvenos_",
    creator: "@sylvenos_",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [organizationJsonLd(), websiteJsonLd()];

  return (
    // Added suppressHydrationWarning here to tell Next.js to suppress that warning
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="me" href={SOCIAL_LINKS.github} />
        {/* Structured data: helps Google, Bing, and AI/LLM crawlers reliably identify the
            organization and site entity independent of visual page content. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar/>
        <PageTransition>{children}</PageTransition>
        <Footer/>
      </body>
    </html>
  );
}
