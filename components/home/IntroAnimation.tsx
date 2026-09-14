"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { year: "2026", signal: "Human + Tools", detail: "Traditional craft, IDE copilots & manual pipelines" },
  { year: "2027", signal: "AI-Assisted Workflows", detail: "Context-aware automated PRs & refactoring" },
  { year: "2028", signal: "Intelligent Autonomous Agents", detail: "Multi-step goal execution & automated triage" },
  { year: "2029", signal: "Human + Agent Collaboration", detail: "Team orchestration & specification-first design" },
  { year: "2030", signal: "AI-Integrated Organizations", detail: "Self-healing distributed systems & governance" },
  { year: "2030+", signal: "Human Judgment + Intelligent Systems", detail: "Strategic intent & human accountability" },
];

// ============================================================================
// TIMING CONFIGURATION (ms per step & exit pause)
// ============================================================================
export const DEFAULT_STEP_DURATION = 1700;
export const DEFAULT_PAUSE_BEFORE_EXIT = 1400;
// ============================================================================

interface IntroAnimationProps {
  onComplete: () => void;
  stepDuration?: number;
  pauseBeforeExit?: number;
}

export function IntroAnimation({
  onComplete,
  stepDuration = DEFAULT_STEP_DURATION,
  pauseBeforeExit = DEFAULT_PAUSE_BEFORE_EXIT,
}: IntroAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  // Skip immediately only if user explicitly prefers reduced motion
  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        onComplete();
        return;
      }
    } catch { }

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 700);
          }, pauseBeforeExit);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete, stepDuration, pauseBeforeExit]);

  const handleSkip = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 300);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden select-none"
          aria-live="polite"
          aria-label="ITVerse 2030+ Opening Sequence"
        >
          {/* Subtle ambient documentary glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#2563EB]/15 blur-[120px] pointer-events-none" />

          {/* Documentary Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/60 mb-8"
          >
            The Evolution of Technical Work
          </motion.div>

          {/* Year display */}
          <div className="relative h-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 16, scale: 0.97, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight font-mono">
                  {steps[currentStep].year}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Signal text */}
          <div className="mt-4 h-8 flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                className="text-base sm:text-lg text-white font-semibold tracking-wide text-center"
              >
                {steps[currentStep].signal}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Sub detail */}
          <div className="mt-2 h-6 flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="text-xs sm:text-sm text-slate-400 text-center font-normal"
              >
                {steps[currentStep].detail}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Timeline progress bar */}
          <div className="mt-12 w-64 sm:w-80 max-w-[85vw]">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#7C3AED] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex justify-between mt-3 px-0.5">
              {steps.map((step, i) => (
                <div
                  key={step.year}
                  className={`transition-all duration-300 ${i <= currentStep ? "scale-110" : "scale-90 opacity-40"}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      i <= currentStep ? "bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)]" : "bg-white/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Skip button */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-white/50 hover:text-white transition-colors tracking-wide uppercase px-3 py-1.5 rounded-md hover:bg-white/10 cursor-pointer border border-white/10"
          >
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
