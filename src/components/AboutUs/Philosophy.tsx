"use client";

import { motion, Variants } from "motion/react";

export default function SylvenPhilosophy() {
  // Line drawing and item sequential cascade configurations
  const pipelineVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const trackVariants:Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.8, ease: "easeInOut" },
    },
  };

  const loopSteps = [
    {
      phase: "01",
      title: "Learn",
      action: "Understand concepts.",
      desc: "Deconstruct foundational systems and architectural paradigms before writing the first line of code.",
      color: "var(--info)",
    },
    {
      phase: "02",
      title: "Build",
      action: "Apply them to real software.",
      desc: "Ship production-ready code directly into shared repositories to transform theoretical knowledge into skill.",
      color: "var(--primary)",
    },
    {
      phase: "03",
      title: "Educate",
      action: "Write documentation. Teach others.",
      desc: "Codify lessons learned by expanding core wikis, performing peer reviews, and guiding incoming contributors.",
      color: "var(--logo)",
    },
    {
      phase: "04",
      title: "Improve",
      action: "Receive feedback.",
      desc: "Engage with automated deployment pipelines, structural testing, and candid community code revisions.",
      color: "var(--warning)",
    },
    {
      phase: "05",
      title: "Grow",
      action: "Become better engineers.",
      desc: "Amplify individual capability into collective engine proficiency, evolving from learner to systems architect.",
      color: "var(--success)",
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Background Microstructure Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:100%_5rem] opacity-[0.02] pointer-events-none" />

      {/* Cyclic Radial Glow Node Overlay */}
      <div 
        className="absolute bottom-1/4 left-10 w-[600px] h-[500px] rounded-full filter blur-[150px] opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--success) 0%, transparent 80%)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Core Philosophical Framing Header */}
        <div className="mb-24 text-left max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--info)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Execution Engine
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            The Sylven Philosophy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Instead of collecting static rules, our community operates inside a continuous refinement loop. We think in cycles, ensuring knowledge never reaches an artificial dead end.
          </motion.p>
        </div>

        {/* The Continuous Closed Loop Pipeline */}
        <motion.div
          variants={pipelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative pl-8 md:pl-16 space-y-12"
        >
          {/* Vertical Connecting Structural Flowline */}
          <div className="absolute left-[15px] md:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--info)] via-[var(--logo)] to-[var(--success)] opacity-20 origin-top">
            <motion.div variants={trackVariants} className="w-full h-full bg-inherit" />
          </div>

          {/* Sequential Pipeline Steps */}
          {loopSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="relative group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 rounded-[var(--radius-md)] border border-transparent hover:border-[var(--card-border)] hover:bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-[var(--transition-fast)]"
            >
              {/* Chronological State Indicator Ring */}
              <div className="absolute -left-[31px] md:-left-[47px] top-8 z-20 flex items-center justify-center">
                <div 
                  className="w-8 h-8 rounded-full bg-[var(--bg)] border-2 transition-transform duration-[var(--transition-fast)] group-hover:scale-110 flex items-center justify-center font-mono text-[11px] font-bold"
                  style={{ borderColor: step.color, color: step.color, boxShadow: `0 0 10px ${step.color}20` }}
                >
                  {step.phase}
                </div>
              </div>

              {/* Step Identification Typography */}
              <div className="md:w-1/4 shrink-0">
                <h3 
                  className="text-2xl font-black tracking-tight transition-colors duration-[var(--transition-fast)] mb-1"
                  style={{ color: step.title === "Grow" ? "var(--success)" : "var(--heading)" }}
                >
                  {step.title}
                </h3>
                <span className="text-xs font-mono font-semibold tracking-wide text-[var(--muted)] block">
                  {step.action}
                </span>
              </div>

              {/* Informative Explanatory Body block */}
              <div className="md:w-3/4">
                <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Loop Return Action Indicator (Repeat Callout) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mt-16 ml-8 md:ml-16 p-6 rounded-[var(--radius-sm)] border border-dashed border-[var(--border)] bg-[var(--glass)] flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--card-border)] flex items-center justify-center text-[var(--success)] animate-[spin_12s_linear_infinite]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-[var(--heading)] tracking-tight">The Self-Sustaining Loop</h4>
              <p className="text-xs text-[var(--subtitle)] font-light">Once capability is achieved, the cycle resets at a higher plane of complexity.</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--success)] bg-[var(--hover-bg)] px-3 py-1 rounded border border-[var(--card-border)] whitespace-nowrap">
            GOTO // Phase_01
          </span>
        </motion.div>

      </div>
    </section>
  );
}