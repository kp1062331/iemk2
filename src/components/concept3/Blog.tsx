"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    category: "Engineering",
    title: "Scaling AI Infrastructure for Global Enterprises",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    category: "Insights",
    title: "The Evolution of Digital Ecosystems",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
  },
  {
    category: "Company News",
    title: "QLOAX Announces Next-Gen Automation Suite",
    date: "May 08, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
  }
];

export function Blog() {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white"
          >
            Latest <br /> Insights
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-widest font-bold"
          >
            View All News <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block"
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase text-white">
                  {post.category}
                </span>
                <span className="text-sm text-white/40 font-medium">
                  {post.date}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
