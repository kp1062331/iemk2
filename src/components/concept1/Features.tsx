"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Tailored to you",
    description: "Transform basic information about your business and brand into a beautiful, personalized website using the power of Squarespace Blueprint AI.",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/tailoring/tailoring-desktop-2-1000w.jpg",
    video: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/tailoring/tailoring-desktop-3.mp4",
    span: "md:col-span-2 lg:col-span-3", // Full width across top
    height: "min-h-[400px] md:min-h-[500px]"
  },
  {
    title: "Edit with drag-and-drop",
    description: "Design directly on the grid with Fluid Engine, our easy to use website editor—no coding or design experience needed.",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/drag-and-drop/drag-and-drop-desktop-1000w.jpg",
    span: "md:col-span-1 lg:col-span-1",
    height: "min-h-[350px]"
  },
  {
    title: "Preview alternate styles",
    description: "Browse curated styling combinations and instantly apply what speaks to you.",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/styles/styles-desktop-1000w.jpg",
    span: "md:col-span-1 lg:col-span-2",
    height: "min-h-[350px]"
  },
  {
    title: "Explore fresh layouts",
    description: "Rearrange content and images within a section to find the perfect look, all with one click.",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/layouts/layouts-desktop-1000w.jpg",
    span: "md:col-span-1 lg:col-span-2",
    height: "min-h-[350px]"
  },
  {
    title: "Draft copy automatically",
    description: "Generate new, on-brand copy or adjust pre-written text with Squarespace AI.",
    image: "https://media-www.sqspcdn.com/images/pages/flagship/websites/design-intelligence/drafts/drafts-desktop-1000w.jpg",
    span: "md:col-span-1 lg:col-span-1",
    height: "min-h-[350px]"
  }
];

export function Features() {
  return (
    <section id="platform" className="py-24 md:py-40 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Core Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            A comprehensive suite of tools designed to accelerate your workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 group cursor-pointer ${card.span} ${card.height}`}
            >
              {/* Background Asset */}
              {card.video ? (
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
              )}
              
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">{card.title}</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
