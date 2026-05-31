"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-[#0F172A] overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] border-t border-white/5 mt-[-2rem] z-20">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#6C63FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-12">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] italic">
              Extraordinary.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <button className="relative px-10 py-5 bg-white text-[#050816] rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 hover:bg-white/90">
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <button className="px-10 py-5 bg-[#050816] border border-white/20 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/40">
              Book a Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Actual Footer Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm border-t border-white/5">
        <p>© 2026 Qloax. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
}
