"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { Hero } from "@/components/concept5/Hero";
import { Process } from "@/components/concept5/ScrollStory";
import { Services } from "@/components/concept5/Services";
import { Projects } from "@/components/concept5/ProjectsGallery";
import { Stats } from "@/components/concept5/WhyQloax";
import { TechStack } from "@/components/concept5/TechEcosystem";
import { Testimonial } from "@/components/concept5/ClientSuccess";
import { Footer } from "@/components/concept5/FooterCTA";

export default function Concept5Page() {
  return (
    <ReactLenis root options={{ lerp: 0.075, smoothWheel: true }}>
      <main className="bg-[#0A0A0A] text-white min-h-screen font-sans antialiased overflow-x-hidden cursor-none selection:bg-[#FF2D2D]/20 selection:text-white">
        <Hero />
        <Process />
        <Services />
        <Projects />
        <Stats />
        <TechStack />
        <Testimonial />
        <Footer />
      </main>
    </ReactLenis>
  );
}
