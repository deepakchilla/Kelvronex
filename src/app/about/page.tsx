import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Globe, Layers, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us & Engineering Vision | Kelvronex Academy",
  description: "Learn about the mission, engineering integrity, high-performance metrics, and leadership team of Kelvronex Academy.",
  openGraph: {
    title: "About Us & Engineering Vision | Kelvronex Academy",
    description: "Learn about the mission, engineering integrity, high-performance metrics, and leadership team of Kelvronex Academy.",
    type: "website",
    url: "https://kelvronex.com/about",
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200">
      <Navbar />

      {/* 1. Executive Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
            Company Overview
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
            Architecting the infrastructure of tomorrow.
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
            We build scalable, resilient software solutions that empower modern enterprises to operate with absolute precision and velocity.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-md hover:bg-zinc-800 transition-colors"
            >
              Partner with us
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 font-medium rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Strategic Mission (2-column layout) */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Driven by engineering excellence and uncompromising standards.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg">
            <p>
              Our mission is to eliminate technical debt and operational friction from the enterprise stack. We believe that software should be an invisible force multiplier, not a constant maintenance burden.
            </p>
            <p>
              By combining rigorous architectural design with modern agile methodologies, we deliver systems that scale effortlessly from millions to billions of transactions without compromising latency or security.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Quantitative Metrics */}
      <section className="py-24 px-6 lg:px-8 bg-zinc-900 text-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Performance at scale</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Our infrastructure currently supports some of the most demanding workloads in the digital economy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-800">
            {[
              { label: "Uptime SLA", value: "99.999%" },
              { label: "Global Nodes", value: "120+" },
              { label: "Requests / Sec", value: "50M+" },
              { label: "Enterprise Partners", value: "250+" },
            ].map((metric, i) => (
              <div key={i} className="p-8 border-r border-b border-zinc-800 flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">{metric.value}</div>
                <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities (Bento-style grid) */}
      <section id="capabilities" className="py-24 px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-zinc-500 max-w-2xl text-lg">
              A comprehensive suite of technical proficiencies designed for end-to-end organizational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-8 bg-white border border-zinc-200 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-8 border border-zinc-200">
                <Cpu className="w-6 h-6 text-zinc-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Distributed Systems</h3>
                <p className="text-zinc-500">
                  Architecting globally distributed databases and computing clusters that provide extreme fault tolerance and single-digit millisecond latency across continents.
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-zinc-200 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-8 border border-zinc-200">
                <Shield className="w-6 h-6 text-zinc-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Zero-Trust Security</h3>
                <p className="text-zinc-500">
                  Implementing rigorous security postures with continuous verification and cryptographic attestation.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white border border-zinc-200 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-8 border border-zinc-200">
                <Zap className="w-6 h-6 text-zinc-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Edge Computing</h3>
                <p className="text-zinc-500">
                  Deploying logic directly to the network edge, minimizing round-trip times and offloading central processing architectures.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 p-8 bg-white border border-zinc-200 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-8 border border-zinc-200">
                <Layers className="w-6 h-6 text-zinc-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Micro-Frontend Orchestration</h3>
                <p className="text-zinc-500">
                  Decoupling monolithic interfaces into independently deployable, modular application segments for rapid iteration and isolated failure domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Organizational Structure */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Leadership</h2>
              <p className="text-zinc-500 max-w-2xl text-lg">
                Guided by industry veterans with deep expertise in engineering, product design, and global scaling.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Eleanor Wright", role: "Chief Executive Officer" },
              { name: "Marcus Chen", role: "Chief Technology Officer" },
              { name: "Sarah Jenkins", role: "Head of Infrastructure" },
              { name: "David Alaba", role: "VP of Product Engineering" },
            ].map((person, i) => (
              <div key={i} className="p-6 border border-zinc-200 rounded-xl bg-zinc-50 flex flex-col gap-4">
                <div className="w-16 h-16 bg-zinc-200 rounded-full border border-zinc-300"></div>
                <div>
                  <h3 className="font-semibold text-zinc-900">{person.name}</h3>
                  <p className="text-sm text-zinc-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Integration */}
      <section className="py-24 px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-12">
            Integrated with the modern stack
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
              <Code className="w-6 h-6" /> Next.js
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
              <Globe className="w-6 h-6" /> Vercel
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
              <Zap className="w-6 h-6" /> Tailwind
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
              <Shield className="w-6 h-6" /> TypeScript
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
              <Layers className="w-6 h-6" /> React
            </div>
          </div>
        </div>
      </section>

      {/* 7. Engagement CTA */}
      <section className="py-32 px-6 lg:px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to accelerate your technical roadmap?
          </h2>
          <p className="text-lg text-zinc-500">
            Join the organizations that trust us to architect and maintain their most critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-medium rounded-md hover:bg-zinc-800 transition-colors"
            >
              Contact Engineering
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 font-medium rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              View Open Roles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
