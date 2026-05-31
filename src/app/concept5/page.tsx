"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { Hero } from "@/components/concept5/Hero";
import { ScrollStory } from "@/components/concept5/ScrollStory";
import { Services } from "@/components/concept5/Services";
import { ProjectsGallery } from "@/components/concept5/ProjectsGallery";
import { WhyQloax } from "@/components/concept5/WhyQloax";
import { TechEcosystem } from "@/components/concept5/TechEcosystem";
import { ClientSuccess } from "@/components/concept5/ClientSuccess";
import { FinalScroll } from "@/components/concept5/FinalScroll";
import { FooterCTA } from "@/components/concept5/FooterCTA";

export default function Concept5Page() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <main className="bg-[#050816] text-white min-h-screen selection:bg-[#6C63FF]/30 selection:text-white font-sans antialiased overflow-x-hidden">
        <Hero />
        <ScrollStory />
        <Services />
        <ProjectsGallery />
        <WhyQloax />
        <TechEcosystem />
        <ClientSuccess />
        <FinalScroll />
        <FooterCTA />
      </main>
    </ReactLenis>
  );
}
