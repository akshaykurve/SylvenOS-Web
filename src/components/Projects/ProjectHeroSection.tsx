"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  // Stagger configurations for standard typography entry
  const textContainerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const textItemVariants:Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 16 },
    },
  };

  // Repository graph nodes
  const repositories = [
    {
      id: "core",
      name: "SylvenOS-Web/main",
      status: "live",
      lang: "TypeScript, Next.js",
      langColor: "bg-amber-500",
      position: "top-[15%] left-[10%]",
      delay: 0.1,
    },
    {
      id: "ui",
      name: "SylvenOS/G-Secure",
      status: "PLANNED",
      lang: "Kotlin",
      langColor: "bg-blue-500",
      position: "top-[42%] right-[8%]",
      delay: 0.3,
    },
    {
      id: "cli",
      name: "SylvenOS/Themify",
      status: "PLANNED",
      lang: "PLANNED",
      langColor: "bg-cyan-400",
      position: "bottom-[18%] left-[15%]",
      delay: 0.5,
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02] pointer-events-none" />
      
      {/* Pristine Ambient Glow Fields */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[500px] rounded-full filter blur-[140px] opacity-15 pointer-events-none transform translate-x-1/3"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--logo) 70%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging */}
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
              // Ecosystem Index
            </motion.span>
            
            <motion.h1
              variants={textItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--heading)] leading-[1.1] mb-6"
            >
              Explore Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading)] via-[var(--primary)] to-[var(--logo)]">
                Projects
              </span>
            </motion.h1>
            
            <motion.p
              variants={textItemVariants}
              className="text-base sm:text-lg text-[var(--subtitle)] font-light leading-relaxed max-w-xl mb-10"
            >
              Discover open-source software built by the Sylven OS community. From developer tools to production-ready applications, every project is designed to solve real problems while helping contributors grow.
            </motion.p>
            
            <motion.div 
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
             <Link 
    href="#projects"
    className="inline-block px-8 py-4 rounded-[var(--radius-sm)] bg-[var(--primary)] hover:bg-[var(--hover-bg)] text-white font-bold text-sm tracking-wide shadow-[var(--shadow-md)] hover:shadow-[var(--glow-primary)] border border-transparent hover:border-[var(--primary)] transition-all duration-[var(--transition-fast)] text-center"
  >
    Browse Projects
  </Link>

  <Link 
    href="/contributors"
    className="inline-block px-8 py-4 rounded-[var(--radius-sm)] bg-[var(--glass)] hover:bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--border)] text-[var(--heading)] font-bold text-sm tracking-wide transition-all duration-[var(--transition-fast)] text-center"
  >
    Start Contributing
  </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean, Structured High-Fidelity Repository Canvas */}
          <div className="lg:col-span-6 w-full flex items-center justify-center relative min-h-[420px] md:min-h-[480px]">
            
            {/* The Outer Graphical Canvas Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[540px] aspect-[4/3] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-md relative overflow-hidden p-6 group"
            >

              {/* Crisp SVG Geometric Connection Paths Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Connection Path 1: Core to UI (Clean Segmented Orthogonal Line) */}
                <path d="M 230 100 L 380 100 L 380 210" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* Connection Path 2: Core to CLI */}
                <path d="M 180 145 L 180 320 L 220 320" fill="none" stroke="var(--info)" strokeWidth="1.5" />
                {/* Connection Path 3: CLI to UI */}
                <path d="M 330 350 L 380 350 L 380 270" fill="none" stroke="var(--logo)" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Pulsing Data Signal Wave Packets traveling smoothly across paths */}
                <motion.circle r="3" fill="var(--logo)"
                  animate={{ pathLength: [0, 1], cx: [230, 380, 380], cy: [100, 100, 210] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle r="2.5" fill="var(--info)"
                  animate={{ pathLength: [0, 1], cx: [180, 180, 220], cy: [145, 320, 320] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />
              </svg>

              {/* Perfectly Rendered Floating Component Cards Layer */}
              <div className="absolute inset-0 z-10 w-full h-full font-sans">
                {repositories.map((repo) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: repo.delay, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -4, borderColor: "var(--primary)", boxShadow: "var(--shadow-md)" }}
                    className={`absolute ${repo.position} w-[240px] p-4 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg)] shadow-[var(--shadow-sm)] flex flex-col gap-2 transition-colors duration-[var(--transition-fast)]`}
                  >
                    {/* Component Header Block */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[var(--disabled)]">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                        </svg>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider">{repo.status}</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                    </div>

                    {/* Repository Identifier */}
                    <h4 className="text-xs font-bold text-[var(--heading)] tracking-tight truncate">
                      {repo.name}
                    </h4>

                    {/* Meta Language Tag Footprint */}
                    <div className="flex items-center justify-between mt-1 pt-2 border-t border-[var(--card-border)] opacity-80">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                        <span className="text-[10px] font-mono text-[var(--subtitle)]">{repo.lang}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-3 h-1.5 rounded-sm bg-[var(--card-border)]" />
                        <span className="w-1.5 h-1.5 rounded-sm bg-[var(--card-border)]" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Simulated Clean Figma-Style Live Collaborator Cursor */}
                <motion.div 
                  initial={{ x: 320, y: 280 }}
                  animate={{ 
                    x: [320, 240, 150, 320], 
                    y: [280, 140, 260, 280] 
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute pointer-events-none flex flex-col gap-1 items-start"
                >
                  {/* Modern Precision Arrow Cursor Vector */}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V13L4 9.5L8.5 14L10.5 12L6 7.5L11 6.5L0 0Z" fill="var(--primary)" />
                  </svg>
                  {/* Clean Operator Pill Name */}
                  <div className="bg-[var(--primary)] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                    open_source
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}