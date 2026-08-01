// config/projectMetadata.ts

export interface CustomMetadata {
  overview: string;
  goals: string[];
  features: string[];
  architecture: { layer: string; description: string }[];
  contributionGuide?: string;
}

export const localProjectRegistry: Record<string, CustomMetadata> = {
  "sylvenos-web": {
    overview: "SylvenOS-Web is the central interactive web platform and portal for the Sylven OS ecosystem. It delivers real-time project metrics, contributor insights, documentation, and system telemetry through a hyper-responsive Next.js interface.",
    goals: [
      "Provide an ultra-fast, server-rendered entry point for the Sylven OS developer ecosystem",
      "Deliver dynamic metric tracking for ecosystem projects and real-time performance visualizers",
      "Maintain strict sub-100ms client-side page transitions with zero hydration mismatches"
    ],
    features: [
      "Adaptive dark/light theme engine with SSR-safe state hydration",
      "Interactive return & financial/metric display components with period labels",
      "Motion-driven responsive navigation bar with intuitive mobile drawer state"
    ],
    architecture: [
      { layer: "Frontend / Framework", description: "Next.js App Router architecture leveraging React Server Components." },
      { layer: "UI & Styling", description: "Tailwind CSS with design tokens coupled with Framer Motion layout pipelines." },
      { layer: "Type Safety & State", description: "Strict TypeScript definitions with client-side local storage persistence." }
    ],
    contributionGuide: "Want to contribute to Sylven OS Web? Check out our GitHub issue board for tags labeled 'good first issue'. Ensure all lint checks and build tasks pass (`npm run build`) before submitting a Pull Request."
  }
  
  // Add more projects here matching their exact GitHub repository names (lowercase)
};