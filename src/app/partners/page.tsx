"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collaborations from "@/components/Collaborations";
import { motion } from "framer-motion";

export default function PartnersPage() {
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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-4">Global Network</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Strategic <br /> <span className="text-outline">Alliances</span>
            </h1>
            <p className="max-w-xl text-secondary text-lg leading-relaxed">
              We collaborate with world-class institutions and industry giants to architect a unified ecosystem of technical excellence.
            </p>
          </motion.div>
        </div>
      </section>
      <Collaborations />
      <Footer />
    </main>
  );
}
