"use client";

import { motion, Variants } from "motion/react";

// Absolute structural typing mapping exactly to your API payload configuration
interface GitHubOrgData {
  id: number;
  login: string;
  public_repos: number;
  followers: number;
  [key: string]: any;
}

interface GitHubMemberData {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  [key: string]: any;
}

interface CompleteGitHubStats {
  repos: number;
  contributors: number;
  orgData?: GitHubOrgData;
  membersData?: GitHubMemberData[];
}

interface CommunityOverviewProps {
  stats: CompleteGitHubStats;
}

export default function CommunityOverview({ stats }: CommunityOverviewProps) {
  // Safe extraction fallback defaults to ensure total interface durability
  
  const totalRepos = stats?.repos ?? 0;
  const totalContributors = stats?.contributors ?? 0;
  const followersCount = stats?.orgData?.followers ?? 0;
  const membersList = stats?.membersData ?? [];

  // Sequential stagger configurations
  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  // Honest metric assessment logic processing live real-world constants
  const metrics = [
    {
      label: "Total Contributors",
      value: totalContributors > 0 ? totalContributors.toString() : "0 Contributors",
      subtext: totalContributors > 0 ? "Engineers securely onboarded to the main GitHub organization matrix." : "Be the first contributor.",
      color: "var(--info)",
      tag: "CORE_METRIC // 01",
    },
    {
      label: "Active Repositories",
      value: totalRepos > 0 ? totalRepos.toString() : "Launching Soon",
      subtext: totalRepos > 0 ? "Public production codebases actively maintained on our open index." : "Core source components preparing for initial commit.",
      color: "var(--primary)",
      tag: "CORE_METRIC // 02",
    },
    {
      label: "Ecosystem Followers",
      value: followersCount > 0 ? followersCount.toString() : "Growing Base",
      subtext: "Developers monitoring updates and pipeline tracking logs natively on GitHub.",
      color: "var(--logo)",
      tag: "CORE_METRIC // 03",
    },
    {
      label: "Community Status",
      value: totalContributors > 1 ? "Growing Community" : "Assembling Group",
      subtext: "Ecosystem operational index and collaboration framework progression.",
      color: "var(--success)",
      tag: "CORE_METRIC // 04",
    },
    {
      label: "Ecosystem Governance",
      value: "Building Together",
      subtext: "Decentralized code validation layers managed entirely via open community syncs.",
      color: "var(--warning)",
      tag: "CORE_METRIC // 05",
    },
    {
      label: "Geographic Location",
      value: stats?.orgData?.location || "Global Footprint",
      subtext: "Primary node registry origin tracking decentralized nodes worldwide.",
      color: "var(--text)",
      tag: "CORE_METRIC // 06",
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)]">
      {/* Background Matrix Structural Geometry */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:14rem] opacity-[0.015] pointer-events-none" />
      
      {/* Structural Ambient Underglow Accent */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] rounded-full filter blur-[140px] opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Module Header Group */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // Telemetry Verification
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Community Overview
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Real open-source groups scale using absolute clarity. We extract verified runtime updates directly from the <span className="font-mono text-xs text-[var(--heading)] px-1.5 py-0.5 bg-[var(--glass)] rounded border border-[var(--card-border)]">SylvenOS</span> GitHub organization payload.
          </motion.p>
        </div>

        {/* 6-Card High-Fidelity Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-16"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                borderColor: metric.color,
                backgroundColor: "var(--gradient-surface)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)"
              }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
            >
              <div 
                className="absolute top-0 left-0 w-12 h-[2px] opacity-30 transition-all group-hover:w-full group-hover:opacity-100" 
                style={{ backgroundColor: metric.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wide text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                    {metric.label}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-[var(--disabled)] font-bold">
                    {metric.tag}
                  </span>
                </div>

                <div className="text-2xl md:text-4xl font-black tracking-tight text-[var(--heading)] mb-2 select-all">
                  {metric.value}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs md:text-sm text-[var(--subtitle)] font-light leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Contributor Facepile Tray */}
        {membersList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--glass)] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md"
          >
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-[var(--heading)] mb-1">Active Mesh Matrix Members</h4>
              <p className="text-xs text-[var(--subtitle)] font-light">Direct cryptographic avatar streams from the latest core organization commit logs.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center -space-x-3 hover:space-x-1 transition-all duration-300">
              {membersList.slice(0, 10).map((member) => (
                <a
                  key={member.id}
                  href={member.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group/avatar block"
                >
                  <img
                    src={member.avatar_url}
                    alt={`${member.login} contributor primitive`}
                    className="w-9 h-9 rounded-full border-2 border-[var(--bg)] bg-[var(--card-bg)] transition-transform duration-200 group-hover/avatar:scale-110 group-hover/avatar:z-30 relative"
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded bg-[var(--heading)] text-[9px] font-mono text-[var(--bg)] font-bold opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[var(--shadow-sm)]">
                    {member.login}
                  </div>
                </a>
              ))}
              {membersList.length > 10 && (
                <div className="w-9 h-9 rounded-full bg-[var(--card-border)] border-2 border-[var(--bg)] flex items-center justify-center font-mono text-[10px] font-bold text-[var(--muted)] select-none">
                  +{membersList.length - 10}
                </div>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}