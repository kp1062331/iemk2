"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WORDS = ["Products", "Platforms", "Experiences", "Systems"];

function RotatingBadge() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
        <defs>
          <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-[#555] text-[11px] font-medium tracking-widest uppercase">
          <textPath href="#circle">Qloax Studio · Since 2019 · Est. India ·</textPath>
        </text>
      </svg>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <ArrowUpRight className="w-5 h-5 text-black" />
      </div>
    </div>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor]")) setHovered(true);
      else setHovered(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - (hovered ? 24 : 4), y: pos.y - (hovered ? 24 : 4) }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.3 }}
      >
        <div className={`rounded-full bg-white transition-all duration-200 ${hovered ? "w-12 h-12" : "w-2 h-2"}`} />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full border border-white/20" />
      </motion.div>
    </>
  );
}

function TextReveal({ children, delay = 0, className = "" }: { children: string; delay?: number; className?: string }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <CustomCursor />
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black border-b border-white/10"
      >
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

        {/* Hero Body */}
        <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-center px-8 md:px-16 pt-24 pb-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-px bg-white/60" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">
              IT Services · AI Solutions · Product Engineering
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-[clamp(3rem,9vw,10rem)] font-black leading-[0.88] tracking-tighter text-white mb-4 uppercase">
            <TextReveal delay={0.4}>We Engineer</TextReveal>
            <div className="flex items-end gap-4 flex-wrap">
              <TextReveal delay={0.55} className="text-white/30 italic">Digital</TextReveal>
              <div className="overflow-hidden mb-1.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    {WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <TextReveal delay={0.7} className="text-white/10">That Scale.</TextReveal>
          </h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-px bg-white/10 my-12 origin-left"
          />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-white/40 text-lg md:text-xl max-w-md leading-relaxed font-light"
            >
              Qloax partners with ambitious companies to build the software and AI systems
              that define their next decade of growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-6"
            >
              <RotatingBadge />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:flex items-center gap-2 bg-white text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-white/80 transition-colors"
                data-cursor
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center justify-between px-8 md:px-16 py-5 border-t border-white/10 text-xs text-white/20 font-mono"
        >
          <span>© 2024 Qloax Technologies</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Available for new projects</span>
          </div>
          <span>EST. INDIA — 2019</span>
        </motion.div>
      </section>
    </>
  );
}
