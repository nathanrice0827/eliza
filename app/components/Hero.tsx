"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SideRays from "./SideRays";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF7F2]"
    >
      {/* SideRays WebGL effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <SideRays
          speed={1.2}
          rayColor1="#E8C5C1"
          rayColor2="#D4C5E2"
          intensity={2.2}
          spread={2.4}
          origin="top-right"
          tilt={-10}
          saturation={1.2}
          blend={0.6}
          falloff={1.4}
          opacity={0.7}
        />
      </div>

      {/* Soft decorative orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#F0D5CE] opacity-40 blur-[80px]" />
        <div className="absolute bottom-[15%] right-[8%] w-[360px] h-[360px] rounded-full bg-[#D5E3D7] opacity-35 blur-[80px]" />
        <div className="absolute top-[55%] left-[40%] w-[280px] h-[280px] rounded-full bg-[#DDD5EE] opacity-30 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-24 pb-20">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-[72px] md:text-[96px] lg:text-[88px] xl:text-[104px] font-light leading-[0.9] tracking-[-0.01em] text-[#3D2E28] mb-8"
          >
            Art that{" "}
            <em className="italic text-[#B8706A]">speaks</em>
            <br />
            to the soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-base md:text-lg text-[#8C7B6E] leading-relaxed max-w-md lg:max-w-none mb-12 font-light"
          >
            Delicate watercolors, expressive oils, and one-of-a-kind botanicals —
            each piece hand-crafted with intention. Commission something made
            entirely for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              id="hero-view-work-btn"
              href="#gallery"
              className="px-8 py-4 bg-[#3D2E28] text-[#FAF7F2] text-[12px] tracking-[0.2em] uppercase font-light hover:bg-[#6B5C52] transition-colors duration-300 rounded-full"
            >
              View My Work
            </a>
            <a
              id="hero-quote-btn"
              href="#quote"
              className="px-8 py-4 border border-[#E8C5C1] text-[#6B5C52] text-[12px] tracking-[0.2em] uppercase font-light hover:bg-[#F0D5CE] transition-colors duration-300 rounded-full"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
            <Image
              src="/images/painting-shepherd-field.jpg"
              alt="Shepherd in a flower field — gouache painting by Eliza Rice"
              width={620}
              height={780}
              className="w-full object-cover"
              priority
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-6 py-5">
              <p
                style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                className="text-white/90 text-xl italic font-light"
              >
                &ldquo;The Good Shepherd&rdquo;
              </p>
              <p className="text-white/50 text-[11px] tracking-[0.15em] uppercase">
                Gouache on board
              </p>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
