import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen px-6 md:px-[8%] py-16 md:py-[140px]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Skeleton className="h-4 w-40 mx-auto mb-5" />
        <Skeleton className="h-12 w-full max-w-lg mx-auto mb-4" />
        <Skeleton className="h-4 w-3/4 mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col items-center gap-4"
          >
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-[var(--radius-md)]" />
        ))}
      </div>
    </main>
  );
}
