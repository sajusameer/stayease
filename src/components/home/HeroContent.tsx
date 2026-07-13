"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Hotel, Star, Users } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      {/* Badge */}
      <div className="badge badge-primary badge-outline px-5 py-4">
        Luxury Hotel Booking Platform
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
          Find Your
          <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            Perfect Stay
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
          Discover premium hotels with secure booking, unbeatable prices,
          verified reviews, and unforgettable travel experiences.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link href="/hotels" className="btn btn-primary rounded-xl">
          Explore Hotels
          <ArrowRight size={18} />
        </Link>

        <Link href="/hotels" className="btn btn-outline rounded-xl">
          Book Now
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4">

        <div className="rounded-2xl border bg-base-100 p-5 shadow-md">
          <Hotel className="mb-2 text-primary" />
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-sm text-base-content/70">
            Hotels
          </p>
        </div>

        <div className="rounded-2xl border bg-base-100 p-5 shadow-md">
          <Users className="mb-2 text-primary" />
          <h3 className="text-2xl font-bold">15K+</h3>
          <p className="text-sm text-base-content/70">
            Happy Guests
          </p>
        </div>

        <div className="rounded-2xl border bg-base-100 p-5 shadow-md">
          <Star className="mb-2 text-yellow-500 fill-yellow-500" />
          <h3 className="text-2xl font-bold">4.9</h3>
          <p className="text-sm text-base-content/70">
            Rating
          </p>
        </div>

      </div>
    </motion.div>
  );
}