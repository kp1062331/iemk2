"use client";

import { motion } from "framer-motion";
import { HeroSVG } from "./HeroSVG";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background text-foreground">
      <HeroSVG />
      
      <div className="container mx-auto px-6 relative z-10 -mt-24">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Qloax AI Engine 2.0 Released</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Intelligence for the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Modern Enterprise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Deploy scalable, secure, and production-ready AI models with Qloax infrastructure. Built for performance. Designed for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <button className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-neon flex items-center justify-center gap-2 w-full sm:w-auto">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-md">
              <Terminal className="w-5 h-5" />
              Read Documentation
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
