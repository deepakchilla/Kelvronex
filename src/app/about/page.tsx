"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-16">
              About <br /> <span className="text-outline">Kelvornex</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-6">Our Mission</h2>
                <p className="text-secondary text-lg leading-relaxed">
                  To provide a high-precision technical ecosystem where potential meets architectural mastery. We bridge the gap between academic theory and industrial performance.
                </p>
              </div>
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-6">Our Philosophy</h2>
                <p className="text-secondary text-lg leading-relaxed">
                  We believe in zero-compromise design and technical integrity. Our minimalist approach ensures that every detail serves a purpose in the pursuit of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
