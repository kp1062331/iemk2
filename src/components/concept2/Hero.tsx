"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          crossOrigin="anonymous"
          src="https://video.wixstatic.com/video/c837a6_518925604ea94963890d43b5f41aa5bf/1080p/mp4/file.mp4"
        />
        {/* Overlay gradient to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            The Future of Delivery Is Here
          </h1>
          <p className="text-sm md:text-base font-medium text-white/90 tracking-widest leading-relaxed uppercase">
            DISCOVER A GREENER, FASTER SELF-DRIVING <br className="hidden md:block" />
            DELIVERY SOLUTION WITH VOLASO.
          </p>
        </motion.div>
      </div>

      {/* Bottom Divider (as in the snippet) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 z-20" />
    </section>
  );
}
