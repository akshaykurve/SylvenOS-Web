<div align="center">

# Sylven OS — Web

**Learn. Build. Educate.**

The official website for [Sylven OS](https://github.com/sylvenos) — a global, community-driven open-source organization where developers learn, build real-world software, and teach others through collaborative engineering.

[Live Site](https://sylvenos.com) · [Projects](https://sylvenos.com/projects) · [Contributors](https://sylvenos.com/contributors) · [Discord](https://discord.com/invite/HNrEcrSBs6)

</div>

---

## About

This repository powers **sylvenos.com** — the marketing site, live project registry, and contributor hub for the Sylven OS organization. Project and contributor data (repositories, tech stack, rankings, activity) is pulled live from the [SylvenOS GitHub organization](https://github.com/sylvenos) via the GitHub API, not hardcoded.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler) |
| UI | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Motion](https://motion.dev) (Framer Motion) |
| Data | [Octokit](https://github.com/octokit/rest.js) (GitHub REST API), Next.js `unstable_cache` |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Testing | [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com) |
| Deployment | [Cloudflare Workers](https://workers.cloudflare.com) via [OpenNext](https://opennext.js.org/cloudflare) |

## Getting Started

### Prerequisites

- Node.js 20+
- A GitHub [personal access token](https://github.com/settings/tokens) (optional locally — see below)

### Setup

```bash
git clone https://github.com/sylvenos/sylvenos-web.git
cd sylvenos-web
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

```bash
# Optional in development — without it, the app falls back to mock data
# so you can develop the UI without hitting GitHub's rate limits.
GITHUB_TOKEN=

# Used for sitemap.xml, robots.txt, and canonical/OG metadata.
NEXT_PUBLIC_SITE_URL=https://sylvenos.com
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The app hot-reloads as you edit files under `src/`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server (Turbopack) |
| `npm run build` | Create a production build |
| `npm run start` | Serve a production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run the TypeScript compiler with no output (`tsc --noEmit`) |
| `npm test` | Run the Vitest test suite |
| `npm run cf:build` | Build for Cloudflare Workers via OpenNext |

## Project Structure

```text
src/
├── app/                 # Next.js App Router routes, layouts, and metadata routes
│   ├── api/             # Route handlers (contributor rankings, project specs)
│   ├── projects/        # Project registry + dynamic project detail pages
│   ├── contributors/    # Contributor hub
│   ├── about/           # About Sylven OS
│   ├── robots.ts        # Dynamic robots.txt (incl. AI crawler rules)
│   └── sitemap.ts       # Dynamic sitemap.xml
├── components/          # UI components, grouped by page/section
├── lib/                 # GitHub data fetching, shared types, SEO constants
├── utils/               # Contributor aggregation across the GitHub org
├── hooks/                # Shared React hooks
└── config/              # Static project metadata & taxonomy overrides
```

## Contributing

We welcome contributions of all kinds — code, design, documentation, and bug reports. Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) to get started, and review our [Code of Conduct](.github/CODE_OF_CONDUCT.md) before participating.

Found a security issue? Please follow our [responsible disclosure policy](.github/SECURITY.md) instead of opening a public issue.

## License

This project is licensed under the [MIT License](LICENSE).

## Community

- [GitHub Organization](https://github.com/sylvenos)
- [Discord](https://discord.com/invite/HNrEcrSBs6)
- [X / Twitter](https://x.com/sylvenos_)
- [LinkedIn](https://linkedin.com/company/sylvenos)
