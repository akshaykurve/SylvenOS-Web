"use client";

import { motion, Variants } from "motion/react";

export default function WhatWeBuild() {
  // Staggered grid container configuration
  const gridVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 16,
      },
    },
  };

  // Structured array detailing the core production outputs of the organization
  const categories = [
    {
      title: "Developer Tools",
      subtitle: "Reusable utilities.",
      description: "CLI scripts, custom build pipelines, automation hooks, and performance extensions designed to optimize the everyday developer workflow.",
      color: "var(--info)",
      glow: "0 4px 24px rgba(56, 189, 248, 0.12)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: "Admin Dashboards",
      subtitle: "Production-ready templates.",
      description: "Highly interactive management control panels featuring comprehensive data visualization engines, unified state management, and modern secure authentication layouts.",
      color: "var(--primary)",
      glow: "var(--glow-primary)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
    },
    {
      title: "APIs",
      subtitle: "Backend services.",
      description: "Robust, decoupled backend architectures utilizing performant REST and GraphQL frameworks built for hyper-efficient data fetching, clean access-control models, and horizontal scale.",
      color: "var(--logo)",
      glow: "var(--glow-logo)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Open Libraries",
      subtitle: "Reusable packages.",
      description: "Isolated, highly modular npm/pypi software modules built on rigorous open-source semantic versioning protocols, type-safety guarantees, and zero externalbloat logic.",
      color: "var(--success)",
      glow: "0 4px 24px rgba(52, 211, 153, 0.12)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Educational Resources",
      subtitle: "Tutorials. Documentation. Guides.",
      description: "Granular codebase architectures, comprehensive implementation walk-throughs, and interactive technical documentation built to convert zero-context learners into code integration pros.",
      color: "var(--warning)",
      glow: "0 4px 24px rgba(251, 191, 36, 0.12)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z" />
        </svg>
      ),
    },
    {
      title: "Community Projects",
      subtitle: "Collaborative initiatives.",
      description: "Decentralized ecosystem experiments built from modern distributed protocols, crowd-sourced functional extensions, and internal platforms entirely maintained by active members.",
      color: "var(--border)",
      glow: "0 4px 24px rgba(255, 255, 255, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px] text-[var(--text)]">
      {/* Background Matrix Mesh Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:12rem] opacity-[0.02] pointer-events-none" />

      {/* Deep Central Structural Lighting Accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] rounded-full filter blur-[150px] opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--info) 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading Module */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Ecosystem Output
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            What We Build
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Instead of single isolated frameworks, we ship production software models across foundational verticals. Here is where our community allocates its architectural focus.
          </motion.p>
        </div>

        {/* 6-Category Modular Card Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                borderColor: cat.color, 
                boxShadow: cat.glow,
                backgroundColor: "var(--gradient-surface)"
              }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              <div>
                {/* Structural Card Header Icon Block */}
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="p-3 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] transition-colors duration-[var(--transition-fast)]"
                    style={{ color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[var(--heading)] tracking-tight">
                      {cat.title}
                    </h3>
                    <p 
                      className="text-xs font-mono font-medium tracking-wide opacity-80 mt-0.5"
                      style={{ color: cat.color }}
                    >
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Analytical Functional Scope Description */}
                <p className="text-sm text-[var(--subtitle)] font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Decorative Subtle Flow Line Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-6 group-hover:via-[var(--border)] transition-colors duration-[var(--transition-fast)]" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}