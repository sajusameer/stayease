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

  pricePerNight: z.coerce
    .number()
    .min(1, "Price must be greater than 0"),

  rating: z.coerce
    .number()
    .min(1)
    .max(5),

  shortDescription: z
    .string()
    .min(10, "Short description is too short"),

  description: z
    .string()
    .min(30, "Description is too short"),

  image: z.url("Please enter a valid image URL"),

  amenities: z.string(),

  featured: z.boolean().default(false),
});

export type HotelFormData = z.infer<typeof hotelSchema>;