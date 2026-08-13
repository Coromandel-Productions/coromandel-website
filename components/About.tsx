"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BTS_BASE = "/Coromandel x Lune/07_BTS_Images";

const images = [
  {
    src: `${BTS_BASE}/Core Team Photos/core-team-homepage-2.jpg`,
    label: "The Core Team",
    aspect: "landscape",
    caption: "Singapore · Chennai · London",
  },
  {
    src: `${BTS_BASE}/bts-4.jpg`,
    label: "On Location",
    aspect: "landscape",
    caption: "Behind every frame, a world of craft.",
  }
];

function ParallaxImage({ src, label, caption, aspect, index }: { src: string; label: string; caption: string; aspect: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 group"
      style={{ aspectRatio: aspect === "landscape" ? "16/9" : "4/5" }}
    >
      {/* Parallax image */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-[-12%] w-[100%+24%] h-[124%]"
      >
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-[filter] duration-1000 grayscale-[0.3] group-hover:grayscale-0"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Image index number — editorial style */}
      <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.4em] text-white/30 select-none">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-2">{label}</p>
          <p className="font-serif text-xl md:text-2xl text-white leading-snug">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="about" className="bg-background relative overflow-x-clip">
      {/* Ambient glow */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start py-32">

          {/* ─── LEFT: Sticky editorial text ─── */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold">Our Story</span>
              </div>

              {/* Big headline */}
              <h2 className="font-serif text-[clamp(3rem,8vw,7rem)] text-foreground tracking-tighter mb-14 leading-[0.88]">
                FOUNDED
                <span className="block text-accent italic ml-2">IN 2016.</span>
                DRIVEN BY
                <span className="block text-primary ml-2">TRUTH.</span>
              </h2>

              {/* Body copy — with animated reveal */}
              <div className="space-y-8 font-light leading-relaxed text-muted text-lg border-l-2 border-primary/30 pl-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                >
                  Launched in 2016 by award-winning filmmaker{" "}
                  <span className="text-foreground font-semibold">Veeru Murugappan</span>, Coromandel Productions
                  emerged with a singular vision: to tell stories that resonate beyond the surface level.
                  Today, we are India&apos;s specialist studio based in{" "}
                  <span className="text-foreground font-semibold">Singapore and Chennai.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                >
                  In 2020, we solidified our international presence by becoming{" "}
                  <span className="text-primary italic font-medium">co-owners of Barn Media</span>, a premier
                  UK-based production house — bridging Asian storytelling with world-class European production
                  standards.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                >
                  We specialize in high-impact sports features, corporate documentaries, and social impact stories.
                  We don&apos;t just point cameras — we build the architectural frameworks that allow truth to speak.
                </motion.p>
              </div>

              {/* Stat chips */}
              <motion.div
                className="flex flex-wrap gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {[
                  { value: "10", label: "Years" },
                  { value: "3", label: "Continents" },
                  { value: "100+", label: "Productions" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 min-w-[90px] px-6 py-5 border border-border rounded-2xl bg-surface-2 text-center"
                  >
                    <p className="font-serif text-3xl text-primary tracking-tighter leading-none mb-1">{stat.value}</p>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-muted font-bold">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>

          {/* ─── RIGHT: Scrolling image column ─── */}
          <div className="flex flex-col gap-8 pt-0 lg:pt-8">
            {images.map((img, i) => (
              <ParallaxImage
                key={img.src}
                src={img.src}
                label={img.label}
                caption={img.caption}
                aspect={img.aspect}
                index={i}
              />
            ))}

            {/* Discover Studio card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/behind-the-lens"
                className="block group relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors duration-500 p-10 md:p-14"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -z-10 group-hover:bg-primary/20 transition-colors duration-700" />
                <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-4">The Studio</p>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground tracking-tighter leading-tight mb-8">
                  Discover <span className="italic text-primary">Behind the Lens.</span>
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground group-hover:text-primary transition-colors duration-300">
                  Explore the full story
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
