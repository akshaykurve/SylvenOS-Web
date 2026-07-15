"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StartContributingCTA() {
  return (
    <section className="relative px-6 md:px-[8%] py-[120px]  text-[var(--text)]  border-t border-[var(--card-border)]">
      {/* Subtle background decorative grid layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Soft central glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Upper Label Tag */}
        <span className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6">
          Start Contributing
        </span>

        {/* Large Main CTA Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-[var(--heading)] max-w-2xl mb-6 leading-[1.1]">
          Ready to Build with the Community?
        </h2>

        {/* Focused Subtitle Description */}
        <p className="text-sm md:text-lg text-[var(--subtitle)] font-normal leading-relaxed max-w-2xl mb-10">
          Find a project, solve real problems, collaborate with developers, and grow your engineering skills through open source.
        </p>

        {/* Action Buttons Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary Action: Explore GitHub */}
          <a
            href="https://github.com/SylvenOS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-[var(--radius-md)] bg-[var(--text)] text-[var(--bg)] font-medium text-sm transition-all duration-150 hover:bg-[var(--heading)] text-center shadow-sm"
          >
            Explore GitHub
          </a>

          {/* Secondary Action: Join Discord */}
          <a
            href="https://discord.com/invite/HNrEcrSBs6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-[var(--radius-md)] bg-[var(--glass)] border border-[var(--card-border)] text-[var(--heading)] font-medium text-sm transition-all duration-150 hover:border-[var(--border)] hover:bg-[var(--card-bg)] text-center"
          >
            Join Discord
          </a>

          {/* Tertiary Action: Internal Link to Contribution Guide */}
          <Link
            href="/docs/contributing"
            className="w-full sm:w-auto px-6 py-3 rounded-[var(--radius-md)] text-[var(--subtitle)] font-medium text-sm transition-all duration-150 hover:text-[var(--text)] text-center font-mono flex items-center justify-center gap-1 group"
          >
            Contribution Guide <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}