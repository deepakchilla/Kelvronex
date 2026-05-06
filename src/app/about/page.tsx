"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                  Corporate Overview
                </span>
              </div>
              <h1 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-black">
                About <br /> <span className="text-outline">Kelvronex</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary font-medium mb-12 leading-relaxed border-l-2 border-black/10 pl-8 max-w-lg">
                To provide a high-precision technical ecosystem where potential meets architectural mastery. We bridge the gap between academic theory and industrial performance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/5] w-full bg-black/5 group"
            >
              <Image 
                src="/about_architecture_1778073651356.png"
                alt="Kelvronex Architecture"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-black/10 m-4 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 border-y border-white/20 py-16">
            {[
              { label: "Professional Rating", value: "4.8/5", detail: "Architectural Integrity" },
              { label: "Mentees Trained", value: "50K+", detail: "Global Community" },
              { label: "Strategic Partners", value: "500+", detail: "Industrial Pipelines" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group cursor-default"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 block mb-6">{stat.label}</span>
                <span className="text-6xl md:text-8xl font-black block mb-4 group-hover:text-accent transition-colors duration-500">{stat.value}</span>
                <div className="w-12 h-[2px] bg-white/20 group-hover:bg-accent group-hover:w-full transition-all duration-500 mb-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">{stat.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-8 h-[1px] bg-accent" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Our Philosophy</h2>
                <div className="w-8 h-[1px] bg-accent" />
              </div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                We believe in <br /><span className="text-outline text-black">zero-compromise</span><br /> design & technical integrity.
              </p>
              <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                Founded on the principles of minimalist efficiency, Kelvronex has become a leader in the technical education space. Our approach ensures that every detail serves a purpose in the absolute pursuit of excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
