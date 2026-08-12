"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Calculator } from "lucide-react";


const addons = [
  { name: "Video SEO Strategy", price: "Custom Quote" },
  { name: "Aerial / Drone Cinematography", price: "Project Based" },
  { name: "Global Location Scouting", price: "Bespoke" },
  { name: "Fast-Track Post-Production", price: "Rush Terms" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Specialized Production Capabilities */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-2 border border-white/5 p-12 md:p-20 rounded-[3rem] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
            
            <h3 className="font-serif text-3xl md:text-4xl mb-12 text-center">Specialized <span className="italic text-primary">Capabilities.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
              {addons.map((addon) => (
                <div key={addon.name} className="flex justify-between items-center pb-6 border-b border-white/5 group">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted group-hover:text-primary transition-colors">{addon.name}</span>
                  <span className="font-serif text-primary text-lg italic">{addon.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-muted font-bold">
                * Logistics, Licensing, and Talent fees are scoped per territory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

