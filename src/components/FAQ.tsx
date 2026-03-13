"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What types of photo booths do you offer?",
    a: "We offer three types of photo booths: Open-Air Booths (great for large groups), Enclosed Glam Booths (for a more intimate, premium experience), and our popular 360° Video Booths. Each can be customized to match your event theme.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2–4 weeks in advance to ensure your preferred date is available, especially for weekends and peak seasons (December, Chinese New Year, Hari Raya). For large corporate events, 1–2 months ahead is ideal.",
  },
  {
    q: "What areas do you cover in Penang?",
    a: "We cover all areas of Penang island and Seberang Perai. We also travel to Kedah, Perak, and other nearby states — just let us know your event location and we'll confirm availability.",
  },
  {
    q: "Can I customize the photo template and backdrop?",
    a: "Absolutely! All packages include custom photo templates. You can provide your own design or work with our in-house designer to create something unique. Custom backdrops are available for Premium and Unlimited packages.",
  },
  {
    q: "How many photos can guests take?",
    a: "All packages include unlimited photo sessions — there's no cap on how many times guests can use the booth. Print limits are package-dependent, but digital copies of all sessions are included in Premium and Unlimited packages.",
  },
  {
    q: "What's included in the setup and teardown?",
    a: "Our team handles full setup (typically 1 hour before the event) and teardown at no extra charge. We arrive early to ensure everything is perfect before your event begins. All equipment, props, and printing supplies are included.",
  },
  {
    q: "Do you provide the printed photos on the day?",
    a: "Yes! Our high-speed printers produce 4R prints in under 10 seconds. Guests receive their prints immediately after each session. Digital copies are sent via QR code or email link for Premium and Unlimited packages.",
  },
  {
    q: "What happens if there's a technical issue during my event?",
    a: "Our professional attendants are trained to handle technical issues quickly. We also carry backup equipment to every event. In the extremely rare case of a major equipment failure, we have a full refund policy.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <button
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
          open ? "bg-[#FF3366]/5" : "bg-white hover:bg-gray-50"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-900 font-semibold text-sm md:text-base leading-snug flex-1">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            open ? "bg-[#FF3366] text-white rotate-45" : "bg-gray-100 text-gray-500"
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-3 bg-gray-50">
              <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF3366]/10 text-[#FF3366] text-sm font-semibold mb-4 border border-[#FF3366]/20">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Got Questions?{" "}
            <span className="gradient-text">We Got Answers.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about booking a photo booth with us.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 p-8 rounded-2xl bg-white border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF3366] text-white font-bold text-sm hover:bg-[#cc1a4d] transition-all hover:scale-105"
          >
            Chat With Us
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
