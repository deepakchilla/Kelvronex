"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import { motion } from "framer-motion";

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-20 px-8 border-b border-black/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-4">Our Curriculum</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Technical <br /> <span className="text-outline">Pathways</span>
            </h1>
            <p className="max-w-xl text-secondary text-lg leading-relaxed">
              Explore our precision-engineered tracks across software engineering, hardware systems, and strategic business leadership.
            </p>
          </motion.div>
        </div>
      </section>
      <Courses />
      <Footer />
    </main>
  );
}
