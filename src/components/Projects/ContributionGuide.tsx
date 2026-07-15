"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  command?: string;
  description: string;
  details?: string[];
}

interface ResourceNode {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  isExternal: boolean;
}

const projectRepo = "https://github.com/SylvenOS/SylvenOS-Web";

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "fork",
    stepNumber: "01",
    title: "Fork Repository",
    description: "Create your own copy of the project under your GitHub account to serve as your personal remote workspace."
  },
  {
    id: "clone",
    stepNumber: "02",
    title: "Clone Repository",
    command: "git clone https://github.com/your-username/sylven-os.git",
    description: "Clone your fork to your local machine so you can develop and test changes safely."
  },
  {
    id: "dependencies",
    stepNumber: "03",
    title: "Install Dependencies",
    command: "npm install\n# or\npnpm install",
    description: "Install all necessary project development dependencies to configure your local runtime environment correctly."
  },
  {
    id: "dev-server",
    stepNumber: "04",
    title: "Start Development Server",
    command: "npm run dev",
    description: "Verify everything builds correctly before making changes. The local application server should spin up cleanly without errors."
  },
  {
    id: "branch",
    stepNumber: "05",
    title: "Create Feature Branch",
    command: "git checkout -b feat/improve-navbar",
    description: "Isolate your changes into a dedicated feature branch. Keep your branch targets narrow and focused on a single task."
  },
  {
    id: "implement",
    stepNumber: "06",
    title: "Implement Changes",
    description: "Write clean, documented code following the project's coding standards. Ensure your work remains clear and organized."
  },
  {
    id: "quality-checks",
    stepNumber: "07",
    title: "Run Quality Checks",
    command: "npm run lint\nnpm run test\nnpm run build",
    description: "Ensure all checks pass before pushing code upstream. Resolving formatting issues and test errors early protects project stability."
  },
  {
    id: "commit-push",
    stepNumber: "08",
    title: "Commit & Push",
    command: "git add .\ngit commit -m \"feat: changes you made\"\ngit push origin feat/improve-navbar",
    description: "Push your branch to GitHub and prepare to open a Pull Request describing what you changed and why."
  },
  {
    id: "open-pr",
    stepNumber: "09",
    title: "Open Pull Request",
    description: "Navigate to the main repository and initialize your PR. Fill out the submission template carefully by detailing:",
    details: ["The problem being addressed", "Your technical solution approach", "Visual screenshots or recordings", "Testing steps performed locally"]
  },
  {
    id: "review-merge",
    stepNumber: "10",
    title: "Review & Merge",
    description: "Maintainers review your contribution. After community feedback, required approval, and passing CI check matrices, your PR is safely merged into the main branch."
  }
];

const RESOURCE_NODES: ResourceNode[] = [
  {
    title: "Contribution Guide",
    description: "Everything you need before opening your first PR.",
    ctaText: "Read Guide",
    href: "/docs/contributing",
    isExternal: false
  },
  {
    title: "Project Architecture",
    description: "Understand the application structure, packages, and system design.",
    ctaText: "View Docs",
    href: "/docs/architecture",
    isExternal: false
  },
  {
    title: "Development Setup",
    description: "Requirements, Node version, installation, and environment variables.",
    ctaText: "Setup Project",
    href: "/docs/setup",
    isExternal: false
  },
  {
    title: "Good First Issues",
    description: "Small, beginner-friendly issues explicitly scoped for first-time contributors.",
    ctaText: "Browse Issues",
    href: getGoodFirstIssueLink(projectRepo),
    isExternal: true
  },
  {
    title: "Issue Tracker",
    description: "View current bugs, feature requests, and ongoing technical discussions.",
    ctaText: "Open GitHub",
    href: "https://github.com/SylvenOS/SylvenOS-Web/issues",
    isExternal: true
  },
  {
    title: "Code Style Guide",
    description: "Formatting rules, lint setups, folder structure, and naming conventions.",
    ctaText: "View Standards",
    href: "/docs/style-guide",
    isExternal: false
  },
  {
    title: "Code of Conduct",
    description: "Community behavioral expectations and respectful open-source collaboration rules.",
    ctaText: "Read Policy",
    href: "/code-of-conduct",
    isExternal: false
  },
  {
    title: "Discussions",
    description: "Ask technical questions, share architectural ideas, and talk with the community.",
    ctaText: "Join Discussions",
    href: "https://github.com/SylvenOS/SylvenOS-Web/discussions",
    isExternal: true
  }
];



