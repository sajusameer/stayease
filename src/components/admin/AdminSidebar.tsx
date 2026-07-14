// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   LayoutDashboard,
//   Hotel,
//   CalendarDays,
//   Users,
// } from "lucide-react";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   const menus = [
//     {
//       name: "Dashboard",
//       href: "/admin",
//       icon: LayoutDashboard,
//     },
//     {
//       name: "Hotels",
//       href: "/admin/hotels",
//       icon: Hotel,
//     },
//     {
//       name: "Bookings",
//       href: "/admin/bookings",
//       icon: CalendarDays,
//     },
//     {
//       name: "Users",
//       href: "/admin/users",
//       icon: Users,
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-slate-50">
//       <div className="mx-auto flex max-w-7xl">

//         <aside className="sticky top-0 h-screen w-72 border-r bg-white p-6">

//           <h2 className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">
//             Admin Panel
//           </h2>

//           <nav className="space-y-2">
//             {menus.map((menu) => {
//               const Icon = menu.icon;

//               return (
//                 <Link
//                   key={menu.href}
//                   href={menu.href}
//                   className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
//                     pathname === menu.href
//                       ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
//                       : "text-slate-700 hover:bg-slate-100"
//                   }`}
//                 >
//                   <Icon size={20} />
//                   {menu.name}
//                 </Link>
//               );
//             })}
//           </nav>

//         </aside>

//         <main className="flex-1 p-8">
//           {children}
//         </main>

//       </div>
//     </section>
//   );
// }  
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Hotel,
  CalendarDays,
  Users,
  PlusCircle,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Hotels",
      href: "/admin/hotels",
      icon: Hotel,
    },
    {
      name: "Bookings",
      href: "/admin/bookings",
      icon: CalendarDays,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Add Hotel",
      href: "/hotels/add",
       icon: PlusCircle,
    },
  ];

  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-white p-6">
      <h2 className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}