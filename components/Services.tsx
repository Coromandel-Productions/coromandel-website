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
    video: "/Coromandel x Lune/04_Showreels/Video Thumbnails/Sport.mp4",
    href: "/services/sports",
  },
  {
    title: "Corporate Identity",
    description: "Elevating brand identity through cinematic storytelling that connects with modern audiences.",
    icon: Building2,
    category: "02 // IDENTITY",
    video: "/Coromandel x Lune/04_Showreels/Video Thumbnails/Corporate.mp4",
    href: "/services/corporate",
  },
  {
    title: "Human Interest",
    description: "Films from the heart — stories of resilience, compassion, and the remarkable breadth of the human experience.",
    icon: Heart,
    category: "03 // HUMANITY",
    video: "/Coromandel x Lune/04_Showreels/Video Thumbnails/Human Interest.mp4",
    href: "/services/human-interest",
  },
  {
    title: "Documentaries",
    description: "In-depth, unscripted narratives that explore the human condition beyond the lens.",
    icon: Film,
    category: "04 // NARRATIVE",
    video: "/Coromandel x Lune/04_Showreels/Video Thumbnails/Documentary.mp4",
    href: "/services/documentaries",
  }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-auto md:h-[400vh] bg-background">
      <div className="md:sticky md:top-0 flex md:h-screen md:items-center overflow-hidden">
        {/* Moving Content - horizontal on desktop, vertical on mobile */}
        <motion.div style={{ x }} className="flex flex-col md:flex-row gap-12 md:gap-24 px-6 md:px-24 items-center max-md:!transform-none max-md:w-full py-24 md:py-0">
          {/* Section Introduction Card */}
          <div className="flex flex-col justify-center w-full md:min-w-[40vw] md:mr-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Our Capabilities
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-12">
              DYNAMIC <br />
              <span className="italic text-accent">CRAFT.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl font-light mb-12">
              We leverage a decade of experience and global reach to add value wherever the story leads.
              From action-packed sports to intimate impact stories.
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

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-48 h-48 relative group cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text className="text-[6.5px] uppercase tracking-[0.3em] font-black fill-primary/30 group-hover:fill-primary transition-colors duration-700">
                    <textPath href="#circlePath">
                      TRUTH BEYOND THE LENS • ESTABLISHED 2016 •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/20 transition-colors duration-700">
                  <ArrowUpRight className="text-accent group-hover:text-primary transition-all duration-700 group-hover:scale-110" size={32} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

          {/* Final CTA Card */}
          <div className="w-full md:min-w-[80vw] h-[60vh] md:h-[70vh] bg-primary/90 flex flex-col items-center justify-center p-8 md:p-24 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent)] group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="font-serif text-6xl md:text-[8rem] text-background tracking-tighter leading-none text-center relative z-10 mb-12">
              HAVE A DIFFERENT <br /> <span className="italic">VISION?</span>
            </h3>
            <p className="text-xl md:text-2xl text-background/80 max-w-xl text-center font-medium relative z-10 mb-12">
              We handle bespoke productions for agencies and brands worldwide.
            </p>
            <a href="#contact" className="relative z-10 px-10 md:px-16 py-6 md:py-8 bg-background text-primary rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Discuss Project
            </a>
          </div>
        </motion.div>

        {/* Progress Indicator + Panel Counter (Desktop Only) */}
        <div className="hidden md:flex absolute bottom-12 left-24 right-24 items-center gap-6">
          <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full w-full bg-primary origin-left"
            />
          </div>
          <motion.span
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
            }}
            className="text-[9px] uppercase tracking-[0.4em] text-muted font-bold shrink-0"
          >
            {services.length} Capabilities
          </motion.span>
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
      className="relative w-full md:min-w-[80vw] h-[60vh] md:h-[70vh] bg-black rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden group cursor-pointer flex flex-col md:flex-row shadow-2xl"
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
            className="w-full h-full object-cover transition-all duration-1000 opacity-60 group-hover:opacity-100"
            style={{
              scale: isHovered ? 1.05 : 1,
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

      <div className="relative z-10 flex flex-col justify-end p-8 md:p-20 w-full md:w-1/2 h-full md:h-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 md:mb-6 block font-bold">
          {service.category}
        </span>
        <h3 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white group-hover:text-accent transition-all duration-700 tracking-tighter mb-4 md:mb-8 leading-tight">
          {service.title}
        </h3>
        <p className="text-lg md:text-xl text-white/70 group-hover:text-white transition-colors duration-700 leading-relaxed font-light mb-8">
          {service.description}
        </p>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
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
