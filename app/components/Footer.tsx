"use client";

export default function Footer() {
  return (
    <footer className="bg-[#3D2E28] text-[#FAF7F2] py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-2xl font-light tracking-[0.08em] mb-1"
          >
            Eliza Rice Art
          </p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#E8C5C1]/60 font-light">
            Original Fine Art &amp; Custom Commissions
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            id="footer-email"
            href="mailto:elizarice23@icloud.com"
            className="text-[#E8C5C1]/60 hover:text-[#E8C5C1] transition-colors duration-300"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        <p className="text-[11px] tracking-[0.1em] text-[#E8C5C1]/40 font-light">
          &copy; {new Date().getFullYear()} Eliza Rice Art. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
