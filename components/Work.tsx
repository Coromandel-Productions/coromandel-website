"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Play, ArrowRight, ExternalLink, Timer, MapPin } from "lucide-react";

export default function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Focus only on the 6 flagship projects
  const displayProjects = projects.slice(0, 6);

  const getBentoClass = (index: number) => {
    const classes = [
      "md:col-span-8 md:row-span-2 h-[600px]", // Main Feature
      "md:col-span-4 md:row-span-1 h-[288px]",
      "md:col-span-4 md:row-span-1 h-[288px]",
      "md:col-span-4 md:row-span-2 h-[600px]",
      "md:col-span-8 md:row-span-2 h-[600px]", // Wide Feature
      "md:col-span-12 md:row-span-1 h-[300px]", // Full Width
    ];
    return classes[index] || "md:col-span-4 md:row-span-1 h-[288px]";
  };

  return (
    <section id="work" className="py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Our Work
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-8">
              DYNAMIC <br />
              <span className="italic text-primary">CRAFT.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-muted text-xl leading-relaxed max-w-sm font-light mb-4">
            <p>We leverage over a decade of experience and global reach to elevate your stories visually.</p>
            <p>From action-packed sports content to impactful human narratives, we do it all.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(`https://vimeo.com/${project.vimeoId}`, "_blank")}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-surface-2 cursor-pointer border border-white/5 transition-all duration-700 hover:border-primary/20 hover:shadow-2xl shadow-primary/10 ${getBentoClass(index)}`}
            >
              {/* Thumbnail Image */}
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
              />

              {/* Vimeo Video Hover State */}
              <AnimatePresence>
                {hoveredId === project.id && project.vimeoId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 p-2 hidden lg:block"
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <iframe
                        src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&loop=1&background=1&muted=1`}
                        className="w-full h-full object-cover scale-[1.5]"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glass Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold bg-black/40 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">
                        Est. {project.year}
                      </span>
                    )}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="text-white group-hover:text-primary transition-colors" size={24} />
                  </div>
                </div>

                <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-primary transition-colors mb-4 tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-lg max-w-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Interactive Fill Line (Bottom) */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: hoveredId === project.id ? "100%" : 0 }}
                className="absolute bottom-0 left-0 h-1 bg-primary z-30"
              />
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 flex flex-col items-center text-center"
        >
          <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent mb-12" />
          <h4 className="font-serif text-4xl md:text-6xl text-foreground mb-12 text-center max-w-3xl leading-tight">
            WANT TO SEE OUR <span className="italic text-primary">COMPLETE REEL?</span>
          </h4>
          <a
            href="https://vimeo.com/coromandelproductions"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-8 px-16 py-8 bg-surface-2 border border-white/10 rounded-full hover:border-primary transition-all duration-500 overflow-hidden"
          >
             <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
             <span className="relative z-10 text-xs uppercase tracking-[0.4em] text-foreground group-hover:text-background font-black">Explore Full Archives</span>
             <ExternalLink size={18} className="relative z-10 group-hover:text-background transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

