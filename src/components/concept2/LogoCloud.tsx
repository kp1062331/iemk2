"use client";

import { motion } from "framer-motion";

const logos = [
  "IBM", "Accenture", "Deloitte", "Microsoft", "Salesforce", "Oracle"
];

export function LogoCloud() {
  return (
    <section className="py-24 md:py-40 bg-background border-b border-border/10">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm md:text-base tracking-widest uppercase text-muted-foreground mb-16 font-medium"
        >
          Trusted by industry leaders worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
