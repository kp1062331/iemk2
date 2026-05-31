"use client";

import { motion } from "framer-motion";

const logos = [
  "Microsoft", "Google", "Amazon", "Meta", "Netflix", "Spotify"
];

export function LogoCloud() {
  return (
    <section className="py-20 border-y border-white/5 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase mb-10">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
