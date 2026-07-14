"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, MapPin, Star } from "lucide-react";
import { deleteHotel, getHotels } from "@/services/hotel.service";
import HotelGridSkeleton from "@/components/hotel/HotelGridSkeleton";
import { toast } from "sonner";

interface Hotel {
  _id: string;
  title: string;
  slug: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  featured: boolean;
  images: string[];
}

export default function ManageHotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadHotels() {
    try {
      const data = await getHotels();
      setHotels(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load hotels.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHotels();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this hotel?"
    );

    if (!confirmed) return;

    try {
      await deleteHotel(id);

      toast.success("Hotel deleted successfully.");

      setHotels((prev) =>
        prev.filter((hotel) => hotel._id !== id)
      );
    } catch (error) {
      console.error(error);
      toast.error("Delete failed.");
    }
  };

  // if (loading) {
  //   return (
  //     <div className="py-20 text-center text-lg">
  //       Loading...
  //     </div>
  //   );
  // }
 if (loading) {
  return (
    <section className="py-16">
    
        <HotelGridSkeleton />
    
    </section>
  );
}

  return (
    <section>

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Manage Hotels
        </h1>

        <Link
          href="/hotel/add"
          className="btn btn-primary"
        >
          Add Hotel
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {hotels.map((hotel) => (

          <div
            key={hotel._id}
            className="overflow-hidden rounded-3xl border bg-white shadow"
          >

            <div className="relative h-64">
              <Image
                src={hotel.images[0]}
                alt={hotel.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 p-6">

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {hotel.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-gray-500">
                    <MapPin size={18} />
                    {hotel.location}
                  </div>

                </div>

                <span className="badge badge-primary">
                  {hotel.category}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <div className="font-bold text-primary">
                  ৳{hotel.pricePerNight}/night
                </div>

                <div className="flex items-center gap-1">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {hotel.rating}
                </div>

              </div>

              <div className="flex gap-3">

                <Link
                  href={`/admin/hotels/${hotel._id}/edit`}
                  className="btn btn-info flex-1"
                >
                  <Pencil size={18} />
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(hotel._id)}
                  className="btn btn-error flex-1"
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}