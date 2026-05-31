"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Globe, ShieldCheck, Leaf, Medal, ChevronDown, ArrowUpRight } from "lucide-react";
import { useRef, MouseEvent, useMemo } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 160]);
  const yText = useTransform(scrollY, [0, 800], [0, -60]);
  const opacityScroll = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse Move Parallax Effects for Premium Feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const imageMoveX = useSpring(useTransform(mouseX, [-400, 400], [-20, 20]), springConfig);
  const imageMoveY = useSpring(useTransform(mouseY, [-400, 400], [-20, 20]), springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  // Combine Parallax and Scroll for Image
  const combinedY = useTransform(
    [yImage, imageMoveY],
    ([scrollVal, mouseVal]) => Number(scrollVal) + Number(mouseVal)
  );

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh w-full flex items-center overflow-hidden bg-[#faf9f6] text-slate-900 selection:bg-amber-100 selection:text-amber-900"
    >
      {/* Background Architectural Design */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft elegant gradient blur */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-100/40 to-emerald-50/30 blur-3xl opacity-70" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-50/20 blur-3xl opacity-50" />

        {/* Right Half Structural Split (Luxury Contrast Panel) */}
        <div className="absolute top-0 right-0 w-full lg:w-[40%] xl:w-[42%] h-full bg-[#112211] hidden lg:block shadow-2xl">
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10 pt-22 pb-20 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10 xl:gap-16">

          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: yText }}
            className="w-full text-center lg:text-left order-2 lg:order-1 lg:col-span-7 xl:col-span-6 z-20"
          >
            {/* Top Premium Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-900/10 mb-8 bg-white/90 backdrop-blur-md shadow-sm rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-black text-emerald-900/80">Premium Export Collective</span>
            </motion.div>

            {/* Typography Masterpiece */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl xl:text-8xl font-light text-[#0f2115] leading-[1.05] tracking-tight mb-8">
              Nature’s Finest <br />
              <span className="font-normal text-emerald-950">From India</span> <br />
              <span className="text-amber-700 italic font-serif font-light pr-2">To The World</span>
            </motion.h1>

            {/* Refined Context Paragraph */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600/90 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Driven by heritage and defined by uncompromising quality. We bridge the distance between India&apos;s lush harvests and global connoisseurs with flawless purity and trust.
            </motion.p>

            {/* Interactive Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <motion.button
                whileHover={{ y: -3, backgroundColor: "#15331f" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1a3a25] text-white px-10 py-5 tracking-[0.18em] uppercase text-[11px] font-bold transition-all duration-500 w-full sm:w-auto shadow-2xl shadow-emerald-900/10 flex items-center justify-center gap-2 group"
              >
                Explore Catalog
                <ArrowUpRight size={15} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ y: -3, borderColor: "#b45309", color: "#b45309" }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-[#1a3a25] border border-[#1a3a25]/20 px-10 py-5 tracking-[0.18em] uppercase text-[11px] font-bold transition-all duration-500 w-full sm:w-auto hover:bg-amber-50/40"
              >
                Inquire Now
              </motion.button>
            </motion.div>

            {/* Elegant Minimalist Trust Indicators */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-5">Quality Control Pillars</p>
              <div className="flex justify-center lg:justify-start items-center gap-10 text-slate-400">
                {[
                  { Icon: Leaf, label: "Eco-Harvested" },
                  { Icon: Globe, label: "Global Reach" },
                  { Icon: ShieldCheck, label: "Verified Origin" },
                  { Icon: Medal, label: "Top-Tier" }
                ].map(({ Icon, label }, idx) => (
                  <div key={idx} className="group relative flex items-center justify-center cursor-help" title={label}>
                    <Icon size={24} className="hover:text-emerald-800 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            style={{
              y: combinedY,
              x: imageMoveX
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="w-full relative h-[450px] sm:h-[650px] lg:h-[75vh] xl:h-[80vh] order-1 lg:order-2 lg:col-span-5 xl:col-span-6 flex items-center justify-center"
          >
            {/* Fine Outer Geometry Framings */}
            <div className="absolute inset-0 border border-amber-600/20 translate-x-5 translate-y-5 hidden sm:block pointer-events-none z-0" />
            <div className="absolute inset-0 border border-white/10 -translate-x-3 -translate-y-3 hidden sm:block pointer-events-none z-0" />

            {/* Main Visual Frame */}
            <div className="relative h-full w-full overflow-hidden shadow-[0_50px_100px_-30px_rgba(10,30,15,0.4)] bg-[#1a3a25] group">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/12.jpg"
                alt="Premium Indian Agricultural Produce"
                className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-110 opacity-90"
              />
              {/* Complex Overlay Lighting Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d13]/90 via-[#0e1d13]/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-amber-900/5 mix-blend-overlay" />
            </div>

            {/* Floating Luxury Detail Component */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-6 left-6 sm:-bottom-8 sm:-left-10 bg-white p-6 sm:p-10 border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] max-w-[240px] sm:max-w-xs z-20 rounded-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-8 bg-amber-600" />
                  <span className="text-amber-700 text-[10px] tracking-[0.4em] uppercase font-black">Export Quality</span>
                </div>
                <p className="text-slate-800 text-xs sm:text-sm font-light leading-relaxed italic">
                  "Each harvest is meticulously inspected to ensure only the highest grade Indian produce reaches international tables."
                </p>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <ShieldCheck size={18} className="text-emerald-700 opacity-70" />
                </div>
              </div>
            </motion.div>

            {/* Decorative Structural Accent */}
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 border-t border-r border-amber-600/40 hidden xl:block pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Persistent Dynamic Scroll Down Module */}
      <motion.div
        style={{ opacity: opacityScroll }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.7em] uppercase text-[#1a3a25] font-black opacity-50">Explore</span>
        <ChevronDown size={16} className="text-amber-700" />
      </motion.div>
    </section>
  );
}

