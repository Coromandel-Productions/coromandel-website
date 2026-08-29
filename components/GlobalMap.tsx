"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  role: string;
  detail: string;
  isHQ?: boolean;
}

const locations: Location[] = [
  {
    id: "singapore",
    name: "Singapore",
    country: "SG",
    coordinates: [103.8198, 1.3521],
    role: "Global HQ",
    detail: "Primary production base & client servicing hub.",
    isHQ: true,
  },
  {
    id: "chennai",
    name: "Chennai",
    country: "IN",
    coordinates: [80.2707, 13.0827],
    role: "India Studio",
    detail: "South Asia production & post-production operations.",
    isHQ: true,
  },
  {
    id: "london",
    name: "London",
    country: "UK",
    coordinates: [-0.1276, 51.5074],
    role: "Barn Media UK — Co-Owners",
    detail: "European content strategy & co-production partner.",
    isHQ: true,
  },
  {
    id: "auckland",
    name: "Auckland",
    country: "NZ",
    coordinates: [174.7633, -36.8485],
    role: "Production",
    detail: "Filming location & regional production partner.",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    coordinates: [55.2708, 25.2048],
    role: "Production",
    detail: "MENA region production & client access.",
  },
];

// Connection lines from Singapore HQ to all other nodes
const connections = locations
  .filter((l) => l.id !== "singapore")
  .map((l) => ({
    from: [103.8198, 1.3521] as [number, number],
    to: l.coordinates,
    targetId: l.id,
  }));

export default function GlobalMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const mapFill = isDark ? "rgba(241,111,36,0.25)" : "rgba(241,111,36,0.35)";
  const mapHoverFill = isDark ? "rgba(241,111,36,0.4)" : "rgba(241,111,36,0.5)";
  const mapStroke = isDark ? "rgba(241,111,36,0.5)" : "rgba(241,111,36,0.6)";
  const dotColor = isDark ? "#ffffff" : "#000000";
  const pulseColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
  const inactiveDotColor = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)";
  const containerBg = isDark ? "bg-[#080808]" : "bg-white";
  const tooltipBg = "bg-surface-2/90";
  const tooltipText = "text-foreground";
  const tooltipSubText = "text-muted";

  return (
    <section id="global" className="py-20 md:py-40 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(241,111,36,0.04),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <div>
            <h2 className="font-serif text-5xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85]">
              A GLOBAL <br />
              <span className="italic text-primary">STUDIO.</span>
            </h2>
          </div>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-sm font-light text-center lg:text-left">
            Six continents. One overarching vision. Stories from the heart.
          </p>
        </div>

        <div className={`relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 ${containerBg} shadow-[0_0_80px_rgba(0,0,0,0.5)] md:shadow-[0_0_120px_rgba(0,0,0,0.8)]`}>
          {/* Map */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 160, center: [30, 10] }}
            className="w-full h-[300px] sm:h-[400px] md:h-[600px]"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={mapFill}
                    stroke={mapStroke}
                    strokeWidth={1}
                    style={{
                      default: { outline: "none", transition: "all 0.3s" },
                      hover: { fill: mapHoverFill, outline: "none", transition: "all 0.3s" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Animated connection lines */}
            {connections.map((conn, i) => (
              <Line
                key={i}
                from={conn.from}
                to={conn.to}
                stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            ))}

            {/* Location markers */}
            {locations.map((loc) => (
              <Marker
                key={loc.id}
                coordinates={loc.coordinates}
                onClick={() => setActiveLocation(activeLocation?.id === loc.id ? null : loc)}
              >
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulsing ring for HQ nodes */}
                  {loc.isHQ && (
                    <motion.circle
                      r={14}
                      fill="transparent"
                      stroke={pulseColor}
                      strokeWidth={1.5}
                      animate={{ r: [10, 18, 10], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <circle
                    r={loc.isHQ ? 6 : 4}
                    fill={activeLocation?.id === loc.id ? "#f16f24" : loc.isHQ ? dotColor : inactiveDotColor}
                    stroke={loc.isHQ ? dotColor : inactiveDotColor}
                    strokeWidth={1.5}
                  />
                  {/* Label */}
                  <text
                    textAnchor="middle"
                    y={-12}
                    style={{
                      fontSize: "7px",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                      fill: activeLocation?.id === loc.id ? "#f16f24" : dotColor,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {loc.name}
                  </text>
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>

          {/* Location Detail Tooltip */}
          <AnimatePresence>
            {activeLocation && (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 ${tooltipBg} backdrop-blur-xl border border-primary/20 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-[calc(100vw-32px)] sm:max-w-xs`}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-primary font-black">{activeLocation.role}</span>
                </div>
                <p className={`font-serif text-xl md:text-2xl ${tooltipText} mb-1 md:mb-2`}>{activeLocation.name}, {activeLocation.country}</p>
                <p className={`text-[10px] md:text-xs leading-relaxed ${tooltipSubText}`}>{activeLocation.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: dotColor }} />
              <span className={`text-[7px] md:text-[8px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>UK & India</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: inactiveDotColor }} />
              <span className={`text-[7px] md:text-[8px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>Production Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
