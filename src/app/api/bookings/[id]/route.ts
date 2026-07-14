import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

// GET Single Booking
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const booking = await Booking.findById(id).populate("hotelId");

    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("GET Booking Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch booking." },
      { status: 500 }
    );
  }
}

// UPDATE Booking
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const booking = await Booking.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("hotelId");

    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("PUT Booking Error:", error);

    return NextResponse.json(
      { message: "Failed to update booking." },
      { status: 500 }
    );
  }
}

// DELETE Booking
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Booking deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE Booking Error:", error);

    return NextResponse.json(
      { message: "Failed to delete booking." },
      { status: 500 }
    );
  }
}