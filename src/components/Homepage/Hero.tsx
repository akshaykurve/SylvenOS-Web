import Link from "next/link";

import { getGithubStats } from "@/lib/github";
import {HeroMetrics, ProfileCard} from "./hero/index"

export default async function Hero() {
  // Fetch data on the server
  const stats = await getGithubStats();
  // console.log(stats)

  return (
    <section className="mt-[70px] min-h-[88vh] flex flex-col justify-center px-6 md:px-[8%] py-16 lg:py-12 relative overflow-hidden">
      
      {/* Top Section: Split Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px] w-full mb-20">
        
        {/* Left Text Block */}
        <div className="w-full max-w-[620px] text-center lg:text-left flex flex-col items-center lg:items-start z-10">
          <div className="inline-block px-[18px] py-2 rounded-[999px] bg-[var(--glass)] border border-[var(--border)] mb-[30px] text-sm">
            Community Driven • Open Source
          </div>

          <h1 className="text-5xl md:text-[5rem] font-extrabold leading-[1.1] mb-7">
            Learn.<br />
            Build.<br />
            <span className="text-[var(--primary)]">Educate.</span>
          </h1>

          <p className="text-base md:text-[1.1rem] leading-[1.8] text-[var(--muted)] mb-10">
            Sylven OS is a community-driven open-source organization where
            developers collaborate on real-world projects, learn from each
            other, and create software that benefits everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
            <Link
              href="#"
              className="px-8 py-[15px] rounded-xl font-semibold transition-transform duration-300 bg-[var(--primary)] text-white no-underline hover:-translate-y-[3px] text-center"
            >
              Explore Projects
            </Link>
            <Link
              href="#"
              className="px-8 py-[15px] rounded-xl font-semibold transition-all duration-300 border border-[var(--border)] text-[var(--text)] no-underline hover:bg-[var(--glass)] text-center"
            >
              Become a Contributor
            </Link>
          </div>
        </div>

        {/* Right Side: Rendered Component */}
        {/* <NodeNetwork /> */}
        <ProfileCard/>
        
      </div>

      {/* Bottom Section: Rendered Component with Server Data */}
      <HeroMetrics repos={stats.repos} contributors={stats.contributors} />

    </section>
  );
}