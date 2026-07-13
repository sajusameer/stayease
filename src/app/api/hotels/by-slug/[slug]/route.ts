import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Hotel from "@/models/Hotel";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

   console.log("Requested slug:", slug);

const hotel = await Hotel.findOne({ slug });

console.log("Hotel:", hotel);

    if (!hotel) {
      return NextResponse.json(
        { message: "Hotel not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}