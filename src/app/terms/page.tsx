import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the Sylven OS website and participating in the Sylven OS open-source community.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
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
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--disabled)] font-mono mb-12">Last updated: September 2026</p>

        <div className="space-y-10 text-[var(--subtitle)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Using this site</h2>
            <p>
              sylvenos.com is an informational and community website for the Sylven OS open-source
              organization. It is provided free of charge, requires no account, and is offered as-is, without
              warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Live GitHub data</h2>
            <p>
              Project details, tech stacks, contributor rankings, and organization statistics shown here are
              fetched live from the public{" "}
              <a href="https://github.com/sylvenos" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Sylven OS GitHub organization
              </a>. We aim for this data to be accurate and current, but it may occasionally lag behind
              GitHub itself due to caching, or be temporarily unavailable if GitHub&apos;s API is unreachable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Open-source licensing</h2>
            <p>
              This website&apos;s own source code is open source, licensed under the{" "}
              <a href="https://github.com/SylvenOS/SylvenOS-Web/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                MIT License
              </a>. Individual projects maintained by the Sylven OS organization carry their own licenses,
              listed on each project&apos;s GitHub repository — review a project&apos;s specific license
              before reusing its code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Community conduct</h2>
            <p>
              Participation in the Sylven OS community — on GitHub, Discord, or elsewhere — is governed by
              our{" "}
              <a href="https://github.com/SylvenOS/SylvenOS-Web/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Code of Conduct
              </a>. We expect all contributors and visitors to treat one another with respect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Acceptable use</h2>
            <p>
              You agree not to misuse this site — including attempting to disrupt its availability, scrape it
              at abusive volume, or use it to distribute malware or unlawful content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Changes</h2>
            <p>
              We may update these terms as the site and community evolve. Continued use of the site after a
              change constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--heading)] mb-3">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
