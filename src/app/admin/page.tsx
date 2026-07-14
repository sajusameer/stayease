// import {
//   Hotel,
//   CalendarDays,
//   Users,
// } from "lucide-react";

// import DashboardChart from "@/components/admin/DashboardChart";

// export default function AdminDashboard() {
//   return (
//     <section className="space-y-8">

//       <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
//         <h1 className="text-4xl font-bold">
//           Admin Dashboard
//         </h1>

//         <p className="mt-2 text-blue-100">
//           Manage hotels, bookings and users.
//         </p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-3">

//         <div className="rounded-2xl bg-white p-6 shadow">
//           <Hotel className="mb-4 text-blue-600" size={34} />
//           <p className="text-gray-500">Total Hotels</p>
//           <h2 className="mt-2 text-3xl font-bold">0</h2>
//         </div>

//         <div className="rounded-2xl bg-white p-6 shadow">
//           <CalendarDays
//             className="mb-4 text-cyan-600"
//             size={34}
//           />
//           <p className="text-gray-500">Bookings</p>
//           <h2 className="mt-2 text-3xl font-bold">0</h2>
//         </div>

//         <div className="rounded-2xl bg-white p-6 shadow">
//           <Users
//             className="mb-4 text-indigo-600"
//             size={34}
//           />
//           <p className="text-gray-500">Users</p>
//           <h2 className="mt-2 text-3xl font-bold">0</h2>
//         </div>
//         <div className="mt-10">
//         <DashboardChart />
//       </div>

//       </div>

//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Hotel,
  CalendarDays,
  Users,
} from "lucide-react";

import DashboardChart from "@/components/admin/DashboardChart";

interface Stats {
  hotels: number;
  bookings: number;
  users: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    hotels: 0,
    bookings: 0,
    users: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await axios.get("/api/admin/stats");
        setStats(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <section className="space-y-8">

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Manage hotels, bookings and users.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow">
          <Hotel className="mb-4 text-blue-600" size={34} />
          <p className="text-gray-500">Total Hotels</p>

          <h2 className="mt-2 text-3xl font-bold">
            {loading ? "..." : stats.hotels}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <CalendarDays
            className="mb-4 text-cyan-600"
            size={34}
          />
          <p className="text-gray-500">Bookings</p>

          <h2 className="mt-2 text-3xl font-bold">
            {loading ? "..." : stats.bookings}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <Users
            className="mb-4 text-indigo-600"
            size={34}
          />
          <p className="text-gray-500">Users</p>

          <h2 className="mt-2 text-3xl font-bold">
            {loading ? "..." : stats.users}
          </h2>
        </div>

      </div>

      <DashboardChart />

    </section>
  );
}