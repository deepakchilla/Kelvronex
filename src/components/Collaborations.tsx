"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Microsoft", "Google", "AWS", "NVIDIA", "IBM", "BMW", "SRM", "IIT", "BITS", "KITS", "BEC", "HINDU"
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-white/5 border border-white/5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group aspect-square bg-black flex flex-col items-center justify-center p-8 transition-all hover:bg-white/5"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted group-hover:text-white transition-colors">
                Partner
              </span>
              <div className="h-[1px] w-4 bg-white/10 my-4 group-hover:w-12 transition-all" />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-secondary group-hover:text-white transition-colors text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-end justify-between gap-8 border-t border-white/10 pt-12">
          <div className="max-w-md">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white mb-4">Strategic Partners</h2>
            <p className="text-secondary text-sm leading-relaxed">
              Our network consists of top-tier academic institutions and industry leaders, collaborating to set the architectural standard for technical excellence.
            </p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.5em] text-white border-b border-white pb-2 hover:text-secondary hover:border-secondary transition-all">
            Join the Network
          </button>
        </div>
      </div>
    </section>
  );
}


