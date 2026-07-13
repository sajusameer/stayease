import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

// GET All Bookings
export async function GET() {
  try {
    await connectDB();

    const bookings = await Booking.find()
      .populate("hotelId")
      .sort({ createdAt: -1 });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("GET Bookings Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch bookings." },
      { status: 500 }
    );
  }
}

// Create Booking
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const booking = await Booking.create(body);

    return NextResponse.json(booking, {
      status: 201,
    });
  } catch (error) {
    console.error("POST Booking Error:", error);

    return NextResponse.json(
      { message: "Failed to create booking." },
      { status: 500 }
    );
  }
}