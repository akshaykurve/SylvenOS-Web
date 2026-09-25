import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-[15%]">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-3 w-32 mb-8" />

        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[var(--card-border)]">
          <Skeleton className="h-16 w-16 rounded" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-32 w-full rounded-[var(--radius-md)]" />
            <Skeleton className="h-24 w-full rounded-[var(--radius-md)]" />
          </div>
        </div>
      </div>
    </main>
  );
}
