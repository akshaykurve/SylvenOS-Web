"use client";

import { motion, Variants } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Join Community",
      description: "Step into our communication channels, introduce yourself, and meet other builders.",
      tag: "01",
      color: "var(--primary)",
    },
    {
      title: "Choose Project",
      description: "Explore the Sylven OS ecosystem to find an active repository matching your technical stack.",
      tag: "02",
      color: "var(--primary)",
    },
    {
      title: "Read Documentation",
      description: "Review system architecture specs, local environment configurations, and styling guidelines.",
      tag: "03",
      color: "var(--primary)",
    },
    {
      title: "Pick Issue",
      description: "Claim an item from our curated issues tracker or propose a custom architectural feature.",
      tag: "04",
      color: "var(--info)",
    },
    {
      title: "Open Pull Request",
      description: "Push your branch and open a transparent pull request detailing your code changes.",
      tag: "05",
      color: "var(--info)",
    },
    {
      title: "Collaborate",
      description: "Iterate constructively through code review cycles, testing validation, and design adjustments.",
      tag: "06",
      color: "var(--info)",
    },
    {
      title: "Become Contributor",
      description: "Your code is officially merged into production. Your profile is added to the system roster.",
      tag: "07",
      color: "var(--success)",
      isFinal: true,
    },
  ];

  // Motion Variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const stepVariants:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Visual Accent Ambient Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_0%_50%,#000_20%,transparent_100%)] opacity-[0.1] pointer-events-none" />

      {/* Title block */}
      <div className="relative z-10 max-w-4xl mx-auto mb-24">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--primary)] uppercase tracking-widest mb-4">
          Contribution Pipeline
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
          How It Works
        </h2>
        <p className="text-base md:text-lg text-[var(--subtitle)] font-light mt-3 max-w-xl">
          A clear, step-by-step track from checking out our repositories to landing your first production merge.
        </p>
      </div>

      {/* Timeline Wrapper Grid */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Continuous Pipeline Visual Connector Track */}
        <div className="absolute left-4 md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--info)] to-[var(--success)] opacity-20 pointer-events-none" />

        {/* Dynamic Highlight Progress Bar Overlay */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute left-4 md:left-8 top-2 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--info)] to-[var(--success)] origin-top pointer-events-none shadow-[var(--glow-primary)]"
        />

        {/* Timeline Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="group relative flex gap-6 md:gap-12 items-start"
            >
              {/* Step Node Marker Indicator */}
              <div className="relative z-10 flex items-center justify-center flex-shrink-0">
                <motion.div 
                  whileInView={{ 
                    borderColor: step.color,
                    boxShadow: step.isFinal ? "var(--glow-logo)" : "0 0 12px rgba(74, 127, 167, 0.2)"
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-[var(--radius-sm)] bg-[var(--bg)] border-2 border-[var(--card-border)] flex items-center justify-center transition-colors duration-[var(--transition-normal)]"
                  style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
                >
                  <span 
                    className="font-mono text-xs md:text-lg font-bold" 
                    style={{ color: step.color }}
                  >
                    {step.tag}
                  </span>
                </motion.div>
              </div>

              {/* Step Context Details */}
              <div className="pt-1 md:pt-4 max-w-xl">
                <h3 
                  className="text-lg md:text-2xl font-bold mb-1.5 transition-colors duration-[var(--transition-fast)]"
                  style={{ color: `var(--heading)` }}
                >
                  <span className="group-hover:text-white transition-colors duration-[var(--transition-fast)]">
                    {step.title}
                  </span>
                </h3>
                <p className="text-[14px] md:text-base text-[var(--subtitle)] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}