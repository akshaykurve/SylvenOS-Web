"use client";

import { motion, Variants } from "motion/react";

export default function ContributionPhilosophy() {
  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 16 },
    },
  };

  // Structured philosophy node arrays containing inline SVG paths for fully decoupled visual durability
  const philosophyCards = [
    {
      title: "Code",
      items: ["Backend", "Frontend", "Libraries"],
      color: "var(--primary)",
      tag: "CORE_ENG // 01",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Documentation",
      items: ["Guides", "API Docs", "Tutorials"],
      color: "var(--info)",
      tag: "CORE_ENG // 02",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Design",
      items: ["UI", "UX", "Graphics"],
      color: "var(--logo)",
      tag: "CORE_ENG // 03",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.344l2.122-2.122a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Testing",
      items: ["QA", "Bug Reports", "Automation"],
      color: "var(--danger)",
      tag: "CORE_ENG // 04",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Community",
      items: ["Support", "Discussions", "Mentorship"],
      color: "var(--success)",
      tag: "CORE_ENG // 05",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Content",
      items: ["Articles", "Videos", "Tutorials"],
      color: "var(--warning)",
      tag: "CORE_ENG // 06",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)]">
      {/* Precision Structural System Matrix Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-[0.015] pointer-events-none" />
      
      {/* Hyper-Focused Peripheral Glow Array */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full filter blur-[150px] opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, var(--info) 60%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Core Philosophy Header Panel */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // Contribution Philosophy
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Every Contribution Matters
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Many people think contribution strictly equals coding lines. We diverge from that perspective entirely. Whether you write code, improve documentation, design interfaces, test features, report bugs, or help other contributors, you're helping Sylven OS grow.
          </motion.p>
        </div>

        {/* 6-Card Philosophy Architecture Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {philosophyCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                borderColor: card.color,
                backgroundColor: "var(--gradient-surface)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
              }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              {/* Card Header Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Block Container with dynamic hover system lines */}
                  <div 
                    className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] flex items-center justify-center transition-colors duration-[var(--transition-fast)] group-hover:border-transparent group-hover:text-white"
                    style={{ '--hover-bg-target': card.color } as React.CSSProperties}
                  >
                    <div className="text-[var(--muted)] group-hover:text-[var(--heading)] transition-colors">
                      {card.svgIcon}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-[var(--disabled)] font-bold select-none">
                    {card.tag}
                  </span>
                </div>

                {/* Main Category Identity Text */}
                <h3 className="text-xl font-bold tracking-tight text-[var(--heading)] mb-4">
                  {card.title}
                </h3>

                {/* Sub-item Node Badges Stack */}
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item, subIdx) => (
                    <span
                      key={subIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--glass)] border border-[var(--card-border)] text-[var(--text)] font-medium transition-colors group-hover:border-[var(--border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimalist lower telemetry line indicator inside card */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Synchronized Status Verification Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2.5 font-mono text-[10px] text-[var(--disabled)] uppercase tracking-widest select-none">
            <span className="w-1 h-1 rounded-full bg-[var(--logo)] animate-ping" />
            Ecosystem Strategy Layer: Multi-channel integration functional
          </div>
        </motion.div>

      </div>
    </section>
  );
}