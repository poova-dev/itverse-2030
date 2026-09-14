"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { year: "2026", signal: "Human + Tools" },
  { year: "2027", signal: "AI-assisted workflows" },
  { year: "2028", signal: "AI agents" },
  { year: "2029", signal: "Human + Agent collaboration" },
  { year: "2030", signal: "AI-integrated organizations" },
  { year: "2030+", signal: "Human judgment + intelligent systems" },
];

const STORAGE_KEY = "itverse-intro-seen";
const STEP_DURATION = 1150;
const PAUSE_BEFORE_EXIT = 900;

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (prefersReducedMotion || seen) {
        onComplete();
        return;
      }
    } catch {}

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem(STORAGE_KEY, "true");
            setTimeout(onComplete, 700);
          }, PAUSE_BEFORE_EXIT);
          return prev;
        }
        return prev + 1;
      });
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
    setTimeout(onComplete, 300);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle ambient glow behind year */}
          <div className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          {/* Year display */}
          <div className="relative h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20, scale: 0.96, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, scale: 1.02, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-bold text-white tracking-tight font-mono">
                  {steps[currentStep].year}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Signal text */}
          <div className="mt-6 h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.85, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-sm md:text-base text-white/80 tracking-wide font-medium"
              >
                {steps[currentStep].signal}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Timeline bar */}
          <div className="mt-12 w-64 md:w-80">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex justify-between mt-3 px-0.5">
              {steps.map((step, i) => (
                <div
                  key={step.year}
                  className={`relative transition-all duration-300 ${
                    i <= currentStep ? "scale-110" : "scale-100"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      i <= currentStep ? "bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" : "bg-white/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-white/40 hover:text-white/80 transition-colors tracking-wide uppercase px-3 py-1.5 rounded-md hover:bg-white/5 cursor-pointer"
          >
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
