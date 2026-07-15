"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinTheMovement() {
  // Kinetic presentation animations for high-impact closing state
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)] flex items-center justify-center">
      {/* Structural Network Grid Lines Mapping to the Center */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.02] pointer-events-none" />
      
      {/* Hyper-Concentrated Core Ignition Glow behind text stack */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] id:w-[800px] h-[400px] rounded-full filter blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--logo) 0%, var(--primary) 40%, var(--info) 80%, transparent 100%)" }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 md:p-16 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-lg)] backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Top-Right and Bottom-Left Framing Coordinate Elements */}
          <div className="absolute top-4 right-4 font-mono text-[9px] text-[var(--disabled)] tracking-widest hidden sm:block">
            INIT_SEQUENCE // GO_LIVE
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[var(--disabled)] tracking-widest hidden sm:block">
            MESH_STATUS // OPERATIONAL
          </div>

          {/* Section Indicator Badge */}
          <motion.span
            variants={elementVariants}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6 shadow-[var(--shadow-sm)]"
          >
            // Finalization Node
          </motion.span>

          {/* Core Closing Catchphrase Statement */}
          <motion.h2
            variants={elementVariants}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--heading)] leading-none max-w-2xl mb-6"
          >
            Join the Movement
          </motion.h2>

          {/* Explanatory Structural Context Prose */}
          <motion.p
            variants={elementVariants}
            className="text-lg md:text-xl text-[var(--body)] font-medium max-w-2xl leading-relaxed mb-4"
          >
            Every great open-source community started with a small group of people willing to build something meaningful.
          </motion.p>

          <motion.p
            variants={elementVariants}
            className="text-sm md:text-base text-[var(--subtitle)] font-light max-w-xl leading-relaxed mb-10"
          >
            Join us in creating software, sharing knowledge, and helping developers grow. Let's construct the open infrastructure of tomorrow, one branch at a time.
          </motion.p>

          {/* Highly Interactive CTA Actions Block */}
          <motion.div 
            variants={elementVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Secondary Option: Explore Projects */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "var(--hover-bg)", borderColor: "var(--border)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] text-sm font-bold tracking-wide text-[var(--text)] transition-colors duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-sm)] backdrop-blur-md"
            >
              Explore Projects
            </motion.button>

            {/* Primary High-Octane Action Option: Become a Contributor */}
            <motion.button
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "var(--primary-hover)",
                boxShadow: "var(--glow-primary)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--primary)] text-sm font-bold tracking-wide text-white transition-all duration-[var(--transition-fast)] focus:outline-none shadow-[var(--shadow-md)]"
            >
              <Link href="https://github.com/sylvenos" target="_blank">Become a Contributor</Link>
            </motion.button>
          </motion.div>

          {/* Micro Telemetry Inline Loop Indicator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent mt-12" />
          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-[var(--disabled)]">
            <span className="w-1 h-1 rounded-full bg-[var(--logo)] animate-ping" />
            Active clusters synchronized. Sync code bases on connection initialization.
          </div>

        </motion.div>
      </div>
    </section>
  );
}