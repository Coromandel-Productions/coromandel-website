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

const hubs: Location[] = [
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
    name: "India",
    country: "IN",
    coordinates: [80.2707, 13.0827],
    role: "India Studio",
    detail: "South Asia production & post-production operations.",
    isHQ: true,
  },
  {
    id: "london",
    name: "United Kingdom",
    country: "UK",
    coordinates: [-0.1276, 51.5074],
    role: "Barn Media UK — Co-Owners",
    detail: "European content strategy & co-production partner.",
    isHQ: true,
  }
];

const productionLocations: Location[] = [
  { id: "australia", name: "Australia", country: "AU", coordinates: [133.7751, -25.2744], role: "Production", detail: "Production Location" },
  { id: "sri-lanka", name: "Sri Lanka", country: "LK", coordinates: [80.7718, 7.8731], role: "Production", detail: "Production Location" },
  { id: "bangladesh", name: "Bangladesh", country: "BD", coordinates: [90.3563, 23.6850], role: "Production", detail: "Production Location" },
  { id: "malaysia", name: "Malaysia", country: "MY", coordinates: [101.9758, 4.2105], role: "Production", detail: "Production Location" },
  { id: "hong-kong", name: "Hong Kong", country: "HK", coordinates: [114.1694, 22.3193], role: "Production", detail: "Production Location" },
  { id: "indonesia", name: "Indonesia", country: "ID", coordinates: [113.9213, -0.7893], role: "Production", detail: "Production Location" },
  { id: "thailand", name: "Thailand", country: "TH", coordinates: [100.9925, 15.8700], role: "Production", detail: "Production Location" },
  { id: "china", name: "China", country: "CN", coordinates: [104.1954, 35.8617], role: "Production", detail: "Production Location" },
  { id: "japan", name: "Japan", country: "JP", coordinates: [138.2529, 36.2048], role: "Production", detail: "Production Location" },
  { id: "nepal", name: "Nepal", country: "NP", coordinates: [84.1240, 28.3949], role: "Production", detail: "Production Location" },
  { id: "bhutan", name: "Bhutan", country: "BT", coordinates: [90.4336, 27.5142], role: "Production", detail: "Production Location" },
  { id: "fiji", name: "Fiji", country: "FJ", coordinates: [179.4144, -16.5782], role: "Production", detail: "Production Location" },
  { id: "vanuatu", name: "Vanuatu", country: "VU", coordinates: [167.9544, -15.3767], role: "Production", detail: "Production Location" },
  { id: "papua-new-guinea", name: "Papua New Guinea", country: "PG", coordinates: [143.9555, -6.3150], role: "Production", detail: "Production Location" },
  { id: "pakistan", name: "Pakistan", country: "PK", coordinates: [69.3451, 30.3753], role: "Production", detail: "Production Location" },
  { id: "qatar", name: "Qatar", country: "QA", coordinates: [51.1839, 25.3548], role: "Production", detail: "Production Location" },
  { id: "oman", name: "Oman", country: "OM", coordinates: [55.9233, 21.5126], role: "Production", detail: "Production Location" },
  { id: "usa", name: "USA", country: "US", coordinates: [-95.7129, 37.0902], role: "Production", detail: "Production Location" },
  { id: "brazil", name: "Brazil", country: "BR", coordinates: [-51.9253, -14.2350], role: "Production", detail: "Production Location" },
  { id: "argentina", name: "Argentina", country: "AR", coordinates: [-63.6167, -38.4161], role: "Production", detail: "Production Location" },
  { id: "kenya", name: "Kenya", country: "KE", coordinates: [37.9062, -0.0236], role: "Production", detail: "Production Location" },
  { id: "uganda", name: "Uganda", country: "UG", coordinates: [32.2903, 1.3733], role: "Production", detail: "Production Location" },
  { id: "nigeria", name: "Nigeria", country: "NG", coordinates: [8.6753, 9.0820], role: "Production", detail: "Production Location" },
  { id: "rwanda", name: "Rwanda", country: "RW", coordinates: [29.8739, -1.9403], role: "Production", detail: "Production Location" },
  { id: "namibia", name: "Namibia", country: "NA", coordinates: [18.4904, -22.9576], role: "Production", detail: "Production Location" },
  { id: "south-africa", name: "South Africa", country: "ZA", coordinates: [22.9375, -30.5595], role: "Production", detail: "Production Location" },
  { id: "germany", name: "Germany", country: "DE", coordinates: [10.4515, 51.1657], role: "Production", detail: "Production Location" },
  { id: "spain", name: "Spain", country: "ES", coordinates: [-3.7492, 40.4637], role: "Production", detail: "Production Location" },
  { id: "france", name: "France", country: "FR", coordinates: [2.2137, 46.2276], role: "Production", detail: "Production Location" },
  { id: "greece", name: "Greece", country: "GR", coordinates: [21.8243, 39.0742], role: "Production", detail: "Production Location" },
  { id: "finland", name: "Finland", country: "FI", coordinates: [25.7482, 61.9241], role: "Production", detail: "Production Location" },
  { id: "belgium", name: "Belgium", country: "BE", coordinates: [4.4699, 50.5039], role: "Production", detail: "Production Location" },
  { id: "hungary", name: "Hungary", country: "HU", coordinates: [19.5033, 47.1625], role: "Production", detail: "Production Location" },
  { id: "czech-republic", name: "Czech Republic", country: "CZ", coordinates: [15.4730, 49.8175], role: "Production", detail: "Production Location" },
  { id: "netherlands", name: "Netherlands", country: "NL", coordinates: [5.2913, 52.1326], role: "Production", detail: "Production Location" },
  { id: "italy", name: "Italy", country: "IT", coordinates: [12.5674, 41.8719], role: "Production", detail: "Production Location" },
  { id: "bahrain", name: "Bahrain", country: "BH", coordinates: [50.5577, 26.0667], role: "Production", detail: "Production Location" },
  { id: "barbados", name: "Barbados", country: "BB", coordinates: [-59.5432, 13.1939], role: "Production", detail: "Production Location" },
  { id: "antigua", name: "Antigua", country: "AG", coordinates: [-61.7964, 17.0608], role: "Production", detail: "Production Location" },
  { id: "jamaica", name: "Jamaica", country: "JM", coordinates: [-77.2975, 18.1096], role: "Production", detail: "Production Location" },
  { id: "canada", name: "Canada", country: "CA", coordinates: [-106.3468, 56.1304], role: "Production", detail: "Production Location" },
  { id: "denmark", name: "Denmark", country: "DK", coordinates: [9.5018, 56.2639], role: "Production", detail: "Production Location" },
  { id: "new-zealand", name: "New Zealand", country: "NZ", coordinates: [174.7633, -36.8485], role: "Production", detail: "Filming location & regional production partner." },
  { id: "uae", name: "UAE", country: "AE", coordinates: [55.2708, 25.2048], role: "Production", detail: "MENA region production & client access." },
];

