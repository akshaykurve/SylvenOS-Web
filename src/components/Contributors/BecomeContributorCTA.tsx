"use client";

import { m, Variants } from "motion/react";
import Link from "next/link";


const MotionLink = m.create(Link);
export default function BecomeContributorCTA() {
  const elementVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 18,
        delay: custom * 0.08 
      },
    }),
  };

  return (
    <section className="relative px-6 md:px-[max(8%,calc((100%-80rem)/2))] py-16 md:py-28  overflow-hidden text-[var(--text)]">
      
      {/* High-Impact Dynamic Radial Light Burst */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full filter blur-[140px] opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--logo) 50%, transparent 100%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Monolithic Integrated CTA Panel */}
        <div className="p-8 md:p-16 rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-xl relative overflow-hidden text-center shadow-[var(--shadow-lg)]">
          
          {/* Decorative Corner Framing Marks */}
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-[var(--card-border)]" />
          <div className="absolute top-0 left-0 w-[1px] h-8 bg-[var(--card-border)]" />
          <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[var(--card-border)]" />
          <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[var(--card-border)]" />

          {/* Subheading Telemetry Flag */}
          <m.span
            custom={0}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-6 shadow-[var(--shadow-sm)]"
          >
            Initialization Gateway
          </m.span>

          {/* Core Title */}
          <m.h2
            custom={1}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--heading)] mb-6 max-w-2xl mx-auto leading-none"
          >
            Ready to Build with Us?
          </m.h2>

          {/* Context Explainer Paragraph */}
          <m.p
            custom={2}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-xl text-[var(--subtitle)] leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Whether you&apos;re writing your first line of code or maintaining distributed large-scale systems, there&apos;s a definitive place for your perspective in Sylven OS.
          </m.p>

          {/* Symmetrical High-Fidelity Call To Action Interface Array */}
          <m.div
            custom={3}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            {/* Action 1: Primary Target */}
            <MotionLink href="/projects#projects" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="flex min-h-12 items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] font-mono text-xs font-bold tracking-wider uppercase text-[var(--bg)] bg-[var(--heading)] hover:bg-[var(--text)] transition-all text-center shadow-[var(--shadow-md)] select-none">Explore Projects</MotionLink>

            {/* Action 2: Secondary Structural Path */}
            <MotionLink href="#guide" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="flex min-h-12 items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] font-mono text-xs font-bold tracking-wider uppercase text-[var(--heading)] hover:text-[var(--accent)] hover:border-[var(--border)] transition-all text-center select-none">Contribution Guide</MotionLink>

            {/* Action 3: Community Sub-Channel Link */}
            <MotionLink href="https://github.com/sylvenos" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="flex min-h-12 items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] font-mono text-xs font-bold tracking-wider uppercase text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--glass)] transition-all text-center select-none">Join Community →</MotionLink>
          </m.div>

        </div>

        {/* Closing Dynamic Status String */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          
        </m.div>

      </div>
    </section>
  );
}