// Shared between the client-rendered "How It Works" timeline and the
// server-rendered HowTo JSON-LD on the contributors page, so both stay in
// sync without needing to cross the "use client" boundary for plain data.
export const CONTRIBUTION_STEPS = [
  {
    title: "Join",
    description: "Hop into our ecosystem. Introduce yourself, state your core tech stack interest, and connect with the engineering group.",
    badge: "Step 01",
    color: "var(--info)",
  },
  {
    title: "Explore Projects",
    description: "Browse our active production codebases. From full-stack apps to developer utilities, choose a project that excites you.",
    badge: "Step 02",
    color: "var(--info)",
  },
  {
    title: "Read Documentation",
    description: "Review system architecture specs and local setup files. Getting clear layout context prevents code collision early on.",
    badge: "Step 03",
    color: "var(--primary)",
  },
  {
    title: "Pick an Issue",
    description: "Claim an unassigned issue or pitch an entirely new feature branch. We map distinct milestones for all experience levels.",
    badge: "Step 04",
    color: "var(--primary)",
  },
  {
    title: "Contribute",
    description: "Write clean, tested code. Push your branch, run local checks, and watch your changes take shape within a shared repo environment.",
    badge: "Step 05",
    color: "var(--logo)",
  },
  {
    title: "Review",
    description: "Submit a Pull Request. Engage in objective code optimization feedback loops with peers to refine and protect build quality.",
    badge: "Step 06",
    color: "var(--logo)",
  },
  {
    title: "Merge",
    description: "Your PR passes all test validations and gets merged. Your features are officially deployed into live production systems.",
    badge: "Step 07",
    color: "var(--success)",
  },
  {
    title: "Become a Maintainer",
    description: "As your contributions stack up, step into ecosystem leadership. Review incoming code, manage features, and mentor new arrivals.",
    badge: "Step 08",
    color: "var(--success)",
  },
];
