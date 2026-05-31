"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Cloud, Code2, Cpu, LineChart, Server } from "lucide-react";

const nodes = [
  { id: 1, label: "AI Solutions", icon: Brain, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", description: "Machine learning, NLP, and computer vision models deployed at scale." },
  { id: 2, label: "Cloud Infrastructure", icon: Cloud, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", description: "Multi-cloud architecture, serverless deployments, and secure networks." },
  { id: 3, label: "Enterprise Software", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", description: "Mission-critical applications built for robust enterprise environments." },
  { id: 4, label: "Product Engineering", icon: Code2, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", description: "End-to-end software development from prototyping to production." },
  { id: 5, label: "Automation", icon: Cpu, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", description: "Intelligent process automation and robotics integrations." },
  { id: 6, label: "Analytics", icon: LineChart, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", description: "Real-time data processing, predictive analytics, and BI dashboards." }
];

export function Ecosystem() {
  return (
    <section className="py-32 bg-[#F9F8F4] relative overflow-hidden">
      {/* Seamless Transition Fade from Hero */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-50" />
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32 relative z-40">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">Technology Ecosystem</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-6">
            A unified architecture for continuous innovation.
          </p>
          <p className="text-xl text-black/60 font-light">
            Our proprietary stack seamlessly integrates cutting-edge technologies into a single, high-performance ecosystem.
          </p>
        </div>

        {/* Enterprise Hub-and-Spoke Architecture Layout */}
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          
          {/* Left Column - 3 Nodes */}
          <div className="flex flex-col gap-8 w-full lg:w-[35%] relative z-20">
            {nodes.slice(0, 3).map((node, i) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex items-center justify-end group"
              >
                {/* Horizontal Connection Line to Center (Desktop Only) */}
                <div className="absolute top-1/2 -translate-y-1/2 w-[20vw] h-px bg-gradient-to-r from-transparent via-red-500/40 to-red-600 right-[-20vw] hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-red-600 -translate-y-1/2 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                </div>

                <div className="w-full bg-white border border-black/5 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-6 items-center hover:-translate-y-1 group-hover:border-red-500/20">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${node.bg.replace('/10','/5')} border border-black/5 group-hover:scale-110 transition-transform duration-500`}>
                    <node.icon className={`w-8 h-8 ${node.color.replace('400','600')}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#111] mb-1">{node.label}</h3>
                    <p className="text-sm text-black/60 leading-relaxed">{node.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[30%] flex justify-center relative z-30 py-12 lg:py-0"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-black/5 animate-[spin_12s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-red-500/20 border-dashed animate-[spin_24s_linear_infinite_reverse]" />
              <div className="absolute -inset-16 rounded-full border border-purple-500/10 animate-[spin_36s_linear_infinite]" />
              
              {/* Core Body */}
              <div className="w-56 h-56 bg-white rounded-full shadow-[0_20px_80px_rgba(220,38,38,0.15)] flex flex-col items-center justify-center relative z-20 border border-black/[0.03]">
                {/* Inner Pulse */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-50 to-transparent opacity-50" />
                
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-3 relative shadow-inner">
                  <div className="absolute inset-0 rounded-full border border-red-200 animate-ping opacity-20" />
                  <Cpu className="w-10 h-10 text-red-600" />
                </div>
                <span className="font-bold text-2xl tracking-[0.25em] ml-1 text-[#111] bg-clip-text text-transparent bg-gradient-to-br from-[#111] to-red-900">QLOAX</span>
                <span className="text-[10px] uppercase tracking-widest text-red-600/60 font-bold mt-2">Core Engine</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3 Nodes */}
          <div className="flex flex-col gap-8 w-full lg:w-[35%] relative z-20">
            {nodes.slice(3, 6).map((node, i) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex items-center justify-start group"
              >
                {/* Horizontal Connection Line to Center (Desktop Only) */}
                <div className="absolute top-1/2 -translate-y-1/2 w-[20vw] h-px bg-gradient-to-l from-transparent via-red-500/40 to-red-600 left-[-20vw] hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-red-600 -translate-y-1/2 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                </div>

                <div className="w-full bg-white border border-black/5 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-6 items-center hover:-translate-y-1 group-hover:border-red-500/20">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${node.bg.replace('/10','/5')} border border-black/5 group-hover:scale-110 transition-transform duration-500`}>
                    <node.icon className={`w-8 h-8 ${node.color.replace('400','600')}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#111] mb-1">{node.label}</h3>
                    <p className="text-sm text-black/60 leading-relaxed">{node.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
