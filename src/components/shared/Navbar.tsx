"use client";

import Link from "next/link";
import { Hotel, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();

  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-2 text-white">
            <Hotel size={24} />
          </div>

          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            StayEase
          </span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/hotels"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Hotels
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Contact
          </Link>


          {!isPending && session?.user ? (
            <>

              <Link
                href="/dashboard"
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                Dashboard
              </Link>


              <div className="flex items-center gap-3">

                <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                  <User size={18} />
                  <span className="text-sm font-medium">
                    {session.user.name}
                  </span>
                </div>


                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white hover:opacity-90"
                >
                  <LogOut size={16} />
                  Logout
                </button>

              </div>

            </>
          ) : (

            <div className="flex gap-3">

              <Link
                href="/login"
                className="rounded-xl border border-blue-600 px-5 py-2 font-medium text-blue-600 hover:bg-blue-50"
              >
                Login
              </Link>


              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 font-medium text-white hover:opacity-90"
              >
                Register
              </Link>

            </div>

          )}

        </div>


        {/* Mobile Menu Button */}
        <button className="btn btn-ghost md:hidden">
          ☰
        </button>

      </div>
    </nav>
  );
}