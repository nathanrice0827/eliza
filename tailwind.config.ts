import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "cream-dark": "#F2EDE4",
        rose: {
          100: "#F9EDE9",
          200: "#F0D5CE",
          300: "#E8C5C1",
          400: "#D4948D",
          500: "#B8706A",
        },
        sage: {
          100: "#EBF0EB",
          200: "#D5E3D7",
          300: "#C5D9C8",
          400: "#91B898",
          500: "#668A6E",
        },
        lavender: {
          100: "#EDE8F5",
          200: "#DDD5EE",
          300: "#D4C5E2",
          400: "#A893C8",
          500: "#7E65A8",
        },
        stone: {
          warm: "#8C7B6E",
          mid: "#6B5C52",
          dark: "#3D2E28",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "shimmer": "shimmer 2s infinite linear",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
