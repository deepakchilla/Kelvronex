"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-16 leading-none">
                Get In <br /> <span className="text-outline">Touch</span>
              </h1>
              <p className="text-xl text-secondary mb-16 leading-relaxed max-w-md border-l-2 border-black/10 pl-8">
                Initiate a professional inquiry to explore our tracks or join our global partner network.
              </p>
              
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-2">Email</span>
                  <span className="text-2xl font-black">office@kelvronex.com</span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted block mb-2">Location</span>
                  <span className="text-2xl font-black italic">Architectural Hub, Tech City</span>
                </div>
              </div>
            </div>

            <div className="border border-black/10 p-12 bg-black/[0.02]">
              <form className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-muted">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-all font-medium text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-muted">Corporate Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-all font-medium text-lg" placeholder="john@company.com" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-muted">Message</label>
                  <textarea className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-all font-medium text-lg min-h-[150px]" placeholder="How can we collaborate?" />
                </div>
                <button className="w-full py-8 bg-black text-white font-black uppercase tracking-[0.5em] text-xs hover:bg-white hover:text-black border border-black transition-all flex items-center justify-center group">
                  <span>Send Inquiry</span>
                  <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
