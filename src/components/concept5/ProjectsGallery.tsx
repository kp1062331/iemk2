"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Global Payments Infrastructure",
    category: "Fintech · API Engineering",
    year: "2024",
    desc: "Rebuilt the entire payment processing layer for a Series B fintech — handling $2B/yr in transactions with 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["Node.js", "Kafka", "PostgreSQL", "AWS"],
  },
  {
    num: "02",
    title: "AI-Powered Logistics Engine",
    category: "Enterprise · Machine Learning",
    year: "2023",
    desc: "Trained a custom routing model that reduced delivery costs by 34% for a 500-vehicle logistics fleet across 12 cities.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663b0?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "PyTorch", "FastAPI", "Google Cloud"],
  },
  {
    num: "03",
    title: "Healthcare Patient Portal",
    category: "MedTech · Mobile · Web",
    year: "2023",
    desc: "A HIPAA-compliant patient engagement platform serving 180,000 patients across 40 clinic locations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    tags: ["React Native", "Spring Boot", "Azure", "HIPAA"],
  },
  {
    num: "04",
    title: "Smart Grid IoT Platform",
    category: "Infrastructure · IoT",
    year: "2022",
    desc: "Real-time monitoring system for 12,000 smart grid sensors with predictive maintenance alerts, reducing outages by 60%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Go", "MQTT", "TimescaleDB", "Grafana"],
  },
];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-white/10 px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-pointer hover:bg-white/[0.03] transition-colors duration-300 overflow-hidden"
    >
      {/* Floating image that follows mouse */}
      <motion.div
        className="hidden md:block absolute z-20 pointer-events-none w-64 h-44 rounded-xl overflow-hidden shadow-2xl"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
          x: mousePos.x - 128,
          y: mousePos.y - 88,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.3 },
          x: { type: "spring", stiffness: 300, damping: 30 },
          y: { type: "spring", stiffness: 300, damping: 30 },
        }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
      </motion.div>

      {/* Number */}
      <span className="text-[#1a1a1a] text-5xl md:text-7xl font-black font-mono flex-shrink-0 group-hover:text-white/10 transition-colors duration-300">
        {project.num}
      </span>

      {/* Main info */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-white/30 font-mono">{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-xs text-white/20 font-mono">{project.year}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-200">
          {project.title}
        </h3>
        <motion.p
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden text-white/40 text-sm leading-relaxed mt-2 max-w-lg"
        >
          {project.desc}
        </motion.p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-white/30 text-xs font-mono border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 flex-shrink-0" />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="bg-black border-b border-white/10">
      {/* Header */}
      <div className="px-8 md:px-16 py-12 border-b border-white/10 flex items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/40" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Selected Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Case Studies
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-white/30 text-sm leading-relaxed text-right">
          A small sample of what we've shipped for clients in the last 3 years.
        </p>
      </div>

      {/* Project rows */}
      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.num} project={p} index={i} />
        ))}
      </div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-8 md:px-16 py-10 flex items-center justify-between"
      >
        <span className="text-white/20 text-sm font-mono">
          {projects.length} featured · 50+ delivered total
        </span>
        <button
          className="flex items-center gap-2 text-sm font-bold text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
          data-cursor
        >
          View All Work <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}
