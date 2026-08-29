"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Behind the Lens", href: "/behind-the-lens" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "py-4" : "py-6 lg:py-10"}`}>
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between px-8 py-2 rounded-full border transition-all duration-700 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Coromandel Productions"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl tracking-tighter leading-none text-foreground group-hover:text-primary transition-colors">
                COROMANDEL
              </span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-muted font-black mt-1">
                PRODUCTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/50 hover:text-primary transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-3 -mr-3 rounded-full hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-[100dvh] bg-background/95 backdrop-blur-3xl z-50 flex flex-col p-8 md:p-12 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16 md:mb-20">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Coromandel"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-serif text-lg tracking-tighter leading-none text-foreground">
                    COROMANDEL
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.4em] text-muted font-black">
                    PRODUCTIONS
                  </span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X size={32} className="text-foreground" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-6xl font-bold tracking-tighter hover:text-primary transition-colors italic block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 text-foreground/50 mb-6">
                <Globe size={16} />
                <span className="text-xs uppercase tracking-widest">Global HQ — Singapore</span>
              </div>
              <p className="font-serif text-xl italic text-foreground/80">"Stories from the heart. Beyond the lens."</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
