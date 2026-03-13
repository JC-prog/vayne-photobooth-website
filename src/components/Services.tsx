"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "open-air",
    name: "Open-Air Photo Booth",
    description:
      "Our classic open-air setup fits big groups and creates a lively, social atmosphere. Perfect for weddings, corporate events, and birthday parties.",
    image: "https://picsum.photos/seed/openair/600/400",
    tags: ["Weddings", "Corporate", "Parties"],
    icon: "📸",
  },
  {
    id: "glam-booth",
    name: "Enclosed Glam Booth",
    description:
      "A sleek, enclosed booth with studio-quality lighting and glamorous filters. Ideal for an upscale, intimate experience at any event.",
    image: "https://picsum.photos/seed/glambooth/600/400",
    tags: ["Premium", "Intimate", "Elegant"],
    icon: "✨",
  },
  {
    id: "360-video",
    name: "360° Video Booth",
    description:
      "The crowd favourite — guests step onto the platform while our camera spins around them for a dramatic slow-motion video moment.",
    image: "https://picsum.photos/seed/360video/600/400",
    tags: ["Viral Content", "Video", "Trending"],
    icon: "🎬",
  },
  {
    id: "custom-branding",
    name: "Custom Branding",
    description:
      "Full customisation of photo templates, backdrops, and props to match your brand or event theme. Great for product launches and corporate galas.",
    image: "https://picsum.photos/seed/branding/600/400",
    tags: ["Corporate", "Brand Activations", "Launches"],
    icon: "🎨",
  },
  {
    id: "boomerang-gif",
    name: "Boomerang & GIF Mode",
    description:
      "Capture fun, looping boomerangs and animated GIFs that guests can instantly share on social media — perfect for going viral.",
    image: "https://picsum.photos/seed/boomerang/600/400",
    tags: ["Social Media", "Fun", "Shareable"],
    icon: "🔄",
  },
  {
    id: "instant-prints",
    name: "Instant 4R Prints",
    description:
      "High-quality 4R prints produced in under 10 seconds on our professional-grade printers. Guests take home a physical keepsake every time.",
    image: "https://picsum.photos/seed/prints/600/400",
    tags: ["Keepsakes", "High Quality", "Instant"],
    icon: "🖨️",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF3366]/10 text-[#FF3366] text-sm font-semibold mb-4 border border-[#FF3366]/20">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Everything You Need for{" "}
            <span className="gradient-text">The Perfect Booth</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From classic open-air setups to viral 360° video booths — we bring the fun to every
            occasion.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#FF3366]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#FF3366]/8 text-[#FF3366] border border-[#FF3366]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4">
            Not sure which service is right for you? We&apos;ll help you find the perfect fit.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF3366] text-white font-bold text-sm hover:bg-[#cc1a4d] transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,51,102,0.25)]"
          >
            Get a Custom Quote →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
