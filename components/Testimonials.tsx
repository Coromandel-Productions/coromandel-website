"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    client: "International Cricket Council",
    title: "Content Director",
    text: "The level of professionalism and creative vision Coromandel brings to sports storytelling is rare. They captured the emotion of our events in ways that resonated with cricket fans globally.",
    category: "Sports Features"
  },
  {
    client: "World Bank Group",
    title: "Project lead",
    text: "Coromandel brought a depth of storytelling to our social impact content that we simply couldn't have achieved internally. They understood our mission and translated it into cinematic truth.",
    category: "Social Impact"
  },
  {
    client: "Infosys",
    title: "Communications Lead",
    text: "We came with a complex brief and Veeru's team not only delivered on every point—they found angles we hadn't considered. Truly world-class output for our global brand films.",
    category: "Corporate"
  },
  {
    client: "Speciale Invest",
    title: "Principal",
    text: "Capturing the essence of high-growth tech is difficult. Coromandel handles it with ease, delivering high-velocity films that speak the language of founders and investors alike.",
    category: "Corporate"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-surface overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
              Global Voices
            </span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tighter">
            TRUSTED BY <br />
            <span className="italic text-primary">THE GIANTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group p-12 bg-surface-2 border border-white/10 rounded-3xl relative hover:border-primary/50 transition-all duration-700"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/30 transition-colors duration-700" size={80} />
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                  {t.category} // {t.client}
                </span>
                <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-10 group-hover:text-foreground/80 transition-colors">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-primary/30 group-hover:w-16 transition-all duration-700" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-foreground">{t.title}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted mt-1">{t.client}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
