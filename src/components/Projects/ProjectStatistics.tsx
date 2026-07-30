"use client";

import { motion, Variants } from "motion/react";

interface ProjectStatisticsProps {
  projectCount: number;
  repoCount: number;
  contributorCount: number;
}

export default function ProjectStatistics({ 
  projectCount = 1, 
  repoCount = 1, 
  contributorCount = 0 
}: ProjectStatisticsProps) {
  
  // Cascading block animation settings
  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
      },
    },
  };

  const metrics = [
    {
      label: "Projects",
      value: projectCount,
      description: "Active high-level initiatives initialized.",
      color: "var(--primary)",
      meta: "INIT // MAIN",
    },
    {
      label: "Repositories",
      value: repoCount,
      description: "Public codebases tracked live via Octokit.",
      color: "var(--info)",
      meta: "GIT // HEAD",
    },
    {
      label: "Contributors",
      value: contributorCount,
      description: contributorCount === 0 
        ? "Be the very first to leave a mark on our repositories." 
        : "Unique developers actively driving ecosystem code expansion.",
      color: "var(--logo)",
      meta: "GENESIS // MESH_NODES",
      highlight: contributorCount === 0, // Pulse callout if still empty
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[100px]  text-[var(--text)]">
      {/* Background Matrix Intercept Blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:6rem] opacity-[0.02] pointer-events-none" />
      
      {/* Absolute Minimal Center Point Shadow Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] rounded-full filter blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 100%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block emphasizing Truth & Integrity */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--logo)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Real-Time Telemetry
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black tracking-tight text-[var(--heading)] mb-4"
          >
            Project Statistics
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed"
          >
            No padded marketing metrics. No faked engagement logs. Fueled directly by GitHub metadata—we transparently track our platform growth.
          </motion.p>
        </div>

        {/* Clean Metrics Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-12"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: metric.color }}
              className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-sm)] backdrop-blur-sm relative overflow-hidden flex flex-col justify-between transition-all duration-[var(--transition-fast)]"
            >
              {/* Dynamic status line highlight on hover */}
              <div 
                className="absolute top-0 left-0 w-full h-[2px] opacity-20"
                style={{ backgroundColor: metric.color }}
              />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[9px] tracking-wider text-[var(--disabled)] uppercase">
                    {metric.meta}
                  </span>
                  {metric.highlight && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--logo)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--logo)]" />
                    </span>
                  )}
                </div>

                <div className="font-mono text-5xl md:text-6xl font-black tracking-tighter text-[var(--heading)] mb-2">
                  {metric.value}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--heading)] mb-1 tracking-tight">
                  {metric.label}
                </h4>
                <p className="text-xs text-[var(--subtitle)] font-light leading-normal">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Steady Momentum Progress Subtext Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-[var(--radius-sm)] border border-dashed border-[var(--border)] bg-[var(--glass)] text-center max-w-xl mx-auto flex items-center justify-center gap-3"
        >
          <span className="flex h-2 w-2 shrink-0 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--heading)]">
            Growing Every Week
          </span>
          <span className="text-xs text-[var(--subtitle)] font-light border-l border-[var(--card-border)] pl-3">
            Watch the infrastructure expand step-by-step.
          </span>
        </motion.div>

      </div>
    </section>
  );
}