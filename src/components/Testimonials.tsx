"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Reception",
    rating: 5,
    quote:
      "Penang Photo Booth made our wedding reception absolutely magical! The guests couldn't stop using the booth all night. The prints were gorgeous and the attendant was so helpful and fun. Highly recommend!",
    avatar: "https://picsum.photos/seed/t1/80/80",
    date: "December 2025",
  },
  {
    name: "Jason Lim",
    event: "Corporate Gala",
    rating: 5,
    quote:
      "We hired them for our annual company gala and they knocked it out of the park. Professional setup, custom-branded prints, and the 360° video booth was a massive hit. Will definitely book again!",
    avatar: "https://picsum.photos/seed/t2/80/80",
    date: "November 2025",
  },
  {
    name: "Nurul Hanis",
    event: "Birthday Party",
    rating: 5,
    quote:
      "Best decision for my 30th birthday party! The glam booth was stunning, the props were hilarious, and everyone got to take home their photos. The whole team was super friendly and professional.",
    avatar: "https://picsum.photos/seed/t3/80/80",
    date: "October 2025",
  },
  {
    name: "David Chen",
    event: "Product Launch",
    rating: 5,
    quote:
      "Used them for a product launch event and the custom-branded photo strips were perfect marketing material. Every guest loved it and they kept posting the photos on social media!",
    avatar: "https://picsum.photos/seed/t4/80/80",
    date: "September 2025",
  },
  {
    name: "Sarah Abdullah",
    event: "Engagement Party",
    rating: 5,
    quote:
      "The team was punctual, professional, and so much fun. They set everything up quickly and the photos turned out absolutely stunning. Our guests still talk about how great the booth was!",
    avatar: "https://picsum.photos/seed/t5/80/80",
    date: "August 2025",
  },
  {
    name: "Wei Ming",
    event: "School Prom",
    rating: 5,
    quote:
      "Amazing experience! The booth had so many cool filters and backdrops. The instant prints were such a great keepsake for all the students. Will definitely recommend to friends!",
    avatar: "https://picsum.photos/seed/t6/80/80",
    date: "July 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-[#F59E0B]" : "text-gray-200"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the hundreds of happy clients we&apos;ve
            worked with.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 hover:border-[#FF3366]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-[#FF3366] text-xs">{t.event}</div>
                </div>
                <div className="ml-auto text-gray-400 text-xs">{t.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google reviews badge */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F9FAFB] rounded-full border border-gray-200">
            <div className="flex gap-0.5 text-[#F59E0B]">★★★★★</div>
            <span className="text-gray-500 text-sm">
              <span className="text-gray-900 font-bold">5.0</span> from 100+ Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
