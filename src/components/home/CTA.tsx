import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Discover luxury hotels, book your stay in minutes,
            and enjoy a seamless travel experience.
          </p>

          <Link
            href="/hotels"
            className="btn btn-white mt-8"
          >
            Browse Hotels
          </Link>

        </div>

      </div>
    </section>
  );
}