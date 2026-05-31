"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VR Business Solutions",
    category: "Virtual Reality",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80",
  },
  {
    title: "Maa Kamakhya",
    category: "Global Exports",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  },
  {
    title: "FindTheFirm",
    category: "B2B SaaS Directory",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Enterprise LMS Platform",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  }
];

export function ProjectsGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050816]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-20 left-6 md:left-20 z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Featured Work</h2>
          <p className="text-[#00E5FF] font-medium tracking-widest uppercase text-sm">Case Studies</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-20 mt-10 w-max pb-10">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="relative w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 group cursor-pointer overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl"
            >
              {/* Image with hover scale and internal parallax */}
              <motion.img 
                src={project.image} 
                alt={project.title}
                style={{ x: imageX, scale: 1.25 }}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700 ease-out origin-center"
              />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex justify-between items-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-[#00E5FF] font-medium tracking-widest uppercase text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 group-hover:bg-[#6C63FF]">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
