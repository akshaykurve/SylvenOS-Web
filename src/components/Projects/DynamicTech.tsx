"use client";

import { useMemo, useState } from "react";
import { m } from "motion/react";
import { TECH_TAXONOMY } from "@/config/taxonomy"; // Import your local map
import { ProjectData } from "@/lib/type";




interface DynamicTechStackProps {
  projects: ProjectData[];
}

export default function DynamicTechStack({ projects }: DynamicTechStackProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Dynamic Pipeline Aggregator
  const aggregatedStats = useMemo(() => {
    const counts: Record<string, number> = {};
    const categories: Record<string, string[]> = {
      Frontend: [],
      Backend: [],
      Database: [],
      DevOps: [],
      Design: [],
      "More Technologies": [], // Catch-all for any stack not in TECH_TAXONOMY — every tech counts equally
    };

    projects.forEach((project) => {
      project.techStack.forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;

        // Dynamic lookup against the decoupled map
        const category = TECH_TAXONOMY[tech] || "More Technologies";
        
        // Dynamic initialization for any custom category strings introduced later
        if (!categories[category]) {
          categories[category] = [];
        }

        if (!categories[category].includes(tech)) {
          categories[category].push(tech);
        }
      });
    });
    // console.log("🚀 ~ DynamicTechStack ~ projects:", projects)

    // Sort items by active usage frequency
    Object.keys(categories).forEach((cat) => {
      categories[cat].sort((a, b) => counts[b] - counts[a]);
    });

    return { counts, categories };
  }, [projects]);

  // Extract categories that contain 1 or more active technologies
  const activeCategories = useMemo(() => {
    return Object.keys(aggregatedStats.categories).filter(
      (cat) => aggregatedStats.categories[cat].length > 0
    );
  }, [aggregatedStats]);

  return (
    <section className="relative px-6 md:px-[max(8%,calc((100%-80rem)/2))] py-16 md:py-28  overflow-hidden text-[var(--text)]">

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Component Header Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--card-border)] pb-8 mb-12 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase block mb-3">
              DYNAMIC_TAXONOMY_ROUTING
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--heading)] mb-3">
              System Architecture Matrix
            </h2>
            <p className="text-xs md:text-sm text-[var(--subtitle)] leading-relaxed">
              Real-time core dependency distribution mapped via synchronized engine schemas. Every technology used across our projects is represented here — none are excluded.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <button
              onClick={() => setSelectedCategory("ALL")}
              aria-pressed={selectedCategory === "ALL"}
              className={`px-3 py-2 min-h-10 rounded-sm uppercase tracking-wider transition-all border ${
                selectedCategory === "ALL"
                  ? "bg-[var(--primary)] text-white border-transparent font-bold"
                  : "bg-[var(--glass)] text-[var(--disabled)] border-[var(--card-border)] hover:text-[var(--text)]"
              }`}
            >
              All Modules
            </button>
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
                className={`px-3 py-2 min-h-10 rounded-sm uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[var(--primary)] text-white border-transparent font-bold"
                    : "bg-[var(--glass)] text-[var(--disabled)] border-[var(--card-border)] hover:text-[var(--text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {activeCategories
            .filter((cat) => selectedCategory === "ALL" || selectedCategory === cat)
            .map((category) => (
              <m.div
                layout
                key={category}
                className="p-6 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col justify-between group transition-all duration-300 hover:border-[var(--border)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--heading)] uppercase">
                      {category}
                    </span>
                    <span className="font-mono text-xs text-[var(--disabled)] uppercase bg-[var(--glass)] px-2 py-0.5 rounded border border-[var(--card-border)]">
                      {aggregatedStats.categories[category].length} Nodes
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {aggregatedStats.categories[category].map((tech) => {
                      const frequency = aggregatedStats.counts[tech];
                      return (
                        <div
                          key={tech}
                          className="flex items-center justify-between p-2.5 rounded border border-[var(--card-border)] bg-[var(--glass)] hover:bg-[var(--bg)] transition-colors duration-200 group/item"
                        >
                          <span className="text-xs text-[var(--subtitle)] group-hover/item:text-[var(--text)] font-medium transition-colors">
                            {tech}
                          </span>
                          <div className="flex items-center gap-2 font-mono text-xs">
                            <span className="text-[var(--accent)] font-bold bg-[var(--primary)]/10 px-1.5 py-0.5 rounded border border-[var(--primary)]/20">
                              {frequency} {frequency === 1 ? "Repo" : "Repos"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[var(--card-border)] font-mono text-xs text-[var(--disabled)] flex justify-between items-center">
                  <span>LAYER_STATUS</span>
                  <span className="text-green-400 uppercase font-bold tracking-wider">● SCHEMA_SYNCED</span>
                </div>
              </m.div>
            ))}
        </div>

      </div>
    </section>
  );
}