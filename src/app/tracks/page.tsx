import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Professional Learning Tracks & Curriculum | Kelvronex Academy",
  description: "Browse 50+ industry-aligned curriculum pathways at Kelvronex Academy, covering Software Architecture, Generative AI, IoT, Quantum Systems, and Corporate Governance.",
  openGraph: {
    title: "Professional Learning Tracks & Curriculum | Kelvronex Academy",
    description: "Browse 50+ industry-aligned curriculum pathways at Kelvronex Academy, covering Software Architecture, Generative AI, IoT, Quantum Systems, and Corporate Governance.",
    type: "website",
    url: "https://kelvronex.com/tracks",
  }
};

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
