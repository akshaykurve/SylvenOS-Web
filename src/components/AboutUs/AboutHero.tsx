"use client";

import { motion ,Variants } from "motion/react";

export default function HeroSection() {
  // Cascading entry animation variants for text components
  const elementVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        type: "spring" as const,
        stiffness: 70,
        damping: 14,
      },
    }),
  };

  // Floating animations for background or ecosystem nodes
  const floatAnimation = (delay: number, yOffset: number): Variants => ({
  animate: {
    y: [0, yOffset, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse", 
      ease: "easeInOut", 
      delay: delay,
    },
  },
});

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen px-6 md:px-[8%] py-[100px]  text-[var(--text)] flex items-center">
      {/* Background Tech Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.04] pointer-events-none" />

      {/* Radial Gradient Backdrops for Depth */}
      <div 
        className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-25 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 75%)" }}
      />
      <div 
        className="absolute bottom-1/4 right-[-5%] w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Tagline Badge */}
          <motion.span
            custom={0}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="self-start text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 flex items-center gap-2 shadow-[var(--shadow-sm)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--logo)] animate-pulse" />
            Initialize Sylven Ecosystem
          </motion.span>

          {/* Core Branding Heading */}
          <motion.h1
            custom={1}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--heading)] leading-[1.05] mb-6"
          >
            About <span className="text-(--primary)">Sylven OS</span>
          </motion.h1>

          {/* Mission Subtitle */}
          <motion.p
            custom={2}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="text-base md:text-xl text-[var(--subtitle)] font-normal max-w-2xl leading-relaxed mb-10"
          >
            A community-driven open-source organization where developers learn, build real-world software, and educate others through collaboration.
          </motion.p>

          {/* Action Callouts */}
          <motion.div
            custom={3}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "var(--btn-primary-hover)", boxShadow: "var(--glow-primary)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-md)] bg-[var(--btn-primary-bg)] text-white font-semibold transition-all duration-[var(--transition-fast)] tracking-wide flex items-center justify-center gap-2"
            >
              <span>Explore Repositories</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "var(--btn-secondary-hover)", borderColor: "var(--border)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-md)] bg-[var(--btn-secondary-bg)] border border-[var(--input-border)] text-[var(--muted)] hover:text-[var(--hover-text)] font-semibold transition-all duration-[var(--transition-fast)] tracking-wide flex items-center justify-center gap-2"
            >
              <span>Join Community</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Abstract Ecosystem Conceptual Artwork */}
        <div className="lg:col-span-5 w-full flex items-center justify-center relative min-h-[380px] md:min-h-[500px]">
          
          {/* Outer Rotating Sacred/Tech Geometric Boundary (Seal of Creation vibe) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] border border-dashed border-[var(--card-border)] rounded-full opacity-40 pointer-events-none flex items-center justify-center"
          >
            <div className="w-[85%] h-[85%] border border-dotted border-[var(--primary)] rounded-full opacity-60" />
            <div className="w-[60%] h-[60%] border border-[var(--border)] opacity-20 rounded-full" />
          </motion.div>

          {/* Central Interactive Network Graphic Container */}
          <motion.div 
            variants={floatAnimation(0, 7)}
            initial="animate"
            animate="animate"
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-md flex items-center justify-center overflow-hidden"
          >
            
            {/* Embedded Interactive SVG representing interconnected repository nodes & organic growth */}
            <svg viewBox="0 0 200 200" className="w-full h-full p-6 text-[var(--primary)]">
              {/* Background connections / Forest branches */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M100,160 L100,100 M100,100 L60,70 M100,100 L140,70 M60,70 L40,40 M60,70 L80,40 M140,70 L120,40 M140,70 L160,40" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
              />

              {/* Glowing Interconnected Project Nodes */}
              {/* Root Node */}
              <motion.circle 
                cx="100" cy="160" r="6" 
                className="fill-[var(--surface)] stroke-[var(--logo)] stroke-[3]"
                style={{ filter: "drop-shadow(var(--glow-logo))" }}
                whileHover={{ scale: 1.3 }}
              />

              {/* Core Convergence Node */}
              <motion.circle 
                cx="100" cy="100" r="8" 
                className="fill-[var(--bg)] stroke-[var(--primary)] stroke-[3]"
                style={{ filter: "drop-shadow(var(--glow-primary))" }}
                whileHover={{ scale: 1.3 }}
              />

              {/* Branch Node Left */}
              <motion.circle cx="60" cy="70" r="5" className="fill-[var(--surface)] stroke-[var(--border)] stroke-[2]" whileHover={{ scale: 1.3 }} />
              {/* Branch Node Right */}
              <motion.circle cx="140" cy="70" r="5" className="fill-[var(--surface)] stroke-[var(--border)] stroke-[2]" whileHover={{ scale: 1.3 }} />

              {/* Terminal Contributor Leaves (Leaf/Repository Nodes) */}
              {[
                { cx: 40, cy: 40, color: "var(--logo)" },
                { cx: 80, cy: 40, color: "var(--info)" },
                { cx: 120, cy: 40, color: "var(--success)" },
                { cx: 160, cy: 40, color: "var(--primary)" }
              ].map((node, index) => (
                <motion.g key={index} whileHover={{ scale: 1.2 }}>
                  <circle cx={node.cx} cy={node.cy} r="4" fill={node.color} />
                  <circle cx={node.cx} cy={node.cy} r="8" stroke={node.color} strokeWidth="1" fill="none" className="animate-ping opacity-40" style={{ animationDuration: `${2 + index}s` }} />
                </motion.g>
              ))}
            </svg>

            {/* Inner Floating Hologram Label Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[var(--glass)] border border-[var(--card-border)] rounded-[var(--radius-sm)] p-3 backdrop-blur-md flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">Active Workspace</span>
                <span className="text-xs font-bold text-[var(--heading)]">sylven-core-mesh</span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-[var(--primary)] border border-[var(--surface)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--logo)] border border-[var(--surface)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--info)] border border-[var(--surface)]" />
              </div>
            </div>
          </motion.div>

          {/* Extra Ambient Floating Ecosystem Node Orbs */}
          <motion.div 
            variants={floatAnimation(0.5, 5)} initial="animate" animate="animate"
            className="absolute top-[12%] right-[15%] w-4 h-4 rounded-full bg-[var(--logo)] shadow-[var(--glow-logo)] hidden md:block"
          />
          <motion.div 
            variants={floatAnimation(1.8, 8)} initial="animate" animate="animate"
            className="absolute bottom-[15%] left-[10%] w-3 h-3 rounded-full bg-[var(--info)] shadow-[0_0_12px_rgba(56,189,248,0.4)] hidden md:block"
          />
        </div>

      </div>
    </section>
  );
}