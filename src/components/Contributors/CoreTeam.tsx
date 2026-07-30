// components/DynamicCoreTeam.tsx
"use client";

import { motion, Variants } from "motion/react";

// Extend the contract to accommodate the real display name
export interface EnrichedGitHubMember {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string | null; // 👈 Real display name from /users/{username}
}

interface DynamicCoreTeamProps {
  members: EnrichedGitHubMember[];
  orgDescription: any;
}

export default function DynamicCoreTeam({
  members = [],
  orgDescription,
}: DynamicCoreTeamProps) {
  const containerVariants:Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[100px] border-t border-[var(--card-border)]  transition-colors duration-[var(--transition-normal)]">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--info)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]">
            // Active Cluster Identities
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Our Team
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed">
            {orgDescription ||
              "Verified operational nodes synced directly from the organization registry pipeline."}
          </p>
        </div>

        {/* Minimal Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center items-stretch max-w-5xl mx-auto"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{
                y: -3,
                borderColor: "var(--info)",
                backgroundColor: "var(--card-hover-bg)",
                boxShadow: "var(--shadow-md)",
              }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-5 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex items-center gap-4 transition-all duration-[var(--transition-fast)] group relative overflow-hidden"
            >
              {/* 1. Identity Image Asset on the Left */}
              <img
                src={member.avatar_url}
                alt={`${member.name || member.login} profile portrait`}
                className="w-14 h-14 rounded-full border border-[var(--card-border)] bg-[var(--bg)]  group-hover:border-[var(--info)] transition-all duration-[var(--transition-normal)] object-cover shadow-[var(--shadow-sm)] flex-shrink-0"
              />

              {/* 2. Content & Control Wrapper on the Right */}
              <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
                {/* Text Block - Left Aligned */}
                <div className="min-w-0 text-left">
                  <h3 className="text-sm md:text-base font-bold tracking-tight text-[var(--heading)] truncate transition-colors group-hover:text-[var(--hover-text)]">
                    {member.name || member.login}
                  </h3>
                  <p className="text-xs font-mono text-[var(--muted)] tracking-wide mt-0.5 truncate">
                    @{member.login}
                  </p>
                </div>

                {/* Small GitHub Action Trigger */}
                <a
                  href={member.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--glass)] text-[var(--muted)] hover:text-[var(--heading)] hover:border-[var(--info)] transition-all duration-[var(--transition-fast)] shadow-[var(--shadow-sm)] hover:scale-105 flex-shrink-0"
                  aria-label={`Open ${member.login}'s GitHub profile`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.068.069-.068 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
