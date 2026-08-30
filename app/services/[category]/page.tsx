"use client";

import React from "react";

import { motion } from "framer-motion";
import { projects, categoryMeta } from "@/data/projects";
import { ArrowLeft, Play, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = React.use(params);
  const meta = categoryMeta[category];
  const categoryProjects = projects.filter((p) => p.slug === category);

  if (!meta) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted font-serif text-2xl">Category not found.</p>
      </div>
    );
  }

  const [hero, ...rest] = categoryProjects;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(241,111,36,0.08),transparent_60%)] pointer-events-none" />


        <div className="container mx-auto px-8 relative z-10">
          {/* Back nav */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16 md:mb-24 inline-block"
          >
            <Link
              href="/#works"
              className="group inline-flex items-center gap-3 text-muted hover:text-primary transition-colors py-2"
            >
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold mt-0.5">Back to Selected Works</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-6"
          >
            {meta.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-7xl md:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-8"
          >
            {meta.label.split(" ")[0]} <br />
            <span className="italic text-primary">{meta.label.split(" ").slice(1).join(" ")}.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl max-w-xl leading-relaxed font-light"
          >
            {meta.description}
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto" />

      {/* Video Grid */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-10">

            {/* Hero video — full width */}
            {hero && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="group relative rounded-[2rem] overflow-hidden bg-surface-2 border border-border hover:border-primary/30 transition-all duration-700 shadow-2xl"
              >
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://player.vimeo.com/video/${hero.vimeoId}?title=0&byline=0&portrait=0&color=f16f24`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <VideoInfo project={hero} tagline={meta.tagline} featured />
              </motion.div>
            )}

            {/* Remaining videos — 2 column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {rest.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="group relative rounded-[2rem] overflow-hidden bg-surface-2 border border-border hover:border-primary/30 transition-all duration-700 shadow-xl"
                >
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=f16f24`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <VideoInfo project={project} tagline={meta.tagline} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 text-center">
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto mb-16" />
        <h2 className="font-serif text-5xl md:text-7xl text-foreground tracking-tighter mb-8">
          READY TO <span className="italic text-primary">CREATE?</span>
        </h2>
        <p className="text-muted text-xl mb-12 max-w-md mx-auto font-light leading-relaxed">
          Tell us your vision. We'll build the framework to bring it to life.
        </p>
        <Link
          href="/#contact"
          className="group relative inline-flex items-center gap-6 px-16 py-8 bg-primary text-background rounded-full text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">Start Production</span>
          <Play size={14} className="relative z-10 fill-current" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function VideoInfo({
  project,
  tagline,
  featured = false,
}: {
  project: any;
  tagline: string;
  featured?: boolean;
}) {
  return (
    <div className={`flex items-start justify-between gap-6 ${featured ? "p-8 md:p-10" : "p-6 md:p-8"}`}>
      <div className="flex-1 min-w-0">
        {/* Meta badges */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
            {tagline}
          </span>
          {project.year && (
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted font-semibold border border-border rounded-full px-3 py-0.5">
              {project.year}
            </span>
          )}
          {project.location && (
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-muted font-semibold">
              <MapPin size={9} className="text-primary/70 shrink-0" />
              {project.location}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-serif text-foreground tracking-tight leading-tight ${
            featured ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        {project.description && (
          <p className="text-muted text-sm mt-2 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
        )}
      </div>

      {/* External link */}
      <a
        href={`https://vimeo.com/${project.vimeoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all shrink-0 mt-1 group/link"
        aria-label={`Open ${project.title} on Vimeo`}
      >
        <ExternalLink size={13} className="text-muted group-hover/link:text-primary transition-colors" />
      </a>
    </div>
  );
}
