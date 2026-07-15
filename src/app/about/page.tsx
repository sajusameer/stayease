import { Award, Building2, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-primary badge-lg">
            About Us
          </span>

          <h1 className="mt-4 text-5xl font-bold text-slate-800">
            Welcome to StayEase
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            StayEase is a modern hotel booking platform designed to
            help travelers discover, compare, and reserve hotels
            across Bangladesh with a fast, secure, and seamless
            booking experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Building2 className="mx-auto text-sky-600" size={40} />
            <h3 className="mt-5 text-xl font-bold">
              Premium Hotels
            </h3>
            <p className="mt-3 text-slate-600">
              Carefully selected hotels from the best destinations.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <ShieldCheck className="mx-auto text-sky-600" size={40} />
            <h3 className="mt-5 text-xl font-bold">
              Secure Booking
            </h3>
            <p className="mt-3 text-slate-600">
              Safe and reliable booking with secure authentication.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Users className="mx-auto text-sky-600" size={40} />
            <h3 className="mt-5 text-xl font-bold">
              Customer Support
            </h3>
            <p className="mt-3 text-slate-600">
              Friendly support team available whenever you need help.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Award className="mx-auto text-sky-600" size={40} />
            <h3 className="mt-5 text-xl font-bold">
              Trusted Service
            </h3>
            <p className="mt-3 text-slate-600">
              Hundreds of happy travelers trust StayEase every day.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}