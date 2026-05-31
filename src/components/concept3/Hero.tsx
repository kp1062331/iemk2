"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] bg-[#000000] overflow-hidden pt-4"
    >
      <div className="container mx-auto px-6 h-full relative z-10">
        <motion.div 
          style={{ y: y1, opacity }} 
          className="max-w-7xl mx-auto flex flex-col justify-start pt-16 md:pt-20 h-[80vh]"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85] font-bold tracking-tighter uppercase text-white"
            >
              Building the
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-center gap-6 md:gap-12">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex w-24 h-24 rounded-full border border-white/20 items-center justify-center shrink-0"
            >
              <ArrowDownRight className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85] font-bold tracking-tighter uppercase text-[#666666]"
            >
              Future of
            </motion.h1>
          </div>
          <div className="overflow-hidden flex justify-between items-end">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85] font-bold tracking-tighter uppercase text-white"
            >
              Enterprise
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="hidden lg:block max-w-[300px] pb-6"
            >
              <p className="text-lg text-white/60 leading-relaxed font-medium">
                We design and engineer digital ecosystems that redefine how intelligent businesses operate globally.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Interactive Video / Image Element */}
      <motion.div 
        style={{ y: y2, scale }}
        className="absolute bottom-[-10vh] right-[-5vw] w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-video rounded-l-[3rem] overflow-hidden z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
          alt="Tech Innovation" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
