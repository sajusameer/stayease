import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    hotels: 18,
  },
  {
    name: "Sajek Valley",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    hotels: 10,
  },
  {
    name: "Sylhet",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    hotels: 12,
  },
  {
    name: "Bandarban",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    hotels: 8,
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-lg">
            Destinations
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Popular Destinations
          </h2>

          <p className="mt-4 text-gray-500">
            Discover the most loved travel destinations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item) => (
            <Link
              href={`/hotels?location=${encodeURIComponent(
                item.name
              )}`}
              key={item.name}
              className="group overflow-hidden rounded-3xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <MapPin size={16} />
                    {item.hotels} Hotels
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}