"use client";

import { motion, Variants } from "motion/react";

export default function FinalCTA() {
  // Cascading entry animation variants
  const elementVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)]">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.05] pointer-events-none" />

      {/* Main Structural Banner Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 16 }}
        className="relative max-w-5xl mx-auto p-8 md:p-20 rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-lg overflow-hidden text-center flex flex-col items-center justify-center"
      >
        {/* Immersive Ambient Glow Node Overlay */}
        <div 
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full filter blur-[100px] opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />

        {/* Small Section Tag */}
        <motion.span
          custom={0}
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6"
        >
          // Build the Future
        </motion.span>

        {/* Dynamic Catchy Title Header */}
        <motion.h2
          custom={1}
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-4xl md:text-6xl font-black tracking-tight text-[var(--heading)] max-w-3xl leading-[1.1] mb-6"
        >
          Ready to Build Something Meaningful?
        </motion.h2>

        {/* Supporting Narrative Paragraph */}
        <motion.p
          custom={2}
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-base md:text-xl text-[var(--subtitle)] font-light max-w-2xl leading-relaxed mb-10"
        >
          Join developers creating open-source software, learning together, and helping others grow.
        </motion.p>

        {/* Symmetrical Twin Action Button Stack */}
        <motion.div
          custom={3}
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          {/* Primary Action Callout: Become a Contributor */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "var(--btn-primary-hover)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-md)] bg-[var(--btn-primary-bg)] text-white font-semibold shadow-[var(--shadow-md)] transition-all duration-[var(--transition-fast)] text-[14px] md:text-base tracking-wide flex items-center justify-center gap-2"
          >
            <span>Become a Contributor</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </motion.button>

          {/* Secondary Action: Explore Projects */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "var(--btn-secondary-hover)", borderColor: "var(--border)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-md)] bg-[var(--btn-secondary-bg)] border border-[var(--input-border)] text-[var(--muted)] hover:text-white font-semibold transition-all duration-[var(--transition-fast)] text-[14px] md:text-base tracking-wide flex items-center justify-center gap-2"
          >
            <span>Explore Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}