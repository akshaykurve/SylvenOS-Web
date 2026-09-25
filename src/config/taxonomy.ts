// src/config/taxonomy.ts
//
// Maps a GitHub topic/tech name to a display category for the Projects page's
// tech-stack browser. This list is for GROUPING and DISPLAY only — it never
// gates which projects or technologies are accepted. Anything not listed
// here still shows up in full, under "More Technologies" (see DynamicTech.tsx).
// Contributions using any language, framework, or tool are equally welcome.

export const TECH_TAXONOMY: Record<string, string> = {
  // Frontend
  React: "Frontend",
  "Next.js": "Frontend",
  TypeScript: "Frontend",
  JavaScript: "Frontend",
  Vue: "Frontend",
  "Vue.js": "Frontend",
  Nuxt: "Frontend",
  Angular: "Frontend",
  Svelte: "Frontend",
  SolidJS: "Frontend",
  Astro: "Frontend",
  Qwik: "Frontend",
  HTML: "Frontend",
  CSS: "Frontend",

  // Mobile
  "React Native": "Mobile",
  Flutter: "Mobile",
  Dart: "Mobile",
  Swift: "Mobile",
  SwiftUI: "Mobile",
  Kotlin: "Mobile",
  "Kotlin Multiplatform": "Mobile",
  Xamarin: "Mobile",
  Android: "Mobile",
  iOS: "Mobile",

  // Backend
  "Node.js": "Backend",
  Express: "Backend",
  GraphQL: "Backend",
  Fastify: "Backend",
  NestJS: "Backend",
  Go: "Backend",
  Rust: "Backend",
  Python: "Backend",
  Django: "Backend",
  Flask: "Backend",
  FastAPI: "Backend",
  Java: "Backend",
  Spring: "Backend",
  "Spring Boot": "Backend",
  "C#": "Backend",
  ".NET": "Backend",
  ASP: "Backend",
  Ruby: "Backend",
  "Ruby on Rails": "Backend",
  PHP: "Backend",
  Laravel: "Backend",
  "C++": "Backend",
  C: "Backend",
  Elixir: "Backend",
  Phoenix: "Backend",
  Scala: "Backend",

  // Database
  PostgreSQL: "Database",
  MySQL: "Database",
  Redis: "Database",
  MongoDB: "Database",
  SQLite: "Database",
  Prisma: "Database",
  Supabase: "Database",
  Firebase: "Database",
  DynamoDB: "Database",
  Elasticsearch: "Database",

  // DevOps
  Docker: "DevOps",
  "GitHub Actions": "DevOps",
  Vercel: "DevOps",
  AWS: "DevOps",
  Azure: "DevOps",
  GCP: "DevOps",
  Kubernetes: "DevOps",
  Terraform: "DevOps",
  Nginx: "DevOps",
  CloudflareWorkers: "DevOps",

  // Design
  Figma: "Design",
  Tailwind: "Design",
  "Tailwind CSS": "Design",
  "Framer Motion": "Design",
  "Shadcn UI": "Design",

  // Data & ML
  "Machine Learning": "Data & ML",
  "Data Science": "Data & ML",
  TensorFlow: "Data & ML",
  PyTorch: "Data & ML",
  Jupyter: "Data & ML",
  Pandas: "Data & ML",

  // Systems & Other
  Bash: "Systems",
  Shell: "Systems",
  WebAssembly: "Systems",
  Solidity: "Systems",
  Unity: "Systems",
  Godot: "Systems",
};
