import Image from "next/image";

const FACTS = [
  { term: "Members", detail: "Worldwide" },
  { term: "Projects", detail: "Open Source" },
  { term: "Learning", detail: "Hands-on" },
  { term: "Mission", detail: "Learn • Build • Educate" },
];

export function ProfileCard() {
  return (
    <aside
      aria-label="About Sylven OS"
      className="w-full max-w-[430px] rounded-3xl border border-[var(--card-border)] bg-[var(--surface)]/40 p-8 shadow-[var(--shadow-lg)] backdrop-blur-xl md:p-10"
    >
      <div className="mx-auto mb-8 h-[132px] w-[132px] rounded-full bg-[var(--gradient-primary)] p-1 shadow-[var(--shadow-lg)] ring-1 ring-[var(--card-border)]">
        <div className="relative h-full w-full">
          <Image
            src="/IMG_20260628_143818.png"
            alt="Sylven OS logo mark"
            fill
            sizes="132px"
            className="object-contain p-3"
            priority
          />
        </div>
      </div>

      <dl className="divide-y divide-[var(--card-border)]">
        {FACTS.map((fact) => (
          <div
            key={fact.term}
            className="flex items-center justify-between gap-4 py-[18px]"
          >
            <dt className="text-sm text-[var(--subtitle)] md:text-base">
              {fact.term}
            </dt>
            <dd className="text-right font-semibold text-[var(--heading)]">
              {fact.detail}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
