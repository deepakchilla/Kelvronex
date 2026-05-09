"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collaborations from "@/components/Collaborations";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        heading="Strategic Alliances" 
        description="We collaborate with world-class institutions and industry giants to architect a unified ecosystem of technical excellence." 
      />
      <Collaborations />
      <Footer />
    </main>
  );
}
