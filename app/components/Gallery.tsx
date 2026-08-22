"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const artworks = [
  {
    id: 1,
    title: "Reverie",
    medium: "Pencil on paper",
    size: "9 × 12 in",
    src: "/images/drawing-reclining-figure.jpg",
    category: "Drawing",
    aspect: "portrait",
  },
  {
    id: 2,
    title: "Window",
    medium: "Charcoal on paper",
    size: "9 × 12 in",
    src: "/images/drawing-eye-study.jpg",
    category: "Drawing",
    aspect: "portrait",
  },
  {
    id: 3,
    title: "Descent",
    medium: "Chalk on black paper",
    size: "11 × 14 in",
    src: "/images/drawing-flamingo.jpg",
    category: "Drawing",
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Gaze",
    medium: "Pen & ink on paper",
    size: "9 × 12 in",
    src: "/images/drawing-cheetah.jpg",
    category: "Drawing",
    aspect: "portrait",
  },
  {
    id: 5,
    title: "Crown",
    medium: "Pencil on paper",
    size: "9 × 12 in",
    src: "/images/drawing-figure-with-crown.jpg",
    category: "Drawing",
    aspect: "portrait",
  },
  {
    id: 6,
    title: "The Good Shepherd",
    medium: "Gouache on board",
    size: "11 × 14 in",
    src: "/images/painting-shepherd-field.jpg",
    category: "Painting",
    aspect: "portrait",
  },
  {
    id: 7,
    title: "Through the Trees",
    medium: "Gouache on board",
    size: "11 × 14 in",
    src: "/images/painting-forest-lake.jpg",
    category: "Painting",
    aspect: "portrait",
  },
  {
    id: 8,
    title: "Serenade",
    medium: "Gouache on board",
    size: "9 × 12 in",
    src: "/images/painting-violinist.jpg",
    category: "Painting",
    aspect: "portrait",
  },
];

const categories = ["All", "Painting", "Drawing"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeFilter);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C7B6E] mb-4 font-light">
            Portfolio
          </p>
          <h2
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-5xl md:text-6xl font-light text-[#3D2E28] mb-6"
          >
            My Work
          </h2>
          <p className="text-[#8C7B6E] font-light max-w-md mx-auto leading-relaxed">
            Paintings, drawings, and studies — each piece made by hand with
            care and intention.
          </p>
        </motion.div>

        {/* Filters */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-[12px] tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#3D2E28] text-[#FAF7F2]"
                    : "border border-[#E8C5C1] text-[#6B5C52] hover:border-[#D4948D] hover:text-[#3D2E28]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}


        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((artwork) => (
              <motion.article
                key={artwork.id}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl bg-[#F2EDE4] shadow-sm hover:shadow-xl shadow-[#D4948D]/10 hover:shadow-[#D4948D]/20 transition-shadow duration-500 cursor-pointer"
              >
                {/* Inner wrapper carries the lift — grid slot stays fixed */}
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <Image
                      src={artwork.src}
                      alt={`${artwork.title} — ${artwork.medium} by Eliza Rice`}
                      width={500}
                      height={620}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E28]/70 via-[#3D2E28]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                        className="text-[#FAF7F2] text-2xl font-light italic"
                      >
                        {artwork.title}
                      </p>
                      <p className="text-[#F0D5CE]/80 text-[11px] tracking-[0.15em] uppercase mt-1">
                        {artwork.medium} &bull; {artwork.size}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-[#8C7B6E] font-light mb-6">
            Love what you see? Commission a custom piece made just for you.
          </p>
          <a
            id="gallery-cta-btn"
            href="#quote"
            className="inline-block px-8 py-4 border border-[#E8C5C1] text-[#6B5C52] text-[12px] tracking-[0.2em] uppercase font-light hover:bg-[#F0D5CE] hover:text-[#3D2E28] transition-all duration-300 rounded-full"
          >
            Request a Custom Piece
          </a>
        </motion.div>
      </div>
    </section>
  );
}
