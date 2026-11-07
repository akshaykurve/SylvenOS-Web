import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { breadcrumbJsonLd, SOCIAL_LINKS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contributing Guide",
  description:
    "How to contribute to Sylven OS Web: set up the project, make focused changes, write clear commits, and get your pull request merged.",
  alternates: { canonical: "/docs/contributing" },
  openGraph: {
    title: "Contributing to Sylven OS",
    description:
      "Setup, code style, commit conventions and the pull request process for Sylven OS Web.",
    url: "/docs/contributing",
  },
};

const REPO = "https://github.com/SylvenOS/SylvenOS-Web";

const SECTIONS = [
  { id: "getting-started", title: "Getting started" },
  { id: "making-changes", title: "Making changes" },
  { id: "commit-messages", title: "Commit messages" },
  { id: "pull-requests", title: "Submitting a pull request" },
  { id: "bugs-and-features", title: "Bugs and feature requests" },
  { id: "security", title: "Security issues" },
  { id: "questions", title: "Questions" },
];

function Code({ children, label }: { children: string; label: string }) {
  return (
    <pre
      tabIndex={0}
      aria-label={label}
      className="my-4 overflow-x-auto rounded-xl border border-[var(--card-border)] bg-[var(--surface)]/40 p-4 font-mono text-sm leading-relaxed text-[var(--text)]"
    >
      <code>{children}</code>
    </pre>
  );
}

function Inline({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-[var(--card-border)] bg-[var(--glass)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--accent)]">
      {children}
    </code>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-28">
      <h2
        id={id}
        className="mb-4 text-2xl font-bold tracking-tight text-[var(--heading)] md:text-3xl"
      >
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-[var(--subtitle)]">
        {children}
      </div>
    </section>
  );
}

const linkClass =
  "font-medium text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--accent)]";

