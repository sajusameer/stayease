"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Calendar } from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Main Image */}
      <div className="overflow-hidden rounded-[32px] shadow-2xl group">
        <Image
          src="/images/hero.jpg"
          alt="Luxury Hotel"
          width={700}
          height={700}
          priority
          className="h-[720px] w-full object-cover"
        />
      </div>

      {/* Rating Card */}
      <div className="absolute left-5 top-6 rounded-2xl bg-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Star className="fill-yellow-400 text-yellow-400" />
          <div>
            <h4 className="font-bold">4.9 Rating</h4>
            <p className="text-sm text-gray-500">
              Trusted by Travelers
            </p>
          </div>
        </div>
      </div>

      {/* Location Card */}
      <div className="absolute -left-6 bottom-16 rounded-2xl bg-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <MapPin className="text-primary" />
          <div>
            <h4 className="font-bold">Cox's Bazar</h4>
            <p className="text-sm text-gray-500">
              Premium Destination
            </p>
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="absolute -right-6 bottom-8 rounded-2xl bg-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Calendar className="text-primary" />
          <div>
            <h4 className="font-bold">Instant Booking</h4>
            <p className="text-sm text-gray-500">
              24/7 Available
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}