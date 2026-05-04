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
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={course.link} className="block relative overflow-hidden aspect-[16/9] mb-8 border border-black/10">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-8 right-8 w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-2 block italic">{course.category}</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight">{course.title}</h3>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-black/10">
                  Enrolling Now
                </div>
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
