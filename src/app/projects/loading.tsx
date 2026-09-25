import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen px-6 md:px-[8%] py-16 md:py-[140px]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Skeleton className="h-4 w-40 mx-auto mb-5" />
        <Skeleton className="h-12 w-full max-w-lg mx-auto mb-4" />
        <Skeleton className="h-4 w-3/4 mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] space-y-4"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
