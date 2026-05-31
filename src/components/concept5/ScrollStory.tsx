"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Architecture",
    body: "We embed with your team to map every business constraint, user need, and technical debt. Then we design a scalable architecture — not just an MVP.",
    tag: "2–4 weeks",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    body: "High-fidelity prototypes that your stakeholders can click through. We validate before we build, cutting expensive rework by 80%.",
    tag: "3–5 weeks",
  },
  {
    num: "03",
    title: "Engineering Sprints",
    body: "Two-week sprints, daily standups, and a shared Slack channel. You always know exactly what's being built and why.",
    tag: "8–24 weeks",
  },
  {
    num: "04",
    title: "QA & Security Audit",
    body: "Automated test coverage above 90%, OWASP security checks, load testing up to 10× expected traffic, and a final sign-off from our principal engineer.",
    tag: "2–3 weeks",
  },
  {
    num: "05",
    title: "Launch & Handover",
    body: "Zero-downtime deployment, full documentation, team training, and a 90-day support retainer. You own everything, including the IP.",
    tag: "Ongoing",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const lineH = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative bg-black border-b border-white/10">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-white/10 px-8 md:px-16 py-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Our Engineering Process</span>
        <span className="text-xs text-white/20 font-mono">05 Phases</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] min-h-screen">
        {/* Left: sticky title column */}
        <div className="hidden md:flex flex-col justify-center px-16 py-24 border-r border-white/10 sticky top-16 h-[calc(100vh-4rem)] self-start">
          <h2 className="text-6xl font-black tracking-tighter leading-tight text-white uppercase">
            How We<br />
            <span className="text-white/20">Build</span>
          </h2>
          <p className="mt-6 text-white/30 text-sm leading-relaxed max-w-xs">
            A transparent, repeatable process designed around reducing risk and maximising output quality.
          </p>

          {/* Animated timeline line */}
          <div className="relative mt-12 w-px h-48 bg-white/10 overflow-hidden">
            <motion.div style={{ height: lineH }} className="absolute top-0 left-0 w-full bg-white" />
          </div>
        </div>

        {/* Right: steps */}
        <div className="flex flex-col divide-y divide-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group px-8 md:px-16 py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:bg-white/[0.03] transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-[80px] md:text-[100px] font-black leading-none text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none font-mono">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4 md:pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/30 text-xs font-mono border border-white/10">
                    {step.tag}
                  </span>
                </div>
                <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                  {step.body}
                </p>
                <div className="mt-6 w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
