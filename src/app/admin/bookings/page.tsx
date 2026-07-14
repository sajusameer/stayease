"use client";

import { useEffect, useState } from "react";
import {
  getBookings,
  updateBooking,
  deleteBooking,
} from "@/services/booking.service";
import { toast } from "sonner";

interface Booking {
  _id: string;
  hotelId: {
    title: string;
  };
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Cancelled";
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadBookings() {
    try {
      const data = await getBookings();
      setBookings(data);
    } catch {
      toast.error("Failed to load bookings.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function handleStatus(
    id: string,
    status: "Pending" | "Confirmed" | "Cancelled"
  ) {
    try {
      const updated = await updateBooking(id, { status });

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? updated : booking
        )
      );

      toast.success("Booking updated.");
    } catch {
      toast.error("Update failed.");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this booking?")) return;

    try {
      await deleteBooking(id);

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== id)
      );

      toast.success("Booking deleted.");
    } catch {
      toast.error("Delete failed.");
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <section>

      <h1 className="mb-8 text-4xl font-bold">
        Manage Bookings
      </h1>

      <div className="overflow-x-auto rounded-2xl bg-white shadow">

        <table className="table">

          <thead>
            <tr>
              <th>Hotel</th>
              <th>User</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Guests</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr key={booking._id}>

                <td>{booking.hotelId?.title}</td>

                <td>{booking.userId}</td>

                <td>
                  {new Date(
                    booking.checkIn
                  ).toLocaleDateString()}
                </td>

                <td>
                  {new Date(
                    booking.checkOut
                  ).toLocaleDateString()}
                </td>

                <td>{booking.guests}</td>

                <td>৳{booking.totalPrice}</td>

                <td>

                  <span
                    className={`badge ${
                      booking.status === "Confirmed"
                        ? "badge-success"
                        : booking.status === "Cancelled"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {booking.status}
                  </span>

                </td>

                <td className="space-x-2">

                  <button
                    className="btn btn-xs btn-success"
                    onClick={() =>
                      handleStatus(
                        booking._id,
                        "Confirmed"
                      )
                    }
                  >
                    Confirm
                  </button>

                  <button
                    className="btn btn-xs btn-warning"
                    onClick={() =>
                      handleStatus(
                        booking._id,
                        "Cancelled"
                      )
                    }
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-xs btn-error"
                    onClick={() =>
                      handleDelete(booking._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}