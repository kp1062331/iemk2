"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 md:py-40 bg-secondary/10">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Products. Services. Intelligence.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            QLOAX is building the digital backbone of next-generation enterprises — where AI, automation, and engineering converge to create measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-1 group relative rounded-[2rem] overflow-hidden bg-background aspect-square md:aspect-auto min-h-[300px] md:min-h-[400px] border border-border/10 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full flex justify-between items-end">
              <div>
                <p className="text-white/80 font-medium tracking-widest uppercase text-sm mb-3">Services</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Enterprise Solutions</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover:scale-110">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Tall Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 group relative rounded-[2rem] overflow-hidden bg-background aspect-square md:aspect-auto min-h-[300px] h-full border border-border/10 cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/90 z-10 transition-colors duration-500 group-hover:bg-primary" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="text-3xl font-bold text-primary-foreground tracking-tight mb-4">AI & Automation</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                We transforms static processes into self-learning ecosystems.
              </p>
              <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-110">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-[2rem] overflow-hidden bg-background aspect-square md:aspect-auto min-h-[300px] border border-border/10 cursor-pointer p-8 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
             <h3 className="text-2xl font-bold tracking-tight">Cloud Architecture</h3>
             <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
                <ArrowUpRight className="w-6 h-6" />
              </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-[2rem] overflow-hidden bg-background aspect-square md:aspect-auto min-h-[300px] border border-border/10 cursor-pointer p-8 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
             <h3 className="text-2xl font-bold tracking-tight">System Integration</h3>
             <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
                <ArrowUpRight className="w-6 h-6" />
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
