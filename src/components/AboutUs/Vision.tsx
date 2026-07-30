"use client";

import { motion, Variants } from "motion/react";

export default function OurVision() {
  // Animation configuration for smooth forward-looking entry effects
  const containerVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 16,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[120px] text-[var(--text)]">
      {/* Background Grid Accent with Perspective-like Horizon lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:8rem] opacity-[0.03] pointer-events-none" />
      
      {/* Deep North Star Glow Ring Layer */}
      <div 
        className="absolute -top-1/4 right-[10%] w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-15 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--info) 0%, var(--primary) 50%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Vision Architectural Graphic (5 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex items-center justify-center relative w-full min-h-[300px]">
            
            {/* Pulsing Target / Signal Rings Mapping the Horizon */}
            <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] border border-[var(--card-border)] rounded-full opacity-20 flex items-center justify-center">
              <div className="w-[80%] h-[80%] border border-dotted border-[var(--info)] rounded-full opacity-30 animate-[spin_80s_linear_infinite]" />
              <div className="w-[50%] h-[50%] border border-dashed border-[var(--logo)] rounded-full opacity-20 animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            {/* Central Future Horizon Node Framework */}
            <motion.div
              whileHover={{ y: -6, borderColor: "var(--info)" }}
              className="relative w-[220px] h-[220px] rounded-[var(--radius-lg)] bg-[var(--gradient-surface)] border border-[var(--card-border)] shadow-[var(--shadow-lg)] backdrop-blur-md flex items-center justify-center group transition-all duration-[var(--transition-normal)]"
            >
              {/* SVG Map pointing Up and Forward (Ecosystem Ascension) */}
              <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 text-[var(--info)]">
                {/* Constellation Paths / Horizon Matrix */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  d="M15,80 L50,25 M85,80 L50,25 M50,80 L50,25 M25,50 L75,50"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />

                {/* Grounding Base Layer Nodes */}
                <circle cx="15" cy="80" r="4" fill="var(--primary)" />
                <circle cx="50" cy="80" r="4" fill="var(--primary)" />
                <circle cx="85" cy="80" r="4" fill="var(--primary)" />

                {/* Intermediate Connected Milestones */}
                <circle cx="25" cy="50" r="3" fill="var(--border)" />
                <circle cx="75" cy="50" r="3" fill="var(--border)" />

                {/* The Apex Destination Node (The Vision Cap) */}
                <g className="animate-pulse">
                  <circle cx="50" cy="25" r="6" fill="var(--logo)" style={{ filter: "drop-shadow(var(--glow-logo))" }} />
                  <circle cx="50" cy="25" r="14" stroke="var(--logo)" strokeWidth="0.75" fill="none" />
                </g>
              </svg>

              {/* Realtime Floating Coordinates Anchor */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-[var(--disabled)] tracking-widest">
                SYS_SCALE // 0.26
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Content (7 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center">
            
            <motion.span
              variants={itemVariants}
              className="self-start text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 shadow-[var(--shadow-sm)]"
            >
              // The Horizon
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
            >
              Our Vision
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-3xl font-bold tracking-tight text-[var(--heading)] leading-tight mb-8"
            >
              To become one of the world's most respected open-source communities focused on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--info)] to-[var(--primary)]">collaborative learning</span>,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--logo)]">practical engineering</span>, and{" "}
              <span className="text-[var(--logo)]">accessible education</span>.
            </motion.p>

            <div className="h-[1px] w-full bg-gradient-to-r from-[var(--card-border)] to-transparent mb-8" />

            {/* Strategic Pillars Supporting the Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--info)] mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div>
                  <h4 className="text-sm font-bold text-[var(--heading)] mb-1">Global Respected Footprint</h4>
                  <p className="text-xs text-[var(--subtitle)] font-light leading-relaxed">Setting elite benchmarks for clear architectural standards and documentation in open source.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--logo)] mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <div>
                  <h4 className="text-sm font-bold text-[var(--heading)] mb-1">Inclusive Infrastructure</h4>
                  <p className="text-xs text-[var(--subtitle)] font-light leading-relaxed">Ensuring any developer, anywhere, has a direct path from writing basic scripts to leading complex software releases.</p>
                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}