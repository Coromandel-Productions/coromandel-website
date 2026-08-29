"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

const GlobalMap = dynamic(() => import("@/components/GlobalMap"), {
  ssr: false,
  loading: () => (
    <div className="py-40 bg-[#080808] relative overflow-hidden flex items-center justify-center min-h-[600px] border border-white/5 rounded-[3rem]">
      <div className="text-primary text-xs uppercase tracking-widest animate-pulse">Loading Map Infrastructure...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <TrustBar />
        <Services />
        <About />
        <GlobalMap />
        <Process />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
