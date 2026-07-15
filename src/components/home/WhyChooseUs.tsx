import {
  Hotel,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Luxury Hotels",
    description:
      "Carefully selected premium hotels and resorts across Bangladesh.",
    icon: Hotel,
  },
  {
    title: "Best Price Guarantee",
    description:
      "Get the best rates with transparent pricing and no hidden fees.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is always available to help with your bookings.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-lg">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Travel With Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We make hotel booking simple, secure, and
            enjoyable with trusted accommodations and
            exceptional service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}