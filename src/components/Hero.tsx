"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-black" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">
                Technological Precision
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[10rem] font-black tracking-[-0.05em] leading-[0.85] mb-12 uppercase text-black"
            >
              Kelvornex <br />
              <span className="text-outline">Academy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-lg md:text-xl text-secondary font-medium mb-16 leading-relaxed border-l-2 border-black/10 pl-8"
            >
              Bridging the architectural gap between potential and industry performance through zero-compromise technical mastery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-0"
            >
              <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-transparent hover:text-black border border-black transition-all flex items-center group">
                <span>View Tracks</span>
                <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-6 bg-transparent text-black border border-black border-l-0 font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all">
                Our Partners
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] border border-black/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/[0.03]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-black/20 rotate-45" />
                <div className="absolute w-48 h-48 border border-black/40 -rotate-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



