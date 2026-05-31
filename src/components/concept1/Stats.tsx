"use client";

import { motion } from "framer-motion";
import { Users, Globe, Activity, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Enterprise Clients", icon: Users },
  { value: "40+", label: "Countries Reached", icon: Globe },
  { value: "99.99%", label: "Uptime SLA", icon: Activity },
  { value: "15+", label: "Industry Awards", icon: Award },
];

export function Stats() {
  return (
    <section className="py-20 border-y border-gray-200 bg-white text-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-primary/20 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {stat.value}
                </h4>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
