import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliza Rice Art | Original Fine Art & Custom Commissions",
  description:
    "Discover original fine art by Eliza Rice — watercolor, oil, botanical, and mixed media works. Request a custom art quote for a one-of-a-kind piece made just for you.",
  keywords: ["fine art", "custom art commissions", "watercolor", "oil painting", "botanical art", "Eliza Rice Art"],
  openGraph: {
    title: "Eliza Rice Art",
    description: "Original fine art & custom commissions — delicate, expressive, and made with love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
