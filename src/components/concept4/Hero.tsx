"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80", span: "col-span-2 row-span-1" }
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
        
        {/* Dynamic Vignette Overlay - Black Fade Theme */}
        <motion.div 
          style={{ opacity: vignetteOpacity }}
          className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(5,5,5,0.85)_60%,_rgba(5,5,5,1)_100%)]" 
        />

        {/* Grid Container */}
        <motion.div 
          style={{ scale: gridScale, opacity: gridOpacity }}
          className="absolute inset-[-20%] w-[140%] h-[140%] z-10"
        >
          <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-3 md:gap-6 p-4 md:p-8 rotate-[-4deg] scale-110">
            {images.map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: i * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/5 shadow-2xl ${img.span} group`}
              >
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-blue-500/0 transition-colors duration-700 z-10" />
                <img 
                  src={img.src} 
                  alt="" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-30 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.1] text-white mb-8 w-full drop-shadow-md"
          >
            Run your entire <br className="hidden md:block" />
            business from <br className="hidden md:block" />
            <span className="italic text-blue-500 font-serif font-light tracking-tight">one place.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light drop-shadow"
          >
            A premium, unified platform designed to scale the world's most ambitious brands. Experience the architecture of advantage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <button className="group px-10 py-5 bg-white text-black hover:bg-blue-600 hover:text-white font-bold text-lg rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
