"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/g1/600/400", alt: "Wedding photo booth", span: "col-span-2" },
  { id: 2, src: "https://picsum.photos/seed/g2/400/400", alt: "Birthday party booth", span: "" },
  { id: 3, src: "https://picsum.photos/seed/g3/400/600", alt: "Corporate event", span: "row-span-2" },
  { id: 4, src: "https://picsum.photos/seed/g4/400/400", alt: "Fun photo strip", span: "" },
  { id: 5, src: "https://picsum.photos/seed/g5/400/400", alt: "Glam booth shots", span: "" },
  { id: 6, src: "https://picsum.photos/seed/g6/600/400", alt: "360 video booth", span: "col-span-2" },
  { id: 7, src: "https://picsum.photos/seed/g7/400/400", alt: "Wedding couple", span: "" },
  { id: 8, src: "https://picsum.photos/seed/g8/400/400", alt: "Props fun", span: "" },
  { id: 9, src: "https://picsum.photos/seed/g9/400/400", alt: "Group photo", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-sm font-semibold mb-4 border border-[#F59E0B]/20">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real Events,{" "}
            <span className="gradient-text">Real Memories</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations — every moment captured beautifully.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setLightbox(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-3xl">🔍</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#F59E0B] text-[#F59E0B] font-bold hover:bg-[#F59E0B] hover:text-white transition-all hover:scale-105"
          >
            Request Full Gallery
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Enlarged photo"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                unoptimized
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center text-xl hover:bg-[#FF3366] transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
