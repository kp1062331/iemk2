"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Qloax completely transformed our infrastructure. We're deploying models 10x faster with half the compute cost. The enterprise security features are exactly what our infosec team required.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, FinTech Global",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "The seamless integration and intuitive developer experience is unparalleled. Qloax feels like an extension of our own team rather than just a platform.",
    author: "David Chen",
    role: "CTO, NextGen Health",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    quote: "Scaling our AI capabilities used to be our biggest bottleneck. With Qloax, we just push to production and let their engine handle the scaling. Pure magic.",
    author: "Elena Rodriguez",
    role: "Head of AI, CloudScale",
    image: "https://i.pravatar.cc/150?img=44"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Trusted by Innovators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            See how leading enterprises are building the future with Qloax.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-secondary/10 border border-white/5 relative group hover:bg-secondary/20 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />
              <p className="text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
