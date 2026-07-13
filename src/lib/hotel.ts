import { connectDB } from "@/lib/db";
import Hotel from "@/models/Hotel";

export async function getHotelBySlug(slug: string) {
  await connectDB();

  const hotel = await Hotel.findOne({ slug }).lean();

  return hotel;
}