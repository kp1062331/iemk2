import { Hero } from "@/components/concept3/Hero";
import { Marquee } from "@/components/concept3/Marquee";
import { Services } from "@/components/concept3/Services";
import { Metrics } from "@/components/concept3/Metrics";
import { Blog } from "@/components/concept3/Blog";
import { Testimonials } from "@/components/concept3/Testimonials";
import { CTA } from "@/components/concept3/CTA";

export default function Concept3Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f5] selection:bg-white selection:text-black">
      <Hero />
      <Marquee />
      <Services />
      <Metrics />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
}
