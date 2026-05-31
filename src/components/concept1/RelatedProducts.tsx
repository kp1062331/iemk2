"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    eyebrow: "Domains",
    title: "Find a domain for your website",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/related-products/domains/domains-desktop-1000w.jpg",
    href: "https://domains.squarespace.com"
  },
  {
    eyebrow: "Professional Email",
    title: "Make it official with Google Workspace",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/related-products/professional-email/professional-email-desktop-1000w.jpg",
    href: "/professional-email"
  },
  {
    eyebrow: "Online Stores",
    title: "Sell anything, everywhere",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/related-products/online-stores/online-store-desktop-3-1000w.jpg",
    href: "/online-store"
  }
];

export function RelatedProducts() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Access more ways to build your online presence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.a
              href={product.href}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors aspect-[4/5]"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-10 transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute inset-0 p-8 z-20 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                    {product.eyebrow}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {product.title}
                  </h3>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <ArrowRight className="w-6 h-6 transform group-hover:-rotate-45 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
