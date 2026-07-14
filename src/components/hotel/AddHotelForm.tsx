// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { createHotel } from "@/services/hotel.service";
// import { toast } from "sonner";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "@/lib/auth-client";

// import {
//   hotelSchema,
//   type HotelFormData,
// } from "@/lib/validations/hotel.schema";

// export default function AddHotelForm() {
//   const { data: session, isPending } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isPending) {
//       if (!session) {
//         router.replace("/login");
//       } else if ((session.user as any).role !== "admin") {
//         router.replace("/");
//       }
//     }
//   }, [session, isPending, router]);

//   if (isPending) {
//     return <div>Loading...</div>;
//   }
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<HotelFormData>({
//     resolver: zodResolver(hotelSchema),
//     defaultValues: {
//       featured: false,
//       rating: 5,
//     },
//   });

// //   const onSubmit = async (data: HotelFormData) => {
// //     console.log(data);
// //   };
// const onSubmit = async (data: HotelFormData) => {
//   try {
//     const payload = {
//       title: data.title,
//       location: data.location,
//       category: data.category,
//       pricePerNight: data.pricePerNight,
//       rating: data.rating,
//       shortDescription: data.shortDescription,
//       description: data.description,
//       images: [data.image],
//       amenities: data.amenities
//         .split(",")
//         .map((item) => item.trim())
//         .filter(Boolean),
//       featured: data.featured,
//     };

//     await createHotel(payload);

//     toast.success("Hotel added successfully!");
//   } catch (error) {
//     console.error(error);
//     toast.error("Failed to add hotel.");
//   }
// };
//   return (
//     <section className="py-10">
//       <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">
//             Add New Hotel
//           </h1>

//           <p className="mt-2 text-slate-500">
//             Fill in the hotel information below.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-6"
//         >

//           <div className="grid gap-6 md:grid-cols-2">

//             {/* Hotel Name */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Hotel Name
//               </label>

//               <input
//                 {...register("title")}
//                 className="input input-bordered w-full"
//                 placeholder="Sea Pearl Resort"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.title?.message}
//               </p>
//             </div>

//             {/* Location */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Location
//               </label>

//               <input
//                 {...register("location")}
//                 className="input input-bordered w-full"
//                 placeholder="Cox's Bazar"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.location?.message}
//               </p>
//             </div>

//             {/* Category */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Category
//               </label>

//               <select
//                 {...register("category")}
//                 className="select select-bordered w-full"
//               >
//                 <option value="">Select Category</option>
//                 <option value="Luxury">Luxury</option>
//                 <option value="Resort">Resort</option>
//                 <option value="Business">Business</option>
//                 <option value="Budget">Budget</option>
//                 <option value="Boutique">Boutique</option>
//               </select>

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.category?.message}
//               </p>
//             </div>

//             {/* Price */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Price Per Night
//               </label>

//               <input
//                 type="number"
//                 {...register("pricePerNight")}
//                 className="input input-bordered w-full"
//                 placeholder="5000"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.pricePerNight?.message}
//               </p>
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Rating
//               </label>

//               <input
//                 type="number"
//                 step="0.1"
//                 min="1"
//                 max="5"
//                 {...register("rating")}
//                 className="input input-bordered w-full"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.rating?.message}
//               </p>
//             </div>

//             {/* Image URL */}
//             <div>
//               <label className="mb-2 block font-medium">
//                 Image URL
//               </label>

//               <input
//                 {...register("image")}
//                 className="input input-bordered w-full"
//                 placeholder="https://..."
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.image?.message}
//               </p>
//             </div>

//           </div>

//           {/* Amenities */}
//           <div>
//             <label className="mb-2 block font-medium">
//               Amenities
//             </label>

//             <input
//               {...register("amenities")}
//               className="input input-bordered w-full"
//               placeholder="WiFi, Pool, Breakfast, Parking"
//             />

//             <p className="mt-1 text-sm text-red-500">
//               {errors.amenities?.message}
//             </p>
//           </div>

//           {/* Short Description */}
//           <div>
//             <label className="mb-2 block font-medium">
//               Short Description
//             </label>

//             <textarea
//               {...register("shortDescription")}
//               className="textarea textarea-bordered w-full"
//               rows={3}
//             />

//             <p className="mt-1 text-sm text-red-500">
//               {errors.shortDescription?.message}
//             </p>
//           </div>

//           {/* Full Description */}
//           <div>
//             <label className="mb-2 block font-medium">
//               Full Description
//             </label>

//             <textarea
//               {...register("description")}
//               className="textarea textarea-bordered w-full"
//               rows={6}
//             />

//             <p className="mt-1 text-sm text-red-500">
//               {errors.description?.message}
//             </p>
//           </div>

//           {/* Featured */}
//           <label className="label cursor-pointer justify-start gap-3">
//             <input
//               type="checkbox"
//               {...register("featured")}
//               className="checkbox checkbox-primary"
//             />

