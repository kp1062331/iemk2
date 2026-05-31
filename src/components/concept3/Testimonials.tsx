"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "QLOAX transformed our manual processes into a fully automated, intelligent digital ecosystem. The ROI was immediate and massive.",
    author: "Sarah Jenkins",
    role: "CTO, TechLogix Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "The deep domain expertise combined with next-gen technology allowed us to scale our operations infinitely without breaking a sweat.",
    author: "David Chen",
    role: "VP Engineering, Nexus AI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-4">
            Client Success
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white">
            Trusted by <br /> Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-10 md:p-14 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-colors"
            >
              <div>
                <Quote className="w-12 h-12 text-white/20 mb-8 transform -scale-x-100" />
                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-medium mb-12">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-16 h-16 rounded-full object-cover border border-white/20 grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{t.author}</h4>
                  <p className="text-white/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
