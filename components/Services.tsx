"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Trophy, Building2, Heart, Film, Sparkles, ArrowUpRight, Play, ArrowRight, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Sports Features",
    description: "Capturing the intensity, triumph, and soul of competition with top-tier cinematography.",
    icon: Trophy,
    category: "01 // ACTION",
    video: "/Coromandel%20x%20Lune/04_Showreels/Video%20Thumbnails/Sport.mp4",
    href: "/services/sports",
  },
  {
    title: "Corporate Identity",
    description: "Elevating brand identity through cinematic storytelling that connects with modern audiences.",
    icon: Building2,
    category: "02 // IDENTITY",
    video: "/Coromandel%20x%20Lune/04_Showreels/Video%20Thumbnails/Corporate.mp4",
    href: "/services/corporate",
  },
  {
    title: "Human Interest",
    description: "Films from the heart — stories of resilience, compassion, and the remarkable breadth of the human experience.",
    icon: Heart,
    category: "03 // HUMANITY",
    video: "/Coromandel%20x%20Lune/04_Showreels/Video%20Thumbnails/Human%20Interest.mp4",
    href: "/services/human-interest",
  },
  {
    title: "Documentaries",
    description: "In-depth, unscripted narratives that explore the human condition beyond the lens.",
    icon: Film,
    category: "04 // NARRATIVE",
    video: "/Coromandel%20x%20Lune/04_Showreels/Video%20Thumbnails/Documentary.mp4",
    href: "/services/documentaries",
  }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-auto md:h-[400vh] bg-background">
      <div className="md:sticky md:top-0 flex md:h-screen md:items-center overflow-hidden">
        {/* Moving Content - horizontal on desktop, vertical on mobile */}
        <motion.div style={{ x }} className="flex flex-col md:flex-row gap-12 md:gap-24 px-6 md:px-24 items-center max-md:!transform-none max-md:w-full py-24 md:py-0 will-change-transform">
          {/* Section Introduction Card */}
          <div className="flex flex-col justify-center w-full md:min-w-[40vw] md:mr-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Selected Works
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-tighter leading-[0.85] mb-12">
              STORIES <br />
              <span className="italic text-accent">THAT MOVE.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl font-light mb-12">
              We leverage a decade of experience and global reach to elevate your stories visually. 
              From action-packed sports content to impactful human narratives, we do it all.
            </p>

            {/* Scroll Navigation Cue - Hidden on Mobile since it's a vertical scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="hidden md:flex items-center gap-4 mt-4"
            >
              <span className="text-[9px] uppercase tracking-[0.5em] text-muted font-bold">Scroll to Explore</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  >
                    <ChevronRight size={14} className="text-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

        </motion.div>

        {/* Progress Indicator + Panel Counter (Desktop Only) */}
        <div className="hidden md:flex absolute bottom-12 left-24 right-24 items-center gap-6">
          <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full w-full bg-primary origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(service.href)}
      className="relative w-full md:min-w-[80vw] min-h-[420px] md:h-[70vh] bg-black rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden group cursor-pointer flex flex-col md:flex-row shadow-2xl"
    >
      {/* Background Image/Video Parallax */}
      <div className="absolute inset-0 z-0">
        {service.video ? (
            <motion.video
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover transition-all duration-1000 opacity-60 group-hover:opacity-100"
              style={{
                scale: isHovered ? 1.05 : 1,
                willChange: "transform, opacity",
              }}
            />
        ) : (
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-all duration-1000 opacity-60 group-hover:opacity-100"
            style={{
              scale: isHovered ? 1.05 : 1,
            }}
          />
        )}
        {/* Only bottom shading for text readability, leaving top clear */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end p-6 md:p-20 w-full md:w-1/2 h-full md:h-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 md:mb-6 block font-bold">
          {service.category}
        </span>
        <h3 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white group-hover:text-accent transition-all duration-700 tracking-tighter mb-4 md:mb-8 leading-tight">
          {service.title}
        </h3>
        <p className="text-lg md:text-xl text-white/70 group-hover:text-white transition-colors duration-700 leading-relaxed font-light mb-8">
          {service.description}
        </p>
        {/* CTA arrow — visible on mobile always, hover-only on desktop */}
        <div className="flex items-center gap-3 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
          <span className="text-[9px] uppercase tracking-[0.4em] text-primary font-black">View Work</span>
          <ArrowRight size={14} className="text-primary" />
        </div>
      </div>

      <div className="absolute md:relative right-8 top-8 md:right-auto md:top-auto z-10 flex items-center justify-center p-0 md:p-20 md:w-1/2 pointer-events-none md:pointer-events-auto opacity-50 md:opacity-100">
        <div className="relative w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 hidden md:block" />
          <service.icon className="w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 text-accent group-hover:text-primary transition-all duration-700 relative z-10" />

          {/* Animated Circle for Icon */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 hidden md:block">
            <circle
              cx="50%" cy="50%" r="48%"
              className="stroke-primary/20 fill-none"
              strokeWidth="1"
            />
            <motion.circle
              cx="50%" cy="50%" r="48%"
              className="stroke-primary fill-none"
              strokeWidth="2"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: isHovered ? 0 : 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Interactive Liquid reveal accent line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
        className="absolute left-0 bottom-0 w-2 bg-primary z-20"
      />
    </motion.div>
  );
}
