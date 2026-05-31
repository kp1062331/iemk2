"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Svelte", "React Native", "Flutter"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Spring Boot", "FastAPI", "Go", "GraphQL", "tRPC"],
  },
  {
    category: "AI / ML",
    techs: ["PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Hugging Face", "scikit-learn"],
  },
  {
    category: "Cloud & Infra",
    techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Data",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Snowflake", "TimescaleDB"],
  },
  {
    category: "Security",
    techs: ["OWASP", "OAuth 2.0", "Zero-trust", "SOC 2", "HIPAA", "ISO 27001"],
  },
];

export function TechStack() {
  return (
    <section className="bg-black border-b border-white/10">
      {/* Header */}
      <div className="px-8 md:px-16 py-12 border-b border-white/10 flex items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/40" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Technology</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Our Stack
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-white/30 text-sm leading-relaxed text-right">
          We choose technology based on the problem, not the trend.
        </p>
      </div>

      {/* Tech grid */}
      <div className="divide-y divide-white/10">
        {stack.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-[140px_1fr] md:grid-cols-[220px_1fr] gap-8 md:gap-16 px-8 md:px-16 py-8 hover:bg-white/[0.03] transition-colors duration-200"
          >
            {/* Category */}
            <div className="flex items-start pt-1">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-200">
                {row.category}
              </span>
            </div>

            {/* Tech list */}
            <div className="flex flex-wrap gap-3">
              {row.techs.map((tech, j) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 + j * 0.04 }}
                  whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                  className="px-3 py-1.5 rounded border border-white/10 text-white/40 text-sm font-mono hover:border-white transition-colors duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="px-8 md:px-16 py-6 border-t border-white/10">
        <p className="text-white/20 text-xs font-mono">
          Not in the list? We evaluate new technology on a project-by-project basis. Ask us.
        </p>
      </div>
    </section>
  );
}
