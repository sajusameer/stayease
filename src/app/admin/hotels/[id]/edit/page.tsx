"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import { getHotel, updateHotel } from "@/services/hotel.service";
import {
  getHotelById,
  updateHotel,
} from "@/services/hotel.service";
import { toast } from "sonner";

export default function EditHotelPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    location: "",
    category: "Luxury",
    pricePerNight: 0,
    rating: 5,
    shortDescription: "",
    description: "",
    images: [""],
    amenities: [""],
    featured: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotel() {
      try {
        // const hotel = await getHotel(id);
        const hotel = await getHotelById(id);

        setForm({
          title: hotel.title,
          location: hotel.location,
          category: hotel.category,
          pricePerNight: hotel.pricePerNight,
          rating: hotel.rating,
          shortDescription: hotel.shortDescription,
          description: hotel.description,
          images: hotel.images,
          amenities: hotel.amenities,
          featured: hotel.featured,
        });
      } catch {
        toast.error("Failed to load hotel.");
      } finally {
        setLoading(false);
      }
    }

    loadHotel();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateHotel(id, form);

      toast.success("Hotel updated successfully.");

      router.push("/admin/hotels");
    } catch {
      toast.error("Update failed.");
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-4xl font-bold">
        Edit Hotel
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl bg-white p-8 shadow"
      >

        <input
          className="input input-bordered w-full"
          placeholder="Hotel Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          className="input input-bordered w-full"
          placeholder="Location"
          value={form.location}
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />

        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Price"
          value={form.pricePerNight}
          onChange={(e) =>
            setForm({
              ...form,
              pricePerNight: Number(e.target.value),
            })
          }
        />

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Short Description"
          value={form.shortDescription}
          onChange={(e) =>
            setForm({
              ...form,
              shortDescription: e.target.value,
            })
          }
        />

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <button className="btn btn-primary w-full">
          Update Hotel
        </button>

      </form>

    </section>
  );
}