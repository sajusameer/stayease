import Link from "next/link";
import {
  CalendarDays,
  Hotel,
  User,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <section className="space-y-8">

      {/* Welcome */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Manage your bookings and profile from your dashboard.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
            <CalendarDays className="text-blue-600" />
          </div>

          <p className="text-gray-500">
            Total Bookings
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
            <Hotel className="text-cyan-600" />
          </div>

          <p className="text-gray-500">
            Upcoming Stays
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
            <User className="text-indigo-600" />
          </div>

          <p className="text-gray-500">
            Profile Status
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            Active
          </h2>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="rounded-3xl bg-white p-8 shadow-md">

        <h2 className="mb-6 text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          <Link
            href="/hotels"
            className="group rounded-2xl border p-6 transition hover:border-blue-500 hover:shadow-lg"
          >
            <Hotel className="mb-4 text-blue-600" size={30} />

            <h3 className="text-xl font-semibold">
              Browse Hotels
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Explore available hotels and resorts.
            </p>

            <div className="mt-5 flex items-center gap-2 text-blue-600">
              Explore
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          <Link
            href="/dashboard/my-bookings"
            className="group rounded-2xl border p-6 transition hover:border-blue-500 hover:shadow-lg"
          >
            <CalendarDays
              className="mb-4 text-blue-600"
              size={30}
            />

            <h3 className="text-xl font-semibold">
              My Bookings
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View and manage your bookings.
            </p>

            <div className="mt-5 flex items-center gap-2 text-blue-600">
              View
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          <Link
            href="/dashboard/profile"
            className="group rounded-2xl border p-6 transition hover:border-blue-500 hover:shadow-lg"
          >
            <User
              className="mb-4 text-blue-600"
              size={30}
            />

            <h3 className="text-xl font-semibold">
              Profile
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Update your personal information.
            </p>

            <div className="mt-5 flex items-center gap-2 text-blue-600">
              Open
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}