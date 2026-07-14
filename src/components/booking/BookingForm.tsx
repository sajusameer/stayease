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
// "use client";

// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   createBooking,
//   BookingPayload,
// } from "@/services/booking.service";
// import { useSession } from "@/lib/auth-client";

// interface BookingFormProps {
//   hotelId: string;
//   pricePerNight: number;
// }

// export default function BookingForm({
//   hotelId,
//   pricePerNight,
// }: BookingFormProps) {
//   const { data: session } = useSession();
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // দিন সংখ্যা হিসাব করে totalPrice বের করার ফাংশন (অপশনাল কিন্তু প্রফেশনাল)
//   const calculateTotalPrice = () => {
//     if (!checkIn || !checkOut) return pricePerNight;
//     const start = new Date(checkIn);
//     const end = new Date(checkOut);
//     const timeDiff = end.getTime() - start.getTime();
//     const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return days > 0 ? days * pricePerNight : pricePerNight;
//   };

//   const handleBooking = async () => {
//      if (!session?.user?.id) {
//     toast.error("Please login first.");
//     return;
//   }
//     if (!checkIn || !checkOut) {
//       toast.error("Please select check-in and check-out dates.");
//       return;
//     }

//     if (new Date(checkIn) >= new Date(checkOut)) {
//       toast.error("Check-out date must be after check-in date.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const payload: BookingPayload = {
//         hotelId,
//         // ❌ সমস্যা ছিল: "" পাঠানো যাবে না। 
//         // ✅ সমাধান: আপাতত টেস্ট করার জন্য একটি ভ্যালিড ডামি MongoDB ObjectId দিন
//         userId: "65f1a2b3c4d5e6f7a8b9c0d1", 
//         checkIn: new Date(checkIn).toISOString(), // নিশ্চিত করুন ISO ফরম্যাট যাচ্ছে
//         checkOut: new Date(checkOut).toISOString(), // নিশ্চিত করুন ISO ফরম্যাট যাচ্ছে
//         guests: Number(guests), // Force Number
//         totalPrice: Number(calculateTotalPrice()), // Force Number
//       };

//       console.log("Submitting Payload: ", payload);
//       await createBooking(payload);

//       toast.success("Booking created successfully!");
//     } catch (error: any) {
//       console.error("Booking Error Details:", error);
//       // ব্যাকএন্ড যদি কোনো নির্দিষ্ট এরর মেসেজ পাঠায় তা দেখাবে
//       const errorMsg = error.response?.data?.message || "Booking failed.";
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
   

//     <div className="rounded-2xl border bg-white p-6 shadow-lg">
//       <h3 className="mb-5 text-2xl font-bold">
//       Book Your Stay
//     </h3>

//      <div className="space-y-4">
//        <input
//            type="date"
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
//         <div className="py-2 text-sm font-medium text-gray-700">
//             Total Price: <span className="text-lg font-bold text-primary">৳{calculateTotalPrice()}</span>
//             </div>
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
import { createBooking, BookingPayload } from "@/services/booking.service";
import { useSession } from "@/lib/auth-client";

interface BookingFormProps {
  hotelId: string;
  pricePerNight: number;
}

export default function BookingForm({
  hotelId,
  pricePerNight,
}: BookingFormProps) {
  const { data: session } = useSession();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  // দিন সংখ্যা হিসাব করে totalPrice বের করার ফাংশন
  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return pricePerNight;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days > 0 ? days * pricePerNight : pricePerNight;
  };

  // আজকের তারিখ বের করা যেন ইউজার অতীতের কোনো ডেট সিলেক্ট করতে না পারে
  const today = new Date().toISOString().split("T")[0];

  const handleBooking = async () => {
    // ১. ইউজার লগইন করা আছে কিনা চেক করা এবং সেশন আইডি ভ্যালিডেশন
    if (!session?.user?.id) {
      toast.error("Please login first to book a hotel.");
      return;
    }

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
        // ✅ ডামি আইডি বাদ দিয়ে সেশন থেকে রিয়েল ইউজার আইডি পাস করা হলো
        userId: session.user.id, 
        checkIn: new Date(checkIn).toISOString(),
        checkOut: new Date(checkOut).toISOString(),
        guests: Number(guests),
        totalPrice: Number(calculateTotalPrice()),
      };

      console.log("Submitting Payload: ", payload);
      await createBooking(payload);

      toast.success("Booking created successfully!");
      
      // সাকসেস হওয়ার পর ফর্ম রিসেট করা
      setCheckIn("");
      setCheckOut("");
      setGuests(1);
    } catch (error: any) {
      console.error("Booking Error Details:", error);
      const errorMsg = error.response?.data?.message || "Booking failed.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h3 className="mb-5 text-2xl font-bold text-slate-800">Book Your Stay</h3>

      <div className="space-y-4">
        {/* Check-in Date */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-slate-600">Check-in Date</span>
          </label>
          <input
            type="date"
            min={today} // আজকের দিনের আগের ডেট ব্লক করা
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input input-bordered w-full text-slate-700 focus:border-blue-50"
          />
        </div>

        {/* Check-out Date */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-slate-600">Check-out Date</span>
          </label>
          <input
            type="date"
            min={checkIn || today} // চেক-ইন ডেটের আগের ডেট ব্লক করা
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input input-bordered w-full text-slate-700"
          />
        </div>

        {/* Number of Guests */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-slate-600">Guests</span>
          </label>
          <input
            type="number"
            min={1}
            max={10} // আপনি চাইলে আপনার সর্বোচ্চ লিমিট সেট করতে পারেন
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="input input-bordered w-full text-slate-700"
          />
        </div>

        {/* Total Price Display */}
        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 py-3 text-sm font-medium text-slate-700">
          <span>Total Price:</span>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ৳{calculateTotalPrice()}
          </span>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleBooking}
          disabled={loading}
          className="btn bg-gradient-to-r from-blue-600 to-cyan-500 border-none text-white w-full hover:opacity-95"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Book Now"
          )}
        </button>
      </div>
    </div>
  );
}