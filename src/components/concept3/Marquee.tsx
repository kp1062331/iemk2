"use client";

import { motion } from "framer-motion";

const logos = [
  "NVIDIA", "OpenAI", "Microsoft", "Google", "AWS", "Meta", "Tesla", "Apple"
];

export function Marquee() {
  return (
    <section className="py-20 bg-[#000000] border-y border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-8"
        >
          {/* Double the logos for seamless infinite scroll */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-transparent bg-clip-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
