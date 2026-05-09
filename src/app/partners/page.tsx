import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collaborations from "@/components/Collaborations";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Strategic Partnerships & Institutional Alliances | Kelvronex Academy",
  description: "Explore Kelvronex Academy alliances with leading global research groups, global cloud networks, and strategic enterprise hardware partners.",
  openGraph: {
    title: "Strategic Partnerships & Institutional Alliances | Kelvronex Academy",
    description: "Explore Kelvronex Academy alliances with leading global research groups, global cloud networks, and strategic enterprise hardware partners.",
    type: "website",
    url: "https://kelvronex.com/partners",
  }
};

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
