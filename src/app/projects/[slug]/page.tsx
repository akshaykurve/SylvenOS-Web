import { getAllProjects } from "@/lib/github";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routing paths on build time
export async function generateStaticParams() {
  const projects = await getAllProjects("sylvenos");
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const projects = await getAllProjects("sylvenos");
  const project = projects.find((p) => p.slug === slug);
  // console.log("🚀 ~ ProjectDetailsPage ~ project:", project)

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-20 px-6 md:px-[15%]">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 font-mono text-xs">
          <Link href="/registry" className="text-[var(--disabled)] hover:text-[var(--primary)] transition-colors">
            ← BACK TO REGISTRY
          </Link>
        </div>

        {/* Hero Meta */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[var(--card-border)]">
          <img src={project.avatarUrl} alt={project.name} className="w-16 h-16 rounded border" />
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--heading)] tracking-tight">{project.name}</h1>
            <p className="text-sm text-[var(--subtitle)] mt-2 font-light">{project.description}</p>
          </div>
        </div>

        {/* Dynamic Multi-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Main detailed spec panels */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-mono text-[var(--primary)] uppercase tracking-wider mb-3">// Detailed Overview</h2>
              <p className="text-base font-light leading-relaxed text-[var(--subtitle)]">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-xs font-mono text-[var(--primary)] uppercase tracking-wider mb-4">// System Features</h2>
              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="text-sm font-light text-[var(--text)] flex gap-2">
                    <span className="text-[var(--info)]">➔</span> {feat}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-mono text-[var(--primary)] uppercase tracking-wider mb-4">// Architecture Schema</h2>
              <div className="space-y-4">
                {project.architecture.map((layer, i) => (
                  <div key={i} className="p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded">
                    <div className="font-mono text-xs text-[var(--primary)] mb-1 font-bold">{layer.layer}</div>
                    <p className="text-xs text-[var(--subtitle)] font-light">{layer.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right hand metadata sidebar panel */}
          <div className="space-y-8 bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-[var(--radius-md)] h-fit">
            <div>
              <h3 className="text-[10px] font-mono text-[var(--disabled)] uppercase mb-3">// Status Metrics</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[var(--disabled)]">STATUS:</span>
                  <span className="font-bold text-green-400">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--disabled)]">DIFF:</span>
                  <span className="font-bold">{project.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--disabled)]">STARS:</span>
                  <span className="font-bold">{project.stars} ⭐</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--card-border)]">
              <h3 className="text-[10px] font-mono text-[var(--disabled)] uppercase mb-3">// Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[9px] font-mono bg-[var(--bg)] border border-[var(--card-border)] px-2 py-0.5 rounded text-[var(--subtitle)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--card-border)] space-y-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2.5 rounded bg-[var(--primary)] text-white font-mono text-xs font-bold"
              >
                Go to GitHub
              </a>
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2.5 rounded border border-[var(--card-border)] hover:bg-[var(--glass)] font-mono text-xs font-bold transition-all"
              >
                Docs Website
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}