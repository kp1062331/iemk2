import { Hero } from "@/components/concept1/Hero";
import { LogoCloud } from "@/components/concept1/LogoCloud";
import { Features } from "@/components/concept1/Features";
import { WhatWeDo } from "@/components/concept1/WhatWeDo";
import { Stats } from "@/components/concept1/Stats";
import { Vision } from "@/components/concept1/Vision";
import { RelatedProducts } from "@/components/concept1/RelatedProducts";
import { CTA } from "@/components/concept1/CTA";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <LogoCloud />
      <WhatWeDo />
      <Features />
      <Stats />
      <Vision />
      <RelatedProducts />
      <CTA />
    </div>
  );
}
