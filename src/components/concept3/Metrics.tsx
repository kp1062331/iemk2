"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "500+", label: "Enterprise Clients", description: "Trusting our infrastructure" },
  { value: "40+", label: "Countries Reached", description: "Global deployment scale" },
  { value: "99.99%", label: "Uptime SLA", description: "Mission-critical reliability" },
  { value: "15+", label: "Industry Awards", description: "Recognized excellence" },
];

export function Metrics() {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-l border-white/20 pl-8 relative"
            >
              {/* Highlight dot */}
              <div className="absolute top-0 left-[-3px] w-1.5 h-12 bg-white" />
              
              <h4 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                {metric.value}
              </h4>
              <p className="text-xl font-semibold text-white tracking-tight mb-2">
                {metric.label}
              </p>
              <p className="text-white/50 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
