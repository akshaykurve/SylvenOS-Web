"use client";

import { motion, Variants } from "motion/react";

interface RewardCard {
  title: string;
  description: string;
  tag: string;
  color: string;
  svgIcon: React.ReactNode;
}

export default function RecognitionRewards() {
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

  const rewards: RewardCard[] = [
    {
      title: "Contributor of the Month",
      description: "Spotlighting exceptional multi-vector ecosystem impact over a standard 30-day deployment cycle.",
      tag: "REWARD // TIER_01",
      color: "var(--logo)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Milestone Badges",
      description: "Commemorating structural lifetime telemetry thresholds, pull request counts, or continuous commit streaks.",
      tag: "REWARD // TIER_02",
      color: "var(--info)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Project Completion Awards",
      description: "Issued upon the successful deployment or baseline resolution of core versioned epic roadmaps and architecture subsystems.",
      tag: "REWARD // TIER_03",
      color: "var(--primary)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7.463 1.422A3.001 3.001 0 003 12v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-1.537-2.578M5.51 5.14a9 9 0 0112.98 0M9 11h6" />
        </svg>
      ),
    },
    {
      title: "Documentation Champion",
      description: "Recognizing technical authors updating reference guides, clarifying integration flows, and eliminating terminology debt.",
      tag: "REWARD // TIER_04",
      color: "var(--success)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Bug Hunter",
      description: "Awarded to security analysts and engineers triaging high-severity leaks, platform bottlenecks, or critical runtime anomalies.",
      tag: "REWARD // TIER_05",
      color: "var(--danger)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: "Community Mentor",
      description: "Honoring core ecosystem guides dedicated to unblocking newcomers, hosting discussions, and reviewing inbound logic files.",
      tag: "REWARD // TIER_06",
      color: "var(--warning)",
      svgIcon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Structural Geometry Mesh Matrix Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:12rem_12rem] opacity-[0.015] pointer-events-none" />
      
      {/* Background Aura Accent Flare */}
      <div 
        className="absolute bottom-1/3 left-1/4 w-[600px] h-[400px] rounded-full filter blur-[150px] opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--warning) 0%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Module Context Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--warning)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // Gamification Strategy
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Recognition & Rewards
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Exceptional work deserves permanent registry status. We are designing native multi-tier incentive layers to validate structural, instructional, and community impact.
          </motion.p>
        </div>

        {/* 6-Card Architecture Grid Array */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {rewards.map((reward, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -3,
                borderColor: "var(--border)"
              }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between transition-all duration-[var(--transition-fast)] group select-none"
            >
              {/* Shimmer Ambient Background Indicator on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Meta Header Layer inside Reward Card */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-9 h-9 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] flex items-center justify-center transition-colors text-[var(--muted)] group-hover:text-[var(--heading)]"
                    style={{ borderLeftColor: reward.color }}
                  >
                    {reward.svgIcon}
                  </div>
                  
                  {/* Highly Structured v1 Phase Tracker Badge */}
                  <span className="font-mono text-[9px] tracking-widest font-black text-[var(--warning)] px-2 py-0.5 bg-[var(--glass)] border border-[var(--card-border)] rounded shadow-inner animate-pulse">
                    COMING SOON
                  </span>
                </div>

                {/* Primary Card Title */}
                <h3 className="text-lg font-bold tracking-tight text-[var(--heading)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {reward.title}
                </h3>

                {/* Scope Description Text */}
                <p className="text-xs md:text-sm text-[var(--subtitle)] font-light leading-relaxed mb-6 opacity-75 group-hover:opacity-100 transition-opacity">
                  {reward.description}
                </p>
              </div>

              {/* Lower Functional Baseline Parameters */}
              <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-4 mt-auto">
                <span className="font-mono text-[9px] tracking-wider text-[var(--disabled)] font-bold">
                  {reward.tag}
                </span>
                
                {/* Static Locked Interface Telemetry Line */}
                <div className="flex items-center gap-1 font-mono text-[9px] text-[var(--disabled)] uppercase tracking-wide">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Pipeline Stacked
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Core Engine Status Verification Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[var(--disabled)] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--warning)]" />
            V1 Framework Interface Loaded // Incentive Initialization Matrices Pending
          </div>
        </motion.div>

      </div>
    </section>
  );
}