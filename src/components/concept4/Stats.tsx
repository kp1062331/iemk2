"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2B+", label: "Value Generated" },
  { value: "50+", label: "Countries Served" }
];

export function Stats() {
  return (
    <section className="py-24 bg-[#F0EFEA] text-[#111] relative overflow-hidden border-t border-black/5">
      {/* Background Grid - Removed for cleaner light look, added subtle radial instead */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative p-6 group"
            >
              <div className="absolute left-0 top-0 w-px h-0 bg-gradient-to-b from-red-600 to-transparent group-hover:h-full transition-all duration-700 hidden md:block" />
              <h4 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#111] via-gray-600 to-red-600 mb-4 tracking-tighter drop-shadow-sm">
                {stat.value}
              </h4>
              <p className="text-black/60 font-medium tracking-widest uppercase text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
