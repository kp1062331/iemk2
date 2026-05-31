"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { value: 50, suffix: "+", label: "Products Shipped", sub: "Across 12 industries" },
  { value: 98, suffix: "%", label: "Client Retention", sub: "3-year average" },
  { value: 12, suffix: "x", label: "Avg. ROI Delivered", sub: "Measured at 18 months" },
  { value: 5, suffix: "M+", label: "End Users Served", sub: "By software we built" },
];

export function Stats() {
  return (
    <section className="bg-white border-b border-black/10">
      {/* Section label */}
      <div className="px-8 md:px-16 py-8 border-b border-black/10 flex items-center gap-3">
        <span className="w-8 h-px bg-black/40" />
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/40">By The Numbers</span>
      </div>

      {/* Giant stat grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 md:px-12 py-16 flex flex-col bg-white hover:bg-black group transition-colors duration-500"
          >
            <div className="text-[clamp(4rem,8vw,7rem)] font-black leading-none tracking-tighter text-black group-hover:text-white mb-4 transition-colors duration-500">
              <Counter to={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-auto">
              <p className="text-black group-hover:text-white font-bold text-lg transition-colors duration-500">{m.label}</p>
              <p className="text-black/40 group-hover:text-white/40 text-sm mt-1 font-mono transition-colors duration-500">{m.sub}</p>
            </div>
            <div className="mt-6 w-8 h-px bg-black/20 group-hover:bg-white/20 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Why Qloax prose — black bg inverted section */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10 border-t border-black/10 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-8 md:px-16 py-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-6">
            Why Qloax?
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Most agencies sell hours. We sell outcomes. Every project has a defined
            success metric agreed before kick-off — and we're accountable to hitting it.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10">
          {[
            { title: "Senior engineers only", desc: "No juniors in client-facing roles. Ever." },
            { title: "Fixed-scope, fixed-price", desc: "No surprise invoices. Scope changes require formal change orders." },
            { title: "Full IP ownership", desc: "Every contract includes a full IP assignment to the client." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="px-8 md:px-16 py-8 flex items-start gap-4 group hover:bg-white/5 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-white/30 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
