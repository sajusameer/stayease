import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Star,
  Wifi,
  CheckCircle,
} from "lucide-react";

// import { getHotel } from "@/services/hotel.service";
import { getHotelBySlug } from "@/lib/hotel";
import Container from "@/components/common/Container";
import BookingForm from "@/components/booking/BookingForm";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HotelDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

const hotel = await getHotelBySlug(slug);

  if (!hotel) {
    notFound();
  }

  return (
    <section className="py-16">
      <Container>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

          <div className="relative h-[500px] w-full">
            <Image
              src={hotel.images[0]}
              alt={hotel.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8 p-8">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h1 className="text-4xl font-bold">
                  {hotel.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {hotel.location}
                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center justify-end gap-2 text-yellow-500">
                  <Star fill="currentColor" />
                  <span className="text-lg font-bold">
                    {hotel.rating}
                  </span>
                </div>

                <h2 className="mt-3 text-4xl font-bold text-blue-600">
                  ৳{hotel.pricePerNight}
                </h2>

                <p className="text-slate-500">
                  per night
                </p>

              </div>

            </div>

            <div>

              <h3 className="mb-3 text-2xl font-bold">
                Description
              </h3>

              <p className="leading-8 text-slate-600">
                {hotel.description}
              </p>

            </div>

            <div>

              <h3 className="mb-4 text-2xl font-bold">
                Amenities
              </h3>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {hotel.amenities.map(
                  (item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border p-4"
                    >
                      <CheckCircle
                        size={20}
                        className="text-green-500"
                      />

                      <span>{item}</span>
                    </div>
                  )
                )}

              </div>

            </div>

            <div className="rounded-2xl bg-slate-50 p-8">

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Ready to book?
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Reserve your stay today and enjoy
                    a premium hotel experience.
                  </p>

                </div>

                {/* <button className="btn btn-primary btn-lg rounded-xl">
                  Book Now
                </button> */}
                <BookingForm
              hotelId={String(hotel._id)}
              pricePerNight={hotel.pricePerNight}
            />

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}