export function getGoodFirstIssueLink(repoUrl: string): string {
  // Ensure we don't append to a broken or empty string
  if (!repoUrl) return "#";
  
  // Clean trailing slashes if any
  const cleanUrl = repoUrl.replace(/\/$/, "");
  
  // Append the standard GitHub filtering query
  return `${cleanUrl}/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22`;
}

export default function ContributionGuide() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command:", err);
    }
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[100px]  text-[var(--text)] ">
      {/* Premium Minimal Canvas Sub-Grid Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Grounded Header Blocks */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] mb-4">
            Contribute to Sylven OS
          </h2>
          <p className="text-sm md:text-base text-[var(--subtitle)] font-normal leading-relaxed max-w-2xl">
            Help improve Sylven OS by fixing bugs, building features, improving documentation, or reviewing pull requests. Every contribution, large or small, helps move the project forward.
          </p>
        </div>

        {/* 10-Stage Dynamic Runbook System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Vertical Index Stepper Grid */}
          <div className="lg:col-span-5 flex flex-col gap-1.5 w-full max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setCopied(false);
                  }}
                  className={`flex items-center justify-between p-3.5 rounded border text-left transition-all duration-150 cursor-pointer group ${
                    isSelected 
                      ? "bg-[var(--glass)] border-[var(--primary)] text-[var(--heading)] shadow-sm font-semibold" 
                      : "bg-transparent border-[var(--card-border)] text-[var(--disabled)] hover:text-[var(--text)] hover:border-[var(--border)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${isSelected ? "text-[var(--primary)] font-bold" : "text-[var(--muted)]"}`}>
                      {step.stepNumber}
                    </span>
                    <span className="text-xs tracking-tight">
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Workspace Panel Block */}
          <div className="lg:col-span-7 relative min-h-[380px] flex flex-col justify-between p-8 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-md overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col justify-between h-full flex-1 w-full"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-[var(--card-border)] pb-4 mb-6">
                    <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                      Workflow Step / {WORKFLOW_STEPS[activeStep].stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--primary)] font-bold uppercase tracking-wider">
                      Guide
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[var(--heading)] tracking-tight mb-4">
                    {WORKFLOW_STEPS[activeStep].title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-[var(--subtitle)] font-normal leading-relaxed mb-6">
                    {WORKFLOW_STEPS[activeStep].description}
                  </p>

                  {/* Bulleted PR layout list mapping */}
                  {WORKFLOW_STEPS[activeStep].details && (
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-[var(--subtitle)] pl-2 mb-6 font-medium">
                      {WORKFLOW_STEPS[activeStep].details?.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Multiline Terminal Block Engine */}
                {WORKFLOW_STEPS[activeStep].command && (
                  <div 
                    onClick={() => handleCopy(WORKFLOW_STEPS[activeStep].command!)}
                    className="mt-auto rounded bg-zinc-900 dark:bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-100 relative group cursor-pointer hover:border-zinc-700 transition-colors overflow-x-auto select-none"
                  >
                    <span className={`absolute right-4 top-3.5 text-[9px] uppercase tracking-wider font-bold transition-colors ${copied ? "text-green-400" : "text-zinc-500 group-hover:text-[var(--primary)]"}`}>
                      {copied ? "Copied" : "Click to Copy"}
                    </span>
                    <pre className="whitespace-pre font-mono text-zinc-300 leading-5">
                      {WORKFLOW_STEPS[activeStep].command}
                    </pre>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Community Reference Grid Matrix */}
        <div className="border-t border-[var(--card-border)] pt-16">
          <div className="mb-10 text-left">
            <h3 className="text-xl font-bold tracking-tight text-[var(--heading)] mb-2">
              Resources & Documentation
            </h3>
            <p className="text-xs text-[var(--subtitle)] font-normal">
              Everything you need to set up your environment, follow project standards, and get support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {RESOURCE_NODES.map((resource) => {
              const cardStyles = "p-5 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col justify-between transition-all duration-200 group hover:border-[var(--border)] hover:bg-[var(--glass)] cursor-pointer text-left";
              
              const cardContent = (
                <>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[var(--heading)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-xs text-[var(--subtitle)] font-normal leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <span className="font-mono text-[11px] font-bold text-[var(--primary)] group-hover:text-[var(--text)] transition-colors flex items-center gap-1 mt-auto">
                    {resource.ctaText} {resource.isExternal ? "↗" : "→"}
                  </span>
                </>
              );

              if (resource.isExternal) {
                return (
                  <a 
                    key={resource.title}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardStyles}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link 
                  key={resource.title}
                  href={resource.href}
                  className={cardStyles}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}