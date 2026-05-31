"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <section className="bg-black">
      {/* Main CTA block */}
      <div className="px-8 md:px-16 py-24 md:py-40 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

        {/* Left: Big text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Start a Conversation</span>
            </div>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-black tracking-tighter text-white uppercase leading-none">
              Let's<br />
              <span className="text-white/20">Build</span><br />
              Together.
            </h2>
          </motion.div>
        </div>

        {/* Right: CTA content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <p className="text-white/40 text-lg leading-relaxed">
            Whether you have a detailed brief or just a concept on a napkin — we want to hear it.
            Every engagement starts with a free 60-minute scoping call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="mailto:hello@qloax.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 bg-white text-black text-base font-bold px-8 py-4 rounded-full hover:bg-white/80 transition-colors duration-200"
              data-cursor
            >
              hello@qloax.com
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 border border-white/20 text-white text-base font-bold px-8 py-4 rounded-full hover:border-white transition-colors duration-200"
              data-cursor
            >
              Book a Call
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
            {[
              { val: "< 24h", label: "Response time" },
              { val: "Free", label: "Initial consultation" },
              { val: "NDA", label: "Signed on request" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-white font-bold text-lg">{item.val}</p>
                <p className="text-white/30 text-xs font-mono mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer bottom bar */}
      <div className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/20 font-mono">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-white/40 font-bold">Qloax Technologies Pvt. Ltd.</span>
        </div>
        <div className="flex flex-wrap gap-8">
          <span>India — Pune, MH</span>
          <span>© 2024 All rights reserved</span>
          <span>GST: 27AAAAA0000A1Z5</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
}