export default function ContributingPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contributing Guide", path: "/docs/contributing" },
  ]);

  return (
    <main className="min-h-screen px-6 py-28 md:px-[max(8%,calc((100%-80rem)/2))] md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs">
          <Link
            href="/contributors"
            className="text-[var(--subtitle)] transition-colors hover:text-[var(--accent)]"
          >
            ← BACK TO CONTRIBUTORS
          </Link>
        </nav>

        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Contributing guide
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--heading)] md:text-6xl">
            Contribute to Sylven OS
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--subtitle)]">
            Thanks for helping build the website and live project registry for
            the Sylven OS organization. Whether you write code, design
            interfaces, improve docs, test features, report bugs, or help other
            contributors, your work matters.
          </p>
          <p className="mt-4 text-lg font-semibold text-[var(--heading)]">
            Learn. Build. Educate.
          </p>
          <p className="mt-4 text-sm text-[var(--subtitle)]">
            By participating, you agree to follow our{" "}
            <a
              href={`${REPO}/blob/main/.github/CODE_OF_CONDUCT.md`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Code of Conduct
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . This guide covers this repository, <Inline>sylvenos-web</Inline>.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label="On this page"
              className="rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] p-5"
            >
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--subtitle)]">
                On this page
              </p>
              <ol className="m-0 flex list-none flex-col p-0">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block min-h-10 rounded-lg px-2 py-2 text-sm text-[var(--subtitle)] transition-colors hover:bg-[var(--hover-bg)] hover:text-[var(--heading)]"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl space-y-14">
            <Section id="getting-started" title="Getting started">
              <ol className="list-decimal space-y-3 pl-6 marker:font-mono marker:text-[var(--accent)]">
                <li>
                  <strong className="text-[var(--heading)]">Fork</strong> the
                  repository and clone your fork locally.
                </li>
                <li>
                  <strong className="text-[var(--heading)]">
                    Install dependencies
                  </strong>{" "}
                  and set up your environment:
                  <Code label="Install commands">{`npm install
cp .env.example .env.local`}</Code>
                  <Inline>GITHUB_TOKEN</Inline> in <Inline>.env.local</Inline>{" "}
                  is optional locally. Without it the app serves mock data for
                  GitHub-backed sections, so rate limits never block your UI
                  work.
                </li>
                <li>
                  <strong className="text-[var(--heading)]">
                    Start the dev server:
                  </strong>
                  <Code label="Dev server command">{`npm run dev`}</Code>
                </li>
                <li>
                  <strong className="text-[var(--heading)]">
                    Create a branch
                  </strong>{" "}
                  off <Inline>main</Inline> with a descriptive name:
                  <Code label="Create branch command">{`git checkout -b feat/short-description
# or fix/, docs/, chore/ followed by a short description`}</Code>
                </li>
              </ol>
            </Section>

            <Section id="making-changes" title="Making changes">
              <ul className="list-disc space-y-3 pl-6 marker:text-[var(--accent)]">
                <li>
                  Keep pull requests <strong className="text-[var(--heading)]">focused</strong>:
                  one feature or fix per PR is easier to review and merge.
                </li>
                <li>
                  Match the code style. The project uses Tailwind utility
                  classes with theme variables such as{" "}
                  <Inline>var(--heading)</Inline> and{" "}
                  <Inline>var(--accent)</Inline>, defined in{" "}
                  <Inline>src/app/globals.css</Inline>. Avoid hardcoding colors
                  like <Inline>white</Inline> or <Inline>slate-900</Inline>:
                  they will not adapt between light and dark themes.
                </li>
                <li>
                  New pages and sections must be responsive (check mobile,
                  tablet and desktop widths) and work in both themes. Keep text
                  at AA contrast and make everything usable with a keyboard.
                </li>
                <li>
                  Reuse existing types from <Inline>src/lib/type.ts</Inline>{" "}
                  and avoid <Inline>any</Inline>.
                </li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-[var(--heading)]">
                Before opening a PR
              </h3>
              <p>Run these locally and make sure they all pass:</p>
              <Code label="Pre-PR checks">{`npm run lint
npm run type-check
npm test
npm run build`}</Code>
              <p>
                A pull request that fails lint, type-checking, or the build will
                not be merged.
              </p>
            </Section>

            <Section id="commit-messages" title="Commit messages">
              <p>
                Write clear, descriptive messages. We loosely follow{" "}
                <a
                  href="https://www.conventionalcommits.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Conventional Commits
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                :
              </p>
              <Code label="Commit message examples">{`feat: add contributor activity timeline
fix: correct light-mode contrast on navbar toggle
docs: update setup instructions in README
chore: remove unused dependencies`}</Code>
            </Section>

            <Section id="pull-requests" title="Submitting a pull request">
              <ol className="list-decimal space-y-3 pl-6 marker:font-mono marker:text-[var(--accent)]">
                <li>Push your branch to your fork.</li>
                <li>
                  Open a pull request against <Inline>main</Inline> using the
                  provided template.
                </li>
                <li>
                  Say what changed and why, and include screenshots or a short
                  clip for any UI change.
                </li>
                <li>
                  Link any related issue, for example <Inline>Closes #123</Inline>.
                </li>
                <li>
                  Be responsive to review feedback. Most PRs go through at least
                  one round of review.
                </li>
              </ol>
            </Section>

            <Section id="bugs-and-features" title="Bugs and feature requests">
              <p>
                Please use{" "}
                <a
                  href={`${REPO}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub Issues
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                for both. For bugs, include:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[var(--accent)]">
                <li>Steps to reproduce</li>
                <li>Expected versus actual behavior</li>
                <li>Screenshots, if it is a visual issue</li>
                <li>Browser and OS, if relevant</li>
              </ul>
            </Section>

            <Section id="security" title="Security issues">
              <p>
                <strong className="text-[var(--heading)]">
                  Do not open a public issue
                </strong>{" "}
                for security vulnerabilities. Read the{" "}
                <a
                  href={`${REPO}/blob/main/.github/SECURITY.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  security policy
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                for how to report responsibly.
              </p>
            </Section>

            <Section id="questions" title="Questions?">
              <p>
                Join the conversation on Discord or start a GitHub Discussion.
                We are happy to help you find a good first issue.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <ButtonLink href={SOCIAL_LINKS.discord}>Join Discord</ButtonLink>
                <ButtonLink href="/projects" variant="secondary">
                  Browse projects
                </ButtonLink>
              </div>
              <p className="pt-4 font-semibold text-[var(--heading)]">
                Thank you for helping build Sylven OS.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
