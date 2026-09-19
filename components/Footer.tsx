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
              className="font-serif text-3xl font-bold tracking-tight text-foreground mb-6 flex flex-wrap items-baseline gap-x-2"
            >
              <span>COROMANDEL</span>
              <span className="text-primary italic">PRODUCTIONS</span>
            </Link>
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
                      fill="currentColor" 
                    >
                      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.928 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-1.713-1.143-5.136-1.758-7.989-.785-3.322-1.603-4.983-2.456-4.983-.223 0-1.116.748-2.68 2.244L0 5.432C1.94 3.766 3.655 2.08 5.143.376 6.83-.82 8.016.147 8.702 2.293c.69 2.147 1.378 5.753 2.063 10.817.391 2.923.824 4.385 1.3 4.385.652 0 1.637-1.353 2.955-4.062 1.045-2.146 1.604-3.665 1.677-4.558.12-1.456-.632-2.184-2.257-2.184-.572 0-1.173.094-1.802.28 1.272-4.062 4.148-6.094 8.629-6.094 2.871 0 4.167 1.408 3.889 4.225z" />
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
              {[
                { name: "Services", href: "#services" },
                { name: "Beyond The Lens", href: "/behind-the-lens" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors">
                    {link.name}
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

        <div className="pt-12 border-t border-white/5 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted text-center md:text-left">
              &copy; {currentYear} Coromandel Productions. <br className="hidden md:block" /> 
              All Cinematic Rights Reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted decoration-primary underline underline-offset-4">Singapore. Chennai. Worldwide.</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted underline underline-offset-4 decoration-primary">Barn Media</span>
            </div>
          </div>

          <div className="text-center w-full">
             <span className="text-[9px] text-muted/30 tracking-[0.3em] uppercase font-semibold">
               Developed by{" "}
               <a 
                 href="https://lunestudio.in" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-primary/60 font-bold hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(241,111,36,0.8)]"
               >
                 Lune Studio
               </a>
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
