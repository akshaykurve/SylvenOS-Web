"use client";

import { motion, Variants } from "motion/react";

interface RoleNode {
  title: string;
  level: string;
  description: string;
  responsibilities: string[];
  color: string;
  badge: string;
}

export default function ContributorRoles() {
  // Ordered hierarchy schema showing clear progression down the organizational pipeline
  const roles: RoleNode[] = [
    {
      title: "Founder",
      level: "01",
      badge: "GENESIS NODE",
      description: "Establishes foundational infrastructure, community governance, and strategic vector charts.",
      responsibilities: [
        "Sets overarching system vision",
        "Establishes organizational architecture",
        "Orchestrates high-level engineering roadmaps"
      ],
      color: "var(--logo)",
    },
    {
      title: "Maintainers",
      level: "02",
      badge: "GOVERNANCE LAYER",
      description: "Oversees subsystem repositories, orchestrates releases, and guards architectural stability.",
      responsibilities: [
        "Reviews and merges complex pull requests",
        "Guides and unblocks community contributors",
        "Enforces codebase health and quality standards"
      ],
      color: "var(--info)",
    },
    {
      title: "Core Contributors",
      level: "03",
      badge: "PRODUCTION ENGINE",
      description: "Sustains high-frequency impacts across core modules, documentation tracks, and feature systems.",
      responsibilities: [
        "Drives structural feature developments",
        "Triages complicated system issues",
        "Mentors incoming community engineers"
      ],
      color: "var(--primary)",
    },
    {
      title: "Contributors",
      level: "04",
      badge: "ACTIVE MESH",
      description: "The operational heart of the system, optimizing and patching components across the workspace.",
      responsibilities: [
        "Builds scoped components and feature modules",
        "Patches codebase bugs and software defects",
        "Improves and validates technical documentation"
      ],
      color: "var(--success)",
    },
    {
      title: "First-Time Contributors",
      level: "05",
      badge: "INITIALIZED ROUTE",
      description: "Engineers or creators executing their baseline commits inside our open ecosystem.",
      responsibilities: [
        "Claims and addresses entry-level 'good first issues'",
        "Fixes localization gaps or documentation typos",
        "Learns our specific pipeline integration flows"
      ],
      color: "var(--warning)",
    },
  ];

  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)]">
      {/* Background Matrix Linework */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:16rem] opacity-[0.015] pointer-events-none" />
      
      {/* Structural Backdrop Radial Light Source */}
      <div 
        className="absolute top-1/4 left-10 w-[700px] h-[500px] rounded-full filter blur-[160px] opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, transparent 80%)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Component Title and Context Frame */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--info)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // Organizational Pipeline
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Ecosystem Progression Path
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Our community infrastructure features clear, direct advancement tracks. Understand operational tiers, map structural expectations, and visualize your integration trajectory.
          </motion.p>
        </div>

        {/* Tree Layout Structural Context Wrapper */}
        <div className="relative">
          
          {/* Main Vertical Structural Progression Stem */}
          <div className="absolute left-[17px] md:left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--logo)] via-[var(--primary)] to-[var(--disabled)] opacity-20 pointer-events-none" />

          {/* Sequential Role Array Interlocking Matrix */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12 relative"
          >
            {roles.map((role, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Progression Flow Hub Anchor Point */}
                  <div className="absolute left-[17px] md:left-1/2 w-9 h-9 -translate-x-1/2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex items-center justify-center z-20 shadow-[var(--shadow-sm)] transition-colors duration-300 group">
                    <div 
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: role.color }}
                    />
                  </div>

                  {/* Empty Spacer Segment for Perfectly Centered Desktop Symmetry */}
                  <div className="w-full md:w-1/2" />

                  {/* High-Fidelity Progression Info Card Component */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      whileHover={{ 
                        y: -3,
                        borderColor: role.color,
                        backgroundColor: "var(--gradient-surface)"
                      }}
                      className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden transition-all duration-[var(--transition-fast)]"
                    >
                      {/* Top Corner Structural Meta Tracking Tag */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span 
                          className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded border opacity-80"
                          style={{ color: role.color, borderColor: `${role.color}40`, backgroundColor: `${role.color}08` }}
                        >
                          {role.badge}
                        </span>
                        <span className="font-mono text-xs font-bold text-[var(--disabled)]">
                          LVL_0{role.level}
                        </span>
                      </div>

                      {/* Main Node Functional Label */}
                      <h3 className="text-xl md:text-2xl font-black tracking-tight text-[var(--heading)] mb-2">
                        {role.title}
                      </h3>

                      {/* Functional Core Scope Description */}
                      <p className="text-xs md:text-sm text-[var(--subtitle)] font-light leading-relaxed mb-6">
                        {role.description}
                      </p>

                      {/* Explicit Inline Structured Responsibilities Checklist Segment */}
                      <div className="space-y-2.5 border-t border-[var(--card-border)] pt-5">
                        <div className="text-[10px] font-mono font-bold tracking-wider text-[var(--muted)] uppercase mb-2">
                          // Core Tasks & Responsibilities
                        </div>
                        {role.responsibilities.map((resp, respIdx) => (
                          <div key={respIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: role.color }} />
                            <span className="text-xs text-[var(--text)] font-light leading-normal">{resp}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing Dynamic Hierarchy Verification Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[var(--disabled)] uppercase tracking-widest select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
            Ecosystem Matrix Hierarchy Operational // All Routes Open For Onboarding
          </div>
        </motion.div>

      </div>
    </section>
  );
}