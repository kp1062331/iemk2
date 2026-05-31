"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Industries Served" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function WhyQloax() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-y border-white/5">
      {/* Dynamic Background Effect */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(108,99,255,0.1)_0%,_transparent_60%)] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Why Qloax?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-xl leading-relaxed"
            >
              We don't just write code; we engineer competitive advantages. Our track record speaks for itself across industries and continents.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-[#00E5FF] to-[#6C63FF] mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-slate-300 font-bold text-sm md:text-base tracking-widest text-center md:text-left">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
