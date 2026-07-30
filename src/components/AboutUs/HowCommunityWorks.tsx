"use client";

import { motion, Variants } from "motion/react";

export default function HowCommunityWorks() {
  // Cascading animation settings for the timeline progression
  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        damping: 15,
      },
    },
  };

  const dynamicLineVariants:Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const steps = [
    {
      title: "Join",
      description: "Hop into our ecosystem. Introduce yourself, state your core tech stack interest, and connect with the engineering group.",
      badge: "Step 01",
      color: "var(--info)",
    },
    {
      title: "Explore Projects",
      description: "Browse our active production codebases. From full-stack apps to developer utilities, choose a project that excites you.",
      badge: "Step 02",
      color: "var(--info)",
    },
    {
      title: "Read Documentation",
      description: "Review system architecture specs and local setup files. Getting clear layout context prevents code collision early on.",
      badge: "Step 03",
      color: "var(--primary)",
    },
    {
      title: "Pick an Issue",
      description: "Claim an unassigned issue or pitch an entirely new feature branch. We map distinct milestones for all experience levels.",
      badge: "Step 04",
      color: "var(--primary)",
    },
    {
      title: "Contribute",
      description: "Write clean, tested code. Push your branch, run local checks, and watch your changes take shape within a shared repo environment.",
      badge: "Step 05",
      color: "var(--logo)",
    },
    {
      title: "Review",
      description: "Submit a Pull Request. Engage in objective code optimization feedback loops with peers to refine and protect build quality.",
      badge: "Step 06",
      color: "var(--logo)",
    },
    {
      title: "Merge",
      description: "Your PR passes all test validations and gets merged. Your features are officially deployed into live production systems.",
      badge: "Step 07",
      color: "var(--success)",
    },
    {
      title: "Become a Maintainer",
      description: "As your contributions stack up, step into ecosystem leadership. Review incoming code, manage features, and mentor new arrivals.",
      badge: "Step 08",
      color: "var(--success)",
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] py-[120px] text-[var(--text)]">
      {/* Structural Ambient Background Flow Element */}
      <div 
        className="absolute bottom-0 right-10 w-[700px] h-[450px] rounded-full filter blur-[150px] opacity-[0.1] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--primary) 0%, transparent 80%)" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Onboarding Pipeline
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            How the Community Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Wondering how to make your first contribution? We removed the guesswork with a transparent, clear track designed to take you from initial setup to core deployment lead.
          </motion.p>
        </div>

        {/* Vertical Structured Journey Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10"
        >
          {/* Central Structural Connecting Timeline Backbone */}
          <div className="absolute left-[3px] sm:left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--info)] via-[var(--primary)] via-[var(--logo)] to-[var(--success)] opacity-20 origin-top">
            <motion.div variants={dynamicLineVariants} className="w-full h-full bg-inherit" />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 p-5 sm:p-6 rounded-[var(--radius-md)] border border-transparent hover:border-[var(--card-border)] hover:bg-[var(--gradient-surface)] hover:shadow-[var(--shadow-sm)] transition-all duration-[var(--transition-fast)]"
            >
              {/* Timeline Connector Bullet Pin */}
              <div className="absolute -left-[27px] sm:-left-[37px] top-8 z-20 flex items-center justify-center">
                <div 
                  className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full bg-[var(--bg)] border-2 transition-transform duration-[var(--transition-fast)] group-hover:scale-125"
                  style={{ borderColor: step.color, boxShadow: `0 0 8px ${step.color}` }}
                />
              </div>

              {/* Left Segment: Badge & Title */}
              <div className="md:col-span-4 flex flex-row md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                <span 
                  className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  style={{ color: step.color }}
                >
                  {step.badge}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[var(--heading)] tracking-tight group-hover:text-[var(--hover-text)] transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Right Segment: Explanatory Context */}
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro Summary Footer Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--glass)] font-mono text-xs text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
            Ecosystem open for public initialization branches.
          </div>
        </motion.div>

      </div>
    </section>
  );
}