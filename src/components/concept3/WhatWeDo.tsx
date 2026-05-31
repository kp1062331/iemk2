"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Product Innovation",
    description: "Building scalable, automated, and design-driven digital products.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
  {
    title: "Digital Ecosystems",
    description: "Architecting interconnected platforms that drive enterprise growth.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
  {
    title: "AI & Automation",
    description: "Fusing deep domain expertise with next-gen technology to build intelligent systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
  }
];

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-40 bg-white text-black border-t border-gray-200">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-sm uppercase text-gray-500 mb-4 tracking-widest font-medium">
            What we do
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Products. Services. Intelligence.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            QLOAX is building the digital backbone of next-generation enterprises — where AI, automation, and engineering converge to create measurable impact.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-20 items-center group`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] aspect-[4/3] bg-gray-100 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{service.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <button className="flex items-center gap-3 text-lg font-medium border-b border-black pb-1 hover:text-red-500 hover:border-red-500 transition-colors">
                  Learn more <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
