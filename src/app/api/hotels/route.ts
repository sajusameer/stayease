import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/Hotel";
import { connectDB } from "@/lib/db";

// GET All Hotels
export async function GET() {
  try {
    await connectDB();

    const hotels = await Hotel.find().sort({ createdAt: -1 });

    return NextResponse.json(hotels, { status: 200 });
  } catch (error) {
    console.error("GET Hotels Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch hotels." },
      { status: 500 }
    );
  }
}

// POST Hotel
export async function POST(request: Request) {
  try {
    await connectDB();

    // const body = await request.json();

    // const hotel = await Hotel.create(body);
    const body = await request.json();

body.slug = body.title
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "-");

body.createdBy = "";

const hotel = await Hotel.create(body);

    return NextResponse.json(hotel, { status: 201 });
  } catch (error) {
    console.error("POST Hotel Error:", error);

    return NextResponse.json(
      { message: "Failed to create hotel." },
      { status: 500 }
    );
  }
}