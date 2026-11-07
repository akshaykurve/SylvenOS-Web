"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";



const MotionLink = motion.create(Link);

export interface HeroMember {
  login: string;
  name: string | null;
  html_url: string;
}

// Fixed constellation slots (position + colour) and the lines between them.
const SLOTS = [
  { top: "15%", left: "20%", color: "var(--info)" },
  { top: "10%", left: "65%", color: "var(--success)" },
  { top: "42%", left: "10%", color: "var(--logo)" },
  { top: "35%", left: "48%", color: "var(--warning)" },
  { top: "30%", left: "85%", color: "var(--danger)" },
  { top: "72%", left: "25%", color: "var(--subtitle)" },
  { top: "78%", left: "68%", color: "var(--accent)" },
  { top: "60%", left: "90%", color: "var(--success)" },
  { top: "58%", left: "42%", color: "var(--info)" },
];

// [from, to, strokeWidth, dash] using SLOTS indices
const EDGES: [number, number, number, string | undefined][] = [
  [0, 3, 1, "4 4"],
  [0, 2, 1, undefined],
  [1, 3, 1, undefined],
  [1, 4, 1, "2 2"],
  [2, 5, 1, "4 4"],
  [3, 8, 1.5, undefined],
  [3, 6, 1, undefined],
  [4, 7, 1, undefined],
  [8, 5, 1, undefined],
  [8, 6, 1.5, undefined],
  [7, 6, 1, "4 4"],
];

/** "Akshay Kurve" -> "AK"; "gauravasync" -> "GA" */
function getInitials(member: HeroMember) {
  const words = (member.name ?? "").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  const base = words[0] ?? member.login;
  return base.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
}

export default function HeroSection({ members = [] }: { members?: HeroMember[] }) {
  // Animation settings for structural impact on landing
  const textContainerVariants:Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.12,
      },
    },
  };

  const textItemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 14 } },
  };

  const networkContainerVariants:Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delayChildren: 0.3, staggerChildren: 0.08 },
    },
  };

  const nodeVariants:Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    },
  };

  // Real community members placed on the constellation slots
  const contributorNodes = members.slice(0, SLOTS.length).map((member, i) => ({
    id: member.login,
    ...SLOTS[i],
    initial: getInitials(member),
    label: member.name?.trim() || member.login,
    href: member.html_url,
  }));

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen px-6 md:px-[max(8%,calc((100%-80rem)/2))] py-14 md:py-24 overflow-hidden text-[var(--text)] flex items-center">
      
      {/* Dynamic Deep Multi-layered Ambient Glow Vector */}
      <div 
        className="absolute top-1/4 right-[-10%] w-[700px] h-[700px] rounded-full filter blur-[160px] opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--info) 50%, transparent 100%)" }}
      />
      <div 
        className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] rounded-full filter blur-[140px] opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Mission Narrative Context Block (5 Columns) */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col justify-center text-left"
        >
          <motion.span
            variants={textItemVariants}
            className="self-start text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 shadow-[var(--shadow-sm)]"
          >
            Identity Matrix Initialization
          </motion.span>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--heading)] leading-[1.05] mb-6"
          >
            Meet the People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--info)] via-[var(--primary)] to-[var(--logo)]">Sylven OS</span>
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-lg md:text-xl text-[var(--subtitle)] leading-relaxed mb-10 max-w-xl"
          >
            Every project, document, design, and idea is made possible by contributors from around the community.
          </motion.p>

          <motion.div variants={textItemVariants}>
            <MotionLink href="https://github.com/SylvenOS/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-sm)] bg-[var(--primary)] text-sm font-bold tracking-wide text-white transition-all duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-md)] hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--glow-primary)]">
              Become a Contributor
            </MotionLink>
          </motion.div>

          {/* Micro telemetry sync feedback line */}
          <motion.div 
            variants={textItemVariants}
            className="mt-12 flex items-center gap-3 font-mono text-xs text-[var(--disabled)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
            Ecosystem Core: 100% decentralized human-driven engineering
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Constellation Contributor Mesh (6 Columns) */}
        <motion.div
          variants={networkContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 relative w-full h-[450px] md:h-[550px] rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden shadow-[var(--shadow-lg)] group"
        >
          {/* Constellation Structural Vector Paths Grid */}
          <svg aria-hidden="true" focusable="false"
            className="absolute inset-0 w-full h-full text-[var(--border)] pointer-events-none"
            style={{ opacity: "var(--network-opacity)" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {EDGES.filter(([a, b]) => a < contributorNodes.length && b < contributorNodes.length).map(([a, b, w, dash]) => (
              <line
                key={`${a}-${b}`}
                x1={SLOTS[a].left}
                y1={SLOTS[a].top}
                x2={SLOTS[b].left}
                y2={SLOTS[b].top}
                stroke="currentColor"
                strokeWidth={w}
                strokeDasharray={dash}
              />
            ))}
          </svg>

          {/* Map Nodes Dynamically Over the Grid Coordinate Layout */}
          {contributorNodes.map((node) => (
            <motion.a
              key={node.id}
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${node.label} on GitHub`}
              variants={nodeVariants}
              whileHover={{ scale: 1.12, zIndex: 50 }}
              style={{ top: node.top, left: node.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node"
            >
              {/* Outer Pulsing Indicator Aura ring */}
              <div 
                className="absolute inset-[-6px] rounded-full opacity-0 group-hover/node:opacity-20 transition-opacity animate-ping pointer-events-none"
                style={{ backgroundColor: node.color }}
              />

              {/* Central Core Identity Sphere Element */}
              <div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--bg)] border-2 flex items-center justify-center font-mono text-xs font-bold tracking-tighter transition-all shadow-[var(--shadow-sm)] select-none group-hover/node:border-[var(--text)]"
                style={{ borderColor: node.color, color: "var(--text)",}}
              >
                {node.initial}
              </div>

              {/* Dynamic Micro-Tooltip Component */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 max-sm:hidden px-2.5 py-1 rounded bg-[var(--heading)] border border-[var(--card-border)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--bg)] opacity-0 scale-95 group-hover/node:opacity-100 group-hover/node:scale-100 group-focus-visible/node:opacity-100 group-focus-visible/node:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-[var(--shadow-md)]">
                {node.label}
              </div>
            </motion.a>
          ))}

          {/* Central Structural Coordinate Scope Label overlay */}
          <div className="absolute bottom-3 right-4 font-mono text-xs text-[var(--disabled)] tracking-widest uppercase select-none">
            Ecosystem_Map // Cluster_09_Active
          </div>
        </motion.div>

      </div>
    </section>
  );
}