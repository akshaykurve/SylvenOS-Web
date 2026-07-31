"use client";

import { featuredProjects, ProjectData } from "@/lib/type";
import { motion, Variants } from "motion/react";


interface FeaturedProjectsProps {
  projects: featuredProjects[];
}

export default function FeaturedProjects({
  projects = [],
}: FeaturedProjectsProps) {
  const gridVariants:Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 75, damping: 15 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)] ">
      {/* Structural Architectural Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:5rem] opacity-[0.02] pointer-events-none" />
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[140px] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto  relative z-10">
        {/* Header Block - Refactored for Centered Text Alignments */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4"
          >
            // Active Repositories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg text-[var(--subtitle)] font-light leading-relaxed"
          >
            Explore core open-source components built by the community.
            Filtered, optimized, and mapped directly out of our active
            repository logs.
          </motion.p>
        </div>

        {/* Dynamic Fallback if Empty */}
        {projects.length === 0 ? (
          <div className="p-12 text-center rounded-[var(--radius-md)] border border-dashed border-[var(--border)] bg-[var(--glass)] font-mono text-xs text-[var(--muted)]">
            No repositories found with the theme topic "featured". Tag your
            GitHub repositories to display them here.
          </div>
        ) : (
          /* Structured Project Layout Grid */
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch "
            className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: "var(--primary)",
                  boxShadow: "var(--shadow-md)",
                }}
                className="p-6 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
              >
                {/* >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: "var(--primary)", boxShadow: "var(--shadow-md)" }}
                className="p-6 md:p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between group transition-all duration-[var(--transition-fast)]"
              > */}
                <div>
                  {/* Card Header (Logo & Core Meta Status) */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <img
                      src={project.avatarUrl}
                      alt={`${project.name} identifier`}
                      className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--card-border)] object-cover"
                    />
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm border ${
                          project.status === "Active"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : project.status === "Beta"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-neutral-500/10 text-neutral-400 border-neutral-500/20"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-[9px] font-mono text-[var(--disabled)] uppercase">
                        Diff: {project.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Identification & Typography */}
                  <h3 className="text-xl font-black text-[var(--heading)] mb-2 tracking-tight group-hover:text-[var(--hover-text)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--subtitle)] font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technical Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--glass)] border border-[var(--card-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-Layer Telemetry Specs */}
                <div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[var(--card-border)] pt-4 mb-6 font-mono text-[10px]">
                    <div>
                      <span className="text-[var(--disabled)] block">
                        UPDATED //
                      </span>
                      <span className="text-[var(--subtitle)] font-bold">
                        {project.lastUpdated}
                      </span>
                    </div>
                    <div>
                      <span className="text-[var(--disabled)] block">
                        OPEN_ISSUES //
                      </span>
                      <span
                        className={`font-bold ${project.openIssues > 0 ? "text-[var(--warning)]" : "text-[var(--success)]"}`}
                      >
                        {project.openIssues} Issues
                      </span>
                    </div>
                  </div>

                  {/* Actions/Interconnections Array */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 text-center font-mono text-xs font-bold rounded-[var(--radius-sm)] bg-[var(--glass)] hover:bg-[var(--surface)] border border-[var(--card-border)] hover:border-[var(--border)] transition-colors"
                    >
                      Repository
                    </a>
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 text-center font-mono text-xs font-bold rounded-[var(--radius-sm)] bg-[var(--glass)] hover:bg-[var(--primary)] border border-[var(--card-border)] hover:border-transparent hover:text-white transition-all"
                    >
                      Docs
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
