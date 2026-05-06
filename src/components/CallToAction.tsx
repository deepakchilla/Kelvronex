"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">
      {/* Background Grid and Marquee */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none invert" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[20rem] font-black uppercase tracking-tighter leading-none"
        >
          KELVRONEX KELVRONEX KELVRONEX
        </motion.div>
      </div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 block mb-8">Final Step</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-16">
            Ready to <br /> <span className="text-outline text-white/20">Architect</span> Your Future?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-0">
            <Link href="/tracks" className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white border border-white transition-all flex justify-center items-center group relative overflow-hidden">
              <span className="relative z-10">Enroll Now</span>
              <ArrowRight className="w-4 h-4 ml-4 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link href="/contact" className="px-16 py-8 bg-transparent text-white border border-white sm:border-l-0 font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all flex justify-center items-center">
              Contact Admissions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
