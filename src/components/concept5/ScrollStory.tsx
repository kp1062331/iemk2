"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { id: "01", title: "Idea", icon: Lightbulb, desc: "We start by deeply understanding your vision and business objectives." },
  { id: "02", title: "Strategy", icon: Target, desc: "Crafting a precise roadmap and architecture for scalable success." },
  { id: "03", title: "Design", icon: PenTool, desc: "Creating intuitive, premium interfaces that users love." },
  { id: "04", title: "Development", icon: Code2, desc: "Engineering robust, secure, and highly performant solutions." },
  { id: "05", title: "Launch", icon: Rocket, desc: "Seamless deployment with zero downtime and full support." },
  { id: "06", title: "Scale", icon: TrendingUp, desc: "Continuous iteration and scaling to drive exponential growth." }
];

export function ScrollStory() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);
  // Progress bar scales from 0 to 1 based on scroll
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050816]">
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] origin-left z-50"
      />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(108,99,255,0.08)_0%,_transparent_50%)] pointer-events-none" />
        
        <div className="w-full z-10">
          <div className="mb-12 max-w-2xl px-6 md:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Engineering Process</h2>
            <p className="text-slate-400 text-lg">A proven methodology from concept to scale.</p>
          </div>

          <motion.div style={{ x }} className="flex gap-8 w-max px-6 md:px-20 pb-10">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[400px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/0 via-transparent to-[#00E5FF]/0 group-hover:from-[#6C63FF]/10 group-hover:to-[#00E5FF]/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">{step.id}</span>
                    <div className="w-14 h-14 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF] group-hover:scale-110 group-hover:bg-[#6C63FF] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(108,99,255,0)] group-hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]">
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors duration-500">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-8 relative z-10">
                  <div className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
