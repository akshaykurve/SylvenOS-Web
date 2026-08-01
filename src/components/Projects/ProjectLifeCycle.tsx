"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LifecycleStage {
  id: string;
  phase: string;
  badgeText: string;
  colorTheme: {
    text: string;
    bg: string;
    border: string;
    glow: string;
  };
  description: string;
  telemetry: string;
  impact: string;
  apiSurface: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "idea",
    phase: "01 // IDEA",
    badgeText: "Idea",
    colorTheme: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "rgba(6, 182, 212, 0.15)",
    },
    description: "Conceptual architectures and preliminary research specs. Open for early architectural debates, RFCs, and foundational community feedback loops.",
    telemetry: "STABILITY // EXPERIMENTAL",
    impact: "CONTRB // ARCHITECTURE DEBATE",
    apiSurface: "MUTABLE_MOCK_DATA"
  },
  {
    id: "planning",
    phase: "02 // PLANNING",
    badgeText: "Planning",
    colorTheme: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    description: "Scope definition, internal API design mockups, and foundational milestone mapping. Core engineering cells are establishing structural patterns.",
    telemetry: "STABILITY // PRE-ALPHA",
    impact: "CONTRB // INTERFACE DESIGN",
    apiSurface: "SPEC_DRAFT_PENDING"
  },
  {
    id: "development",
    phase: "03 // DEVELOPMENT",
    badgeText: "Development",
    colorTheme: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "rgba(245, 158, 11, 0.15)",
    },
    description: "Active code generation, aggressive branch syncing, and test suite composition. High engine velocity with frequent breaking changes upstream.",
    telemetry: "STABILITY // UNSTABLE",
    impact: "CONTRB // CORE FEATURE BUILD",
    apiSurface: "FLUID_BREAKING"
  },
  {
    id: "beta",
    phase: "04 // BETA",
    badgeText: "Beta",
    colorTheme: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "rgba(168, 85, 247, 0.15)",
    },
    description: "Feature-complete release candidates undergoing localized integration tests. Safe for developer sandboxes and early evaluation architectures.",
    telemetry: "STABILITY // TESTING RCs",
    impact: "CONTRB // EDGE CASE EDGE",
    apiSurface: "LOCKING_STABILIZED"
  },
  {
    id: "stable",
    phase: "05 // STABLE",
    badgeText: "Stable",
    colorTheme: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "rgba(34, 197, 94, 0.15)",
    },
    description: "Production-ready, battle-tested runtime environments. Strict semantic versioning rules apply. Backed by automated backward compatibility tests.",
    telemetry: "STABILITY // PRODUCTION SAFE",
    impact: "CONTRB // PLUGINS & EXTENSIONS",
    apiSurface: "IMMUTABLE_SEMVER"
  },
  {
    id: "maintenance",
    phase: "06 // MAINTENANCE",
    badgeText: "Maintenance",
    colorTheme: {
      text: "text-zinc-400",
      bg: "bg-zinc-500/10",
      border: "border-zinc-500/20",
      glow: "rgba(113, 113, 122, 0.15)",
    },
    description: "Feature development frozen. The codebase remains highly optimal, receiving priority patches for dependencies and zero-day threat variables.",
    telemetry: "STABILITY // LEGACY SECURE",
    impact: "CONTRB // PATCH LIFECYCLE",
    apiSurface: "DEPRECATION_WARNINGS"
  },
  {
    id: "archived",
    phase: "07 // ARCHIVED",
    badgeText: "Archived",
    colorTheme: {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      glow: "rgba(239, 68, 68, 0.15)",
    },
    description: "Read-only blueprint tracking. The codebase stands frozen as an educational artifact or historical asset. No issues or pull requests will process.",
    telemetry: "STABILITY // DEPRECATED",
    impact: "CONTRB // READ ONLY HUB",
    apiSurface: "TERMINATED_RETIRED"
  }
];

