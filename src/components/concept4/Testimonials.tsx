"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Qloax completely transformed our legacy infrastructure into a cloud-native powerhouse in under six months.",
    author: "Sarah Jenkins",
    role: "CTO, Nova Financial"
  },
  {
    quote: "The level of engineering excellence is unmatched. They didn't just build software, they built a scalable foundation.",
    author: "David Chen",
    role: "VP Engineering, Aura Health"
  },
  {
    quote: "A true technology partner that understands both business goals and deep technical constraints.",
    author: "Elena Rodriguez",
    role: "CEO, Nexa Retail"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#F0EFEA] text-[#111] relative overflow-hidden border-t border-black/5">
      {/* Abstract Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-20 text-center">Client Success</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="p-10 rounded-[2rem] bg-white/60 border border-black/5 hover:bg-white hover:border-black/10 transition-all duration-500 backdrop-blur-xl group relative overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-blue-600/30 group-hover:text-blue-600 transition-colors duration-500 mb-8 relative z-10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 relative z-10 text-[#111]">
                "{test.quote}"
              </p>
              <div className="relative z-10">
                <p className="font-bold text-lg">{test.author}</p>
                <p className="text-blue-600 text-sm tracking-wide mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
