"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Enterprise Solutions",
    description: "We combine domain expertise, data engineering, AI & cloud-native engineering to deliver robust platforms.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    title: "AI & Automation",
    description: "We transforms static processes into self-learning and adaptive ecosystems that think, decide, and evolve.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud Architecture",
    description: "We practice builds the digital foundation that powers scalability, security & agility for next-generation enterprises.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
  }
];

export function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-white text-black">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start relative">
        
        {/* Sticky Text Section (Left) */}
        <div className="md:w-1/2 md:sticky top-40 mb-12 md:mb-0 md:pr-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
          >
            Unique Ideas <br className="hidden lg:block" />
            For Your Business.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            We combine domain expertise, data engineering, AI & cloud-native engineering to deliver robust platforms.
          </motion.p>
        </div>

        {/* Scrolling Images Section (Right) */}
        <div className="md:w-1/2 flex flex-col gap-24 md:gap-40">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
