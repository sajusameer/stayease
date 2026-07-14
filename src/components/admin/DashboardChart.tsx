"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Stats {
  hotels: number;
  bookings: number;
  users: number;
}

export default function DashboardChart() {
  const [stats, setStats] = useState<Stats>({
    hotels: 0,
    bookings: 0,
    users: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const res = await axios.get("/api/admin/stats");
      setStats(res.data);
    }

    loadStats();
  }, []);

  const data = [
    {
      name: "Hotels",
      value: stats.hotels,
    },
    {
      name: "Bookings",
      value: stats.bookings,
    },
    {
      name: "Users",
      value: stats.users,
    },
  ];

  return (
    <div className="rounded-3xl border bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        System Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}