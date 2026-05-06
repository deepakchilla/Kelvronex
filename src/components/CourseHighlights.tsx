"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "Software Architecture",
    category: "Full Stack Development",
    image: "/tech_architecture_courses_1777916454605.png",
    link: "/tracks"
  },
  {
    title: "Strategic HR Mastery",
    category: "Business & Strategy",
    image: "/business_strategy_minimalist_1777916475755.png",
    link: "/tracks"
  }
];

export default function CourseHighlights() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-4">Core Pathways</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Featured <br /> <span className="text-outline">Learning Tracks</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {highlights.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              <Link href={course.link} className="block relative overflow-hidden aspect-[16/9] mb-8 border border-black/10 group-hover:border-black/30 transition-colors duration-500">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-[0.2] transition-all duration-700"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                <div className="absolute top-8 right-8 w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl">
                  <ArrowUpRight className="w-6 h-6 text-black group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i * 0.2) }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-2 block italic"
                  >
                    {course.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.2) }}
                    className="text-3xl font-black uppercase tracking-tight group-hover:text-secondary transition-colors duration-300"
                  >
                    {course.title}
                  </motion.h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-black/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300"
                >
                  Enrolling Now
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/tracks"
            className="inline-block px-12 py-6 bg-black text-white text-xs font-black uppercase tracking-[0.4em] hover:bg-transparent hover:text-black border border-black transition-all"
          >
            Explore All 50+ Tracks
          </Link>
        </div>
      </div>
    </section>
  );
}
