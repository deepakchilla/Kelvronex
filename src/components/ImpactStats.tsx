"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Technical Mastery", value: "4.8/5", sub: "User Satisfaction" },
  { label: "Global Reach", value: "50K+", sub: "Trained Mentees" },
  { label: "Industry Network", value: "500+", sub: "Strategic Partners" },
  { label: "Career Acceleration", value: "92%", sub: "Placement Rate" },
];

export default function ImpactStats() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 block mb-6">{stat.label}</span>
              <span className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
