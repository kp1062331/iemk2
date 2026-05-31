"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare", "Financial Services", "Retail & E-commerce", "Manufacturing", "Logistics", "Education"
];

export function Industries() {
  return (
    <section className="py-32 bg-[#F0EFEA] text-[#111] relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-40 h-fit">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Industries</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Expertise across <br />
              every sector.
            </h3>
            <p className="text-xl text-black/60 leading-relaxed max-w-md mb-12 font-light">
              We partner with forward-thinking organizations across diverse industries to architect specialized digital solutions that drive massive growth.
            </p>
          </div>
          
          <div className="space-y-6">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-8 md:p-10 border border-black/5 rounded-3xl bg-white hover:bg-white/90 hover:border-blue-200 transition-all duration-500 cursor-pointer flex justify-between items-center relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-2xl md:text-4xl font-bold text-black/40 group-hover:text-[#111] transition-colors duration-300 relative z-10">
                  {industry}
                </span>
                <span className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute right-0 bottom-0 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  );
}
