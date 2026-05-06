"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Programs", href: "/tracks", number: "01" },
  { name: "Advanced Programs", href: "/tracks", number: "02" },
  { name: "About", href: "/about", number: "03" },
  { name: "Contact Us", href: "/contact", number: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-white border-black/10",
          isScrolled || isMobileMenuOpen ? "py-4" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <span className="text-xl font-black tracking-[0.2em] uppercase text-black hidden sm:block">
              Kelvronex
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 relative z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary hover:text-black transition-colors relative group py-2 px-1 overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="absolute inset-0 bg-accent/5 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out -z-10" />
              </Link>
            ))}
            <Link href="/login" className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center group relative overflow-hidden ml-4">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Login</span>
              <ArrowRight className="w-3 h-3 ml-2 relative z-10 group-hover:translate-x-1 group-hover:text-accent transition-all duration-300" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 border border-black" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center px-8"
          >
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            
            <div className="flex flex-col space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center border-b border-black/10 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-sm font-black text-accent/50 mr-8 group-hover:text-accent transition-colors duration-500">{link.number}</span>
                    <span className="text-4xl font-black uppercase tracking-tighter text-black group-hover:translate-x-4 transition-transform duration-500">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <Link href="/login" className="w-full py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs flex justify-center items-center group relative overflow-hidden">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Login</span>
                  <ArrowRight className="w-4 h-4 ml-3 relative z-10 group-hover:translate-x-2 group-hover:text-accent transition-all duration-300" />
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 border border-black" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-8 right-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-secondary"
            >
              <span>office@kelvronex.com</span>
              <span>EST. 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


