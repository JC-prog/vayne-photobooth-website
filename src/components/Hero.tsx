"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 12 + 6,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 4,
  color: i % 3 === 0 ? "#FF3366" : i % 3 === 1 ? "#F59E0B" : "#E5E7EB",
}));

const photoStripImages = [
  "https://picsum.photos/seed/pb1/160/120",
  "https://picsum.photos/seed/pb2/160/120",
  "https://picsum.photos/seed/pb3/160/120",
  "https://picsum.photos/seed/pb4/160/120",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#FFF8EC]"
    >
      {/* Soft radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF3366]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            background: p.color,
            opacity: 0.25,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF3366]/10 text-[#FF3366] text-sm font-semibold mb-6 border border-[#FF3366]/20">
              🎉 Penang&apos;s #1 Photo Booth Experience
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Strike a Pose.{" "}
            <br />
            <span className="gradient-text">Create Memories.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Penang&apos;s most exciting photo booth rental for weddings, corporate events,
            birthday parties & more. Instant prints, unlimited fun.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-[#FF3366] text-white font-bold text-base hover:bg-[#cc1a4d] transition-all hover:scale-105 shadow-[0_4px_24px_rgba(255,51,102,0.3)]"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-bold text-base hover:border-[#FF3366] hover:text-[#FF3366] transition-all hover:scale-105"
            >
              Book Now →
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: "500+", label: "Events" },
              { value: "10k+", label: "Happy Guests" },
              { value: "5★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-[#FF3366]">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo strip decoration */}
        <motion.div
          className="hidden lg:flex items-center gap-4 flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Photo strip 1 — tilted left */}
          <motion.div
            className="photo-strip bg-white p-2 w-36 border border-gray-100"
            style={{ rotate: -6 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {photoStripImages.slice(0, 3).map((src, i) => (
              <div key={i} className="w-full aspect-[4/3] relative mb-1 last:mb-0 overflow-hidden">
                <Image src={src} alt={`booth ${i}`} fill className="object-cover" unoptimized />
              </div>
            ))}
            <div className="text-center py-1 text-[10px] font-bold text-gray-500 tracking-widest">
              PENANG PHOTO BOOTH
            </div>
          </motion.div>

          {/* Photo strip 2 — tilted right */}
          <motion.div
            className="photo-strip bg-white p-2 w-36 border border-gray-100"
            style={{ rotate: 5 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {photoStripImages.slice(1, 4).map((src, i) => (
              <div key={i} className="w-full aspect-[4/3] relative mb-1 last:mb-0 overflow-hidden">
                <Image src={src} alt={`booth ${i + 1}`} fill className="object-cover" unoptimized />
              </div>
            ))}
            <div className="text-center py-1 text-[10px] font-bold text-gray-500 tracking-widest">
              PENANG PHOTO BOOTH
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#FF3366] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
