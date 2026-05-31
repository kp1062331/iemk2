"use client";

import { motion } from "framer-motion";

const projects = [
  {
    client: "Nova Financial",
    title: "Reimagining modern banking infrastructure.",
    category: "Fintech Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    client: "Aura Health",
    title: "AI-driven patient diagnostics dashboard.",
    category: "Healthcare SaaS",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  }
];

export function Projects() {
  return (
    <section className="py-32 bg-[#F9F8F4] text-[#111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">Featured Work</h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Proof of concept.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`group cursor-pointer ${i === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-8 bg-white border border-black/5 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-red-500/0 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <p className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">{project.category}</p>
              <h4 className="text-3xl font-bold mb-2 group-hover:text-red-600 transition-colors">{project.client}</h4>
              <p className="text-black/60 text-lg">{project.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
