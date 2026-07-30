"use client";

import { motion, Variants } from "motion/react";

export default function OurStory() {
  // Animation configurations for elements gracefully rising on scroll
  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 16,
      },
    },
  };

  const lineVariants:Variants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Structural Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full filter blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, var(--logo) 60%, transparent 100%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4 shadow-[var(--shadow-sm)]"
          >
            // The Manifesto
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Why Sylven OS Exists
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-normal leading-relaxed"
          >
            Sylven OS was never created to become another GitHub organization or coding community. It was created to build an ecosystem where developers don't just consume knowledge—they create it, share it, and help others grow through real-world collaboration.
          </motion.p>
        </div>

        {/* The Evolutionary Philosophy Journey */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 items-stretch"
        >
          {/* Central Chronological Connecting Backbone (Visible on Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[var(--info)] via-[var(--primary)] to-[var(--logo)] opacity-25 origin-top -translate-x-1/2">
            <motion.div variants={lineVariants} className="w-full h-full bg-inherit" />
          </div>

          {/* PHASE 01: Learn */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "var(--info)", boxShadow: "0 4px 20px rgba(56, 189, 248, 0.1)" }}
              className="p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-md)] backdrop-blur-md relative overflow-hidden transition-all duration-[var(--transition-fast)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--info)]" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-9 h-9 rounded-full bg-[var(--bg)] border-2 border-[var(--info)] flex items-center justify-center text-[var(--info)] font-mono text-sm font-bold shadow-[var(--shadow-sm)]">
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--heading)] tracking-tight">Learn</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--subtitle)] leading-relaxed font-light">
                Every developer starts somewhere. Courses, tutorials, books, and documentation provide the foundation, but knowledge alone doesn't create experienced engineers. Learning is only the first step of the journey.
              </p>
            </motion.div>
          </div>
          
          {/* Spatial structural offsets for asymmetrical split layout */}
          <div className="hidden md:block md:col-span-2" />
          <div className="hidden md:block md:col-span-5" />

          {/* Spatial structural offsets */}
          <div className="hidden md:block md:col-span-5" />
          <div className="hidden md:block md:col-span-2" />

          {/* PHASE 02: Build */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "var(--primary)", boxShadow: "var(--glow-primary)" }}
              className="p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-md)] backdrop-blur-md relative overflow-hidden transition-all duration-[var(--transition-fast)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-9 h-9 rounded-full bg-[var(--bg)] border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] font-mono text-sm font-bold shadow-[var(--shadow-sm)]">
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--heading)] tracking-tight">Build</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--subtitle)] leading-relaxed font-light">
                Real growth happens when developers solve actual problems, collaborate on production-ready projects, review code, and experience the challenges that no tutorial can simulate. Building transforms knowledge into experience.
              </p>
            </motion.div>
          </div>

          {/* PHASE 03: Educate */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "var(--logo)", boxShadow: "var(--glow-logo)" }}
              className="p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-md)] backdrop-blur-md relative overflow-hidden transition-all duration-[var(--transition-fast)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--logo)]" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-9 h-9 rounded-full bg-[var(--bg)] border-2 border-[var(--logo)] flex items-center justify-center text-[var(--logo)] font-mono text-sm font-bold shadow-[var(--shadow-sm)]">
                  03
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--heading)] tracking-tight">Educate</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--subtitle)] leading-relaxed font-light">
                Every contributor has something valuable to share. By documenting solutions, mentoring others, writing technical content, and contributing back to open source, today's learners become tomorrow's teachers—creating a cycle that strengthens the entire ecosystem.
              </p>
            </motion.div>
          </div>
          
          {/* Final padding layout offsets */}
          <div className="hidden md:block md:col-span-2" />
          <div className="hidden md:block md:col-span-5" />
        </motion.div>

        {/* Premium Self-Sustaining Mission Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
          className="mt-20 p-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--glass)] shadow-[var(--shadow-lg)] backdrop-blur-md text-center max-w-4xl mx-auto relative overflow-hidden group"
        >
          {/* Decorative Internal Flow Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--info)] via-[var(--primary)] to-[var(--logo)] opacity-70" />
          
          <p className="text-base md:text-xl font-bold text-[var(--heading)] tracking-wide leading-relaxed max-w-3xl mx-auto">
            Sylven OS exists to create a self-sustaining ecosystem where developers continuously{" "}
            <span className="text-[var(--info)] font-black">Learn</span>,{" "}
            <span className="text-[var(--primary)] font-black">Build</span>, and{" "}
            <span className="text-[var(--logo)] font-black">Educate</span>
            —turning individual growth into collective progress.
          </p>
        </motion.div>

      </div>
    </section>
  );
}