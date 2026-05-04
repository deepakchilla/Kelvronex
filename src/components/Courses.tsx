"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  { 
    id: "software", 
    label: "Software Engineering", 
    courses: [
      { name: "Cyber Security", code: "CS-01", project: "Enterprise Shield" },
      { name: "Generative AI", code: "AI-04", project: "Neural Orchestrator" },
      { name: "ML Architecture", code: "ML-09", project: "Predictive Core" },
      { name: "Data Engineering", code: "DE-12", project: "Ingestion Engine" },
    ]
  },
  { 
    id: "hardware", 
    label: "Hardware Systems", 
    courses: [
      { name: "Quantum Computing", code: "QC-01", project: "State Simulator" },
      { name: "IoT Systems", code: "IT-03", project: "Mesh Controller" },
      { name: "Drone Avionics", code: "DA-07", project: "Flight Logic" },
      { name: "VLSI Design", code: "VL-11", project: "Circuit Blueprint" },
    ]
  }
];

export default function Courses() {
  const [activeTrack, setActiveTrack] = useState("software");

  return (
    <section id="courses" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12 border-b border-white/10 pb-16">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white mb-6">Technical Tracks</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              Curriculum <br /> <span className="text-outline">Index</span>
            </h3>
          </div>
          
          <div className="flex gap-0 border border-white/10">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={cn(
                  "px-8 py-4 font-black text-[10px] uppercase tracking-[0.3em] transition-all",
                  activeTrack === track.id ? "bg-white text-black" : "text-secondary hover:bg-white/5"
                )}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          <AnimatePresence mode="wait">
            {tracks.find(t => t.id === activeTrack)?.courses.map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-white/5 p-10 bg-black hover:bg-white/[0.03] transition-all flex flex-col justify-between aspect-square"
              >
                <div>
                  <span className="text-[10px] font-black text-secondary tracking-widest block mb-4 uppercase">
                    {course.code}
                  </span>
                  <h4 className="text-3xl font-black uppercase leading-tight mb-6">
                    {course.name}
                  </h4>
                  <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500" />
                </div>

                <div className="mt-12">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-4">
                    Primary Project
                  </p>
                  <p className="text-lg font-medium text-white mb-8 italic">
                    {course.project}
                  </p>
                  <button className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-secondary transition-colors">
                    <span>Syllabus</span>
                    <ArrowUpRight className="w-3 h-3 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Exclusive Spotlight - Sharp Style */}
        <div className="mt-24 border border-white/10 bg-white/[0.02] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/10" />
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
              Strategic Partnership
            </div>
            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <div>
                <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none">
                  Microsoft <br /> <span className="text-outline">Fabric</span>
                </h3>
                <p className="text-xl text-secondary leading-relaxed mb-16 max-w-lg">
                  A high-precision certification track in unified data analytics, developed in direct collaboration with Microsoft Engineering.
                </p>
                <div className="flex gap-0">
                  <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-transparent hover:text-white border border-white transition-all">
                    Register Track
                  </button>
                </div>
              </div>
              <div className="border-t border-white/10 pt-12 text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted">
                  Official Technical Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


