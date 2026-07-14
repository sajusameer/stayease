// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Booking from "@/models/Booking";

// // GET All Bookings
// export async function GET() {
//   try {
//     await connectDB();

//     const bookings = await Booking.find()
//       .populate("hotelId")
//       .sort({ createdAt: -1 });

//     return NextResponse.json(bookings);
//   } catch (error) {
//     console.error("GET Bookings Error:", error);

//     return NextResponse.json(
//       { message: "Failed to fetch bookings." },
//       { status: 500 }
//     );
//   }
// }

// // Create Booking
// export async function POST(request: Request) {
//   try {
//     await connectDB();

//     const body = await request.json();
//      console.log("Booking Body:", body);
//     const booking = await Booking.create(body);

//     return NextResponse.json(booking, {
//       status: 201,
//     });
//   // } catch (error) {
//   //   console.error("POST Booking Error:", error);

//   //   return NextResponse.json(
//   //     { message: "Failed to create booking." },
//   //     { status: 500 }
//   //   );
//   // }
// //   } catch (error) {
// //   console.error("POST Booking Error:", error);

// //   return NextResponse.json(
// //     {
// //       message: "Failed to create booking.",
// //       error: error instanceof Error ? error.message : String(error),
// //     },
// //     { status: 500 }
// //   );
// // }
// } catch (error: any) {
//   console.error("POST Booking Error:", error);

//   if (error.name === "ValidationError") {
//     return NextResponse.json(
//       {
//         message: "Validation failed",
//         errors: Object.values(error.errors).map(
//           (err: any) => err.message
//         ),
//       },
//       { status: 400 }
//     );
//   }

//   return NextResponse.json(
//     {
//       message: "Failed to create booking.",
//       error: error.message,
//     },
//     { status: 500 }
//   );
// }
// } 
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

// GET Bookings
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    const query: Record<string, unknown> = {};

    if (userId) {
      query.userId = userId;
    }

    const bookings = await Booking.find(query)
      .populate("hotelId")
      .sort({ createdAt: -1 });

    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("GET Bookings Error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch bookings.",
      },
      {
        status: 500,
      }
    );
  }
}

// Create Booking
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    console.log("Booking Body:", body);

    const booking = await Booking.create(body);

    return NextResponse.json(booking, {
      status: 201,
    });
  } catch (error: any) {
    console.error("POST Booking Error:", error);

    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: Object.values(error.errors).map(
            (err: any) => err.message
          ),
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Failed to create booking.",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}