"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FounderStoryPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="about" className="py-24 lg:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondary/30 mb-8 bg-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary tracking-[0.4em] uppercase text-[10px] font-medium">
                Our Sacred Origin
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading text-dark mb-8 leading-[1.1] font-light">
              A Spiritual Journey to <br/>
              <span className="italic text-secondary">Global Excellence</span>
            </h2>

            <p className="text-lg text-dark/60 mb-8 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              The vision for Maa Kamakhya Exports was born not in a boardroom, but during a profound spiritual journey to the sacred Kamakhya Temple. Seeking clarity and blessings, our founder found inspiration in the purity of nature and the power of faith.
            </p>

            <p className="text-base text-dark/50 mb-12 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Today, that same purity and devotion drive our mission to connect India's richest agricultural lands with the world, delivering premium quality exports that international markets trust.
            </p>

            <button className="bg-dark text-white px-12 py-5 font-body tracking-[0.2em] uppercase text-[10px] font-bold hover:bg-secondary hover:text-dark transition-all duration-500 w-full sm:w-auto shadow-xl">
              Read Our Story
            </button>
          </motion.div>

          {/* Left Image */}
          <motion.div 
            style={{ y: imgY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 border border-secondary/20 -translate-x-4 translate-y-4 sm:-translate-x-10 sm:translate-y-10 hidden sm:block" />
            <div className="relative overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
                alt="Kamakhya Temple Inspiration"
                className="relative z-10 object-cover h-[400px] sm:h-[500px] lg:h-[700px] w-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-dark/10 mix-blend-overlay z-20" />
            </div>
            
            {/* Floating Detail */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-white p-6 sm:p-10 border border-dark/5 shadow-2xl max-w-[200px] sm:max-w-xs z-30">
              <span className="text-secondary text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 sm:mb-4">Founded on Faith</span>
              <p className="text-dark/60 text-[10px] sm:text-xs font-light leading-relaxed">
                We believe that business is a form of service. Our roots in spirituality ensure that every transaction is handled with absolute honesty.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
