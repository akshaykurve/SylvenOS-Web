interface StatProps {
  value: number | string;
  label: string;
}

// Rendered on the server with the real values. No count-up from zero: a visitor
// (or crawler) must never see a placeholder number, even for a moment.
function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <dd className="order-1 mb-2 text-4xl font-bold tabular-nums tracking-tight text-[var(--heading)]">
        {value}
      </dd>
      <dt className="order-2 text-sm font-medium uppercase tracking-wider text-[var(--subtitle)]">
        {label}
      </dt>
    </div>
  );
}

export function HeroMetrics({
  repos,
  contributors,
}: {
  repos: number;
  contributors: number;
}) {
  return (
    <div className="z-10 w-full border-t border-[var(--card-border)] pt-10">
      <dl
        aria-label="Sylven OS at a glance"
        className="grid grid-cols-2 gap-x-8 gap-y-10 text-center md:grid-cols-5"
      >
        <Stat value={1} label="Projects" />
        <Stat value={contributors} label="Contributors" />
        <Stat value={repos} label="Repositories" />
        <Stat value={10} label="Technologies" />

        <div className="col-span-2 flex flex-col items-center justify-center md:col-span-1">
          <dd className="order-1 mb-2 text-4xl font-bold tracking-tight text-[var(--accent)]">
            Future
          </dd>
          <dt className="order-2 text-sm font-medium uppercase tracking-wider text-[var(--subtitle)]">
            Countries
          </dt>
        </div>
      </dl>
    </div>
  );
}
