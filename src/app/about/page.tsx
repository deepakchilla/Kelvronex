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
              About <br /> <span className="text-outline">Kelvronex</span>
            </h1>
            <div className="grid md:grid-cols-3 gap-12 mb-24 border-y border-black/10 py-12">
              {[
                { label: "Professional Rating", value: "4.8/5", detail: "Architectural Integrity" },
                { label: "Mentees Trained", value: "50K+", detail: "Global Community" },
                { label: "Strategic Partners", value: "500+", detail: "Industrial Pipelines" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-2">{stat.label}</span>
                  <span className="text-4xl font-black block mb-1">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{stat.detail}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-6">Our Mission</h2>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  To provide a high-precision technical ecosystem where potential meets architectural mastery. We bridge the gap between academic theory and industrial performance.
                </p>
                <p className="text-secondary text-lg leading-relaxed">
                  Founded on the principles of technical integrity and minimalist efficiency, Kelvronex has become a leader in the technical education space.
                </p>
              </div>
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-6">Our Philosophy</h2>
                <p className="text-secondary text-lg leading-relaxed italic mb-8">
                  "At Kelvronex, we bridge the gap between potential and performance through precision-crafted education."
                </p>
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
