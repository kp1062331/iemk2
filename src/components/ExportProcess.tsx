"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, CheckCircle, Package, FileText, Ship, MapPin } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Sprout, title: "Farm Sourcing", desc: "Sourced directly from verified Indian farms." },
  { icon: CheckCircle, title: "Quality Testing", desc: "Rigorous lab testing for global standards." },
  { icon: Package, title: "Packaging", desc: "Hygienic, export-grade secure packing." },
  { icon: FileText, title: "Documentation", desc: "Complete customs & export clearance." },
  { icon: Ship, title: "International Shipping", desc: "Safe, temperature-controlled logistics." },
  { icon: MapPin, title: "Delivery", desc: "On-time arrival at your destination port." },
];

export default function ExportProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="process" className="py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32">
          <div className="max-w-2xl">
            {/* Top Badge matching Hero */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondary/30 mb-8 bg-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary tracking-[0.4em] uppercase text-[10px] font-medium">
                The Logistics
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading text-dark font-light leading-[1.1]">
              Our Seamless <br/>
              <span className="italic text-secondary">Export Process</span>
            </h2>
          </div>
          <p className="text-dark/40 max-w-sm text-sm font-light leading-relaxed mt-10 md:mt-0 border-l border-secondary/30 pl-8">
            A transparent, and quality-driven journey from Indian farms to global ports, managed with absolute precision.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line Base */}
          <div className="absolute top-[50px] left-[5%] w-[90%] h-[1px] bg-dark/5 hidden lg:block"></div>
          {/* Animated Connecting Line */}
          <motion.div 
            style={{ scaleX, transformOrigin: "left" }} 
            className="absolute top-[50px] left-[5%] w-[90%] h-[1px] bg-secondary hidden lg:block z-0"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  <div className="w-24 h-24 bg-white border border-dark/5 flex items-center justify-center mb-10 group-hover:border-secondary transition-all duration-500 relative z-10 shadow-sm group-hover:shadow-xl">
                    <Icon size={24} className="text-dark/30 group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  
                  <div className="w-full">
                    <div className="text-secondary text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Step 0{index + 1}</div>
                    <h3 className="font-heading text-dark text-xl mb-4 font-light tracking-wide">{step.title}</h3>
                    <p className="text-dark/40 text-xs font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
