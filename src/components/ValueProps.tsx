"use client";

import React from "react";
import { Shield, Target, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const props = [
  {
    icon: Target,
    title: "Precision Guidance",
    desc: "Every module is architected to align with industrial pipelines and high-end technical standards."
  },
  {
    icon: Shield,
    title: "Industrial Integrity",
    desc: "Project-based certifications that hold weight in the global architectural and software ecosystems."
  },
  {
    icon: Zap,
    title: "Architectural Speed",
    desc: "Accelerated learning pathways designed for high-performance individuals and technical leaders."
  },
  {
    icon: Cpu,
    title: "Core Engineering",
    desc: "Deep dive into the fundamental architecture of hardware and software solutions."
  }
];

export default function ValueProps() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-4">Why Kelvronex</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Architecting <br /> <span className="text-outline">Technical Excellence</span>
            </h2>
          </div>
          <p className="max-w-xs text-secondary text-sm leading-relaxed border-l border-black/10 pl-6">
            We don't just teach. We build the structural foundation for your career in high-end technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b border-black/10 last:border-r-0 lg:[&:nth-child(4)]:border-r-0 group hover:bg-black transition-colors duration-500"
            >
              <prop.icon className="w-8 h-8 mb-8 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
              <h3 className="text-xl font-black uppercase mb-4 text-black group-hover:text-white transition-colors">{prop.title}</h3>
              <p className="text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors">{prop.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
