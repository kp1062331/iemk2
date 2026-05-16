"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, Globe, Leaf, Verified } from "lucide-react";

const certs = [
  { name: "APEDA", icon: Globe, desc: "Export Excellence" },
  { name: "FSSAI", icon: ShieldCheck, desc: "Food Safety" },
  { name: "IEC", icon: Verified, desc: "Global Trade" },
  { name: "MSME", icon: Award, desc: "Gov. Registered" },
  { name: "ISO 9001", icon: CheckCircle2, desc: "Quality Standard" },
  { name: "Organic", icon: Leaf, desc: "100% Pure" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-40 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 lg:mb-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-white/5 pb-10">
          <div className="max-w-2xl text-center md:text-left">
            {/* Top Badge matching Hero style (adapted for dark) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondary/30 mb-8 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary tracking-[0.4em] uppercase text-[10px] font-medium">
                Our Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading text-white font-light leading-[1.1]">
              Global <br/>
              <span className="italic text-secondary">Trust Marks</span>
            </h2>
          </div>
          <p className="text-white/30 max-w-sm text-sm font-light leading-relaxed mt-8 md:mt-0 md:border-l border-white/10 md:pl-8 text-center md:text-left">
            Internationally recognized certifications guaranteeing purity, safety, and uncompromising export quality across all borders.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 lg:gap-12 px-4 lg:px-6 w-max"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...certs, ...certs].map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                className="w-[280px] sm:w-[350px] lg:w-[380px] flex-shrink-0 border border-white/5 p-10 lg:p-16 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-700"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 border border-secondary/20 flex items-center justify-center mb-8 lg:mb-10 group-hover:border-secondary transition-all duration-700 group-hover:rotate-[360deg]">
                  <Icon size={20} className="text-secondary lg:hidden" />
                  <Icon size={24} className="text-secondary hidden lg:block" />
                </div>
                <h3 className="text-lg lg:text-2xl font-heading text-white tracking-[0.2em] mb-3 lg:mb-4 font-light">{cert.name}</h3>
                <p className="text-secondary/40 text-[10px] tracking-[0.4em] uppercase font-medium">{cert.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
