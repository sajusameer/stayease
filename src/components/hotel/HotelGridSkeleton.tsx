import HotelCardSkeleton from "./HotelCardSkeleton";

export default function HotelGridSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <HotelCardSkeleton key={index} />
      ))}
    </div>
  );
}