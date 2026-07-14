import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import clientPromise from "@/lib/mongodb";

import Hotel from "@/models/Hotel";
import Booking from "@/models/Booking";

export async function GET() {
  try {
    await connectDB();

    const hotels = await Hotel.countDocuments();
    const bookings = await Booking.countDocuments();

    const client = await clientPromise;

    const users = await client
      .db()
      .collection("user")
      .countDocuments();

    return NextResponse.json({
      hotels,
      bookings,
      users,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load dashboard stats",
      },
      {
        status: 500,
      }
    );
  }
}