import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderStoryPreview from "@/components/FounderStoryPreview";
import ProductsSection from "@/components/ProductsSection";
import ExportProcess from "@/components/ExportProcess";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-dark font-body">
      <Navbar />
      <Hero />
      <FounderStoryPreview />
      <ProductsSection />
      <ExportProcess />
      <Certifications />

      {/* Inquiry CTA Section */}
      <section className="py-48 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          {/* Top Badge matching Hero style (adapted for dark) */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondary/30 mb-10 bg-white/5 backdrop-blur-sm mx-auto">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary tracking-[0.4em] uppercase text-[10px] font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-heading text-white mb-10 tracking-tight font-light leading-[1.1]">
            Experience the Gold Standard <br/>
            <span className="italic text-secondary">in International Trade</span>
          </h2>

          <p className="text-white/30 max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
            Partner with us for bespoke export solutions. From custom packaging to global logistics, we ensure India's finest reaches you with absolute integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="bg-secondary text-dark px-12 py-5 font-body tracking-[0.2em] uppercase text-[10px] font-bold hover:bg-white transition-all duration-500 w-full sm:w-auto">
              Request a Quote
            </button>
            <button className="bg-transparent border border-white/20 text-white px-12 py-5 font-body tracking-[0.2em] uppercase text-[10px] hover:border-secondary hover:text-secondary transition-all duration-500 w-full sm:w-auto">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50 flex items-center justify-center border border-white/20"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </main>
  );
}
