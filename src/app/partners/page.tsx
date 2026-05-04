"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collaborations from "@/components/Collaborations";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Collaborations />
      </div>
      <Footer />
    </main>
  );
}
