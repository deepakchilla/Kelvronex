"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block border-l border-black/10">
        <Image
          src="/kelvronex_hero_premium_1777916516203.png"
          alt="Kelvronex Architecture"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">
              The Future of Technical Education
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-black"
          >
            Kelvronex <br />
            <span className="text-outline">Academy</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-secondary font-medium mb-12 leading-relaxed border-l-2 border-black/10 pl-8">
                Architecting the bridge between potential and performance through precision-crafted industrial pathways.
              </p>
              <div className="flex flex-col sm:flex-row gap-0">
                <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-transparent hover:text-black border border-black transition-all flex items-center group">
                  <span>Start Track</span>
                  <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-12 py-6 bg-transparent text-black border border-black border-l-0 font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all flex items-center justify-center">
                  <Play className="w-3 h-3 mr-4 fill-current" />
                  <span>Showcase</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:flex flex-col space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted border-l border-black/5 pl-8"
            >
              <div>/ 01 Precision</div>
              <div>/ 02 Integrity</div>
              <div>/ 03 Mastery</div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-8 hidden lg:flex flex-col items-center"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-[1px] h-12 bg-black/20" />
      </motion.div>
    </section>
  );
}



