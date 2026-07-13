import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

export interface HotelCardProps {
  _id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  shortDescription: string;
  images: string[];
  featured: boolean;
}

export default function HotelCard({
  slug,
  title,
  location,
  category,
  pricePerNight,
  rating,
  shortDescription,
  images,
  featured,
}: HotelCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images?.[0] || "/images/hero.jpg"}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {featured && (
          <span className="badge badge-primary absolute left-4 top-4">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <span className="badge badge-outline">
            {category}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">
              {rating}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-base-content/70">
          <MapPin size={18} />
          {location}
        </div>

        <p className="line-clamp-2 text-base-content/70">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-2xl font-bold text-primary">
              ৳{pricePerNight}
            </p>

            <span className="text-sm text-base-content/60">
              per night
            </span>
          </div>

          <Link
            href={`/hotels/${slug}`}
            className="btn btn-primary rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}