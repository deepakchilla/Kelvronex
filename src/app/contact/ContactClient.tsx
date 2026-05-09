"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Headphones, 
  Newspaper, 
  ChevronDown,
  Globe,
  MessageSquare,
  Building,
  CheckCircle2
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    reason: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.workEmail.trim() || !/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Valid work email is required";
    }
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "For general inquiries, our team responds within 4 business hours. Technical support SLAs guarantee a response within 1 hour for critical enterprise issues."
    },
    {
      question: "Do you offer enterprise-level support?",
      answer: "Yes. Our enterprise plans include dedicated account managers, priority 24/7 technical support, and custom architectural reviews."
    },
    {
      question: "How can I partner with your organization?",
      answer: "We actively collaborate with technology leaders. Select 'Partnerships' in the contact form, and our alliance team will arrange an exploratory call."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-40 pb-20 px-8 max-w-7xl mx-auto"
      >
        {/* 1. Intent-Based Hero */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-black/60 font-medium">
            Our team typically responds within 4 business hours. Connect with us to scale your technical infrastructure.
          </p>
        </motion.div>

        {/* 2. Contact Grid (Cards) */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-32">
          {[
            {
              title: "Sales & Enterprise",
              icon: Building,
              desc: "Discuss custom solutions and enterprise pricing.",
              primaryLink: "Book a Demo",
              secondaryLink: "sales@kelvronex.com"
            },
            {
              title: "Technical Support",
              icon: Headphones,
              desc: "Get help with your current architecture or deployment.",
              primaryLink: "View Documentation",
              secondaryLink: "support@kelvronex.com"
            },
            {
              title: "Press & Media",
              icon: Newspaper,
              desc: "Media inquiries, interviews, and brand assets.",
              primaryLink: "Download Press Kit",
              secondaryLink: "media@kelvronex.com"
            }
          ].map((card, i) => (
            <div key={i} className="border border-black p-8 group hover:bg-black hover:text-white transition-colors duration-300 flex flex-col justify-between min-h-[250px]">
              <div>
                <div className="w-12 h-12 border border-black group-hover:border-white/20 flex items-center justify-center mb-6">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-3">{card.title}</h3>
                <p className="text-black/60 group-hover:text-white/60 text-sm mb-8">
                  {card.desc}
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-medium">
                <a href="#" className="underline underline-offset-4 decoration-black/30 group-hover:decoration-white/30 hover:decoration-black group-hover:hover:decoration-white transition-colors">
                  {card.primaryLink}
                </a>
                <a href={`mailto:${card.secondaryLink}`} className="text-black/60 group-hover:text-white/60">
                  {card.secondaryLink}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Office & FAQs */}
          <motion.div variants={containerVariants} className="flex flex-col gap-16">
            
            {/* 4. Office/Global Presence */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Global Presence</h2>
              <div className="border border-black p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2">
                  Remote First
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Headquarters</h3>
                    <p className="text-black/60 leading-relaxed">
                      Guntur, AP<br />
                      India<br />
                      <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-black">
                        <Globe className="w-4 h-4" /> Global Operations
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Interactive FAQ Preview */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Most Asked Questions</h2>
              <div className="border-t border-black">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-black">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-bold pr-8">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-black/60 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 7. Social Connectivity */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50 mb-6">Connect across networks</h2>
              <div className="flex items-center gap-6">
                {[Globe, Mail, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3. Modern Multi-Step Form */}
          <motion.div variants={itemVariants} className="bg-black text-white p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
            
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 relative z-10">Direct Transmission</h2>
            <p className="text-white/60 text-sm mb-12 relative z-10">
              {formStep === 1 ? "Step 1 of 2: Basic Information" : "Step 2 of 2: Inquiry Details"}
            </p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 relative z-10"
              >
                <CheckCircle2 className="w-16 h-16 mb-6 text-white" />
                <h3 className="text-2xl font-black uppercase mb-4">Transmission Successful</h3>
                <p className="text-white/60 mb-8">Your parameters have been logged. Our systems will process and respond within the SLA timeframe.</p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormStep(1);
                    setFormData({ fullName: "", workEmail: "", companyName: "", reason: "", message: "" });
                  }}
                  className="px-8 py-4 border border-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="relative z-10 flex flex-col gap-8" onSubmit={formStep === 1 ? (e) => { e.preventDefault(); handleNextStep(); } : handleSubmit}>
                
                {formStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-8"
                  >
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-all font-medium text-lg peer" 
                        placeholder=" " 
                      />
                      <label htmlFor="fullName" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[8px]">
                        Full Name
                      </label>
                      {errors.fullName && <span className="text-red-400 text-xs absolute -bottom-6 left-0">{errors.fullName}</span>}
                    </div>

                    <div className="relative group mt-2">
                      <input 
                        type="email" 
                        id="workEmail"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-all font-medium text-lg peer" 
                        placeholder=" " 
                      />
                      <label htmlFor="workEmail" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[8px]">
                        Work Email
                      </label>
                      {errors.workEmail && <span className="text-red-400 text-xs absolute -bottom-6 left-0">{errors.workEmail}</span>}
                    </div>

                    <div className="relative group mt-2">
                      <input 
                        type="text" 
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-all font-medium text-lg peer" 
                        placeholder=" " 
                      />
                      <label htmlFor="companyName" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[8px]">
                        Company Name
                      </label>
                      {errors.companyName && <span className="text-red-400 text-xs absolute -bottom-6 left-0">{errors.companyName}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="mt-8 w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs flex justify-between items-center px-8 hover:bg-white/90 transition-colors"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-8"
                  >
                    <div className="relative group">
                      <select 
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-all font-medium text-lg appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-black text-white/50">Select Inquiry Type</option>
                        <option value="sales" className="bg-black text-white">Sales & Enterprise</option>
                        <option value="support" className="bg-black text-white">Technical Support</option>
                        <option value="partnerships" className="bg-black text-white">Partnerships</option>
                        <option value="media" className="bg-black text-white">Press & Media</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-6 w-4 h-4 pointer-events-none text-white/50" />
                      {errors.reason && <span className="text-red-400 text-xs absolute -bottom-6 left-0">{errors.reason}</span>}
                    </div>

                    <div className="relative group mt-4">
                      <textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-all font-medium text-lg min-h-[120px] resize-none peer" 
                        placeholder=" " 
                      />
                      <label htmlFor="message" className="absolute left-0 top-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[8px]">
                        Data Payload (Message)
                      </label>
                      {errors.message && <span className="text-red-400 text-xs absolute -bottom-6 left-0">{errors.message}</span>}
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button 
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="py-6 px-8 border border-white/20 hover:border-white text-white font-black uppercase tracking-widest text-xs transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs flex justify-center items-center px-8 hover:bg-white/90 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Executing..." : "Submit Transmission"}
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            )}
          </motion.div>

        </div>
      </motion.div>

      {/* 6. Trust Signals (Social Proof) */}
      <div className="border-t border-black/10 py-24 bg-black/5">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-12">
            Trusted by architectural visionaries globally
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {/* Logos represented by stylized text for the template */}
            <span className="text-2xl font-black tracking-tighter">ACME CORP</span>
            <span className="text-2xl font-black tracking-widest uppercase">GlobalNet</span>
            <span className="text-2xl font-black italic">TechFlow</span>
            <span className="text-2xl font-bold uppercase">Vertex</span>
            <span className="text-2xl font-black tracking-tighter">NEXUS</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
