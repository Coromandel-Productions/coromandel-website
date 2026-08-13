"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "ICC", logo: "/client logos/icc-logo.png" },
  { name: "World Bank", logo: "/Coromandel x Lune/05_Client_Logos/worldbank2.png" },
  { name: "Infosys", logo: "/Coromandel x Lune/05_Client_Logos/infosys2.png" },
  { name: "Knight Frank", logo: "/Coromandel x Lune/05_Client_Logos/Knight Frank.png" },
  { name: "BCCI", logo: "/Coromandel x Lune/05_Client_Logos/BCCI.png" },
  { name: "Speciale Invest", logo: "/Coromandel x Lune/05_Client_Logos/Speciale Invest.png" },
  { name: "Borussia Dortmund", logo: "/client logos/Borussia_Dortmund_logo.png" },
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 justify-center">
          <div className="h-[1px] w-12 bg-primary/30" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted font-bold text-center">
            Trusted by Global Giants
          </span>
          <div className="h-[1px] w-12 bg-primary/30" />
        </div>
      </div>

      <div className="relative flex group">
        <div className="animate-marquee flex whitespace-nowrap items-center hover:pause-animation group/track">
          {/* Duplicate the array a few times to ensure seamless infinite scroll */}
          {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="mx-12 lg:mx-20 flex items-center justify-center cursor-pointer min-w-[120px] group/logo relative"
            >
              {/* Tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 scale-95 group-hover/logo:opacity-100 group-hover/logo:translate-y-0 group-hover/logo:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-50">
                <div className="px-4 py-2 bg-surface-2/90 backdrop-blur-xl border border-border rounded-full shadow-2xl">
                  <span className="text-foreground text-[10px] font-bold whitespace-nowrap tracking-widest uppercase">
                    {partner.name}
                  </span>
                </div>
              </div>

              {/* Logo */}
              <div className="relative w-32 h-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/logo:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 120px, 120px"
                  className="object-contain transition-all duration-500 opacity-70 group-hover/track:opacity-20 group-hover/logo:!opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
