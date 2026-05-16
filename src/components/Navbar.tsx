"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className={`font-heading text-2xl font-light tracking-widest transition-colors duration-300 ${scrolled ? "text-white" : "text-dark"}`}>
            Maa Kamakhya
          </span>
          <span className="text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mt-1">
            Exports
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className={`transition-colors duration-300 text-xs font-body uppercase tracking-[0.2em] ${scrolled ? "text-white/80 hover:text-secondary" : "text-dark/80 hover:text-secondary"}`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={`flex items-center space-x-6 border-l pl-6 transition-colors duration-300 ${scrolled ? "border-white/10" : "border-dark/10"}`}
          >
            <button className={`transition-colors duration-300 ${scrolled ? "text-white/70 hover:text-secondary" : "text-dark/70 hover:text-secondary"}`}>
              <Globe size={18} />
            </button>
            <button className={`border border-secondary px-6 py-2 font-body text-xs uppercase tracking-widest transition-all duration-300 ${scrolled ? "text-secondary hover:bg-secondary hover:text-dark" : "text-secondary hover:bg-secondary hover:text-dark"}`}>
              Get Quote
            </button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none hover:text-secondary transition-colors duration-300 ${scrolled ? "text-white" : "text-dark"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className={`lg:hidden mt-4 py-8 border-t transition-colors duration-300 ${scrolled ? "bg-dark border-white/5" : "bg-white border-dark/5"}`}
        >
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-body uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-white/80 hover:text-secondary" : "text-dark/80 hover:text-secondary"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full px-6">
              <button className="border border-secondary text-secondary w-full py-4 font-body text-xs uppercase tracking-widest hover:bg-secondary hover:text-dark transition-all duration-300">
                Get Quote
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
