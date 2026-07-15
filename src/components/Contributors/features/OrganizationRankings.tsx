// components/OrganizationRankings.tsx
"use client";

import { motion } from "framer-motion";
import { AggregatedContributor } from "@/lib/type";

interface OrganizationRankingsProps {
  rankedContributors: AggregatedContributor[];
}

export default function OrganizationRankings({ rankedContributors = [] }: OrganizationRankingsProps) {
  const podiumNodes = rankedContributors.slice(0, 3);
  // console.log("🚀 ~ OrganizationRankings ~ podiumNodes:", podiumNodes)
  const secondaryNodes = rankedContributors.slice(3);

  // Maps your semantic design tokens directly to the leadership tiers
  const getRankColor = (rank: number) => {
    if (rank === 1) return "var(--logo)";
    if (rank === 2) return "var(--info)";
    if (rank === 3) return "var(--primary)";
    return "var(--card-border)";
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[100px] transition-colors duration-[var(--transition-normal)]">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Module Header Area using Typography Tokens */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--success)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-[var(--radius-sm)] inline-block mb-4 shadow-[var(--shadow-sm)]">
            // Global Ledger Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Organization Rankings
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-light">
            Top Contributors
          </p>
        </div>

        {/* 1. Podium Grid Layout (Top 3 Users Redirection Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-12">
          {podiumNodes.map((node) => {
            const isFirst = node.rank === 1;
            const accentColor = getRankColor(node.rank);

            return (
              <motion.a
                href={node.html_url}
                target="_blank"
                rel="noreferrer"
                key={node.id}
                whileHover={{ 
                  y: -6, 
                  backgroundColor: "var(--card-hover-bg)", 
                  borderColor: isFirst ? "var(--logo)" : "var(--border)",
                  boxShadow: isFirst ? "var(--glow-logo)" : "var(--glow-primary)"
                }}
                className={`p-6 rounded-[var(--radius-md)] border bg-[var(--card-bg)] backdrop-blur-md relative flex flex-col items-center text-center transition-all duration-[var(--transition-fast)] block group ${
                  isFirst 
                    ? "md:order-2 border-[var(--logo)] md:py-10 shadow-[var(--shadow-lg)]" 
                    : node.rank === 2 
                      ? "md:order-1 border-[var(--card-border)] shadow-[var(--shadow-md)]" 
                      : "md:order-3 border-[var(--card-border)] shadow-[var(--shadow-md)]"
                }`}
              >
                {/* Dynamic Token Floating Rank Badge */}
                <span 
                  className="absolute top-4 left-4 font-mono text-[10px] font-bold px-2 py-0.5 rounded border" 
                  style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: "var(--glass)" }}
                >
                  RANK_0{node.rank}
                </span>

                {/* Profile Portrait Wrapper */}
                <div className="relative mb-4 mt-2">
                  <img 
                    src={node.avatar_url} 
                    alt={`${node.login} avatar token`} 
                    className="w-16 h-16 rounded-full border-2 bg-[var(--bg)] object-cover transition-colors" 
                    style={{ borderColor: accentColor }} 
                  />
                  {isFirst && <span className="absolute -top-5 right-5  text-base animate-bounce">👑</span>}
                </div>

                {/* Username Header targeting hover systems */}
                <h3 className="text-base font-bold text-[var(--heading)] mb-4 group-hover:text-[var(--primary)] transition-colors flex items-center gap-1.5">
                  {node.name ?? node.login}
                  <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-[var(--transition-fast)] text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>

                {/* Total Counter Score Box */}
                <div className="w-full py-2 px-4 rounded-[var(--radius-sm)] bg-[var(--input-bg)] border border-[var(--card-border)] font-mono text-center transition-colors">
                  <div className="text-[9px] text-[var(--disabled)] uppercase tracking-wider mb-0.5">Total Core Commits</div>
                  <div className="text-lg font-black text-[var(--heading)]">{node.totalContributions}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* 2. List Table Row Layout (Remaining Population Layer) */}
        {secondaryNodes.length > 0 && (
          <div className="border border-[var(--card-border)] rounded-[var(--radius-md)] bg-[var(--card-bg)] divide-y divide-[var(--card-border)] overflow-hidden shadow-[var(--shadow-md)]">
            {secondaryNodes.map((node) => (
              <a
                href={node.html_url}
                target="_blank"
                rel="noreferrer"
                key={node.id}
                className="p-4 flex items-center justify-between gap-4 hover:bg-[var(--card-hover-bg)] transition-colors duration-[var(--transition-fast)] group block"
              >
                {/* Contributor Matrix Left Deck */}
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-8 font-mono text-xs font-bold text-[var(--disabled)] text-center">#{node.rank}</span>
                  <img src={node.avatar_url} alt={node.login} className="w-9 h-9 rounded-full border border-[var(--card-border)] bg-[var(--bg)] object-cover" />
                  <span className="text-sm font-bold text-[var(--body)] group-hover:text-[var(--primary)] transition-colors truncate flex items-center gap-2">
                    {node.login}
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-[var(--transition-fast)] text-[var(--disabled)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>

                {/* Score Counter Metric Right Deck */}
                <div className="text-right font-mono flex-shrink-0">
                  <div className="text-[9px] text-[var(--disabled)] uppercase tracking-wider">Contributions</div>
                  <div className="text-sm font-black text-[var(--heading)]">{node.totalContributions}</div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}