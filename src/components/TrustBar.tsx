"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Microsoft", "Google", "Amazon", "Intel", "Adobe", "IBM", "Cisco", "Oracle"
];

export default function TrustBar() {
  return (
    <div className="bg-black py-12 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center space-x-24 px-12"
        >
          {Array(3).fill(partners).flat().map((partner, i) => (
            <span
              key={i}
              className="text-white/30 text-4xl font-black uppercase tracking-[0.2em] italic"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
