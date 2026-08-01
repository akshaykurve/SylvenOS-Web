"use client";

import { motion, Variants } from "motion/react";

export default function WhoCanJoin() {
  // Staggered sequence configuration for the 9-card system matrix
  const gridVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 16,
      },
    },
  };

  // Structured matrix expanding original cohorts to incorporate specialized deep-tech vectors
  const domains = [
    {
      title: "Students",
      subtitle: "Learn by contributing.",
      desc: "Escape tutorial hell. Bridge the gap between classroom theory and multi-developer production code environments.",
      color: "var(--info)",
      tag: "ROLE // ACADEMIC",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      title: "Developers",
      subtitle: "Build production software.",
      desc: "Architect backends, optimize frontends, and engineer components alongside cross-functional engineering leads.",
      color: "var(--primary)",
      tag: "ROLE // ARCHITECT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Designers",
      subtitle: "Improve user experience.",
      desc: "Transform UI/UX mockups, refine layout accessibility, and map user flows directly into real codebase designs.",
      color: "var(--logo)",
      tag: "ROLE // CREATIVE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        </svg>
      ),
    },
    {
      title: "Data Scientists & ML Engineers",
      subtitle: "Train models & extract insights.",
      desc: "Build predictive pipelines, optimize telemetry processing scripts, and construct real open intelligence modules.",
      color: "var(--success)",
      tag: "ROLE // INTELLIGENCE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity Specialists",
      subtitle: "Secure systems & audit code.",
      desc: "Conduct automated dependency threat scans, harden authentication layers, and protect application frameworks.",
      color: "var(--danger)",
      tag: "ROLE // SEC_OPS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "DevOps Engineers",
      subtitle: "Automate infrastructure.",
      desc: "Optimize custom continuous integration tracks, monitor build runtimes, and configure deployment instances.",
      color: "var(--warning)",
      tag: "ROLE // INFRA",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      title: "QA & Testers",
      subtitle: "Guarantee software quality.",
      desc: "Uncover logic errors, write robust end-to-end user testing files, and safeguard master branch stability.",
      color: "var(--text)",
      tag: "ROLE // QUALITY",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <polyline points="9 11 12 14 22 4" />
        </svg>
      ),
    },
    {
      title: "Technical Writers",
      subtitle: "Clear documentation & guides.",
      desc: "Demystify deployment setup steps, draft structured reference manuals, and update code wikis.",
      color: "var(--subtitle)",
      tag: "ROLE // KNOWLEDGE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Anyone Curious",
      subtitle: "Willing to learn? Welcome.",
      desc: "No strict experience checklists enforced here. If you have active drive and want to build together, you belong.",
      color: "var(--logo)",
      tag: "ROLE // OPEN_BOUND",
      glow: "var(--glow-logo)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Dynamic Geometric Matrix Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.015] pointer-events-none" />

      {/* Structural Corner Ambient Lighting */}
      <div 
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full filter blur-[160px] opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--info) 40%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Component Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // Perimeter Permissions
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Who Can Join?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Many engineers hesitate because they think open source is a gated sanctuary exclusively for veterans. We reject that logic. Sylven OS is a multi-discipline perimeter open to all tech verticals.
          </motion.p>
        </div>

        {/* Dense Responsive Domain Grid Layout */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {domains.map((domain, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                borderColor: domain.color, 
                boxShadow: domain.glow || `0 6px 24px rgba(255,255,255,0.03)`,
                backgroundColor: "var(--gradient-surface)"
              }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              {/* Top Accent Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-30 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundColor: domain.color }}
              />

              <div>
                {/* Structural Identifier Segment */}
                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] transition-colors duration-[var(--transition-fast)]"
                    style={{ color: domain.color }}
                  >
                    {domain.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-[var(--disabled)] font-bold">
                    {domain.tag}
                  </span>
                </div>

                {/* Main Heading Identification */}
                <h3 className="text-lg md:text-xl font-black text-[var(--heading)] tracking-tight mb-1 group-hover:text-[var(--hover-text)] transition-colors">
                  {domain.title}
                </h3>
                
                {/* Action-Oriented Motto Subtitle */}
                <p 
                  className="text-xs font-mono font-bold tracking-wide mb-4 transition-opacity"
                  style={{ color: domain.color }}
                >
                  {domain.subtitle}
                </p>

                {/* Practical Dynamic Structural Scope Description */}
                <p className="text-sm text-[var(--subtitle)] font-light leading-relaxed">
                  {domain.desc}
                </p>
              </div>

              {/* Minimal Bottom Separation Rule */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-6 group-hover:via-[var(--border)] transition-colors" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}