//             <span className="font-medium">
//               Featured Hotel
//             </span>
//           </label>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="btn w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
//           >
//             {isSubmitting ? "Adding..." : "Add Hotel"}
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// } 
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createHotel } from "@/services/hotel.service";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import {
  hotelSchema,
  type HotelFormData,
} from "@/lib/validations/hotel.schema";

export default function AddHotelForm() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        router.replace("/login");
      } else if ((session.user as any).role !== "admin") {
        router.replace("/");
      }
    }
  }, [session, isPending, router]);

  // ✅ সমাধান: useForm-এর defaultValues-এ সব কটি ফিল্ড তাদের সঠিক টাইপ অনুযায়ী ডিফাইন করা হলো
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HotelFormData>({
    resolver: zodResolver(hotelSchema),
    defaultValues: {
      title: "",
      location: "",
      category: undefined, // এনাম ভ্যালুর জন্য ডিফল্ট undefined রাখা নিরাপদ
      pricePerNight: 0,    // z.coerce.number() এর সাথে ম্যাচ করার জন্য number টাইপ
      rating: 5,           // z.coerce.number() এর সাথে ম্যাচ করার জন্য number টাইপ
      image: "",
      amenities: "",
      shortDescription: "",
      description: "",
      featured: false,
    },
  });

  if (isPending) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const onSubmit = async (data: HotelFormData) => {
    try {
      const payload = {
        title: data.title,
        location: data.location,
        category: data.category,
        pricePerNight: data.pricePerNight,
        rating: data.rating,
        shortDescription: data.shortDescription,
        description: data.description,
        images: [data.image],
        amenities: data.amenities
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        featured: data.featured,
      };

      await createHotel(payload);
      toast.success("Hotel added successfully!");
      
      // হোটেল সফলভাবে অ্যাড হওয়ার পর ফর্মটি খালি করার জন্য
      reset(); 
    } catch (error) {
      console.error(error);
      toast.error("Failed to add hotel.");
    }
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Add New Hotel</h1>
          <p className="mt-2 text-slate-500">
            Fill in the hotel information below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Hotel Name */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Hotel Name</label>
              <input
                {...register("title")}
                className="input input-bordered w-full text-slate-700"
                placeholder="Sea Pearl Resort"
              />
              {errors.title?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Location</label>
              <input
                {...register("location")}
                className="input input-bordered w-full text-slate-700"
                placeholder="Cox's Bazar"
              />
              {errors.location?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Category</label>
              <select
                {...register("category")}
                className="select select-bordered w-full text-slate-700"
              >
                <option value="">Select Category</option>
                <option value="Luxury">Luxury</option>
                <option value="Resort">Resort</option>
                <option value="Business">Business</option>
                <option value="Budget">Budget</option>
                <option value="Boutique">Boutique</option>
              </select>
              {errors.category?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Price Per Night</label>
              {/* <input
                type="number"
                {...register("pricePerNight")}
                className="input input-bordered w-full text-slate-700"
                placeholder="5000"
              /> */}
              <input
            type="number"
            {...register("pricePerNight", { valueAsNumber: true })} // ✅ এই অংশটি মাস্ট যোগ করুন
            className="input input-bordered w-full text-slate-700"
            placeholder="5000"
          />
              {errors.pricePerNight?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.pricePerNight.message}</p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Rating</label>
              {/* <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                {...register("rating")}
                className="input input-bordered w-full text-slate-700"
              /> */}
              <input
           type="number"
                step="0.1"
                min="1"
                max="5"
          {...register("pricePerNight", { valueAsNumber: true })} // ✅ এই অংশটি মাস্ট যোগ করুন
          className="input input-bordered w-full text-slate-700"
          placeholder="5000"
        />
              {errors.rating?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">Image URL</label>
              <input
                {...register("image")}
                className="input input-bordered w-full text-slate-700"
                placeholder="https://..."
              />
              {errors.image?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">Amenities</label>
            <input
              {...register("amenities")}
              className="input input-bordered w-full text-slate-700"
              placeholder="WiFi, Pool, Breakfast, Parking"
            />
            {errors.amenities?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.amenities.message}</p>
            )}
          </div>

          {/* Short Description */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">Short Description</label>
            <textarea
              {...register("shortDescription")}
              className="textarea textarea-bordered w-full text-slate-700"
              rows={3}
            />
            {errors.shortDescription?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.shortDescription.message}</p>
            )}
          </div>

          {/* Full Description */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">Full Description</label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered w-full text-slate-700"
              rows={6}
            />
            {errors.description?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Featured */}
          <label className="label cursor-pointer justify-start gap-3 w-fit">
            <input
              type="checkbox"
              {...register("featured")}
              className="checkbox checkbox-primary"
            />
            <span className="font-medium text-slate-700">Featured Hotel</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn w-full bg-gradient-to-r from-blue-600 to-cyan-500 border-none text-white hover:opacity-95"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Add Hotel"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}