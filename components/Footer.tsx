"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, Instagram, Youtube, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="font-serif text-3xl font-bold tracking-tight text-foreground block mb-6"
            >
              COROMANDEL<span className="text-primary italic ml-1">PRODUCTIONS</span>
            </Link>
            <p className="text-muted max-w-sm leading-relaxed mb-4">
              Architecting cinematic legacies for global leaders. High-velocity storytelling for Sports, Corporate, and Social Impact.
            </p>
            <p className="font-serif text-lg text-primary italic mb-8">
              Stories from the heart. Beyond the lens.
            </p>
            <div className="flex gap-6">
              {[
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/coromandel_productions/" 
                },
                { 
                  icon: Youtube, 
                  href: "https://www.youtube.com/channel/UCrM0LAHMFp-Umq56bCRVMbA" 
                },
                { 
                  icon: ({ size }: { size: number }) => (
                    <svg 
                      width={size} 
                      height={size} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M10 13c3.15 0 5-1.85 5-5s-1.85-5-5-5-5 1.85-5 5 1.85 5 5 5z" />
                      <path d="M10 13c-3.15 0-5 1.85-5 5" />
                      <path d="M15 8c0 3.15 1.85 5 5 5s5-1.85 5-5-1.85-5-5-5-5 1.85-5 5z" />
                    </svg>
                  ),
                  href: "https://vimeo.com/coromandelproductions",
                  isCustom: true
                }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted hover:text-primary transition-colors"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Services", "Works", "Process", "Pricing", "About"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Health & Safety", href: "/health-and-safety" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
            &copy; {currentYear} Coromandel Productions. All Cinematic Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
             <span className="text-[10px] uppercase tracking-[0.3em] text-muted decoration-primary underline underline-offset-4">Singapore · Chennai</span>
             <span className="text-[10px] uppercase tracking-[0.3em] text-muted underline underline-offset-4 decoration-primary">UK Partnership Studio</span>
             <span className="text-[9px] text-muted/40 tracking-[0.2em] uppercase font-semibold">Developed by <span className="text-primary/60 font-bold">Lune Studio</span></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
