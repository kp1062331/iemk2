"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Cloud, Smartphone, Database, Globe } from "lucide-react";

const services = [
  { icon: Monitor, title: "Custom Software", desc: "Enterprise-grade software tailored to your specific business needs and workflows." },
  { icon: Cpu, title: "AI & Automation", desc: "Intelligent systems that automate processes and unlock new data insights." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable, secure cloud architectures built on AWS, Azure, and Google Cloud." },
  { icon: Globe, title: "Web Applications", desc: "High-performance, responsive web apps built with modern JavaScript frameworks." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { icon: Database, title: "SaaS Development", desc: "End-to-end product development for scalable subscription-based platforms." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Services() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6C63FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl"
          >
            We deliver end-to-end digital engineering across the entire technology stack.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(108,99,255,0.4)] transition-all duration-500"
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-xy" />
              
              <div className="relative h-full bg-[#0F172A]/90 backdrop-blur-2xl p-8 rounded-3xl flex flex-col z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#6C63FF] group-hover:border-[#6C63FF] transition-colors duration-500 shadow-[0_0_0_rgba(108,99,255,0)] group-hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]">
                  <service.icon className="w-7 h-7 text-[#00E5FF] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.desc}
                </p>

                <div className="mt-auto pt-8">
                  <span className="text-sm font-semibold text-[#6C63FF] flex items-center gap-2 group-hover:text-[#00E5FF] transition-colors">
                    Explore Capability
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
