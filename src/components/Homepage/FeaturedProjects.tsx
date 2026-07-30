"use client";

import { motion, Variants } from "motion/react";

export default function FeaturedProjects() {
  const projects = [
    {
      name: "Sylven Dashboard",
      description: "An elegant, performance-first admin dashboard template optimized for deep system monitoring and open-source metric tracking.",
      tech: ["Next.js", "Node.js", "Postgres"],
      difficulty: "Intermediate",
      status: "Planning",
      statusColor: "var(--warning)", // Maps to yellow token
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
    },
    {
      name: "NUI Stack",
      description: "A dark-mode first, production-ready atomic UI component library built explicitly for Next.js App Router applications.",
      tech: ["React", "TypeScript", "Tailwind"],
      difficulty: "Beginner",
      status: "In Progress",
      statusColor: "var(--info)", // Maps to blue token
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      name: "Sylven Core API",
      description: "A high-throughput decentralized OAuth2 identity and user management subsystem layer designed for horizontal scaling.",
      tech: ["Go", "Redis", "Docker"],
      difficulty: "Advanced",
      status: "Active",
      statusColor: "var(--success)", // Maps to green token
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12" />
          <path d="M6 12h12" />
        </svg>
      ),
    },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 65, damping: 15 },
    },
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px] text-[var(--text)]">
      {/* Background Structural Mesh Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] opacity-[0.1] pointer-events-none" />

      {/* Title Layout Frame */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--primary)] uppercase tracking-wider mb-3">
            // Ecosystem Repositories
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--heading)]">
            Featured Projects
          </h2>
        </div>
        <p className="text-base text-[var(--subtitle)] font-light max-w-md md:text-right">
          Production applications engineered transparently alongside our global contributor community.
        </p>
      </div>

      {/* Grid Layout Frame */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: "var(--primary)" }}
            className="group relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--surface)]/30 border border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--transition-normal)] flex flex-col justify-between backdrop-blur-md"
          >
            {/* Top Area: Logo & Name & Description */}
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--hover-bg)] group-hover:text-white transition-colors duration-[var(--transition-fast)]">
                  {project.logo}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--heading)]">
                  {project.name}
                </h3>
              </div>

              <p className="text-[14px] md:text-base text-[var(--subtitle)] leading-relaxed font-light mb-6">
                {project.description}
              </p>

              {/* Middle Area: Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] text-[var(--muted)]"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta Bar Layout */}
            <div className="pt-4 border-t border-[var(--card-border)]/40 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-[var(--disabled)] uppercase block text-[10px] tracking-wider mb-0.5">Difficulty</span>
                <span className="text-[var(--text)] font-medium">{project.difficulty}</span>
              </div>
              <div className="text-right">
                <span className="text-[var(--disabled)] uppercase block text-[10px] tracking-wider mb-0.5">Status</span>
                <span className="inline-flex items-center gap-1.5 font-semibold" style={{ color: project.statusColor }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.statusColor }} />
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Global Bottom Section CTA Action Button */}
      <div className="relative z-10 text-center">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "var(--btn-primary-hover)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--btn-primary-bg)] text-white font-semibold shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-colors duration-[var(--transition-fast)] text-[14px] md:text-base"
        >
          <span>View All Projects</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>
    </section>
  );
}