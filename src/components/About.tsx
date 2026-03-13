"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  { icon: "🎨", title: "Custom Everything", desc: "Templates, backdrops, and props tailored to your event theme." },
  { icon: "⚡", title: "Instant Prints", desc: "High-quality 4R prints in under 10 seconds — no waiting." },
  { icon: "💬", title: "Pro Attendants", desc: "Friendly, experienced staff to keep the fun going all night." },
  { icon: "🌟", title: "5-Star Service", desc: "Consistently rated 5 stars by our happy clients since 2019." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
              <Image
                src="https://picsum.photos/seed/about1/600/600"
                alt="Photo booth setup"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3366]/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:right-8 bg-white border border-[#FF3366]/20 rounded-2xl px-5 py-4 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-3xl font-black text-[#FF3366]">5+</div>
              <div className="text-gray-500 text-xs">Years of Excellence</div>
            </motion.div>

            {/* Floating event badge */}
            <motion.div
              className="absolute -top-4 -right-4 lg:right-4 bg-[#F59E0B] rounded-2xl px-4 py-3 shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl font-black text-black">500+</div>
              <div className="text-black/70 text-xs font-semibold">Events Done</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF3366]/10 text-[#FF3366] text-sm font-semibold mb-6 border border-[#FF3366]/20">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Penang&apos;s Most{" "}
              <span className="gradient-text">Trusted</span>
              <br /> Photo Booth Team
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We started Penang Photo Booth in 2019 with a simple mission: make every event
              unforgettable. Since then, we&apos;ve been behind the smiles at over 500 weddings,
              corporate events, birthdays, and private parties across Penang and beyond.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Our team of passionate photo booth specialists brings top-of-the-line equipment,
              creative flair, and genuine enthusiasm to every event. We don&apos;t just rent out a
              booth — we deliver an experience.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-2xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h4 className="text-gray-800 font-semibold text-sm mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
