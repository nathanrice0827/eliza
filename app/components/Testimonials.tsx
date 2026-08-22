"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Eliza painted a watercolor of our wedding venue for our anniversary. It was absolutely breathtaking — she captured every detail with such love.",
    name: "Sarah M.",
    detail: "Custom Wedding Commission",
  },
  {
    quote: "Working with Eliza was a joy from start to finish. She really listened to my vision and brought it to life in a way I couldn't have imagined.",
    name: "Claire B.",
    detail: "Botanical Portrait",
  },
  {
    quote: "I commissioned a piece as a gift and Eliza's communication and turnaround were phenomenal. The quality is museum-worthy.",
    name: "James T.",
    detail: "Oil Commission",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-[#F2EDE4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C7B6E] mb-4 font-light">Kind Words</p>
          <h2
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-5xl md:text-6xl font-light text-[#3D2E28]"
          >
            From Happy Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, detail }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-[#FAF7F2] rounded-3xl p-8 shadow-sm shadow-[#D4948D]/10 flex flex-col"
            >
              <span
                style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                className="text-6xl leading-none text-[#E8C5C1] mb-4 font-light select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-[#6B5C52] font-light leading-[1.8] text-sm flex-1 mb-6">{quote}</p>
              <div className="border-t border-[#F0D5CE] pt-5">
                <p
                  style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                  className="text-xl font-light text-[#3D2E28]"
                >
                  {name}
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#8C7B6E] mt-0.5 font-light">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
