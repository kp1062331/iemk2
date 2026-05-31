"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Maximize } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Unmatched Performance",
    description: "Built for speed. Our architecture ensures your digital products perform flawlessly under massive global load.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Maximize,
    title: "Infinite Scalability",
    description: "From startup to enterprise. Scale your infrastructure automatically without refactoring your codebase.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Enterprise-grade security built into every layer. We protect your data with military-grade encryption.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function WhyChooseUs() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust scroll distance based on the new layout width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#F9F8F4] text-[#111]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex items-center gap-16 md:gap-32 px-6 md:px-24 h-full">
          
          {/* Intro text as the first item in the scrolling track */}
          <div className="w-[85vw] md:w-[500px] flex-shrink-0">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Why Qloax</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              The architecture <br /> of advantage.
            </h3>
          </div>

          {/* Cards */}
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className="w-[85vw] md:w-[600px] flex-shrink-0 p-12 md:p-16 rounded-[3rem] bg-white border border-black/5 flex flex-col justify-center shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${reason.bg.replace('/10','/5')} ${reason.color.replace('400','600')} border border-black/5 group-hover:scale-110 transition-transform duration-500 bg-white shadow-sm`}>
                <reason.icon className="w-10 h-10" />
              </div>
              <h4 className="relative z-10 text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-600 transition-colors duration-300">{reason.title}</h4>
              <p className="relative z-10 text-xl text-black/60 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
