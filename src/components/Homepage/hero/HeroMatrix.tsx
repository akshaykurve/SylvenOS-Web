// src/components/HeroMetrics.tsx
"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useCountUp } from "@/hooks/UseCountUp";


interface MetricProps {
  value: number;
  label: string;
  isAnimated?: boolean;
}

// Reusable Metric Item
function MetricItem({ value, label, isAnimated = true }: MetricProps) {
  const ref = useRef(null);
  const count = useCountUp(value, ref);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.span ref={ref} className="text-4xl font-bold text-[var(--text)] mb-2">
        {isAnimated ? count : value}
      </motion.span>
      <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function HeroMetrics({ repos, contributors }: { repos: number; contributors: number }) {
  return (
    <div className="w-full pt-10 border-t border-[var(--border)]/50 z-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        
        <MetricItem value={1} label="Projects" isAnimated={false} />
        <MetricItem value={contributors} label="Contributors" />
        <MetricItem value={repos} label="Repositories" />
        <MetricItem value={10} label="Technologies" />

        <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-2">
            Future
          </span>
          <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">Countries</span>
        </div>
        
      </div>
    </div>
  );
}