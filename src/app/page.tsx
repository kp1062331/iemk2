import { Hero } from "@/components/concept2/Hero";
import { LogoCloud } from "@/components/concept2/LogoCloud";
import { StickyScroll } from "@/components/concept2/StickyScroll";
import { BentoGrid } from "@/components/concept2/BentoGrid";
import { WhatWeDo } from "@/components/concept2/WhatWeDo";
import { Blog } from "@/components/concept2/Blog";

export default function Concept2Page() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LogoCloud />
      <WhatWeDo />
      <StickyScroll />
      <BentoGrid />
      <Blog />
      
      {/* Final Massive CTA */}
      <section className="py-32 md:py-48 bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Computer/Workspace Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80" 
          alt="Modern Workspace" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 brightness-75"
        />
        
        {/* Deep Space Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-black/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-8 md:px-16 py-16 md:py-24 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center text-center relative z-10 shadow-2xl">
          <h2 className="text-[10vw] sm:text-[6vw] lg:text-[6rem] leading-[0.95] font-bold tracking-tight mb-8">
            Start building <br />
            your future.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide mb-12 max-w-2xl">
            Empower your team with cutting-edge tools to design, deploy, and scale world-class web applications faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 bg-white text-red-500 text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
              Get Started
            </button>
            <button className="px-12 py-5 bg-transparent border border-white/30 text-white text-xl font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
