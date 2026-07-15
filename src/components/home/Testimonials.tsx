import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Rahman",
    location: "Dhaka",
    review:
      "Amazing experience! The booking process was smooth, and the hotel exceeded my expectations.",
  },
  {
    name: "Nusrat Jahan",
    location: "Chattogram",
    review:
      "Very easy to find hotels and compare prices. Customer support was also very helpful.",
  },
  {
    name: "Sakib Hasan",
    location: "Sylhet",
    review:
      "Clean interface, secure booking, and great hotel recommendations. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-lg">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-500">
            Thousands of travelers trust us for their hotel bookings.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="italic leading-7 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}