import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sylven OS handles data: what we collect, what we don't, and how our GitHub-backed project and contributor data is sourced.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ]);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-24 px-6 md:px-[15%]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 font-mono text-xs">
          <Link href="/" className="text-[var(--disabled)] hover:text-[var(--primary)] transition-colors">
            ← BACK TO HOME
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[var(--heading)] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--disabled)] font-mono mb-12">Last updated: September 2026</p>

        <div className="space-y-10 text-[var(--subtitle)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Overview</h2>
            <p>
              Sylven OS (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates sylvenos.com as the public website for the
              Sylven OS open-source community. This page explains, plainly, what data this website collects
              and what it doesn&apos;t. Sylven OS does not require an account, login, or payment to use this
              site, and we do not run any advertising or analytics trackers on it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Data we don&apos;t collect</h2>
            <p>
              This website has no sign-up forms, no contact forms, no cookies, and no third-party analytics
              or advertising scripts. We don&apos;t collect names, email addresses, or any other personal
              information through the site itself.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Local storage, not cookies</h2>
            <p>
              The only piece of state this site keeps on your device is your light/dark theme preference,
              stored using your browser&apos;s <code className="text-[var(--primary)]">localStorage</code>.
              It never leaves your browser, is never sent to our servers, and is not a tracking cookie. You
              can clear it at any time through your browser&apos;s site data settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">GitHub-sourced content</h2>
            <p>
              Project listings, contributor rankings, avatars, and organization statistics shown on this site
              are fetched live from the public{" "}
              <a href="https://github.com/sylvenos" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Sylven OS GitHub organization
              </a>{" "}
              via GitHub&apos;s public REST API. This is all information that is already public on GitHub;
              we don&apos;t collect or infer anything additional about contributors. If you&apos;d like your
              GitHub profile information handled differently, that is managed through your GitHub account
              settings and GitHub&apos;s own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Hosting and technical logs</h2>
            <p>
              This site is hosted on Cloudflare&apos;s network. Like virtually any website, our hosting
              infrastructure may process standard technical request data (such as IP address, browser type,
              and request timestamps) for security, abuse prevention, and performance purposes. This is
              infrastructure-level logging, not tracking, and is governed by Cloudflare&apos;s own privacy
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Third-party links</h2>
            <p>
              This site links out to GitHub, Discord, X (Twitter), and LinkedIn. Each of those platforms has
              its own independent privacy policy, and we encourage you to review theirs before interacting
              with those services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Changes to this policy</h2>
            <p>
              If how this site handles data ever changes, this page will be updated accordingly. This is a
              plain-language summary rather than a substitute for formal legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:contact@sylvenos.com" className="text-[var(--primary)] hover:underline">
                contact@sylvenos.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
