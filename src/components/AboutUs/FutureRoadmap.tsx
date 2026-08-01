"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function FutureRoadmap() {
  // Master container tracking loop for scroll-linked line physics
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progression explicitly relative to the timeline bounds
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to the height of the active timeline indicator bar
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "COMPLETED",
      statusColor: "var(--success)",
      tag: "SYS_INIT // 01",
      items: [
        { name: "Website", desc: "Launch the primary landing platform and layout architecture." },
        { name: "GitHub Organization", desc: "Establish secure source-control protocols, access teams, and template repos." },
        { name: "Initial Contributors", desc: "Assemble the foundational group of core maintainers and system engineers." },
        { name: "First Projects", desc: "Deploy initial utility repositories and package frameworks into public view." }
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth",
      status: "ACTIVE",
      statusColor: "var(--info)",
      tag: "SCALE_UP // 02",
      items: [
        { name: "Documentation", desc: "Standardize extensive code wikis, setup guides, and structural architectural schemas." },
        { name: "Community Onboarding", desc: "Deploy systematic contributor pipelines to remove zero-context friction." },
        { name: "Mentorship", desc: "Form inner peer-review circles matching veteran leads directly with incoming builders." },
        { name: "Events", desc: "Initialize regular technical community syncs, live code audits, and core review roundtables." }
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "UPCOMING",
      statusColor: "var(--primary)",
      tag: "DIST_NODE // 03",
      items: [
        { name: "Large-scale Projects", desc: "Architect decentralized applications, intensive backend services, and modular cross-framework dependencies." },
        { name: "Global Contributors", desc: "Scale the geographic baseline to open round-the-clock structural engineering reviews." },
        { name: "Hackathons", desc: "Launch targeted sprint challenges to incentivize high-velocity open source building." },
        { name: "Partnerships", desc: "Coordinate dependencies with secondary ecosystem groups and production environments." }
      ],
    },
    {
      phase: "Phase 4",
      title: "Vision",
      status: "LONG_TERM",
      statusColor: "var(--logo)",
      tag: "EX_HORIZON // 04",
      items: [
        { name: "Learning Platform", desc: "Deploy an absolute interactive training sandbox powered entirely by open tooling frameworks." },
        { name: "Open-Source Accelerator", desc: "Establish an incubation track designed to fund and push student tools into independent products." },
        { name: "Scholarships", desc: "Provide direct financial resources to sustained engineering contributors to enable focused development." },
        { name: "Developer Ecosystem", desc: "Mature the complete Sylven architecture into a globally recognized benchmark for open code excellence." }
      ],
    },
  ];

  return (
    <section className="relative px-6 md:px-[8%] overflow-hidden py-[140px] text-[var(--text)]">
      {/* Background Horizon Vector Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:16rem] opacity-[0.02] pointer-events-none" />
      
      {/* Ambient Depth Glow Overlay */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[160px] opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--info) 0%, transparent 80%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-28 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Strategic Track
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Future Roadmap
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            We don’t believe in idle development. Sylven OS operates with a hyper-focused trajectory, moving systematically from foundational architecture to a globally distributed engineering ecosystem.
          </motion.p>
        </div>

        {/* Scroll Activated Timeline Wrapper */}
        <div ref={timelineRef} className="relative pl-6 sm:pl-12 max-w-4xl mx-auto space-y-24">
          
          {/* Base Structural Track Line (Background) */}
          <div className="absolute left-[3px] sm:left-[7px] top-4 bottom-4 w-[2px] bg-[var(--card-border)] opacity-30" />

          {/* Dynamic Scroll-Linked Active Fill Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[3px] sm:left-[7px] top-4 w-[2px] bg-gradient-to-b from-[var(--success)] via-[var(--info)] via-[var(--primary)] to-[var(--logo)] origin-top z-10"
          />

          {roadmapPhases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ type: "spring", stiffness: 60, damping: 16 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Timeline Dynamic Node Pin */}
              <div className="absolute -left-[27px] sm:-left-[49px] top-2 z-20 flex items-center justify-center">
                <motion.div 
                  className="w-[10px] h-[10px] sm:w-4 sm:h-4 rounded-full bg-[var(--bg)] border-2 transition-all duration-[var(--transition-fast)] group-hover:scale-125"
                  style={{ borderColor: phase.statusColor, boxShadow: `0 0 10px ${phase.statusColor}40` }}
                />
              </div>

              {/* Phase Title Area (4 Columns) */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[var(--disabled)] block mb-1">
                    {phase.tag}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[var(--muted)]">{phase.phase}</span>
                    <h3 className="text-xl md:text-2xl font-black text-[var(--heading)] tracking-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Status Indicator Badge */}
                <span 
                  className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[var(--radius-sm)] border bg-[var(--glass)] whitespace-nowrap"
                  style={{ color: phase.statusColor, borderColor: `${phase.statusColor}30` }}
                >
                  // {phase.status}
                </span>
              </div>

              {/* Phase Deliverables Cards Grid (8 Columns) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {phase.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="p-5 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-[var(--transition-fast)] hover:border-[var(--border)] hover:bg-[var(--gradient-surface)] flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[var(--heading)] tracking-tight mb-1 group-hover:text-[var(--hover-text)]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[var(--subtitle)] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Micro-indicator metric edge line */}
                    <div className="w-6 h-[1px] bg-[var(--card-border)] mt-4 group-hover:bg-[var(--disabled)]" />
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}