"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Custom Software Development",
    short: "Web · Mobile · API",
    detail: "We build bespoke software products from scratch — responsive web apps, native mobile apps, and the APIs that connect them. Every line of code we write is owned entirely by you.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "02",
    name: "AI & Machine Learning",
    short: "LLMs · Vision · Prediction",
    detail: "Production-grade AI — not proof-of-concepts. We integrate LLMs, build custom fine-tuned models, and deploy computer vision systems that genuinely improve business outcomes.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "03",
    name: "Cloud Infrastructure",
    short: "AWS · Azure · GCP",
    detail: "Architected for reliability and cost. We design cloud infrastructure that auto-scales with your users, maintains 99.99% uptime, and never sends you a surprise bill.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "04",
    name: "Product Design & UX",
    short: "Research · Figma · Systems",
    detail: "We run user research, build component-level design systems, and deliver pixel-perfect Figma handoffs that developers actually want to build from.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "05",
    name: "Digital Transformation",
    short: "Strategy · Migration · Change",
    detail: "Moving a 20-year-old enterprise to modern infrastructure is our speciality. We plan, execute, and manage the change management that makes digital transformation actually stick.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "06",
    name: "SaaS Product Development",
    short: "MVP · GTM · Scale",
    detail: "From zero to paying customers in 12 weeks. We handle product strategy, engineering, and the technical foundations for a scalable SaaS business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-black border-b border-white/10">
      {/* Header */}
      <div className="px-8 md:px-16 py-12 border-b border-white/10 flex items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/40" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Services
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-white/30 text-sm leading-relaxed text-right">
          End-to-end engineering across every layer of the modern digital stack.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: image panel */}
        <div className="hidden md:block relative bg-[#0A0A0A] border-r border-white/10 sticky top-0 h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            {active !== null ? (
              <motion.img
                key={active}
                src={services[active].image}
                alt={services[active].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-white/10 text-sm font-mono">Hover a service</p>
              </motion.div>
            )}
          </AnimatePresence>
          {active !== null && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          )}
          {active !== null && (
            <div className="absolute bottom-10 left-10">
              <p className="text-xs text-white/40 font-mono mb-1">{services[active].short}</p>
              <p className="text-white font-bold text-xl">{services[active].name}</p>
            </div>
          )}
        </div>

        {/* Right: accordion list */}
        <div className="flex flex-col divide-y divide-white/10">
          {services.map((s, i) => (
            <div
              key={s.num}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group px-8 md:px-12 py-8 cursor-pointer hover:bg-white/[0.03] transition-colors duration-200"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-white/20 group-hover:text-white/60 transition-colors w-6">{s.num}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-200">
                      {s.name}
                    </h3>
                    <p className="text-xs text-white/20 mt-1 font-mono">{s.short}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/40 text-sm leading-relaxed pt-4 pl-12 max-w-lg">
                      {s.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
