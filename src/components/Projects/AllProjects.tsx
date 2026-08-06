"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ProjectData } from "@/lib/type";


interface ProjectExplorerProps {
  projects: ProjectData[];
}

export default function ProjectExplorer({ projects = [] }: ProjectExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("recently-updated");

  const statuses = ["All", "Active", "Planning", "Completed", "Archived"];
  const technologies = ["All", "React", "Next.js", "Node", "Go", "Python", "Rust"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredAndSortedProjects = useMemo(() => {
    let output = [...projects];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      output = output.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techStack.some((t) => t.toLowerCase().includes(query))
      );
    }

    if (selectedStatus !== "All") {
      output = output.filter((p) => p.status.toLowerCase() === selectedStatus.toLowerCase());
    }

    if (selectedTech !== "All") {
      output = output.filter((p) =>
        p.techStack.some((t) => t.toLowerCase() === selectedTech.toLowerCase())
      );
    }

    if (selectedDifficulty !== "All") {
      output = output.filter((p) => p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }

    output.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "most-contributors":
          return b.contributorsCount - a.contributorsCount;
        case "alphabetical":
          return a.name.localeCompare(b.name);
        case "recently-updated":
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

    return output;
  }, [projects, searchQuery, selectedStatus, selectedTech, selectedDifficulty, sortBy]);

  return (
    <section id="projects" className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Segment */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4">
            // MESH_EXPLORER_V5
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Ecosystem Registry
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed">
            Query, scope, and route directly into individual project parameters via repo links or specification files.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="p-6 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-sm)] mb-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="relative md:col-span-8">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--card-border)] text-sm font-sans focus:outline-none focus:border-[var(--primary)] text-[var(--text)] placeholder-[var(--disabled)] transition-all"
              />
              <svg className="absolute left-3.5 top-3.5 w-4 h-4 text-[var(--disabled)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="md:col-span-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--card-border)] text-sm font-mono focus:outline-none focus:border-[var(--primary)] text-[var(--text)] transition-all appearance-none cursor-pointer"
              >
                <option value="recently-updated">RECENTLY UPDATED</option>
                <option value="newest">NEWEST ARCHITECTURES</option>
                <option value="most-contributors">MOST CONTRIBUTORS</option>
                <option value="alphabetical">ALPHABETICAL (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-[var(--card-border)] text-left">
            <div>
              <label className="block font-mono text-[10px] text-[var(--disabled)] uppercase mb-2 tracking-wider">Status Framework</label>
              <div className="flex flex-wrap gap-1.5">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-medium border transition-all ${
                      selectedStatus === status
                        ? "bg-[var(--primary)] text-white border-transparent shadow-[var(--shadow-sm)]"
                        : "bg-[var(--bg)] text-[var(--subtitle)] border-[var(--card-border)] hover:border-[var(--border)]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[var(--disabled)] uppercase mb-2 tracking-wider">Stack Scope</label>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-medium border transition-all ${
                      selectedTech === tech
                        ? "bg-[var(--info)] text-white border-transparent shadow-[var(--shadow-sm)]"
                        : "bg-[var(--bg)] text-[var(--subtitle)] border-[var(--card-border)] hover:border-[var(--border)]"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[var(--disabled)] uppercase mb-2 tracking-wider">Run-Level Difficulty</label>
              <div className="flex flex-wrap gap-1.5">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-medium border transition-all ${
                      selectedDifficulty === diff
                        ? "bg-[var(--logo)] text-white border-transparent shadow-[var(--shadow-sm)]"
                        : "bg-[var(--bg)] text-[var(--subtitle)] border-[var(--card-border)] hover:border-[var(--border)]"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Card Grid */}
<motion.div 
  layout 
  className={`grid gap-6 md:gap-8 items-stretch w-full ${
    filteredAndSortedProjects.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : filteredAndSortedProjects.length === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }`}
>
  <AnimatePresence mode="popLayout">
    {filteredAndSortedProjects.map((project) => (
      <motion.div
        layout
        key={project.name}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        whileHover={{ y: -5, borderColor: "var(--primary)", boxShadow: "var(--shadow-md)" }}
        className="p-6 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between items-center text-center group transition-all duration-[var(--transition-fast)]"
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-3 mb-5 w-full">
            <img
              src={project.avatarUrl}
              alt={`${project.name} logo`}
              className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--card-border)] object-cover shadow-[var(--shadow-sm)]"
            />
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm border ${
                project.status === "Active" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                project.status === "Planning" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                project.status === "Completed" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                "bg-neutral-500/10 text-neutral-400 border-neutral-500/20"
              }`}>
                {project.status}
              </span>
              <span className="text-[9px] font-mono text-[var(--disabled)] uppercase bg-[var(--glass)] border border-[var(--card-border)] px-2 py-0.5 rounded-sm">
                {project.difficulty}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-black text-[var(--heading)] mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors w-full truncate">
            {project.name}
          </h3>
          <p className="text-xs text-[var(--subtitle)] font-light leading-relaxed mb-5 line-clamp-2 max-w-xs mx-auto">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-1 mb-5 w-full">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--glass)] border border-[var(--card-border)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[9px] font-mono text-[var(--disabled)] px-2 py-0.5 rounded bg-[var(--glass)]">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-2 border-t border-[var(--card-border)] pt-4 mb-4 font-mono text-[10px] text-center">
            <div>
              <span className="text-[var(--disabled)] block">LANG</span>
              <span className="text-[var(--subtitle)] font-bold truncate block">{project.language}</span>
            </div>
            <div>
              <span className="text-[var(--disabled)] block">STARS</span>
              <span className="text-[var(--subtitle)] font-bold">{project.stars}</span>
            </div>
            <div>
              <span className="text-[var(--disabled)] block">CONTRB</span>
              <span className="text-[var(--subtitle)] font-bold">{project.contributorsCount}</span>
            </div>
          </div>

          {/* Core CTAs Routing Matrix */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[var(--card-border)]">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 text-center font-mono text-[10px] font-bold rounded border border-[var(--card-border)] hover:bg-[var(--glass)] hover:text-white transition-all uppercase"
            >
              Repo ↗
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="py-2.5 px-2 text-center font-mono text-[10px] font-black rounded bg-[var(--primary)] hover:bg-opacity-90 text-white transition-all uppercase tracking-wider"
            >
              Details ➔
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>
        {filteredAndSortedProjects.length === 0 && (
          <div className="p-16 text-center rounded-[var(--radius-md)] border border-dashed border-[var(--border)] bg-[var(--glass)] font-mono text-xs text-[var(--disabled)] max-w-xl mx-auto mt-6">
            No active repository records found matching the current configuration matrices.
          </div>
        )}

      </div>
    </section>
  );
}