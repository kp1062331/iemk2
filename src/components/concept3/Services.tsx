"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Product Innovation",
    description: "Building scalable, automated, and design-driven digital products.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    color: "bg-[#0a0a0a]",
    accent: "text-blue-500"
  },
  {
    title: "Digital Ecosystems",
    description: "Architecting interconnected platforms that drive enterprise growth.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    color: "bg-[#111111]",
    accent: "text-purple-500"
  },
  {
    title: "AI & Automation",
    description: "Fusing deep domain expertise with next-gen technology to build intelligent systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    color: "bg-[#1a1a1a]",
    accent: "text-emerald-500"
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-[#000000] relative">
      <div className="container mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-white max-w-4xl"
        >
          Transforming <br /> the Status Quo
        </motion.h2>
      </div>

      <div className="relative">
        {services.map((service, index) => {
          return (
            <div 
              key={index} 
              className={`sticky top-[10vh] min-h-[80vh] flex items-center justify-center`}
              style={{ zIndex: index + 10 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ margin: "-100px" }}
                className={`w-full max-w-7xl mx-auto rounded-[3rem] overflow-hidden ${service.color} border border-white/10 shadow-2xl flex flex-col md:flex-row h-[70vh] md:h-[60vh]`}
              >
                <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                      {service.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                  
                  <button className={`mt-12 flex items-center gap-4 text-xl font-medium ${service.accent} group self-start`}>
                    <span className="border-b border-transparent group-hover:border-current transition-colors pb-1">
                      Explore Capabilities
                    </span>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                <div className="w-full md:w-1/2 h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
