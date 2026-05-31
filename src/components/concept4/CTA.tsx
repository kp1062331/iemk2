"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_#050505_70%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 bg-white/[0.02] border border-white/10 backdrop-blur-2xl text-center shadow-[0_0_100px_rgba(220,38,38,0.1)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />
          
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-8 leading-[1.05]">
            Let's Build <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-500 to-purple-500">What's Next</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to transform your enterprise? Partner with our world-class engineering team today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="group/btn px-12 py-5 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-full transition-all duration-300 w-full sm:w-auto flex justify-center items-center gap-3 shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.8)] hover:-translate-y-1">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="px-12 py-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-lg border border-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-md hover:-translate-y-1">
              Contact Qloax
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
