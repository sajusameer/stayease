// "use client";

// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   createBooking,
//   BookingPayload,
// } from "@/services/booking.service";

// interface BookingFormProps {
//   hotelId: string;
//   pricePerNight: number;
// }

// export default function BookingForm({
//   hotelId,
//   pricePerNight,
// }: BookingFormProps) {
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const handleBooking = async () => {
//     if (!checkIn || !checkOut) {
//       toast.error("Please select check-in and check-out dates.");
//       return;
//     }

//     setLoading(true);

//     try {
       
//       const payload: BookingPayload = {
//         hotelId,
//         userId: "", // পরে Better Auth থেকে আসবে
//         checkIn,
//         checkOut,
//         guests,
//         totalPrice: pricePerNight,
//       };
//       console.log(payload);
//       await createBooking(payload);

//       toast.success("Booking created successfully!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Booking failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="rounded-2xl border bg-white p-6 shadow-lg">
//       <h3 className="mb-5 text-2xl font-bold">
//         Book Your Stay
//       </h3>

//       <div className="space-y-4">
//         <input
//           type="date"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//           className="input input-bordered w-full"
//         />

//         <input
//           type="date"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//           className="input input-bordered w-full"
//         />

//         <input
//           type="number"
//           min={1}
//           value={guests}
//           onChange={(e) => setGuests(Number(e.target.value))}
//           className="input input-bordered w-full"
//         />

//         <button
//           onClick={handleBooking}
//           disabled={loading}
//           className="btn btn-primary w-full"
//         >
//           {loading ? "Booking..." : "Book Now"}
//         </button>
//       </div>
//     </div>
//   );
// }  
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

  // দিন সংখ্যা হিসাব করে totalPrice বের করার ফাংশন (অপশনাল কিন্তু প্রফেশনাল)
  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return pricePerNight;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days > 0 ? days * pricePerNight : pricePerNight;
  };

  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      toast.error("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);

    try {
      const payload: BookingPayload = {
        hotelId,
        // ❌ সমস্যা ছিল: "" পাঠানো যাবে না। 
        // ✅ সমাধান: আপাতত টেস্ট করার জন্য একটি ভ্যালিড ডামি MongoDB ObjectId দিন
        userId: "65f1a2b3c4d5e6f7a8b9c0d1", 
        checkIn: new Date(checkIn).toISOString(), // নিশ্চিত করুন ISO ফরম্যাট যাচ্ছে
        checkOut: new Date(checkOut).toISOString(), // নিশ্চিত করুন ISO ফরম্যাট যাচ্ছে
        guests: Number(guests), // Force Number
        totalPrice: Number(calculateTotalPrice()), // Force Number
      };

      console.log("Submitting Payload: ", payload);
      await createBooking(payload);

      toast.success("Booking created successfully!");
    } catch (error: any) {
      console.error("Booking Error Details:", error);
      // ব্যাকএন্ড যদি কোনো নির্দিষ্ট এরর মেসেজ পাঠায় তা দেখাবে
      const errorMsg = error.response?.data?.message || "Booking failed.";
      toast.error(errorMsg);
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
        <div className="py-2 text-sm font-medium text-gray-700">
            Total Price: <span className="text-lg font-bold text-primary">৳{calculateTotalPrice()}</span>
            </div>
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