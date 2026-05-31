"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 md:py-48 bg-[#000000] relative overflow-hidden">
      {/* Unique Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80" 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 z-0" />

      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

      {/* Abstract Glowing Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold tracking-tighter uppercase text-white mb-12"
        >
          Initialize <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">The Future</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group px-12 py-6 bg-white text-black font-bold text-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 w-full sm:w-auto rounded-full">
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-12 py-6 border border-white/20 text-white font-bold text-xl hover:bg-white/10 transition-colors w-full sm:w-auto rounded-full backdrop-blur-md">
            View Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
