"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Layout, Smartphone, Server, Layers, Cpu, Database, Braces 
} from "lucide-react";

const techs = [
  { name: "Next.js", icon: <Globe />, desc: "Modern Web Apps" },
  { name: "TypeScript", icon: <Braces />, desc: "Type-safe Code" },
  { name: "Tailwind CSS", icon: <Layout />, desc: "Rapid UI" },
  { name: "React", icon: <Layers />, desc: "Component Architecture" },
  { name: "PostgreSQL", icon: <Database />, desc: "Scalable Data" },
  { name: "Node.js", icon: <Server />, desc: "Robust Backend" },
  { name: "React Native", icon: <Smartphone />, desc: "Mobile Solutions" },
  { name: "Quantum SDKs", icon: <Cpu />, desc: "Future Computing" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Our Core</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Technological Stack</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                {tech.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
              <p className="text-muted text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
