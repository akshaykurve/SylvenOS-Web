"use client";

import { motion, Variants } from "motion/react";

export default function ContributionAreas() {
  const areas = [
    {
      role: "Frontend",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      role: "Backend",
      tags: ["Go", "Node.js", "Postgres", "Redis"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
    },
    {
      role: "UI/UX",
      tags: ["Figma", "Design Systems", "Tokens"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a7 7 0 0 0 7 7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      role: "DevOps",
      tags: ["Docker", "Actions", "AWS", "CI/CD"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12A10 10 0 0 1 12 22a10 10 0 0 1 0-20 10 10 0 0 1 10 10z" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      role: "Documentation",
      tags: ["Markdown", "API Specs", "Technical Writing"],
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
      role: "Testing",
      tags: ["Playwright", "Jest", "Integration"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      role: "Design",
      tags: ["Brand Identity", "Illustrations", "Vector Assets"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
    },
    {
      role: "Community",
      tags: ["Discord Support", "Onboarding", "Event Coordination"],
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
      role: "Content",
      tags: ["Tech Blogs", "Video Guides", "Case Studies"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <rect x="6" y="8" width="4" height="4" />
          <line x1="12" y1="8" x2="18" y2="8" />
          <line x1="12" y1="12" x2="18" y2="12" />
          <line x1="6" y1="16" x2="18" y2="16" />
        </svg>
      ),
    },
    {
      role: "Translation",
      tags: ["Localization", "i18n Scope", "Multi-lingual Docs"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8l6 6" />
          <path d="M4 14h14" />
          <path d="M2 1h60v60H2z" className="hidden" />
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
          <path d="M8 9h8" />
          <path d="M12 9v6" />
        </svg>
      ),
    },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)]">
      {/* Subtle Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:10rem] [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)] opacity-[0.05] pointer-events-none" />

      {/* Main Title Block */}
      <div className="relative z-10 max-w-7xl mx-auto mb-20 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-[var(--hover-bg)] border border-[var(--active-border)] text-[var(--primary)] uppercase tracking-widest mb-4">
          Non-Code Friendly Welcome
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)] max-w-3xl mx-auto leading-tight">
          Find Your Fit in Our Ecosystem
        </h2>
        <p className="text-base md:text-lg text-[var(--subtitle)] font-light mt-4 max-w-xl mx-auto">
          Contributions extend far beyond the compiler. Choose an discipline that matches your core skills.
        </p>
      </div>

      {/* 10-Item High-Density Responsive Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch"
      >
        {areas.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              borderColor: "var(--primary)", 
              backgroundColor: "var(--card-hover-bg)",
              boxShadow: "var(--shadow-md)"
            }}
            className="group relative p-5 rounded-[var(--radius-md)] bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-sm transition-all duration-[var(--transition-fast)] flex flex-col justify-between"
          >
            {/* Top Row: Title + Inline Visual Context Anchor */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-bold tracking-tight text-[var(--heading)] group-hover:text-[var(--hover-text)] transition-colors duration-[var(--transition-fast)]">
                  {item.role}
                </h3>
                <div className="text-[var(--primary)] opacity-70 group-hover:opacity-100 group-hover:text-[var(--info)] transition-all duration-[var(--transition-fast)]">
                  {item.icon}
                </div>
              </div>

              {/* Tag Stack */}
              <div className="flex flex-col gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono px-2 py-1 rounded-[var(--radius-sm)] bg-[var(--surface)]/20 border border-[var(--card-border)]/50 text-[var(--muted)] block w-full text-left"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Subtle Interaction Prompt */}
            <div className="mt-5 pt-3 border-t border-[var(--card-border)]/20 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-[var(--transition-normal)] flex items-center gap-1 text-[11px] font-mono text-[var(--info)]">
              <span>Explore issues</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}