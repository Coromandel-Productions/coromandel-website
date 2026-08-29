"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, ArrowRight, MousePointer2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video Background Transforms
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.7]);
  
  // Smooth Springs
  const smoothVideoScale = useSpring(videoScale, { stiffness: 60, damping: 25 });

  return (
    <section ref={containerRef} id="hero" className="relative h-[100dvh] bg-background">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Dynamic Background Wrapper */}
        <motion.div 
          style={{ scale: smoothVideoScale }}
          className="absolute inset-0 z-0 origin-center will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover saturate-[0.8] contrast-[1.1]"
          >
            <source src="/Coromandel%20x%20Lune/04_Showreels/showreel_final.mp4" type="video/mp4" />
          </video>
          
          {/* Dynamic Darkening Overlay for better contrast */}
          <motion.div 
            style={{ opacity: videoOverlayOpacity }}
            className="absolute inset-0 bg-black/80 md:bg-black z-10" 
          />
          
          {/* Gradient Accents */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(241,111,36,0.1),transparent_50%)] z-10" />
        </motion.div>

        {/* Content Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center pt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[-10vh]">
            <div className="lg:col-span-12 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6 md:mb-10 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold py-1">
                  Singapore · Chennai
                </span>
              </div>

              <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-[9rem] lg:text-[13rem] font-normal leading-[0.85] text-white mb-6 md:mb-12 tracking-tighter mix-blend-difference">
                <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden py-4">
                  {"STORIES".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0, filter: "blur(20px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ 
                        duration: 1, 
                        delay: i * 0.1, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="italic font-light text-accent flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent"
                >
                  UNBOUND
                </motion.span>
              </h1>


              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mt-8 md:mt-12 w-full">
                <div className="flex items-start gap-8 max-w-xl">
                  {/* Architectural Anchor Line */}
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-px bg-gradient-to-b from-primary via-primary/50 to-transparent self-stretch hidden md:block origin-top" 
                  />
                  
                  <motion.p 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 3
                        }
                      }
                    }}
                    className="text-white/80 text-base md:text-2xl leading-relaxed text-center lg:text-left font-light flex flex-wrap gap-x-[0.3em]"
                  >
                    {"Global video production studio since 2016. Meaningful storytelling for Sport, Social Impact, Brands & Corporates.".split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                          visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>



                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-end gap-6 sm:gap-8 w-full lg:w-auto mt-6 lg:mt-0">
                  <a
                    href="#services"
                    className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors"
                  >
                    <div className="w-[44px] h-[44px] md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                      <Play size={14} className="fill-current" />
                    </div>
                    Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Initial Scroll Hint */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-bold mb-4">Discover Legacy</span>
          <div className="relative w-[1px] h-24 bg-gradient-to-b from-primary to-transparent overflow-hidden">
             <motion.div 
               animate={{ y: [0, 96] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full h-8 bg-white"
             />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30" />
    </section>
  );
}
