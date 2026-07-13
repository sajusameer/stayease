import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Hotel from "@/models/Hotel";

// GET Single Hotel
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return NextResponse.json(
        { message: "Hotel not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

// DELETE Hotel
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const hotel = await Hotel.findByIdAndDelete(id);

    if (!hotel) {
      return NextResponse.json(
        { message: "Hotel not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Hotel deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}