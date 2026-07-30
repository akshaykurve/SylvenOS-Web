"use client";

import { motion, Variants } from "motion/react";

export default function CommunityValues() {
  const values = [
    {
      title: "Learn Together",
      description: "Growth is never a solo mission. We accelerate our technical capabilities by solving hard roadblocks collectively.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "Build in Public",
      description: "Transparency breeds architectural trust. We document our choices, ship open commits, and share our failures openly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Respect Everyone",
      description: "Diverse perspectives build highly resilient systems. Ego gets checked at the door; constructiveness rules our threads.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
    },
    {
      title: "Share Knowledge",
      description: "We strictly oppose engineering gatekeeping. True mastery is demonstrated by mentoring and raising the collective baseline.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Quality over Quantity",
      description: "Clean, robust, and safe modular code always outpaces a massive volume of rushed, debt-ridden pull requests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: "Consistency Wins",
      description: "Small, predictable daily technical steps outlast sporadic bursts of chaotic energy. Execution is an ongoing habit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)]">
      {/* Grid Pattern Mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-[0.08] pointer-events-none" />

      {/* Header Frame */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--info)] uppercase tracking-widest mb-4">
          Cultural Framework
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
          Community Values
        </h2>
        <p className="text-base text-[var(--subtitle)] font-light mt-3 max-w-lg mx-auto">
          These aren't rigid rules forced upon contributors—they are the architectural principles that guide how we collaborate.
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
            whileHover={{ 
              y: -4, 
              borderColor: "var(--info)",
              boxShadow: "var(--shadow-md)"
            }}
            className="group relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--surface)]/20 border border-[var(--card-border)] backdrop-blur-md transition-all duration-[var(--transition-normal)] flex flex-col items-start"
          >
            {/* Minimalist Micro Icon Anchor */}
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)] group-hover:text-[var(--info)] group-hover:border-[var(--info)] transition-colors duration-[var(--transition-fast)] mb-6">
              {value.icon}
            </div>

            {/* Value Title */}
            <h3 className="text-xl font-bold tracking-tight text-[var(--heading)] mb-2.5 group-hover:text-white transition-colors duration-[var(--transition-fast)]">
              {value.title}
            </h3>

            {/* Description Paragraph */}
            <p className="text-[14px] md:text-base text-[var(--subtitle)] leading-relaxed font-light">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}