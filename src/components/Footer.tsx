import React from "react";
import Link from "next/link";
import { Code, Send, Users, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Kelvornex
              </span>
            </Link>
            <p className="text-muted text-lg max-w-sm mb-8">
              Pioneering the future of technology through education and innovation. 
              Bridging world-class institutions with industry giants.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Users className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Code className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Camera className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#courses" className="text-muted hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="#collaborations" className="text-muted hover:text-white transition-colors">Collaborations</Link></li>
              <li><Link href="#tech-stack" className="text-muted hover:text-white transition-colors">Tech Stack</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted">
              <li>Email: info@kelvornex.com</li>
              <li>Phone: +1 (555) 000-0000</li>
              <li>Address: Silicon Valley, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-sm">
          <p>© 2026 Kelvornex. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
