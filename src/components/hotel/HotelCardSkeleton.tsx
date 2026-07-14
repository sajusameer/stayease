export default function HotelCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow">
      <div className="skeleton h-60 w-full" />

      <div className="space-y-4 p-5">
        <div className="skeleton h-6 w-3/4" />

        <div className="skeleton h-4 w-1/2" />

        <div className="skeleton h-4 w-full" />

        <div className="flex items-center justify-between">
          <div className="skeleton h-8 w-24" />
          <div className="skeleton h-10 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}