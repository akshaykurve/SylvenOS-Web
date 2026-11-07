import { getGithubStats } from "@/lib/github";
import ButtonLink from "@/components/ui/ButtonLink";
import { HeroMetrics, ProfileCard } from "./hero/index";

export default async function Hero() {
  // Fetch data on the server
  const stats = await getGithubStats();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-6 pb-16 pt-32 md:px-[8%] lg:pb-20"
    >
      {/* Top Section: Split Content */}
      <div className="mb-20 flex w-full flex-col items-center justify-between gap-14 lg:flex-row lg:gap-[60px]">
        {/* Left Text Block */}
        <div className="z-10 flex w-full max-w-[620px] flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--card-border)] bg-[var(--glass)] px-[18px] py-2 text-sm font-medium text-[var(--subtitle)]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[var(--logo)]"
            />
            Community driven · Open source
          </p>

          <h1
            id="hero-title"
            className="mb-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--heading)] md:text-[5rem]"
          >
            Learn.
            <br />
            Build.
            <br />
            <span className="text-[var(--accent)]">Educate.</span>
          </h1>

          <p className="mb-10 max-w-[52ch] text-base leading-[1.75] text-[var(--subtitle)] md:text-lg">
            Sylven OS is an open-source community where developers build real
            projects together, learn from one another, and ship software that
            benefits everyone.
          </p>

          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <ButtonLink href="/projects">Explore Projects</ButtonLink>
            <ButtonLink href="/contributors" variant="secondary" arrow={false}>
              Become a Contributor
            </ButtonLink>
          </div>
        </div>

        {/* Right Side */}
        <ProfileCard />
      </div>

      {/* Bottom Section: server data */}
      <HeroMetrics repos={stats.repos} contributors={stats.contributors} />
    </section>
  );
}
