"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Insights",
    title: "From Data Silos to Smart Decisions",
    description: "Connected intelligence transforms isolated industrial data into real-time, actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    date: "May 24, 2026",
  },
  {
    category: "Engineering",
    title: "The Future of Cloud-Native Architecture",
    description: "How modern enterprises are leveraging zero-trust networks and edge computing for global scale.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    date: "May 18, 2026",
  },
  {
    category: "Case Study",
    title: "Automating Legacy Manufacturing",
    description: "A deep dive into how our AI-first approach reduced operational downtime by 40%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    date: "May 12, 2026",
  }
];

export function Blog() {
  return (
    <section className="py-24 md:py-40 bg-secondary/20">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Insights & Engineering
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Perspectives on artificial intelligence, enterprise architecture, and the future of digital ecosystems.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors shrink-0"
          >
            View all articles <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-background border border-border/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4">
                <span className="text-foreground uppercase tracking-wider text-xs">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
