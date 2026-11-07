"use client";

import { m, Variants } from "motion/react";
import Link from "next/link";


const MotionLink = m.create(Link);
export default function JoinTheMovement() {
  // Kinetic presentation animations for high-impact closing state
  const containerVariants:Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const elementVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="relative px-6 md:px-[max(8%,calc((100%-80rem)/2))] py-16 md:py-28 text-[var(--text)] overflow-hidden flex items-center justify-center">
      
      {/* Hyper-Concentrated Core Ignition Glow behind text stack */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] id:w-[800px] h-[400px] rounded-full filter blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, var(--primary) 40%, var(--info) 80%, transparent 100%)" }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 md:p-16 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Top-Right and Bottom-Left Framing Coordinate Elements */}
          <div className="absolute top-4 right-4 font-mono text-xs text-[var(--disabled)] tracking-widest hidden sm:block">
            INIT_SEQUENCE // GO_LIVE
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--disabled)] tracking-widest hidden sm:block">
            MESH_STATUS // OPERATIONAL
          </div>

          {/* Section Indicator Badge */}
          <m.span
            variants={elementVariants}
            className="text-xs font-mono font-bold tracking-widest text-[var(--success)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 shadow-[var(--shadow-sm)]"
          >
            Finalization Node
          </m.span>

          {/* Core Closing Catchphrase Statement */}
          <m.h2
            variants={elementVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--heading)] leading-none max-w-2xl mb-6"
          >
            Join the Movement
          </m.h2>

          {/* Explanatory Structural Context Prose */}
          <m.p
            variants={elementVariants}
            className="text-lg md:text-xl text-[var(--body)] font-medium max-w-2xl leading-relaxed mb-4"
          >
            Every great open-source community started with a small group of people willing to build something meaningful.
          </m.p>

          <m.p
            variants={elementVariants}
            className="text-sm md:text-base text-[var(--subtitle)] max-w-xl leading-relaxed mb-10"
          >
            Join us in creating software, sharing knowledge, and helping developers grow. Let&apos;s construct the open infrastructure of tomorrow, one branch at a time.
          </m.p>

          {/* Highly Interactive CTA Actions Block */}
          <m.div 
            variants={elementVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Secondary Option: Explore Projects */}
            <MotionLink href="/projects#projects" whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] text-sm font-bold tracking-wide text-[var(--text)] transition-colors duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-sm)] backdrop-blur-md hover:bg-[var(--hover-bg)] hover:border-[var(--border)]">
              Explore Projects
            </MotionLink>

            {/* Primary High-Octane Action Option: Become a Contributor */}
            <MotionLink href="https://github.com/sylvenos" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--primary)] text-sm font-bold tracking-wide text-white transition-all duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-md)] hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--glow-primary)]">
              Become a Contributor
            </MotionLink>
          </m.div>

          {/* Micro Telemetry Inline Loop Indicator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-12" />
          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--disabled)]">
            <span className="w-1 h-1 rounded-full bg-[var(--logo)] animate-ping" />
            Active clusters synchronized. Sync code bases on connection initialization.
          </div>

        </m.div>
      </div>
    </section>
  );
}