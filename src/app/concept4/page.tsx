import { Hero } from "@/components/concept4/Hero";
import { Ecosystem } from "@/components/concept4/Ecosystem";
import { Services } from "@/components/concept4/Services";
import { Industries } from "@/components/concept4/Industries";
import { Projects } from "@/components/concept4/Projects";
import { Stats } from "@/components/concept4/Stats";
import { WhyChooseUs } from "@/components/concept4/WhyChooseUs";
import { Testimonials } from "@/components/concept4/Testimonials";
import { Vision } from "@/components/concept4/Vision";
import { CTA } from "@/components/concept4/CTA";

export default function Concept4Page() {
  return (
    <main className="bg-[#F9F8F4] text-[#111] min-h-screen selection:bg-red-500/20 selection:text-red-900">
      <Hero />
      <Ecosystem />
      <Services />
      <Industries />
      <Projects />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Vision />
      <CTA />
    </main>
  );
}
