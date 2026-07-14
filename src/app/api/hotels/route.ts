import { NextRequest, NextResponse } from "next/server";
import Hotel from "@/models/Hotel";
import { connectDB } from "@/lib/db";

// GET All Hotels
// export async function GET(request: NextRequest) {
//   try {
//     await connectDB();

//     const searchParams = request.nextUrl.searchParams;

//     const featured = searchParams.get("featured");
//     const category = searchParams.get("category");
//     const location = searchParams.get("location");

//     const query: Record<string, unknown> = {};

//     if (featured === "true") {
//       query.featured = true;
//     }

//     if (category) {
//       query.category = category;
//     }

//     if (location) {
//       query.location = location;
//     }

//     const hotels = await Hotel.find(query).sort({
//       createdAt: -1,
//     });

//     return NextResponse.json(hotels);
//   } catch (error) {
//     console.error("GET Hotels Error:", error);

//     return NextResponse.json(
//       {
//         message: "Failed to fetch hotels.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
// GET All Hotels
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;

    const featured = searchParams.get("featured");
    const category = searchParams.get("category");
    const location = searchParams.get("location");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort");

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 8;

    const skip = (page - 1) * limit;

    const query: Record<string, any> = {};

    if (featured === "true") {
      query.featured = true;
    }

    if (category) {
      query.category = category;
    }

    if (location) {
      query.location = location;
    }

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    let sortOption: Record<string, 1 | -1> = {
      createdAt: -1,
    };

    switch (sort) {
      case "price-low":
        sortOption = {
          pricePerNight: 1,
        };
        break;

      case "price-high":
        sortOption = {
          pricePerNight: -1,
        };
        break;

      case "rating":
        sortOption = {
          rating: -1,
        };
        break;

      default:
        sortOption = {
          createdAt: -1,
        };
    }

    const total = await Hotel.countDocuments(query);

    const hotels = await Hotel.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      hotels,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET Hotels Error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch hotels.",
      },
      {
        status: 500,
      }
    );
  }
}

// POST Hotel
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    // Generate SEO-friendly slug
    body.slug = body.title
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    // TODO: Replace with logged-in user id later
    body.createdBy = "";

    const hotel = await Hotel.create(body);

    return NextResponse.json(hotel, {
      status: 201,
    });
  } catch (error) {
    console.error("POST Hotel Error:", error);

    return NextResponse.json(
      {
        message: "Failed to create hotel.",
      },
      {
        status: 500,
      }
    );
  }
}