// Connection lines from Singapore HQ to all other hubs
const connections = hubs
  .filter((l) => l.id !== "singapore")
  .map((l) => ({
    from: [103.8198, 1.3521] as [number, number],
    to: l.coordinates,
    targetId: l.id,
  }));

export default function GlobalMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [viewMode, setViewMode] = useState<"hubs" | "locations">("hubs");
  const { theme } = useTheme();

  const locations = viewMode === "hubs" ? hubs : productionLocations;

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
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

        {/* Pill Toggle */}
        <div className="flex justify-center mb-12">
          <div className={`relative flex p-1.5 rounded-full border border-white/10 ${isDark ? 'bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' : 'bg-black/5 shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)]'} backdrop-blur-md`}>
            {[
              { id: "hubs", label: "Production Hubs" },
              { id: "locations", label: "Production Locations" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setViewMode(tab.id as "hubs" | "locations"); setActiveLocation(null); }}
                className={`relative px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors z-10 ${
                  viewMode === tab.id 
                    ? "text-white" 
                    : "text-muted hover:text-foreground"
                }`}
              >
                {viewMode === tab.id && (
                  <motion.div
                    layoutId="activePillBg"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_4px_12px_rgba(241,111,36,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
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

            {/* Animated connection lines (Hubs only) */}
            {viewMode === "hubs" && connections.map((conn, i) => (
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
                onMouseEnter={() => setActiveLocation(loc)}
                onMouseLeave={() => setActiveLocation(null)}
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
                  {/* Label - Only shown for hubs to prevent overlap */}
                  {viewMode === "hubs" && (
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
                  )}
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

        </div>
      </div>
    </section>
  );
}
