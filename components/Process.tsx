"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We start with a brief introductory call to understand your goals, audience, emotional core and budget preferences for the project.",
  },
  {
    num: "02",
    title: "Treatment",
    description: "Our creative team develops a visual direction and narrative treatment for your approval.",
  },
  {
    num: "03",
    title: "Pre-Production",
    description: "Scripting, storyboarding, pre-interviews, scouting, permits. We handle all the logistics and prep so you don't have to.",
  },
  {
    num: "04",
    title: "Production",
    description: "The shoot day(s). Using high-end gear and crew to capture your vision.",
  },
  {
    num: "05",
    title: "Post-Production",
    description: "Bringing the captured vision to your screen. Editing, color grading, sound design, VFX et al. We deliver the first cut within two weeks.",
  },
  {
    num: "06",
    title: "Delivery",
    description: "Stipulated rounds of collaborative feedback followed by master delivery in all formats.",
  },
];

const StepItem = ({ step, index, scrollYProgress }: { step: any, index: number, scrollYProgress: any }) => {
  const isEven = index % 2 === 0;
  const target = index / (steps.length - 1 || 1);
  const stepStart = Math.max(0, target - 0.15);
  
  const dotScale = useTransform(scrollYProgress, [stepStart, target], [0.8, 1.5]);
  const dotOpacity = useTransform(scrollYProgress, [stepStart, target], [0.2, 1]);
  const dotColor = useTransform(scrollYProgress, [stepStart, target], ["rgba(255,255,255,0.1)", "rgba(241,111,36,1)"]); 
  const dotShadow = useTransform(
    scrollYProgress, 
    [stepStart, target], 
    ["0px 0px 0px rgba(241,111,36,0)", "0px 0px 20px rgba(241,111,36,0.8)"]
  );
  
  const textOpacity = useTransform(scrollYProgress, [stepStart, target], [0.2, 1]);
  const yOffset = useTransform(scrollYProgress, [stepStart, target], [20, 0]);
  const blur = useTransform(scrollYProgress, [stepStart, target], ["blur(4px)", "blur(0px)"]);

  return (
    <div className={`relative py-8 md:py-24 flex w-full group justify-start ${isEven ? "md:justify-start md:text-right" : "md:justify-end md:text-left"}`}>
      {/* Interactive Node / Dot */}
      <motion.div
        style={{
          scale: dotScale,
          backgroundColor: dotColor,
          opacity: dotOpacity,
          boxShadow: dotShadow
        }}
        className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10"
      />
      
      {/* Massive Faded Background Number */}
      <motion.div
        style={{ opacity: textOpacity, y: yOffset }}
        className={`absolute top-0 md:top-1/2 md:-translate-y-1/2 right-4 md:right-auto ${isEven ? "md:right-12 lg:right-24" : "md:left-12 lg:left-24"} text-[4rem] md:text-[14rem] font-serif font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter`}
      >
        {step.num}
      </motion.div>

      {/* Actual Content block */}
      <motion.div 
        style={{ opacity: textOpacity, y: yOffset, filter: blur }} 
        className={`relative z-10 w-full pl-8 md:pl-0 md:w-1/2 ${isEven ? "md:pr-8 lg:pr-24" : "md:pl-8 lg:pl-24"}`}
      >
        <h3 className={`text-xl md:text-5xl font-bold uppercase tracking-widest text-foreground mb-2 md:mb-6 flex justify-start items-center ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          <span className={`text-primary mr-4 md:mr-6 font-serif italic opacity-80 ${isEven ? "md:hidden" : "md:block"}`}>{step.num}</span>
          {step.title}
          <span className={`text-primary ml-4 md:ml-6 font-serif italic opacity-80 hidden ${isEven ? "md:block" : "md:hidden"}`}>{step.num}</span>
        </h3>
        <p className={`text-muted text-base md:text-2xl leading-relaxed font-light text-left max-w-xl ${isEven ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto"}`}>
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 70%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12 md:mb-32 mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
              The Journey
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-foreground tracking-tighter leading-[0.85]">
            ROADMAP TO <br />
            <span className="italic text-primary">DELIVERY.</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto pl-4 md:pl-0">
          {/* Faint Background Track */}
          <div className="absolute left-[4px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] md:-translate-x-1/2" />
          
          {/* Glowing Progress Track */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[4px] md:left-1/2 top-0 w-[2px] bg-primary shadow-[0_0_20px_rgba(241,111,36,0.8)] origin-top md:-translate-x-1/2"
          />

          {steps.map((step, index) => (
            <StepItem 
              key={step.num} 
              step={step} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
