"use client";

import { motion, Variants } from "motion/react";

export default function EcosystemRoadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      status: "Completed",
      statusColor: "var(--success)",
      milestones: ["Launch Production Website", "Establish GitHub Organization", "Seed Initial Core Projects"],
    },
    {
      phase: "Phase 2",
      title: "Community Scaling",
      status: "In Progress",
      statusColor: "var(--info)",
      milestones: ["Contributor Onboarding Tracks", "Comprehensive Architecture Docs", "Regular Community Events"],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      status: "Upcoming",
      statusColor: "var(--primary)",
      milestones: ["Large-Scale Open Source Systems", "Global Technical Hackathons", "Direct Engineering Mentorship"],
    },
    {
      phase: "Phase 4",
      title: "Global Autonomy",
      status: "Future Vision",
      statusColor: "var(--disabled)",
      milestones: ["Global Decentralized Community", "Partner Enterprise Organizations", "Sylven Education Platform"],
    },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 65, damping: 15 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)]">
      {/* Background Tech Wire Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] opacity-[0.08] pointer-events-none" />

      {/* Header Framework */}
      <div className="relative z-10 max-w-7xl mx-auto mb-24">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--primary)] uppercase tracking-widest mb-4">
          // Long-term Strategy
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
          Ecosystem Roadmap
        </h2>
        <p className="text-base md:text-lg text-[var(--subtitle)] font-light mt-3 max-w-xl">
          A transparent look at our development trajectory. We map our vision clearly so every contributor knows where we are headed.
        </p>
      </div>

      {/* 4-Column Linear Horizon Layout Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {/* Horizontal connecting track vector line for desktop viewports */}
        <div className="absolute top-[45px] left-4 right-4 h-[1px] bg-gradient-to-r from-[var(--success)] via-[var(--info)] to-[var(--card-border)] opacity-20 hidden lg:block pointer-events-none" />

        {phases.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: item.statusColor }}
            className="group relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--gradient-surface)] border border-[var(--card-border)] shadow-[var(--shadow-md)] transition-all duration-[var(--transition-normal)] flex flex-col justify-between backdrop-blur-md"
          >
            {/* Top Container Block */}
            <div>
              {/* Timeline Phase Indicator Pin Row */}
              <div className="flex items-center justify-between mb-8 relative">
                <span 
                  className="text-xs font-mono font-black tracking-wider uppercase px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] transition-colors duration-[var(--transition-fast)]"
                  style={{ color: item.statusColor }}
                >
                  {item.phase}
                </span>

                {/* Node Dot Endpoint matching desktop rail status */}
                <div 
                  className="w-3 h-3 rounded-full border-2 bg-[var(--bg)] transition-all duration-[var(--transition-normal)] shadow-sm hidden lg:block"
                  style={{ borderColor: item.statusColor, boxShadow: `0 0 8px ${item.statusColor}` }}
                />

                {/* Adaptive Status tag for mobile lists */}
                <span 
                  className="text-[10px] font-mono tracking-wider opacity-60 lg:hidden uppercase font-semibold"
                  style={{ color: item.statusColor }}
                >
                  {item.status}
                </span>
              </div>

              {/* Title Header */}
              <h3 className="text-xl font-bold tracking-tight text-[var(--heading)] mb-6 group-hover:text-white transition-colors duration-[var(--transition-fast)]">
                {item.title}
              </h3>

              {/* Milestones Stack */}
              <ul className="space-y-4">
                {item.milestones.map((milestone, mIndex) => (
                  <li 
                    key={mIndex}
                    className="flex items-start gap-3 text-[14px] md:text-base text-[var(--subtitle)] font-light leading-relaxed"
                  >
                    <span 
                      className="text-[11px] font-mono mt-1 select-none opacity-50"
                      style={{ color: item.statusColor }}
                    >
                      ↳
                    </span>
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Panel for Desktop Matrix Alignment */}
            <div className="mt-8 pt-4 border-t border-[var(--card-border)]/30 hidden lg:flex items-center justify-between text-[11px] font-mono">
              <span className="text-[var(--disabled)] uppercase tracking-wider">Status Layer</span>
              <span className="font-semibold uppercase tracking-wider" style={{ color: item.statusColor }}>
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}