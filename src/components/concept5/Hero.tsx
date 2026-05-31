"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* Dynamic Grid / Noise Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[#050816] opacity-60 pointer-events-none mix-blend-multiply" />

      {/* Mouse Reactive Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-50 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(108, 99, 255, 0.12), transparent 70%)`,
        }}
      />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#6C63FF]/15 rounded-full blur-[150px] mix-blend-screen animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-[#00E5FF]/15 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000 pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(108,99,255,0.1)] hover:border-white/20 transition-colors"
        >
          <span className="text-xs font-bold text-[#00E5FF] tracking-widest uppercase">
            Qloax Digital Studio
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-tighter leading-[1.02] mb-8 text-white drop-shadow-2xl"
        >
          Engineering Digital Products That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#00E5FF] drop-shadow-[0_0_30px_rgba(108,99,255,0.3)]">
            Drive Business Growth
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          From AI-powered platforms to enterprise software, Qloax transforms ideas into scalable digital solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="group px-8 py-4 bg-[#6C63FF] hover:bg-[#8B5CF6] text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_-5px_rgba(108,99,255,0.4)] hover:shadow-[0_0_50px_-5px_rgba(108,99,255,0.6)]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="group px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 hover:bg-white/5"
          >
            Explore Solutions
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
