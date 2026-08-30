"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "PRE-PRODUCTION",
    description: "The foundation of every great story. We meticulously plan and develop concepts to ensure a seamless production process.",
    services: ["Concept Development", "Scriptwriting", "Storyboarding", "Location Scouting", "Casting", "Budgeting & Scheduling"],
  },
  {
    id: "02",
    title: "PRODUCTION",
    description: "Where the magic happens. Our global teams bring cinematic vision to life with uncompromising production value.",
    services: ["Directing", "Cinematography", "Aerial & Drone Footage", "Sound Recording", "Crew Management", "On-Set Supervision"],
  },
  {
    id: "03",
    title: "POST-PRODUCTION",
    description: "The final polish. We craft and refine the raw footage into a compelling narrative that moves audiences.",
    services: ["Video Editing", "Color Grading", "Sound Design & Mixing", "Motion Graphics", "VFX", "Mastering & Delivery"],
  },
];

export default function Capabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-40 bg-background relative z-20">
      <div className="w-full px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-4 md:mb-6 block">
              Our Capabilities
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground tracking-tighter leading-tight mb-6 md:mb-8">
              CRAFTING <br />
              <span className="italic text-muted">THE VISION.</span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-md">
              We provide end-to-end production services tailored to bring bold ideas to life, from the first sketch to the final color grade.
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8 flex flex-col w-full border-t border-white/10 mt-8 lg:mt-0">
            {capabilities.map((cap, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div key={cap.id} className="border-b border-white/10 overflow-hidden group">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-6 md:py-12 flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-4 md:gap-12 w-full">
                      <span className={`text-xs md:text-sm font-mono tracking-widest transition-colors ${isExpanded ? "text-primary" : "text-muted group-hover:text-foreground/50"}`}>
                        {cap.id}
                      </span>
                      <h3 className={`font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter transition-colors duration-500 ${isExpanded ? "text-white" : "text-foreground/60 group-hover:text-white"}`}>
                        {cap.title}
                      </h3>
                    </div>
                    
                    <div className={`relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border transition-colors duration-500 flex-shrink-0 ml-4 ${isExpanded ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted group-hover:border-white/30 group-hover:text-white"}`}>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-8 md:pb-12 pl-[2.5rem] md:pl-[4.5rem] lg:pl-[5.5rem] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                          <p className="text-muted text-sm md:text-base lg:text-lg leading-relaxed font-light">
                            {cap.description}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {cap.services.map((service, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground/80 font-medium tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
