"use client";

import { Mail, ShieldCheck, CalendarDays, User } from "lucide-react";

export default function ProfilePage() {
  // পরে Better Auth session থেকে আসবে
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    joined: "July 2026",
  };

  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">My Profile</h1>
        <p className="mt-2 text-gray-500">
          Manage your account information.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-md">

        <div className="flex flex-col items-center gap-6 md:flex-row">

          {/* Avatar */}
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <User size={60} />
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-4">

            <div className="flex items-center gap-3">
              <User className="text-blue-600" />
              <span className="text-lg font-medium">
                {user.name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" />
              <span>{user.role}</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-blue-600" />
              <span>Joined {user.joined}</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}