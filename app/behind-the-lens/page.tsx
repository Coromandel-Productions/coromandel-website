"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coreTeamNames = [
  { name: "Veeru Murugappan", role: "Founder & Director" },
  { name: "Harsh Shah", role: "Head of Production" },
  { name: "Deeya Mirpuri", role: "Senior Producer & Editor" },
  { name: "Pranav Thimmaiah", role: "Senior Editor" },
];

const coreTeamPhotos = [
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/Copy of PHOTO-2022-11-14-18-04-33.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/core-bts-2.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2023-04-04-09-45-24.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2023-09-23-18-45-47.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/core-bts-3.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2023-11-19-12-32-44.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2025-11-26-20-10-49.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/core-bts-1.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2026-04-21-18-36-49.jpg",
  "/Coromandel x Lune/07_BTS_Images/Core Team Photos/PHOTO-2026-06-20-08-46-54.jpg",
];

const btsImages = [
  "/Coromandel x Lune/07_BTS_Images/bts-2.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-10.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-1.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-13.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-7.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-4.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-8.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-11.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-3.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-9.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-12.jpg",
  "/Coromandel x Lune/07_BTS_Images/bts-6.jpg",
];

export default function BehindTheLens() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <Image
            src="/Coromandel x Lune/07_BTS_Images/PHOTO-2022-04-19-19-29-54.jpg"
            alt="Behind the Lens Hero"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary mb-6 block">
              The Studio
            </span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] font-normal leading-[0.85] text-white tracking-tighter mb-8 mix-blend-difference">
              BEHIND <br />
              <span className="italic text-primary/90">THE LENS.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Origins Story */}
      <section className="py-16 md:py-40 bg-background relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5"
            >
              <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tighter leading-tight mb-8">
                Stories from the heart. <br />
                <span className="italic text-muted">Beyond the lens.</span>
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-8 text-lg md:text-2xl text-muted font-light leading-relaxed"
            >
              <p>
                Coromandel Productions was born out of a desire to tell stories that matter. Based in Singapore and India for the world, we are a collective of storytellers dedicated to pushing the boundaries and delivering quality video content without compromise.
              </p>
              <p>
                We believe true magic happens when raw emotion meets impeccable production value. Our teams, spread across the globe, capture and deliver authentic work that isn't just seen, but felt through our stories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Collective */}
      <section className="py-16 md:py-24 bg-surface relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-primary/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">
              The Collective
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
            {/* The Roster */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12">
              {coreTeamNames.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex flex-col group cursor-default"
                >
                  <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted group-hover:text-foreground transition-colors">
                    {member.role}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* The Film Strip (Right Side) */}
            <div className="w-full lg:w-2/3 relative h-[300px] md:h-[500px] overflow-hidden rounded-3xl group">
               {/* Faded edges */}
               <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
               <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
               
               <div className="flex h-full animate-marquee hover:pause-animation items-center">
                 {/* Duplicate for infinite scroll */}
                 {[...coreTeamPhotos, ...coreTeamPhotos, ...coreTeamPhotos].map((src, idx) => (
                   <div key={idx} className="relative h-[80%] min-w-[250px] md:min-w-[400px] mx-4 rounded-2xl overflow-hidden shadow-2xl">
                     <Image 
                       src={src}
                       alt="Core Team"
                       fill
                       sizes="(max-width: 768px) 250px, 400px"
                       className="object-cover transition-transform duration-700 hover:scale-105"
                     />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          .hover\\:pause-animation:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Life on Set Masonry Grid */}
      <section className="py-16 md:py-40 bg-background relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 md:mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-4 block">
            Behind the Scenes
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground tracking-tighter">
            LIFE ON <span className="italic text-muted">SET.</span>
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {btsImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                className="relative w-full rounded-2xl overflow-hidden bg-surface group break-inside-avoid mb-4 md:mb-6 block"
              >
                <img 
                  src={src} 
                  alt="Life on Set" 
                  className="w-full h-auto object-cover transition-all duration-700 md:group-hover:scale-105 filter grayscale hover:grayscale-0 active:grayscale-0 active:scale-[0.98]" 
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
