"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Building } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 border border-black/10">
            {/* Information Side */}
            <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-black/10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/architectural_map_dark_1778071446052.png"
                  alt="Kelvronex HQ Location"
                  fill
                  className="object-cover opacity-90 grayscale"
                />
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 block mb-6">Global Headquarters</span>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-12 leading-none">
                    Initiate <br /> <span className="text-outline text-white/20">Protocol</span>
                  </h1>
                </motion.div>
              </div>

              <div className="relative z-10 space-y-12 mt-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block mb-2">Primary Comms</span>
                    <span className="text-xl font-black text-white group-hover:text-white/80 transition-colors">office@kelvronex.com</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block mb-2">Corporate Entity</span>
                    <span className="text-xl font-black text-white group-hover:text-white/80 transition-colors">Kelvronex Academy</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block mb-2">Location Vector</span>
                    <span className="text-xl font-black text-white italic group-hover:text-white/80 transition-colors">Architectural Hub, Tech City</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 md:p-20 bg-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-black uppercase mb-4">Transmission Interface</h2>
                <p className="text-secondary mb-16 text-sm leading-relaxed border-l-2 border-black/10 pl-6">
                  Submit your parameters for collaboration or technical track inquiry. Our systems will process and respond.
                </p>

                <form className="space-y-12">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-accent outline-none transition-all font-medium text-lg peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-muted transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[8px]">
                      Identification (Name)
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input type="email" id="email" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-accent outline-none transition-all font-medium text-lg peer" placeholder=" " required />
                    <label htmlFor="email" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-muted transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[8px]">
                      Network Address (Email)
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea id="message" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-accent outline-none transition-all font-medium text-lg min-h-[150px] resize-none peer" placeholder=" " required />
                    <label htmlFor="message" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-muted transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[8px]">
                      Data Payload (Message)
                    </label>
                  </div>

                  <button type="submit" className="w-full py-8 bg-black text-white font-black uppercase tracking-[0.5em] text-xs hover:bg-white hover:text-black hover:border-black border border-transparent transition-all flex items-center justify-between px-8 group relative overflow-hidden">
                    <span className="relative z-10">Execute Transmission</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
