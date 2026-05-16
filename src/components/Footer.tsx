"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden pt-24 pb-6 mt-0">
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section with Newsletter & Main Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-3xl font-light mb-6 tracking-wide">
              Maa Kamakhya <span className="text-secondary block text-sm tracking-[0.4em] uppercase mt-2 font-medium">Exports</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md font-light">
              Nature's Best from India to the World. Connecting premium Indian agricultural harvests with global markets through trust and purity.
            </p>

            {/* Newsletter Input */}
            <div className="relative max-w-md group border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Enter your email for export updates"
                className="w-full bg-transparent py-2 pl-2 pr-12 text-sm text-white font-light focus:outline-none placeholder:text-white/40"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-secondary transition-colors duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-body tracking-[0.2em] uppercase text-[10px] mb-6 font-semibold">Company</h4>
              <ul className="space-y-4 text-white/60 text-xs font-light tracking-wide">
                <li><a href="#home" className="hover:text-secondary transition-colors inline-block">Home</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors inline-block">About Us</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors inline-block">Products</a></li>
                <li><a href="#process" className="hover:text-secondary transition-colors inline-block">Process</a></li>
                <li><a href="#certifications" className="hover:text-secondary transition-colors inline-block">Certifications</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors inline-block">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-body tracking-[0.2em] uppercase text-[10px] mb-6 font-semibold">Products</h4>
              <ul className="space-y-4 text-white/60 text-xs font-light tracking-wide">
                <li><a href="#products" className="hover:text-secondary transition-colors inline-block">Premium Mangoes</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors inline-block">Export Cashews</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors inline-block">High Curcumin Turmeric</a></li>
                <li><a href="#products" className="hover:text-secondary transition-colors inline-block">Dried Kokam</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div id="contact">
              <h4 className="text-white font-body tracking-[0.2em] uppercase text-[10px] mb-6 font-semibold">Contact</h4>
              <ul className="space-y-4 text-white/60 text-xs font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Mumbai Office, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-secondary shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-secondary shrink-0" />
                  <span>export@maakamakhya.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Typography Brand Name */}
        <div className="w-full h-48 border-t border-white/5 pt-25 pb-8 flex flex-col items-center overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10vw] leading-none font-heading font-light text-white/5 select-none text-center tracking-widest whitespace-nowrap"
          >
            MAA KAMAKHYA
          </motion.h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-body uppercase tracking-[0.2em] gap-6 pt-6 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Maa Kamakhya Exports LLP.</p>

          <div className="flex space-x-8">
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Instagram size={14} /> <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Linkedin size={14} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Twitter size={14} /> <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