export default function ProjectLifecycle() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(4); // Default to "Stable"
  const currentStage = LIFECYCLE_STAGES[activeStageIndex];

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Visual Engineering Grid Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full inline-block mb-4">
            // OPERATIONAL_MATURITY_MATRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Ecosystem Pipelines
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed">
            Every library, module, and API in our registry follows strict lifecycle tracking metrics. Evaluate architectural risks contextually at a single glance.
          </p>
        </div>

        {/* Desktop Stepper Node System */}
        <div className="relative mb-8 hidden md:block px-4">
          {/* Timeline Base Tracks */}
          <div className="absolute top-[24px] left-0 w-full h-[1px] bg-[var(--card-border)] z-0" />
          <div 
            className="absolute top-[24px] left-0 h-[1px] bg-[var(--primary)] transition-all duration-500 ease-out z-0"
            style={{ width: `${(activeStageIndex / (LIFECYCLE_STAGES.length - 1)) * 100}%` }}
          />
          
          <div className="grid grid-cols-7 relative z-10 text-center">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isSelected = index === activeStageIndex;
              const isPassed = index < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(index)}
                  className="flex flex-col items-center group relative focus:outline-none cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 font-mono text-xs font-bold relative z-10 ${
                    isSelected
                      ? "text-white border-[var(--primary)] bg-[var(--bg)]"
                      : isPassed
                      ? "border-[var(--primary)] bg-[var(--bg)] text-[var(--primary)]"
                      : "bg-[var(--bg)] border-[var(--card-border)] text-[var(--disabled)] group-hover:border-[var(--border)] group-hover:text-[var(--text)]"
                  }`}>
                    {/* Sliding Selection Pill */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeTimelineBubble"
                        className="absolute inset-0.5 bg-[var(--primary)] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <span className={`mt-3 font-mono text-[10px] tracking-wider transition-colors duration-200 uppercase ${
                    isSelected ? "text-[var(--heading)] font-black" : "text-[var(--disabled)] group-hover:text-[var(--subtitle)]"
                  }`}>
                    {stage.badgeText}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Inspection Dashboard */}
        <div className="relative mb-16 hidden md:block">
          {/* Dynamic Glow Projection */}
          <div 
            className="absolute -inset-px rounded-[var(--radius-md)] opacity-40 blur-xl transition-all duration-700 pointer-events-none"
            style={{ backgroundColor: currentStage.colorTheme.glow }}
          />

          <div className="relative p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-md)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-[10px] text-[var(--disabled)] tracking-widest block mb-1">
                      {currentStage.phase}
                    </span>
                    <h3 className="text-2xl font-black text-[var(--heading)] tracking-tight">
                      Protocol Matrix Scopes
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-3 py-1 rounded border font-bold ${currentStage.colorTheme.text} ${currentStage.colorTheme.bg} ${currentStage.colorTheme.border}`}>
                    {currentStage.badgeText}
                  </span>
                </div>
                
                <p className="text-sm md:text-base text-[var(--subtitle)] font-light leading-relaxed mb-8 max-w-4xl">
                  {currentStage.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 border-t border-[var(--card-border)] pt-5 font-mono text-[10px]">
                  <div>
                    <span className="text-[var(--disabled)] block mb-1">STABILITY LOGICS //</span>
                    <span className="text-[var(--heading)] font-bold">{currentStage.telemetry.split(" // ")[1]}</span>
                  </div>
                  <div>
                    <span className="text-[var(--disabled)] block mb-1">CONTRIBUTION MATRICES //</span>
                    <span className="text-[var(--heading)] font-bold">{currentStage.impact.split(" // ")[1]}</span>
                  </div>
                  <div>
                    <span className="text-[var(--disabled)] block mb-1">API SURFACE RUNTIME //</span>
                    <span className={`font-bold ${currentStage.colorTheme.text}`}>{currentStage.apiSurface}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global Overview Grid Pattern (Active Sync Highlighted) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const isCurrentlyActive = idx === activeStageIndex;
            return (
              <motion.div
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                whileHover={{ y: -4, borderColor: "var(--border)" }}
                className={`p-6 rounded-[var(--radius-md)] border bg-[var(--card-bg)] flex flex-col justify-between text-left transition-all duration-300 cursor-pointer group ${
                  isCurrentlyActive 
                    ? "border-[var(--primary)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--primary)]/30" 
                    : "border-[var(--card-border)] hover:bg-[var(--glass)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-[10px] text-[var(--disabled)] tracking-wider group-hover:text-[var(--muted)] transition-colors">
                      {stage.phase}
                    </span>
                    <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm border ${stage.colorTheme.text} ${stage.colorTheme.bg} ${stage.colorTheme.border}`}>
                      {stage.badgeText}
                    </span>
                  </div>
                  
                  <p className="text-xs text-[var(--subtitle)] font-light leading-relaxed mb-6 group-hover:text-[var(--text)] transition-colors">
                    {stage.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-[var(--card-border)] pt-4 font-mono text-[9px]">
                  <span className="text-[var(--disabled)]">METRICICS //</span>
                  <span className={`text-right font-bold ${isCurrentlyActive ? stage.colorTheme.text : "text-[var(--muted)]"}`}>
                    {stage.telemetry.split(" // ")[1]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}