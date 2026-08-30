"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const STORAGE_KEY = "cp_has_visited";

const phrases = [
  "TEN YEARS.",
  "SIX CONTINENTS.",
  "STORIES THAT\u00A0MOVE.",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timings = [600, 600, 800, 900];
    let t: ReturnType<typeof setTimeout>;

    const advance = (current: number) => {
      t = setTimeout(() => {
        const next = current + 1;
        setStep(next);
        if (next < 4) advance(next);
        else {
          setTimeout(onComplete, 900);
        }
      }, timings[current]);
    };

    advance(0);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 2 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/[0.08] blur-[120px]" />
      </motion.div>

      <AnimatePresence mode="wait">
        {step < 3 && (
          <motion.div
            key={`phrase-${step}`}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
          >
            <p
              className="font-serif text-[clamp(2.8rem,10vw,8rem)] tracking-tighter leading-[0.88] text-center select-none"
              style={{ color: step === 2 ? "var(--color-primary)" : "var(--color-foreground)" }}
            >
              {phrases[step]}
            </p>
            <motion.div
              className="mt-6 h-[1px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "clamp(60px, 12vw, 120px)" }}
              transition={{ duration: 0.35, delay: 0.1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {step === 3 && (
          <motion.div
            key="logo-reveal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <motion.div layoutId="brand-logo" className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/logo.png"
                alt="Coromandel Productions"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl tracking-tighter leading-none text-foreground">
                COROMANDEL
              </span>
              <span className="text-[9px] uppercase tracking-[0.55em] text-muted font-black mt-2">
                PRODUCTIONS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem(STORAGE_KEY);
    if (!alreadyVisited) {
      setShow(true);
      localStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.style.overflow = "hidden";
    } else {
      setDone(true);
    }
  }, []);

  const handleComplete = () => {
    setDone(true);
    setShow(false);
    document.documentElement.style.overflow = "";
  };

  return (
    <>
      <AnimatePresence>
        {show && !done && (
          <Preloader key="preloader" onComplete={handleComplete} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done || !show ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
