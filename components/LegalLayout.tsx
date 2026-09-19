"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Navbar />
      
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/#footer" 
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 text-xs uppercase tracking-widest font-bold"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>

          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold">
                Legal Repository
              </span>
            </motion.div>
            
            <h1 className="font-serif text-6xl md:text-8xl text-foreground tracking-tighter leading-none mb-8">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "italic text-primary" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-muted text-xs uppercase tracking-widest font-medium">
              Last Updated: {lastUpdated}
            </p>
          </header>

          <div className="prose prose-invert prose-orange max-w-none prose-p:text-muted prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-foreground prose-strong:text-foreground prose-strong:font-bold">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
