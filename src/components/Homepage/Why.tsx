"use client";

import { motion, Variants } from "motion/react";

export default function WhySylvenOS() {
  // Stagger sequence for grid arrival
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Smooth item scale-in animation
  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  const features = [
    {
      title: "Open Source",
      description: "Everything is transparent.",
      tag: "CORE.01",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Real Projects",
      description: "No toy applications.",
      tag: "CORE.02",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: "Learn by Building",
      description: "Experience over tutorials.",
      tag: "CORE.03",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Community Driven",
      description: "Anyone can contribute.",
      tag: "CORE.04",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Documentation First",
      description: "Every project teaches.",
      tag: "CORE.05",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Long-term Growth",
      description: "Build software that lasts.",
      tag: "CORE.06",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Structural Accent Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-[0.08] pointer-events-none" />

      {/* Title Layout */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--primary)] uppercase tracking-widest mb-4">
          Value Proposition
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
          Why Sylven OS?
        </h2>
      </div>

      {/* Balanced 3-Column Bento Grid */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -4, 
              borderColor: "var(--primary)",
              boxShadow: "var(--shadow-md)"
            }}
            className="group relative p-6 md:p-8 rounded-[var(--radius-md)] bg-[var(--gradient-surface)] border border-[var(--card-border)] transition-all duration-[var(--transition-normal)] flex flex-col justify-between h-[210px] overflow-hidden"
          >
            {/* Top Row: Icon and Engineering Code Index */}
            <div className="flex items-center justify-between w-full mb-4">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--hover-bg)] transition-colors duration-[var(--transition-fast)]">
                {item.icon}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[var(--disabled)] select-none">
                {item.tag}
              </span>
            </div>

            {/* Core Text Elements */}
            <div className="mt-auto">
              <h3 className="text-lg md:text-xl font-bold mb-1.5 text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors duration-[var(--transition-fast)]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-base text-[var(--subtitle)] font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Subtle bottom decorative light trail */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/0 to-transparent group-hover:via-[var(--primary)]/30 transition-all duration-[var(--transition-slow)]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}