"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block border-l border-black/10">
        <Image
          src="/hero_girl_laptop_1778072900971.png"
          alt="Focused student working on laptop at Kelvronex"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container mx-auto px-8 relative z-10 w-full">
        <div className="lg:w-1/2 pr-0 lg:pr-12 xl:pr-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-8 lg:mb-12"
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
            className="text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-10 text-black"
          >
            Kelvronex <br />
            <span className="text-outline">Academy</span>
          </motion.h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-secondary font-medium mb-10 leading-relaxed border-l-2 border-black/10 pl-6 lg:pl-8">
                Architecting the bridge between potential and performance through precision-crafted industrial pathways.
              </p>
              <div className="flex flex-col sm:flex-row gap-0">
                <button className="px-8 py-5 bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] lg:text-xs hover:bg-transparent hover:text-black border border-black transition-all flex items-center justify-center group whitespace-nowrap">
                  <span>Start Track</span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-5 bg-transparent text-black border border-black sm:border-l-0 font-black uppercase tracking-[0.3em] text-[10px] lg:text-xs hover:bg-black hover:text-white transition-all flex items-center justify-center whitespace-nowrap">
                  <Play className="w-3 h-3 mr-3 fill-current" />
                  <span>Showcase</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:flex flex-col space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted border-l border-black/5 pl-6"
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



