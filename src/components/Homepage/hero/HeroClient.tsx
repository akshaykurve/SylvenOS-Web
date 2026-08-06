"use client";

import { motion, Variants } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { ProfileCard } from "./index";

export function HeroClient({ stats }: { stats: any }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col lg:flex-row items-center justify-between gap-[60px] w-full mb-20"
    >
      <div className="w-full max-w-[620px] text-center lg:text-left flex flex-col items-center lg:items-start z-10">
        <motion.div variants={item} className="inline-block px-[18px] py-2 rounded-[999px] bg-[var(--glass)] border border-[var(--border)] mb-[30px] text-sm">
          Community Driven • Open Source
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-[5rem] font-extrabold leading-[1.1] mb-7">
          Learn<br /> Build<br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading)] via-[var(--primary)] to-[var(--logo)]">
          Educate
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-base md:text-[1.1rem] leading-[1.8] text-[var(--muted)] mb-10">
          Sylven OS is a community-driven open-source organization where
          developers collaborate on real-world projects, learn from each
          other, and create software that benefits everyone.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
          <Link href="/projects" className="flex items-center justify-center gap-2 px-8 py-[15px] rounded-xl font-semibold transition-transform duration-300 bg-[var(--primary)] text-white hover:scale-[1.02]">
            Explore Projects <ArrowRight size={18} />
          </Link>
          <Link href="/contributors" className="flex items-center justify-center gap-2 px-8 py-[15px] rounded-xl font-semibold transition-all duration-300 border border-[var(--border)] hover:bg-[var(--glass)]">
            <Users size={18} /> Become a Contributor
          </Link>
        </motion.div>
      </div>

      <motion.div >
        <ProfileCard />
      </motion.div>
    </motion.div>
  );
}