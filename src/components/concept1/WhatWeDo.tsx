"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Lock, Zap } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "High-Performance Computing",
    description: "Leverage our distributed GPU clusters to train massive AI models in record time. Built for raw speed and infinite scalability."
  },
  {
    icon: Zap,
    title: "Low-Latency Edge Inference",
    description: "Deploy models directly to the edge with our optimized inference engine, ensuring millisecond response times globally."
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Your data never leaves your environment. We provide air-gapped deployments and zero-trust architecture by default."
  },
  {
    icon: Globe,
    title: "Global Data Pipelines",
    description: "Ingest, clean, and process petabytes of data across multiple regions simultaneously with our unified pipeline."
  }
];

export function WhatWeDo() {
  return (
    <section className="py-24 bg-background text-white border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-red-500 font-bold uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Powering the next generation of AI applications.
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-lg">
            We provide the foundational infrastructure required to build, deploy, and scale intelligence across any enterprise environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Abstract background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
