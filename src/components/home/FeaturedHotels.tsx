"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import HotelCard from "@/components/hotel/HotelCard";
import { getFeaturedHotels } from "@/services/hotel.service";

export default function FeaturedHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotels() {
      try {
        const data = await getFeaturedHotels();
        setHotels(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            badge="Featured"
            title="Featured Hotels"
            subtitle="Discover our handpicked premium hotels."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[420px] animate-pulse rounded-3xl bg-base-200"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <SectionTitle
          badge="Featured"
          title="Featured Hotels"
          subtitle="Discover our handpicked premium hotels."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {hotels.map((hotel: any) => (
            <HotelCard
              key={hotel._id}
              {...hotel}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/hotels"
            className="btn btn-primary rounded-xl"
          >
            View All Hotels
          </Link>
        </div>

      </div>
    </section>
  );
}