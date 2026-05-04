"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Courses />
      </div>
      <Footer />
    </main>
  );
}
