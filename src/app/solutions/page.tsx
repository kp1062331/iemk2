import { Hero } from "@/components/concept1/Hero";
import { LogoCloud } from "@/components/concept1/LogoCloud";
import { Features } from "@/components/concept1/Features";
import { Stats } from "@/components/concept1/Stats";
import { RelatedProducts } from "@/components/concept1/RelatedProducts";
import { CTA } from "@/components/concept1/CTA";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <LogoCloud />
      <Features />
      <Stats />
      <RelatedProducts />
      <CTA />
    </div>
  );
}
