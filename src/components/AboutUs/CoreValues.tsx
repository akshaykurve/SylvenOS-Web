"use client";

import { motion, Variants } from "motion/react";

export default function CoreValues() {
  // Cascading grid container animation configuration
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = { 
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10 
    },
  },
};

  // Data mapping for six values including semantic coloring and unique inline vector geometries
  const values = [
    {
      title: "Learn",
      description: "Every project should teach something.",
      tag: "01 // Growth",
      color: "var(--info)",
      glow: "0 4px 24px rgba(56, 189, 248, 0.15)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10M6 10h10" />
        </svg>
      ),
    },
    {
      title: "Build",
      description: "Real software creates real experience.",
      tag: "02 // Execution",
      color: "var(--primary)",
      glow: "var(--glow-primary)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
          <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
          <path d="M11 22v-4M7 22v-4" />
        </svg>
      ),
    },
    {
      title: "Educate",
      description: "Knowledge grows when it is shared.",
      tag: "03 // Mentorship",
      color: "var(--logo)",
      glow: "var(--glow-logo)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        </svg>
      ),
    },
    {
      title: "Collaborate",
      description: "Great software is built together.",
      tag: "04 // Synergy",
      color: "var(--success)",
      glow: "0 4px 24px rgba(52, 211, 153, 0.15)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description: "Open discussions. Open decisions. Open code.",
      tag: "05 // Integrity",
      color: "var(--warning)",
      glow: "0 4px 24px rgba(251, 191, 36, 0.15)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        </svg>
      ),
    },
    {
      title: "Consistency",
      description: "Small contributions every day create lasting impact.",
      tag: "06 // Velocity",
      color: "var(--border)",
      glow: "0 4px 24px rgba(179, 207, 229, 0.15)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px] text-[var(--text)]">
      {/* Background Matrix Mesh Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

      {/* Soft Structural Radial Glows */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full filter blur-[140px] opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full filter blur-[140px] opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading Group */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Operating Principles
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Core Values
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            The immutable foundation of our ecosystem. These pillars govern how we write code, handle collaboration, and sustain the community framework.
          </motion.p>
        </div>

        {/* Six-Card Layout Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: item.color, 
                boxShadow: item.glow,
                backgroundColor: "var(--card-hover-bg)"
              }}
              className="p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              {/* Corner Linear Accent Indicator */}
              <div 
                className="absolute top-0 right-0 w-24 h-[2px] opacity-40 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: item.color }}
              />

              <div>
                {/* Visual Header Compartment */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="p-3 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] transition-colors duration-[var(--transition-fast)]"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[var(--disabled)] group-hover:text-[var(--text)] transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Main Heading Text */}
                <h3 className="text-xl font-black text-[var(--heading)] mb-3 tracking-tight group-hover:text-[var(--hover-text)] transition-colors">
                  {item.title}
                </h3>

                {/* Value Objective Core Phrase */}
                <p className="text-sm md:text-base text-[var(--subtitle)] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Minimal Bottom Interactive Connector Bar */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-8 group-hover:via-[var(--border)] transition-colors duration-[var(--transition-fast)]" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}