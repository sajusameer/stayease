// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Hotel from "@/models/Hotel";

// // GET Single Hotel
// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const hotel = await Hotel.findById(id);

//     if (!hotel) {
//       return NextResponse.json(
//         { message: "Hotel not found." },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(hotel);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { message: "Something went wrong." },
//       { status: 500 }
//     );
//   }
// }

// // DELETE Hotel
// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const hotel = await Hotel.findByIdAndDelete(id);

//     if (!hotel) {
//       return NextResponse.json(
//         { message: "Hotel not found." },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Hotel deleted successfully.",
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { message: "Something went wrong." },
//       { status: 500 }
//     );
//   }
// } 
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
    console.error("GET Hotel Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch hotel." },
      { status: 500 }
    );
  }
}

// UPDATE Hotel
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    if (body.title) {
      body.slug = body.title
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }

    const hotel = await Hotel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!hotel) {
      return NextResponse.json(
        { message: "Hotel not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("PUT Hotel Error:", error);

    return NextResponse.json(
      { message: "Failed to update hotel." },
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
    console.error("DELETE Hotel Error:", error);

    return NextResponse.json(
      { message: "Failed to delete hotel." },
      { status: 500 }
    );
  }
}