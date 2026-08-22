"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#F2EDE4]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#D4948D]/15">
              <Image
                src="/images/artist-portrait.png"
                alt="Eliza Rice in her studio"
                width={680}
                height={800}
                className="w-full object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 right-6 bottom-6 rounded-3xl border border-[#E8C5C1] -z-10" />
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#FAF7F2] rounded-2xl shadow-lg shadow-[#D4948D]/15 p-6 max-w-[180px]"
            >
              <p
                style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                className="text-4xl font-light text-[#3D2E28] leading-none"
              >
                8+
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8C7B6E] mt-1 font-light">
                Years Creating
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C7B6E] mb-5 font-light">
              The Artist
            </p>
            <h2
              style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
              className="text-5xl md:text-6xl font-light text-[#3D2E28] mb-8 leading-[1.05]"
            >
              Hello, I&rsquo;m{" "}
              <em className="italic text-[#B8706A]">Eliza.</em>
            </h2>

            <div className="space-y-5 text-[#6B5C52] leading-[1.9] font-light">
              <p>
                I&rsquo;m a self-taught fine artist based in the Pacific Northwest,
                drawn to the quiet beauty of the natural world. My work explores
                the tender, transient moments — a flower mid-bloom, light on
                still water, the last blush of a summer sky.
              </p>
              <p>
                Working primarily in watercolor and oil, I embrace the
                unpredictable nature of the medium. Each piece is an original,
                hand-crafted with intention and care — never mass-produced, never
                rushed.
              </p>
              <p>
                I take on a limited number of custom commissions each season, so
                that every client receives my full attention and the most
                personal, meaningful artwork possible.
              </p>
            </div>

            {/* Values row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#E8C5C1]">
              {[
                { label: "Original", sub: "Every piece unique" },
                { label: "Handcrafted", sub: "Made with intention" },
                { label: "Personal", sub: "Custom commissions" },
              ].map(({ label, sub }) => (
                <div key={label}>
                  <p
                    style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                    className="text-xl font-light text-[#3D2E28] mb-1"
                  >
                    {label}
                  </p>
                  <p className="text-[11px] text-[#8C7B6E] font-light">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
