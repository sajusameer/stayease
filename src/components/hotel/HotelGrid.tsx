import HotelCard, { HotelCardProps } from "./HotelCard";

interface HotelGridProps {
  hotels: HotelCardProps[];
}

export default function HotelGrid({ hotels }: HotelGridProps) {
  if (!hotels.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          No Hotels Found
        </h2>

        <p className="mt-2 text-base-content/70">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel._id}
          {...hotel}
        />
      ))}
    </div>
  );
}