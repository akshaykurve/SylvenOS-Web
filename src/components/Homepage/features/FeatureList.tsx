"use client";

import { m, Variants } from "motion/react";

export default function FeaturesList() {
  // Staggered sequence for card entrance
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth cascading delay between cards
      },
    },
  };

  // Card physics for sliding up when scrolled into view
  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  // Icon micro-interaction on card hover
  const iconVariants:Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.12,
      rotate: 3,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section className="relative    text-(--text) ">
      {/* 3-Column Layout Grid */}
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Card 1: Learn */}
        <m.div
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          className="group relative p-8 rounded-2xl bg-(--card-bg) hover:bg-(--primary) border border-(--border)/8 hover:border-[var(--primary)]/40 transition-colors duration-500 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[250px] shadow-(--shadow-lg) hover:shadow-(--text) hover:shadow-2xl"
        >
          {/* Animated Hover Radial Glow */}
          <m.div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div>
            {/* Animated Icon Container */}
            <m.div
              variants={iconVariants}
              className="w-12 h-12 rounded-xl bg-[var(--primary)]/10  border border-[var(--primary)]/20 flex items-center justify-center text-[var(--text)] mb-6 group-hover:bg-(--bg) transition-colors duration-300"
            >
              <svg aria-hidden="true" focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </m.div>

            <h3 className="text-xl font-bold mb-2 text-(--text) group-hover:text-white transition-colors duration-300">
              Learn
            </h3>
            <p className="text-[14px] md:text-base leading-[1.6] text-(--muted) group-hover:text-white transition-colors duration-300">
              Learn modern technologies through practical guides, open-source
              codebases, and real-world engineering practices.
            </p>
          </div>
        </m.div>

        {/* Card 2: Build */}
        <m.div
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          className="group relative p-8 rounded-2xl bg-(--card-bg) hover:bg-(--primary) border border-(--border)/[0.08] hover:border-[var(--primary)]/40 transition-colors duration-500 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[250px] shadow-(--shadow-lg) hover:shadow-(--text) "        >
          <m.div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div>
            <m.div
              variants={iconVariants}
              className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--text)] mb-6 group-hover:bg-(--bg) transition-colors duration-300"
            >
              <svg aria-hidden="true" focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </m.div>

            <h3 className="text-xl font-bold mb-2 text-(--text) group-hover:text-white transition-colors duration-300">
              Build
            </h3>
            <p className="text-[14px] md:text-base leading-[1.6] text-(--muted) group-hover:text-white transition-colors duration-300">
              Collaborate on production-ready open-source projects that solve
              real problems and strengthen your portfolio.
            </p>
          </div>
        </m.div>

        {/* Card 3: Educate */}
        <m.div
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          className="sm:col-span-2 lg:col-span-1 group relative p-8 rounded-2xl bg-(--card-bg) hover:bg-(--primary) border border-(--border)/[0.08] hover:border-[var(--primary)]/40 transition-colors duration-500 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[250px] shadow-(--shadow-lg) hover:shadow-(--text) hover:shadow-2xl"
        >
          <m.div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div>
            <m.div
              variants={iconVariants}
              className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--text)] mb-6 group-hover:bg-(--bg) transition-colors duration-300"
            >
              <svg aria-hidden="true" focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </m.div>

            <h3 className="text-xl font-bold mb-2 text-(--text) group-hover:text-white transition-colors duration-300">
              Educate
            </h3>
            <p className="text-[14px] md:text-base leading-[1.6] text-(--muted) group-hover:text-white transition-colors duration-300">
              Share knowledge through documentation, tutorials, mentorship, and
              technical content that helps the community grow.
            </p>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
