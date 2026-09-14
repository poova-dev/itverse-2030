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
const STEP_DURATION = 450;
const PAUSE_BEFORE_EXIT = 300;

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
            setTimeout(onComplete, 400);
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
    setTimeout(onComplete, 200);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Year display */}
          <div className="relative h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-sm md:text-base text-white/70 tracking-wide"
              >
                {steps[currentStep].signal}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Timeline bar */}
          <div className="mt-12 w-64 md:w-80">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, i) => (
                <div
                  key={step.year}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                    i <= currentStep ? "bg-[#2563EB]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide uppercase"
          >
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
