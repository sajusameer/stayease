"use client";

import { useEffect, useState } from "react";

import { getHotels } from "@/services/hotel.service";

import HotelGrid from "@/components/hotel/HotelGrid";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/common/Container";
import HotelFilters from "@/components/hotel/HotelFilters";

export default function HotelsPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotels() {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, []);

  return (
    <section className="py-16">
      <Container>

        <SectionTitle
          badge="Hotels"
          title="Discover Amazing Hotels"
          subtitle="Browse our premium hotel collection."
        />

        <HotelFilters />

        {loading ? (
          <div className="py-20 text-center">
            Loading...
          </div>
        ) : (
          <HotelGrid hotels={hotels} />
        )}

      </Container>
    </section>
  );
}