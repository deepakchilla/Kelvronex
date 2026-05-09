"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Globe, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 py-24 px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-black text-lg">K</span>
              </div>
              <span className="text-xl font-black tracking-[0.2em] uppercase text-black">
                Kelvronex
              </span>
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-10 max-w-xs">
              Architectural minimalist solutions for the next generation of technical excellence. Zero compromise on precision.
            </p>
            <div className="flex space-x-6">
              {[Terminal, Globe, Briefcase, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="text-secondary hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-8">Platform</h4>
            <div className="flex flex-col space-y-4">
              {["Home", "Tracks", "Partners", "About", "Contact"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-secondary text-sm hover:text-black transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-8">Resources</h4>
            <div className="flex flex-col space-y-4">
              {["Syllabus", "Certifications", "Case Studies", "Terms", "Privacy"].map((item) => (
                <Link key={item} href="#" className="text-secondary text-sm hover:text-black transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black mb-8">Newsletter</h4>
            <p className="text-secondary text-sm mb-8">Professional updates on technical architectural trends.</p>
            <div className="flex border-b border-black/20 pb-2 focus-within:border-black transition-colors">
              <input
                type="email"
                placeholder="office@company.com"
                className="bg-transparent w-full outline-none text-sm font-medium"
              />
              <button className="text-black hover:translate-x-1 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-black/5 relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
            © 2026 Kelvronex Academy. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Precision Crafted</span>
            <div className="w-10 h-[1px] bg-black/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">EST 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
