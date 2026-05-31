"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-black text-white">
      {/* Coding/Computer Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
        alt="Coding Environment" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30 brightness-50"
      />
      {/* Deep Space Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 bg-white/5 border border-white/10 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid pattern inside the glass card */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
          
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 relative z-10">
            Ready to build the <br className="hidden md:block" />
            future?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of modern enterprises leveraging our AI infrastructure to accelerate growth and scale infinitely.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <button className="px-10 py-5 rounded-full bg-white text-red-500 font-bold text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="px-10 py-5 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
