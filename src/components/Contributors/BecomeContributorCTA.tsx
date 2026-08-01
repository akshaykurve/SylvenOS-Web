"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";

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
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Structural Geometry Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:12rem_12rem] opacity-[0.015] pointer-events-none" />
      
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
          <motion.span
            custom={0}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-6 shadow-[var(--shadow-sm)]"
          >
            // Initialization Gateway
          </motion.span>

          {/* Core Title */}
          <motion.h2
            custom={1}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--heading)] mb-6 max-w-2xl mx-auto leading-none"
          >
            Ready to Build with Us?
          </motion.h2>

          {/* Context Explainer Paragraph */}
          <motion.p
            custom={2}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-xl text-[var(--subtitle)] font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Whether you're writing your first line of code or maintaining distributed large-scale systems, there's a definitive place for your perspective in Sylven OS.
          </motion.p>

          {/* Symmetrical High-Fidelity Call To Action Interface Array */}
          <motion.div
            custom={3}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            {/* Action 1: Primary Target */}
            <motion.div
              // href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] font-mono text-xs font-black tracking-wider uppercase text-[var(--bg)] bg-[var(--heading)] hover:bg-[var(--text)] transition-all text-center shadow-[var(--shadow-md)] select-none"
            >
              <Link href="/projects#projects">Explore Projects</Link>
            </motion.div>

            {/* Action 2: Secondary Structural Path */}
            <motion.div
              // href="#guide"
              whileHover={{ scale: 1.02, y: -2, borderColor: "var(--border)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] font-mono text-xs font-bold tracking-wider uppercase text-[var(--heading)] hover:text-[var(--primary)] transition-all text-center select-none"
            >
              <Link href="#guide">Contribution Guide</Link>
            </motion.div>

            {/* Action 3: Community Sub-Channel Link */}
            <motion.div
              // href="#community"
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "var(--glass)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-[var(--radius-sm)] font-mono text-xs font-bold tracking-wider uppercase text-[var(--muted)] hover:text-[var(--heading)] transition-all text-center select-none"
            >
              <Link href="https://github.com/sylvenos" target="_blank">Join Community →</Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Closing Dynamic Status String */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          
        </motion.div>

      </div>
    </section>
  );
}