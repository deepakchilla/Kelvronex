"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-40 bg-white border-t border-black/10">
      <div className="container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-8">Final Step</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-16">
            Ready to <br /> <span className="text-outline">Architect</span> Your Future?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-0">
            <button className="px-16 py-8 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-transparent hover:text-black border border-black transition-all flex items-center group">
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-16 py-8 bg-transparent text-black border border-black border-l-0 font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
