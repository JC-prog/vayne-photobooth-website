"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
};

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Product Launch",
  "School / Prom",
  "Graduation",
  "Other",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Build mailto link as placeholder
    const subject = encodeURIComponent(`Photo Booth Enquiry — ${data.eventType} on ${data.eventDate}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nEvent Type: ${data.eventType}\nEvent Date: ${data.eventDate}\nGuest Count: ${data.guestCount}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:penangphotobooth@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#FFF5F7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF3366]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF3366]/10 text-[#FF3366] text-sm font-semibold mb-4 border border-[#FF3366]/20">
            Book Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Let&apos;s Make Your{" "}
            <span className="gradient-text">Event Unforgettable</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fill in the form below and we&apos;ll get back to you within 24 hours with a
            personalised quote.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-16 px-8 bg-white rounded-2xl border border-[#FF3366]/20 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
            <p className="text-gray-500">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Full Name <span className="text-[#FF3366]">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="e.g. Sarah Abdullah"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors"
                />
                {errors.name && (
                  <p className="text-[#FF3366] text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Email Address <span className="text-[#FF3366]">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  })}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors"
                />
                {errors.email && (
                  <p className="text-[#FF3366] text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Phone Number <span className="text-[#FF3366]">*</span>
                </label>
                <input
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="+60 12 345 6789"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors"
                />
                {errors.phone && (
                  <p className="text-[#FF3366] text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Event Type <span className="text-[#FF3366]">*</span>
                </label>
                <select
                  {...register("eventType", { required: "Please select an event type" })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors appearance-none"
                >
                  <option value="" className="bg-white">Select event type...</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-white">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="text-[#FF3366] text-xs mt-1">{errors.eventType.message}</p>
                )}
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Event Date <span className="text-[#FF3366]">*</span>
                </label>
                <input
                  {...register("eventDate", { required: "Event date is required" })}
                  type="date"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors"
                />
                {errors.eventDate && (
                  <p className="text-[#FF3366] text-xs mt-1">{errors.eventDate.message}</p>
                )}
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Expected Guest Count
                </label>
                <select
                  {...register("guestCount")}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors appearance-none"
                >
                  <option value="" className="bg-white">Select range...</option>
                  <option value="Under 50" className="bg-white">Under 50 guests</option>
                  <option value="50–100" className="bg-white">50–100 guests</option>
                  <option value="100–200" className="bg-white">100–200 guests</option>
                  <option value="200–500" className="bg-white">200–500 guests</option>
                  <option value="500+" className="bg-white">500+ guests</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your event — theme, special requirements, or any questions..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF3366]/60 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF3366] text-white font-bold text-base hover:bg-[#cc1a4d] transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,51,102,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry →"}
              </button>
              <p className="text-gray-400 text-xs text-center sm:text-left">
                We typically reply within 2–4 business hours.
              </p>
            </div>
          </motion.form>
        )}

        {/* Contact info row */}
        <motion.div
          className="flex flex-col sm:grid sm:grid-cols-4 gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: "📱", label: "WhatsApp", value: "+60 12-345 6789", span: "sm:col-span-1" },
            { icon: "✉️", label: "Email", value: "penangphotobooth@outlook.com", span: "sm:col-span-2" },
            { icon: "📍", label: "Based in", value: "Penang, Malaysia", span: "sm:col-span-1" },
          ].map((info) => (
            <div
              key={info.label}
              className={`inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-sm self-start sm:self-auto w-full ${info.span}`}
            >
              <span className="text-base flex-shrink-0">{info.icon}</span>
              <div className="min-w-0">
                <div className="text-gray-400 text-xs">{info.label}</div>
                <div className="text-gray-900 text-sm font-medium break-all">{info.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
