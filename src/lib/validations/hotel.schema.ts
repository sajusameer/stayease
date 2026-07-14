// import { z } from "zod";

// export const hotelSchema = z.object({
//   title: z.string().min(3, "Hotel name is required"),

//   location: z.string().min(2, "Location is required"),

//   category: z.enum([
//     "Luxury",
//     "Resort",
//     "Business",
//     "Budget",
//     "Boutique",
//   ]),

//   pricePerNight: z.coerce
//     .number()
//     .min(1, "Price must be greater than 0"),

//   rating: z.coerce
//     .number()
//     .min(1)
//     .max(5),

//   shortDescription: z
//     .string()
//     .min(10, "Short description is too short"),

//   description: z
//     .string()
//     .min(30, "Description is too short"),

//   image: z.url("Please enter a valid image URL"),

//   amenities: z.string(),

//   featured: z.boolean().default(false),
// });

// export type HotelFormData = z.infer<typeof hotelSchema>;
// import { z } from "zod";

// export const hotelSchema = z.object({
//   title: z.string().min(3, "Hotel name is required"),

//   location: z.string().min(2, "Location is required"),

//   category: z.enum([
//     "Luxury",
//     "Resort",
//     "Business",
//     "Budget",
//     "Boutique",
//   ]),

//   pricePerNight: z.coerce
//     .number()
//     .min(1, "Price must be greater than 0"),

//   rating: z.coerce
//     .number()
//     .min(1)
//     .max(5)
//     .default(5), // সেফসাইড হিসেবে ডিফল্ট ৫ দিয়ে রাখা ভালো

//   shortDescription: z
//     .string()
//     .min(10, "Short description is too short"),

//   description: z
//     .string()
//     .min(30, "Description is too short"),

//   // ❌ ভুল ছিল: z.url()
//   // ✅ সমাধান: z.string().url() ব্যবহার করা হয়েছে
//   image: z.string().url("Please enter a valid image URL"),

//   amenities: z.string(),

//   featured: z.boolean().default(false),
// });

// export type HotelFormData = z.infer<typeof hotelSchema>; 
import { z } from "zod";

export const hotelSchema = z.object({
  title: z.string().min(3, "Hotel name is required"),

  location: z.string().min(2, "Location is required"),

  category: z.enum([
    "Luxury",
    "Resort",
    "Business",
    "Budget",
    "Boutique",
  ]),

  // // ✅ টাইপ-সেফ নাম্বার ভ্যালিডেশন
  // pricePerNight: z.number().min(1, "Price must be greater than 0"),

  // // ✅ স্কিমা থেকে default বাদ দিয়ে সরাসরি নাম্বার রাখা হয়েছে
  // rating: z.number().min(1).max(5),
// pricePerNight: z.coerce.number().min(1, "Price must be greater than 0"),
// rating: z.coerce.number().min(1).max(5),
pricePerNight: z.number().min(1, "Price must be greater than 0"),
  rating: z.number().min(1).max(5),
  shortDescription: z
    .string()
    .min(10, "Short description is too short"),

  description: z
    .string()
    .min(30, "Description is too short"),

  image: z.string().url("Please enter a valid image URL"),

  amenities: z.string(),

  featured: z.boolean(),
});

export type HotelFormData = z.infer<typeof hotelSchema>;