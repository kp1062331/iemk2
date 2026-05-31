"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Qloax delivered our enterprise SaaS platform ahead of schedule. The code quality and scalable architecture they provided were completely game-changing for our growth.",
    author: "Sarah Jenkins",
    role: "CTO, Nova Financial",
    initials: "SJ"
  },
  {
    quote: "Their AI automation solutions reduced our operational overhead by 40%. True professionals who understand both the bleeding-edge technology and business strategy.",
    author: "Marcus Chen",
    role: "Director of Innovation, Aura Health",
    initials: "MC"
  },
  {
    quote: "Working with Qloax felt like having an elite internal engineering team. Their communication and technical execution are unmatched in the agency space.",
    author: "Elena Rodriguez",
    role: "Founder, FindTheFirm",
    initials: "ER"
  },
  {
    quote: "The VR business solution they developed transformed our remote training programs. A world-class team delivering world-class digital products.",
    author: "James Wilson",
    role: "VP of Operations, Global Logistics",
    initials: "JW"
  }
];

export function ClientSuccess() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Client Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl"
          >
            Don't just take our word for it. Hear from the leaders we've partnered with.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative flex overflow-x-hidden w-full group">
        
        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-8 px-4">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-3xl bg-[#0F172A]/80 backdrop-blur-md border border-white/5 hover:border-[#6C63FF]/50 transition-colors duration-300"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, star) => (
                  <svg key={star} className="w-5 h-5 text-[#00E5FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(108,99,255,0.4)] border border-white/20">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{testimonial.author}</h4>
                  <p className="text-xs text-[#00E5FF] tracking-wider uppercase font-medium mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
