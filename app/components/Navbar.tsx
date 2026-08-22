"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "My Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-[#3D2E28]/10 ${
        scrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="group flex flex-col leading-none">
          <span
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-2xl font-light tracking-[0.08em] text-[#3D2E28] group-hover:text-[#B8706A] transition-colors duration-300"
          >
            Eliza Rice
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B6E] font-light">
            Fine Art
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.15em] uppercase font-light transition-colors duration-300 ${
                link.label === "Get a Quote"
                  ? "px-5 py-2 border border-[#E8C5C1] text-[#8C7B6E] hover:bg-[#E8C5C1] hover:text-[#3D2E28] rounded-full"
                  : "text-[#6B5C52] hover:text-[#3D2E28]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px bg-[#6B5C52] transition-all duration-300 ${
                i === 0
                  ? menuOpen
                    ? "w-5 translate-y-[6px] rotate-45"
                    : "w-5"
                  : i === 1
                  ? menuOpen
                    ? "w-0 opacity-0"
                    : "w-4"
                  : menuOpen
                  ? "w-5 -translate-y-[6px] -rotate-45"
                  : "w-3"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#F0D5CE] px-6 py-6 flex flex-col gap-5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[13px] tracking-[0.2em] uppercase font-light text-[#6B5C52] hover:text-[#3D2E28] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
