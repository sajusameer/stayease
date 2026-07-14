"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  User,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Bookings",
      href: "/dashboard/my-bookings",
      icon: CalendarDays,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-7xl">

        {/* Sidebar */}
        <aside className="sticky top-0 h-screen w-72 border-r bg-white p-6">

          <h2 className="mb-10 text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Dashboard
          </h2>

          <nav className="space-y-2">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    pathname === menu.href
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={20} />
                  {menu.name}
                </Link>
              );
            })}
          </nav>

        </aside>

        {/* Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </section>
  );
}