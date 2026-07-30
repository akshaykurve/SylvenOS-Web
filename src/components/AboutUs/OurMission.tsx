"use client";

import { motion, Variants } from "motion/react";

export default function OurMission() {
  // Graceful block entry variants
  const containerVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 15,
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[100px] text-[var(--text)]">
      {/* Background Decorative Tech Coordinates */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:100%_4rem] opacity-[0.02] pointer-events-none" />

      {/* Radiant Aura Behind the Card */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full filter blur-[140px] opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--info) 100%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Simple Premium Card Frame */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-lg p-8 md:p-14 overflow-hidden"
        >
          {/* Subtle Corner Glow Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--info)] to-transparent opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.span
                variants={textVariants}
                className="self-start text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6"
              >
                // Core Directives
              </motion.span>

              <motion.h2
                variants={textVariants}
                className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
              >
                Our Mission
              </motion.h2>

              <motion.p
                variants={textVariants}
                className="text-lg md:text-2xl text-[var(--body)] font-medium leading-relaxed tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading)] via-[var(--body)] to-[var(--subtitle)]"
              >
                To create an open-source ecosystem where developers from every background can learn through building meaningful software, collaborate with others, and freely share knowledge with the community.
              </motion.p>
            </div>

            {/* Right Column: Strong Abstract Ecosystem Visual (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center relative w-full min-h-[260px]">
              
              {/* Outer Geometric Target Ring */}
              <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] border border-[var(--card-border)] rounded-full opacity-30 flex items-center justify-center pointer-events-none">
                <div className="w-[70%] h-[70%] border border-dashed border-[var(--primary)] rounded-full opacity-40 animate-[spin_60s_linear_infinite]" />
              </div>

              {/* Central Core Visual Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-[200px] h-[200px] rounded-[var(--radius-md)] bg-[var(--glass)] border border-[var(--card-border)] shadow-[var(--shadow-md)] flex items-center justify-center group transition-all duration-[var(--transition-fast)]"
              >
                {/* SVG Visual Representation: Concentric Expansion of Shared Knowledge Nodes */}
                <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-[var(--primary)]">
                  {/* Central Source Node */}
                  <circle cx="50" cy="50" r="5" fill="var(--logo)" className="shadow-[var(--glow-logo)]" />
                  <circle cx="50" cy="50" r="12" stroke="var(--logo)" strokeWidth="1" fill="none" className="animate-ping opacity-20" style={{ animationDuration: '3s' }} />

                  {/* Interconnected Growth Paths */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    d="M50,50 L25,30 M50,50 L75,30 M50,50 L50,80 M50,50 L20,65 M50,50 L80,65"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Peripheral Expansion Nodes */}
                  <circle cx="25" cy="30" r="3.5" fill="var(--info)" />
                  <circle cx="75" cy="30" r="3.5" fill="var(--primary)" />
                  <circle cx="50" cy="80" r="4" fill="var(--logo)" />
                  <circle cx="20" cy="65" r="3" fill="var(--border)" />
                  <circle cx="80" cy="65" r="3" fill="var(--border)" />

                  {/* Translucent Data Wave Overlays */}
                  <circle cx="50" cy="50" r="28" stroke="var(--card-border)" strokeWidth="1" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="var(--card-border)" strokeWidth="0.75" strokeDasharray="4 2" fill="none" />
                </svg>

                {/* Floating Metrics Badge Layer */}
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-sm)] text-[10px] font-mono tracking-widest text-[var(--logo)] font-bold shadow-[var(--shadow-sm)] uppercase">
                  Global Mesh
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}