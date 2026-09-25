# Contributing to Sylven OS

Thank you for your interest in contributing to Sylven OS Web — the website and live project registry for the Sylven OS organization.

Our mission is simple:

> Learn. Build. Educate.

Whether you write code, design interfaces, improve documentation, test features, report bugs, or help other contributors, your contribution matters. This guide covers how to contribute specifically to **this repository** (`sylvenos-web`).

By participating, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Getting Started

1. **Fork** the repository and clone your fork locally.
2. **Install dependencies** and set up your environment:

   ```bash
   npm install
   cp .env.example .env.local
   ```

   `GITHUB_TOKEN` in `.env.local` is optional for local development — without it, the app serves mock data for GitHub-backed sections so you're never blocked by rate limits while working on the UI.

3. **Start the dev server**:

   ```bash
   npm run dev
   ```

4. **Create a branch** off `main` using a descriptive name:

   ```bash
   git checkout -b feat/short-description
   # or fix/short-description, docs/short-description, chore/short-description
   ```

## Making Changes

- Keep pull requests **focused**. One feature or fix per PR is easier to review and merge.
- Match the existing code style — this project uses Tailwind CSS utility classes with CSS custom properties (`var(--heading)`, `var(--primary)`, etc.) defined in `src/app/globals.css` for theme-aware colors. Avoid hardcoding colors like `white`/`black`/`slate-900` directly in components, since they won't adapt between light and dark mode.
- If you add a new page or content section, make sure it's responsive (test at mobile, tablet, and desktop widths) and works in both light and dark themes.
- Reuse existing types from `src/lib/type.ts` where possible, and avoid `any`.

### Before opening a PR

Run these locally and make sure they all pass:

```bash
npm run lint
npm run type-check
npm test
npm run build
```

A pull request that fails lint, type-checking, or the build will not be merged.

## Commit Messages

Use clear, descriptive commit messages. We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add contributor activity timeline
fix: correct light-mode contrast on navbar toggle
docs: update setup instructions in README
chore: remove unused dependencies
```

## Submitting a Pull Request

1. Push your branch to your fork.
2. Open a pull request against `main` using the provided PR template.
3. Fill in what changed and why, and include screenshots or a short clip for any UI change.
4. Link any related issue (`Closes #123`).
5. Be responsive to review feedback — most PRs go through at least one round of review.

## Reporting Bugs & Requesting Features

Please use [GitHub Issues](https://github.com/sylvenos/sylvenos-web/issues) for both. For bugs, include:

- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if it's a visual issue
- Browser/OS if relevant

## Reporting Security Issues

Do **not** open a public issue for security vulnerabilities. See [SECURITY.md](./SECURITY.md) for how to report responsibly.

## Questions?

Join the conversation on [Discord](https://discord.com/invite/HNrEcrSBs6) or start a GitHub Discussion. We're happy to help you find a good first issue to work on.

Thank you for helping build Sylven OS. 🚀
