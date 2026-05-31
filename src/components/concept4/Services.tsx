"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Custom models designed to automate complex workflows and uncover hidden data patterns.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
  },
  {
    title: "Cloud Native Architecture",
    description: "Scalable, resilient, and globally distributed infrastructure built for the modern web.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "Enterprise Web Apps",
    description: "Mission-critical platforms engineered for performance, security, and exceptional user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  }
];

export function Services() {
  return (
    <section className="py-32 bg-[#F9F8F4] text-[#111] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Core Services</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Transforming <br />
              complex challenges into <span className="text-blue-600 italic">elegant solutions.</span>
            </h3>
          </div>
          <button className="hidden md:flex items-center gap-2 pb-2 border-b-2 border-black/20 font-semibold hover:text-blue-600 hover:border-blue-600 transition-colors text-black/80">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-12 md:space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center group`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-3xl bg-white border border-black/5 shadow-xl relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="w-full md:w-1/2 md:px-12">
                <p className="text-blue-600 font-bold mb-4 tracking-widest text-sm uppercase">0{index + 1}</p>
                <h4 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-blue-600 transition-colors duration-500">{service.title}</h4>
                <p className="text-xl text-black/60 mb-8 leading-relaxed max-w-md">{service.description}</p>
                <button className="flex items-center gap-2 text-lg font-semibold text-black/80 group-hover:text-blue-600 transition-colors">
                  Learn more 
                  <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
