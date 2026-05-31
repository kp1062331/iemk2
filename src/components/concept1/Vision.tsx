"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="py-32 bg-white text-black border-b border-gray-200 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-red-500 font-bold uppercase tracking-[0.2em] mb-6">Our Vision</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Intelligence <br />
                <span className="text-gray-400">without</span> <br />
                limits.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                We envision a world where every enterprise can instantly tap into limitless cognitive computing power. We are building the nervous system for the next era of human-machine collaboration.
              </p>
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
                Read our Manifesto
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Our Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              
              <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <p className="font-bold text-2xl mb-2">Qloax Labs</p>
                <p className="text-white/80">Exploring AGI architectures for the future.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Decorative background typography */}
      <div className="absolute -top-10 -right-20 text-[20vw] font-black text-gray-50 opacity-50 select-none pointer-events-none">
        FUTURE
      </div>
    </section>
  );
}
