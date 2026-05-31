"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "Spring Boot", "Node.js", 
  "Java", "Python", "AWS", "Docker", 
  "PostgreSQL", "MongoDB", "AI/ML", "TypeScript"
];

// Helper to generate random positions for floating effect
const floatAnimation = (delay: number) => ({
  y: ["-10px", "10px", "-10px"],
  x: ["-5px", "5px", "-5px"],
  transition: {
    duration: 4 + Math.random() * 2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay,
  }
});

export function TechEcosystem() {
  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Technology Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl"
          >
            Powered by modern, enterprise-grade architecture.
          </motion.p>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          
          {/* Central Node */}
          <motion.div 
            animate={floatAnimation(0)}
            className="relative z-20 flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] shadow-[0_0_50px_rgba(108,99,255,0.5)] border-4 border-[#050816]"
          >
            <span className="text-2xl md:text-3xl font-black text-white">QLOAX</span>
          </motion.div>

          {/* Orbiting Tech Nodes */}
          {technologies.map((tech, i) => {
            const delay = i * 0.2;
            const angle = (i / technologies.length) * Math.PI * 2;
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const radiusX = isMobile ? 130 : 280;
            const radiusY = isMobile ? 160 : 220;
            const rotation = (angle * 180) / Math.PI;

            return (
              <div key={tech}>
                {/* Connecting Line */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-[#6C63FF]/50 to-transparent origin-left z-0 pointer-events-none"
                  style={{
                    width: `${Math.sqrt(radiusX * radiusX + radiusY * radiusY) - 60}px`,
                    transform: `rotate(${rotation}deg)`,
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={floatAnimation(delay)}
                  className="absolute z-10 px-6 py-3 rounded-full bg-[#0F172A] border border-[#6C63FF]/30 backdrop-blur-md shadow-[0_0_20px_rgba(108,99,255,0.15)] flex items-center justify-center hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all cursor-default"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radiusX}px)`,
                    top: `calc(50% + ${Math.sin(angle) * radiusY}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <span className="text-slate-300 font-semibold">{tech}</span>
                </motion.div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
