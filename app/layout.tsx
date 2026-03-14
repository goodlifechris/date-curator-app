import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Date Curator — By Luxury Proposal",
  description:
    "Curating extraordinary romantic experiences in Nairobi. Bespoke date experiences crafted for discerning couples.",
  keywords: ["luxury dates", "romantic experiences", "Nairobi", "date planning", "luxury proposal"],
  openGraph: {
    title: "The Date Curator",
    description: "Curated Moments. Unforgettable Dates. Crafted for You.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${montserrat.variable} bg-obsidian text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
