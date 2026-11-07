"use client";

import { motion, Variants } from "motion/react";

export default function CommunityValues() {
  const values = [
    {
      title: "Learn Together",
      description: "Growth is not a solo mission. We get unstuck faster by solving hard problems together.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "Build in Public",
      description: "Openness builds trust. We document our choices, commit in the open, and share what went wrong.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Respect Everyone",
      description: "Different perspectives make better software. Ego stays out; constructive feedback leads every thread.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
    },
    {
      title: "Share Knowledge",
      description: "No gatekeeping. Real mastery shows in how well you mentor others and raise the bar for everyone.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Quality over Quantity",
      description: "Clean, well-tested code beats a pile of rushed pull requests every time.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: "Consistency Wins",
      description: "Small, steady steps outlast bursts of energy. Showing up regularly is the real skill.",
      icon: (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 75, damping: 16 },
    },
  };

  return (
    <section aria-labelledby="values-title" className="relative px-6 md:px-[8%] py-16 md:py-28 text-[var(--text)]">

      {/* Header Frame */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--info)] uppercase tracking-widest mb-4">
          How we work
        </p>
        <h2 id="values-title" className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--heading)]">
          Community Values
        </h2>
        <p className="text-base text-[var(--subtitle)] mt-3 max-w-lg mx-auto">
          These aren&apos;t rules handed down to contributors. They&apos;re the habits that shape how we work together.
        </p>
      </div>

      {/* Symmetric 3x2 Matrix Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--surface)]/20 border border-[var(--card-border)] backdrop-blur-md transition-all duration-[var(--transition-normal)] flex flex-col items-start hover:border-[var(--info)] hover:shadow-[var(--shadow-md)]"
          >
            {/* Minimalist Micro Icon Anchor */}
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--accent)] group-hover:text-[var(--info)] group-hover:border-[var(--info)] transition-colors duration-[var(--transition-fast)] mb-6">
              {value.icon}
            </div>

            {/* Value Title */}
            <h3 className="text-xl font-bold tracking-tight text-[var(--heading)] mb-2.5 group-hover:text-[var(--info)] transition-colors duration-[var(--transition-fast)]">
              {value.title}
            </h3>

            {/* Description Paragraph */}
            <p className="text-[14px] md:text-base text-[var(--subtitle)] leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}