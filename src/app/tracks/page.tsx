"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        heading="Technical Pathways" 
        description="Explore our precision-engineered tracks across software engineering, hardware systems, and strategic business leadership." 
      />
      <Courses />
      <Footer />
    </main>
  );
}
