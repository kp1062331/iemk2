"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Qloax didn't just build what we asked for — they pushed back on two features that would have slowed down our core use case. That kind of thinking saved us four months of iteration post-launch.",
    author: "Roshani Sharma",
    role: "CTO",
    company: "Finbridge Technologies",
    initials: "RS",
  },
  {
    quote: "We had worked with three agencies before Qloax. The difference is accountability. They have a Slack channel, a weekly written update, and a named engineer for every module. We always knew the state of our product.",
    author: "Aarav Mehta",
    role: "CEO & Co-founder",
    company: "Nuvex Logistics",
    initials: "AM",
  },
  {
    quote: "Their AI team built a demand forecasting model that we couldn't staff internally at twice the cost. They integrated it into our ERP within 11 weeks. It saved us ₹4Cr in inventory waste in the first year alone.",
    author: "Priya Krishnamurthy",
    role: "VP Product",
    company: "MedKart Pharma",
    initials: "PK",
  },
];

export function Testimonial() {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  return (
    <section className="bg-white border-b border-black/10">
      {/* Header */}
      <div className="px-8 md:px-16 py-8 border-b border-black/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-black/40" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/40">Client Voices</span>
        </div>
        <span className="text-xs text-black/30 font-mono">{idx + 1} / {testimonials.length}</span>
      </div>

      {/* Testimonial */}
      <div className="px-8 md:px-16 py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: -20, clipPath: "inset(100% 0 0% 0)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Big opening quote mark */}
              <div className="text-black/10 text-[8rem] font-serif leading-none -mb-8 select-none">"</div>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug tracking-tight">
                {current.quote}
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {current.initials}
                </div>
                <div>
                  <p className="text-black font-bold">{current.author}</p>
                  <p className="text-black/40 text-sm font-mono mt-0.5">{current.role} · {current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex md:flex-col items-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/40 hover:border-black hover:text-black transition-colors duration-200"
            data-cursor
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex md:flex-col gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-full transition-all duration-300 ${i === idx ? "bg-black w-8 h-1.5 md:w-1.5 md:h-8" : "bg-black/20 w-1.5 h-1.5"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/40 hover:border-black hover:text-black transition-colors duration-200"
            data-cursor
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
