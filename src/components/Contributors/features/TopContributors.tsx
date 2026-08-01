"use client";

import { GitHubContributor } from "@/lib/type";
import { motion, Variants } from "motion/react";

export default function TopContributors({ contributors = [], limit = 3 }: { contributors: GitHubContributor[]; limit?: number }) {
  // 1. Sort dynamically by contribution count descending & slice to isolate top nodes
  const topNodes = [...contributors]
    .sort((a, b) => (b.contributions || 0) - (a.contributions || 0))
    .slice(0, limit);

  const containerVariants:Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  if (topNodes.length === 0) return null;

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Structural Wireframe Backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:14rem] opacity-[0.015] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--success)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4">
            // High Velocity Cluster Nodes
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Top Contributors
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-light">
            Live infrastructure rankings evaluated by real-time code velocity and commit weight.
          </p>
        </div>

        {/* Dynamic Sorted Grid Mapping */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {topNodes.map((node, idx) => {
            const isRankOne = idx === 0;

            return (
              <motion.div
                key={node.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  borderColor: isRankOne ? "var(--logo)" : "var(--success)",
                  backgroundColor: "var(--gradient-surface)" 
                }}
                className={`p-6 md:p-8 rounded-[var(--radius-md)] border bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between transition-all duration-[var(--transition-fast)] group ${
                  isRankOne ? "border-[var(--logo)]/40 shadow-[0_0_30px_rgba(var(--logo-rgb),0.03)]" : "border-[var(--card-border)]"
                }`}
              >
                {/* Visual Accent Flairs for Top Performer */}
                {isRankOne && (
                  <div className="absolute top-0 right-0 bg-[var(--logo)] text-[var(--bg)] text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-bl">
                    SYSTEM_LEAD // 01
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[9px] text-[var(--disabled)] font-bold select-none">
                      NODE_RANK // 0{idx + 1}
                    </span>
                    {!isRankOne && (
                      <span className="font-mono text-[9px] text-[var(--success)] font-bold tracking-widest bg-[var(--glass)] border border-[var(--card-border)] px-2 py-0.5 rounded">
                        ACTIVE_NODE
                      </span>
                    )}
                  </div>

                  {/* Profile Layout */}
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={node.avatar_url} 
                      alt={`${node.login} profile avatar telemetry`} 
                      className={`w-14 h-14 rounded-full border bg-[var(--bg)] object-cover transition-transform duration-300 group-hover:scale-105 ${
                        isRankOne ? "border-[var(--logo)]" : "border-[var(--card-border)]"
                      }`}
                    />
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors">
                        {node.login}
                      </h3>
                      <p className="text-xs font-mono text-[var(--subtitle)] mt-0.5">
                        {node.type} Subsystem Node
                      </p>
                    </div>
                  </div>

                  {/* Contributions Telemetry Display */}
                  <div className="mt-4 p-4 rounded bg-[var(--glass)] border border-[var(--card-border)] group-hover:border-[var(--border)] transition-colors">
                    <div className="text-[9px] font-mono font-bold tracking-wider text-[var(--muted)] uppercase mb-1">
                      Verified System Contributions
                    </div>
                    <div className="text-2xl font-black font-mono tracking-tight text-[var(--heading)] flex items-baseline gap-2">
                      {node.contributions}
                      <span className="text-xs font-light text-[var(--subtitle)] font-sans">commits / additions</span>
                    </div>
                  </div>
                </div>

                {/* External Routing Actions */}
                <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-4 mt-8">
                  <span className="text-[9px] font-mono text-[var(--disabled)] uppercase tracking-wider">
                    ID // {node.id}
                  </span>
                  <a 
                    href={node.html_url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[var(--muted)] hover:text-[var(--heading)] transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    inspect_profile
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}