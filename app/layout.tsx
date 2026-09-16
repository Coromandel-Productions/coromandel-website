import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coromandel Productions | Sports & Corporate Video Production | Singapore · Chennai",
  description:
    "Award-winning cinematic production studio founded in 2016. We craft sports films, corporate documentaries and social impact stories for global brands — trusted by ICC, Infosys and the World Bank. Based in Singapore and Chennai. Booking Q4 2026.",
  keywords: [
    "video production company Chennai",
    "video production company Singapore",
    "corporate film makers Chennai",
    "sports video production India",
    "cinematic storytelling Singapore",
    "documentary production Chennai",
  ],
  openGraph: {
    title: "Coromandel Productions — Cinematic Stories for Global Brands",
    description:
      "Sports features. Corporate identity films. Social impact documentaries. Since 2016, Coromandel has told stories that move the world — for ICC, Infosys, the World Bank, and BVB Dortmund.",
    url: "https://coromandel-productions.com",
    siteName: "Coromandel Productions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coromandel Productions — cinematic sports and corporate film production studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coromandel Productions — Stories Unbound",
    description:
      "Sports films. Corporate docs. Social impact stories. Trusted by ICC, Infosys & World Bank. Based in India, Singapore & UK. Booking Q3 2026.",
    images: ["/og-image.jpg"],
  },
};


import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased transition-colors duration-500`}
    >
      <body className={`${jost.className} min-h-full flex flex-col bg-background text-foreground transition-colors duration-500`}>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
