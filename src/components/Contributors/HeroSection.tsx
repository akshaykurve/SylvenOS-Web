"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  // Animation settings for structural impact on landing
  const textContainerVariants = {
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

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 14 } },
  };

  const networkContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delayChildren: 0.3, staggerChildren: 0.08 },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    },
  };

  // Mock community node points mapping out coordinates, initials, and domain assignments
  const contributorNodes = [
    { id: 1, top: "15%", left: "20%", initial: "JD", role: "Dev // Core API", color: "var(--info)" },
    { id: 2, top: "10%", left: "65%", initial: "AM", role: "ML // Vision Model", color: "var(--success)" },
    { id: 3, top: "42%", left: "10%", initial: "SR", role: "UX // Design Tokens", color: "var(--logo)" },
    { id: 4, top: "35%", left: "48%", initial: "KP", role: "DevOps // CI Optimization", color: "var(--warning)" },
    { id: 5, top: "30%", left: "85%", initial: "TL", role: "Sec // Access Audit", color: "var(--danger)" },
    { id: 6, top: "72%", left: "25%", initial: "HL", role: "Doc // Tech Architecture", color: "var(--subtitle)" },
    { id: 7, top: "78%", left: "68%", initial: "OW", role: "QA // E2E Validations", color: "var(--primary)" },
    { id: 8, top: "60%", left: "90%", initial: "MX", role: "Dev // Edge Compute", color: "var(--success)" },
    { id: 9, top: "58%", left: "42%", initial: "SY", role: "Sys // Kernel Matrix", color: "var(--info)" },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen px-6 md:px-[8%] py-[100px]  text-[var(--text)] flex items-center">
      {/* Background Microstructural System Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.02] pointer-events-none" />
      
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
            className="self-start text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 shadow-[var(--shadow-sm)]"
          >
            // Identity Matrix Initialization
          </motion.span>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--heading)] leading-[1.05] mb-6"
          >
            Meet the People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--info)] via-[var(--primary)] to-[var(--logo)]">Sylven OS</span>
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-lg md:text-xl text-[var(--subtitle)] font-light leading-relaxed mb-10 max-w-xl"
          >
            Every project, document, design, and idea is made possible by contributors from around the community.
          </motion.p>

          <motion.div variants={textItemVariants}>
            <motion.button
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "var(--primary-hover)",
                boxShadow: "var(--glow-primary)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-sm)] bg-[var(--primary)] text-sm font-bold tracking-wide text-white transition-all duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-md)]"
            >
              <Link href="https://github.com/SylvenOS/" target="_blank">Become a Contributor</Link>
            </motion.button>
          </motion.div>

          {/* Micro telemetry sync feedback line */}
          <motion.div 
            variants={textItemVariants}
            className="mt-12 flex items-center gap-3 font-mono text-[10px] text-[var(--disabled)]"
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
          <svg className="absolute inset-0 w-full h-full opacity-20 text-[var(--border)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="15%" x2="48%" y2="35%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="20%" y1="15%" x2="10%" y2="42%" stroke="currentColor" strokeWidth="1" />
            <line x1="65%" y1="10%" x2="48%" y2="35%" stroke="currentColor" strokeWidth="1" />
            <line x1="65%" y1="10%" x2="85%" y2="30%" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="10%" y1="42%" x2="25%" y2="72%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="48%" y1="35%" x2="42%" y2="58%" stroke="currentColor" strokeWidth="1.5" />
            <line x1="48%" y1="35%" x2="68%" y2="78%" stroke="currentColor" strokeWidth="1" />
            <line x1="85%" y1="30%" x2="90%" y2="60%" stroke="currentColor" strokeWidth="1" />
            <line x1="42%" y1="58%" x2="25%" y2="72%" stroke="currentColor" strokeWidth="1" />
            <line x1="42%" y1="58%" x2="68%" y2="78%" stroke="currentColor" strokeWidth="1.5" />
            <line x1="90%" y1="60%" x2="68%" y2="78%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Map Nodes Dynamically Over the Grid Coordinate Layout */}
          {contributorNodes.map((node) => (
            <motion.div
              key={node.id}
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
                style={{ borderColor: node.color, color: node.title === "System" ? "var(--heading)" : "var(--text)" }}
              >
                {node.initial}
              </div>

              {/* Dynamic Micro-Tooltip Component */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded bg-[var(--heading)] border border-[var(--card-border)] text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--bg)] opacity-0 scale-95 group-hover/node:opacity-100 group-hover/node:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-[var(--shadow-md)]">
                {node.role}
              </div>
            </motion.div>
          ))}

          {/* Central Structural Coordinate Scope Label overlay */}
          <div className="absolute bottom-3 right-4 font-mono text-[9px] text-[var(--disabled)] tracking-widest uppercase select-none">
            Ecosystem_Map // Cluster_09_Active
          </div>
        </motion.div>

      </div>
    </section>
  );
}