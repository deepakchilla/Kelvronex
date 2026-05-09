"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kelvronex_cookie_consent");
    if (!consent) {
      // Delay showing it slightly for a smoother entry
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("kelvronex_cookie_consent", "accepted");
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem("kelvronex_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-zinc-200 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 max-w-3xl">
              <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-black">Data Privacy</h3>
              <p className="text-xs font-medium text-zinc-600 leading-relaxed">
                We utilize essential network tokens (cookies) to secure your session, analyze telemetry, and deliver a seamless platform experience. By continuing, you authorize our enterprise data protocols.
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="w-full md:w-auto px-8 py-4 bg-transparent text-black text-[10px] font-black uppercase tracking-[0.2em] border border-black hover:bg-zinc-100 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="w-full md:w-auto px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
