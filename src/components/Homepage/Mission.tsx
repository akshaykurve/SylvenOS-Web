"use client";

import { motion, Variants } from "motion/react";

export default function Pillars() {
  // Container cascading entry
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Card physics
  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 16 },
    },
  };

  // List item stagger reveal
  const listVariants:Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] bg-(--secondary) ">
      {/* High-End Tech Grid Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      {/* Global Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
          The Pillars of Sylven OS
        </h2>
        <div className="w-12 h-[2px] bg-[var(--primary)] mx-auto mt-4 rounded-full opacity-60" />
      </div>

      {/* Split Layout Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        
        {/* Card 1: Mission */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "var(--primary)" }}
          className="group relative p-8 md:p-10 rounded-[var(--radius-lg)] bg-[var(--surface)]/30 border border-[var(--card-border)] transition-all duration-[var(--transition-normal)] flex flex-col justify-between shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] backdrop-blur-md"
        >
          <div>
            {/* Top Row: Icon & Label */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-mono tracking-widest text-[var(--primary)] uppercase font-semibold bg-[var(--glass)] px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--card-border)]">
                Our Core Purpose
              </span>
              <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--hover-bg)] transition-colors duration-[var(--transition-fast)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
            </div>

            {/* Heading & 2-3 Sentence Description */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors duration-[var(--transition-fast)]">
              Mission
            </h3>
            <p className="text-base leading-relaxed text-[var(--subtitle)] font-light mb-8">
              We create an inclusive open-source ecosystem where developers break out of isolation to learn by building practical software together. By bridging the gap between theory and production, we empower engineers to accelerate their careers through raw collective execution.
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-[var(--card-border)] to-transparent mb-6 opacity-60" />

            {/* Subheading Label */}
            <h4 className="text-xs uppercase font-mono tracking-wider text-[var(--disabled)] mb-4">
              Focus Areas
            </h4>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-10">
              {[
                "Build production-ready open-source projects",
                "Help contributors gain real-world experience",
                "Encourage collaboration across all skill levels",
              ].map((text, index) => (
                <motion.li
                  custom={index}
                  variants={listVariants}
                  key={index}
                  className="flex items-start gap-3 text-[14px] md:text-base text-[var(--muted)]"
                >
                  <span className="text-[var(--success)] font-medium mt-0.5 select-none">✓</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Small Footer Label */}
          <div className="text-[11px] font-mono text-[var(--disabled)] tracking-wider mt-auto pt-4 border-t border-[var(--card-border)]/30">
            Learn • Build • Educate
          </div>
        </motion.div>


        {/* Card 2: Vision */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "var(--info)" }}
          className="group relative p-8 md:p-10 rounded-[var(--radius-lg)] bg-[var(--surface)]/30 border border-[var(--card-border)] transition-all duration-[var(--transition-normal)] flex flex-col justify-between shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] backdrop-blur-md"
        >
          <div>
            {/* Top Row: Icon & Label */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-mono tracking-widest text-[var(--info)] uppercase font-semibold bg-[var(--glass)] px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--card-border)]">
                Our North Star
              </span>
              <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--info)] group-hover:bg-[var(--glass)] transition-colors duration-[var(--transition-fast)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.2 7.8 13.4 13.4 7.8 16.2 10.6 10.6 16.2 7.8" />
                </svg>
              </div>
            </div>

            {/* Heading & 2-3 Sentence Description */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--heading)] group-hover:text-[var(--info)] transition-colors duration-[var(--transition-fast)]">
              Vision
            </h3>
            <p className="text-base leading-relaxed text-[var(--subtitle)] font-light mb-8">
              To become one of the world's most respected open-source communities focused on structural engineering education. We aim to reshape software mentorship, transforming decentralized code contributions into an accessible pipeline for global engineering talent.
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-[var(--card-border)] to-transparent mb-6 opacity-60" />

            {/* Subheading Label */}
            <h4 className="text-xs uppercase font-mono tracking-wider text-[var(--disabled)] mb-4">
              Future Goals
            </h4>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-10">
              {[
                "A global decentralized community of builders",
                "Open engineering knowledge accessible to everyone",
                "Sustainable tools that create real operational impact",
              ].map((text, index) => (
                <motion.li
                  custom={index}
                  variants={listVariants}
                  key={index}
                  className="flex items-start gap-3 text-[14px] md:text-base text-[var(--muted)]"
                >
                  <span className="text-[var(--info)] font-medium mt-0.5 select-none">✓</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Small Footer Label */}
          <div className="text-[11px] font-mono text-[var(--disabled)] tracking-wider mt-auto pt-4 border-t border-[var(--card-border)]/30">
            Since 2026
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}