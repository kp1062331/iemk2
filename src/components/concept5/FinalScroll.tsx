"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FinalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#050816]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Cinematic Glowing Background that scales */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] rounded-full bg-gradient-to-tr from-[#6C63FF]/30 via-[#00E5FF]/20 to-[#8B5CF6]/30 blur-[150px] mix-blend-screen" />
          <div className="absolute w-[50vw] h-[50vw] rounded-full bg-white/10 blur-[120px] mix-blend-screen animate-pulse duration-1000" />
        </motion.div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <p className="text-[#00E5FF] font-medium tracking-[0.3em] uppercase text-sm mb-6">The Future is Built Today</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            Your Next Digital <br />
            Breakthrough <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00E5FF]">
              Starts Here.
            </span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
