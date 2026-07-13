"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  createBooking,
  BookingPayload,
} from "@/services/booking.service";

interface BookingFormProps {
  hotelId: string;
  pricePerNight: number;
}

export default function BookingForm({
  hotelId,
  pricePerNight,
}: BookingFormProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    setLoading(true);

    try {
      const payload: BookingPayload = {
        hotelId,
        userId: "", // পরে Better Auth থেকে আসবে
        checkIn,
        checkOut,
        guests,
        totalPrice: pricePerNight,
      };

      await createBooking(payload);

      toast.success("Booking created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h3 className="mb-5 text-2xl font-bold">
        Book Your Stay
      </h3>

      <div className="space-y-4">
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="input input-bordered w-full"
        />

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="input input-bordered w-full"
        />

        <button
          onClick={handleBooking}
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
}