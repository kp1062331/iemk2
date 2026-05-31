"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="py-32 bg-[#F9F8F4] text-[#111] relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">Future Vision</h2>
          <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.1] mb-12">
            Building the <br />
            <span className="text-black/30 italic font-serif">next generation</span> <br />
            of digital experiences.
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-12 shadow-[0_0_15px_rgba(37,99,235,0.2)]" />
          <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed font-light">
            We don't just write code. We architect solutions that redefine how humans interact with technology. Join us in shaping the digital frontier.
          </p>
        </motion.div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
