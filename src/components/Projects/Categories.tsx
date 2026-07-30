"use client";

import { motion, Variants } from "motion/react";

export default function ProjectCategories() {
  // Stagger configurations for standard layout reveal
  const containerVariants:Variants = {
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
        stiffness: 80,
        damping: 16,
      },
    },
  };

  const categories = [
    {
      title: "Developer Tools",
      tag: "SYS // TOOLS",
      description: "Core binaries and engineering toolchains designed to optimize system architectures.",
      color: "var(--info)",
      glow: "0 4px 24px rgba(56, 189, 248, 0.12)",
      subcategories: ["CLI", "Utilities", "Libraries", "SDKs"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Web Applications",
      tag: "APP // INTERFACE",
      description: "High-performance modern frontends built for speed, clean UX, and extreme scalability.",
      color: "var(--primary)",
      glow: "var(--glow-primary)",
      subcategories: ["Dashboards", "Platforms", "Portals", "SaaS"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      title: "APIs & Services",
      tag: "NET // ORCHESTRATION",
      description: "Robust backends, data transmission layers, and highly microservices pipelines.",
      color: "var(--logo)",
      glow: "var(--glow-logo)",
      subcategories: ["REST APIs", "GraphQL", "Microservices"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Educational Projects",
      tag: "EDU // ECOSYSTEM",
      description: "Comprehensive guides, sandboxes, and foundational systems to scale real skills.",
      color: "var(--warning)",
      glow: "0 4px 24px rgba(251, 191, 36, 0.12)",
      subcategories: ["Learning Resources", "Tutorials", "Examples"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      title: "Open Source Packages",
      tag: "PKG // DISTRIBUTION",
      description: "Modular, highly reusable utility blocks built and shared across modern registries.",
      color: "var(--success)",
      glow: "0 4px 24px rgba(52, 211, 153, 0.12)",
      subcategories: ["Reusable npm packages", "React components", "Utilities"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)]">
      {/* Background Spatial Structure Layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:100%_6rem] opacity-[0.02] pointer-events-none" />

      {/* Subtle Structural Ambient Background Flow Element */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full filter blur-[150px] opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--info) 0%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Architecture Index
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Project Categories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Explore our curated technology classifications. Select a core taxonomy class or drop down directly into scoped micro-filters to target your contribution domain.
          </motion.p>
        </div>

        {/* Categories Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: category.color, 
                boxShadow: category.glow,
                backgroundColor: "var(--card-hover-bg)"
              }}
              className="p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              <div>
                {/* Taxonomy Top Row */}
                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] transition-colors"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <span className="font-mono text-[9px] tracking-wider text-[var(--disabled)] group-hover:text-[var(--text)] transition-colors">
                    {category.tag}
                  </span>
                </div>

                {/* Primary Descriptor Identifier */}
                <h3 className="text-xl font-black text-[var(--heading)] mb-3 tracking-tight group-hover:text-[var(--hover-text)] transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs md:text-sm text-[var(--subtitle)] font-light leading-relaxed mb-8">
                  {category.description}
                </p>
              </div>

              {/* Nested Filtering Subcategories (Figma/Internal Routing Tags) */}
              <div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[var(--card-border)] to-transparent mb-5" />
                
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      className="font-mono text-[10px] font-semibold text-[var(--muted)] hover:text-[var(--heading)] px-2.5 py-1 rounded bg-[var(--glass)] hover:bg-[var(--surface)] border border-[var(--card-border)] hover:border-[var(--border)] transition-all duration-[var(--transition-fast)]"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}