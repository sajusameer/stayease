// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { CalendarDays, MapPin, Users } from "lucide-react";
// import { getMyBookings } from "@/services/booking.service";

// interface Booking {
//   _id: string;
//   hotelId: {
//     _id: string;
//     title: string;
//     location: string;
//     images: string[];
//   };
//   checkIn: string;
//   checkOut: string;
//   guests: number;
//   totalPrice: number;
//   status: "Pending" | "Confirmed" | "Cancelled";
// }

// export default function MyBookingsPage() {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadBookings() {
//       try {
//         // পরে Better Auth থেকে userId আসবে
//         const data = await getMyBookings(
//           "65f1a2b3c4d5e6f7a8b9c0d1"
//         );

//         setBookings(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadBookings();
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-20 text-center text-lg">
//         Loading bookings...
//       </div>
//     );
//   }

//   return (
//     <section className="mx-auto max-w-7xl px-4 py-10">
//       <h1 className="mb-8 text-4xl font-bold">
//         My Bookings
//       </h1>

//       {bookings.length === 0 ? (
//         <div className="rounded-2xl border p-10 text-center">
//           No bookings found.
//         </div>
//       ) : (
//         <div className="grid gap-8">
//           {bookings.map((booking) => (
//             <div
//               key={booking._id}
//               className="overflow-hidden rounded-3xl border bg-white shadow-lg"
//             >
//               <div className="grid md:grid-cols-3">

//                 <div className="relative h-72">
//                   <Image
//                     src={booking.hotelId.images[0]}
//                     alt={booking.hotelId.title}
//                     fill
//                     sizes="(max-width:768px) 100vw, 33vw"
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="space-y-4 p-8 md:col-span-2">

//                   <div className="flex items-center justify-between">

//                     <div>
//                       <h2 className="text-2xl font-bold">
//                         {booking.hotelId.title}
//                       </h2>

//                       <div className="mt-2 flex items-center gap-2 text-gray-500">
//                         <MapPin size={18} />
//                         {booking.hotelId.location}
//                       </div>
//                     </div>

//                     <span
//                       className={`rounded-full px-4 py-2 text-sm font-semibold ${
//                         booking.status === "Confirmed"
//                           ? "bg-green-100 text-green-700"
//                           : booking.status === "Cancelled"
//                           ? "bg-red-100 text-red-700"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>

//                   </div>

//                   <div className="grid gap-4 md:grid-cols-3">

//                     <div className="flex items-center gap-2">
//                       <CalendarDays size={18} />
//                       <span>
//                         {new Date(
//                           booking.checkIn
//                         ).toLocaleDateString()}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <CalendarDays size={18} />
//                       <span>
//                         {new Date(
//                           booking.checkOut
//                         ).toLocaleDateString()}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Users size={18} />
//                       <span>{booking.guests} Guests</span>
//                     </div>

//                   </div>

//                   <div className="flex items-center justify-between">

//                     <div className="text-3xl font-bold text-primary">
//                       ৳{booking.totalPrice}
//                     </div>

//                     <button className="btn btn-error">
//                       Cancel Booking
//                     </button>

//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// } 
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Users } from "lucide-react";

import { getMyBookings } from "@/services/booking.service";
import { useSession } from "@/lib/auth-client";

interface Booking {
  _id: string;
  hotelId: {
    _id: string;
    title: string;
    location: string;
    images: string[];
  };
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Cancelled";
}

export default function MyBookingsPage() {
  const { data: session } = useSession();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      if (!session?.user?.id) {
        setLoading(false);
        return;
      }

      try {
        const data = await getMyBookings(session.user.id);

        setBookings(Array.isArray(data) ? data : data.bookings || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, [session]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="rounded-3xl border bg-white p-12 text-center shadow">
          <h2 className="text-2xl font-semibold">
            No Bookings Found
          </h2>

          <p className="mt-2 text-gray-500">
            You haven't booked any hotels yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="overflow-hidden rounded-3xl border bg-white shadow-lg"
            >
              <div className="grid md:grid-cols-3">
                <div className="relative h-72">
                  <Image
                    src={booking.hotelId.images?.[0] || "/hotel.jpg"}
                    alt={booking.hotelId.title}
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-5 p-8 md:col-span-2">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {booking.hotelId.title}
                      </h2>

                      <div className="mt-2 flex items-center gap-2 text-gray-500">
                        <MapPin size={18} />
                        {booking.hotelId.location}
                      </div>
                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} />
                      <span>
                        {new Date(
                          booking.checkIn
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} />
                      <span>
                        {new Date(
                          booking.checkOut
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>
                        {booking.guests} Guests
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="text-3xl font-bold text-primary">
                      ৳{booking.totalPrice}
                    </div>

                    <button
                      disabled={
                        booking.status === "Cancelled"
                      }
                      className="btn btn-error"
                    >
                      {booking.status === "Cancelled"
                        ? "Cancelled"
                        : "Cancel Booking"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}