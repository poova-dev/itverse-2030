"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Compass, Layers } from "lucide-react";

interface YearPhase {
  year: string;
  stage: string;
  sub: string;
}

const yearPhases: YearPhase[] = [
  { year: "2026", stage: "Human + Tools", sub: "Individual software craft & IDE copilots" },
  { year: "2027", stage: "AI-Assisted Work", sub: "Context-aware automated PRs & refactoring" },
  { year: "2028", stage: "Intelligent Agents", sub: "Autonomous multi-step execution & testing" },
  { year: "2029", stage: "Human + Agent Collaboration", sub: "Team orchestration & specification-first design" },
  { year: "2030", stage: "AI-Integrated Teams", sub: "Self-healing distributed systems & governance" },
  { year: "2030+", stage: "Human Judgment + Intelligent Systems", sub: "Strategic direction & moral accountability" },
];

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const [activeYearIndex, setActiveYearIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    try {
      const savedYear = localStorage.getItem("itverse_last_year");
      if (savedYear) {
        const foundIdx = yearPhases.findIndex((p) => p.year === savedYear);
        if (foundIdx !== -1) return foundIdx;
      }
    } catch {
      // LocalStorage fallback
    }
    return 0;
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  // Record intro seen in LocalStorage on mount
  useEffect(() => {
    try {
      localStorage.setItem("itverse_intro_seen", "true");
    } catch {
      // LocalStorage fallback
    }
  }, []);

  // Year progression loop (documentary acceleration: 2026 -> 2027 -> 2028 -> 2029 -> 2030 -> 2030+)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveYearIndex((prev) => {
        const next = (prev + 1) % yearPhases.length;
        try {
          localStorage.setItem("itverse_last_year", yearPhases[next].year);
        } catch { }
        return next;
      });
    }, 4200);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const currentPhase = yearPhases[activeYearIndex];

  return (
    <section
      aria-label="ITVerse 2030+ Hero Section"
      className="relative min-h-screen overflow-hidden bg-[#F8FAFC] flex flex-col justify-between"
    >
      {/* 1. Fullscreen Background Video Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Fallback placeholder before streaming starts */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-slate-900/10 animate-pulse"
            aria-hidden="true"
          />
        )}

        {/* Cinematic Neutral Overlays for High-Contrast Text Legibility */}
        {/* Desktop: gradient fade leaving video prominent on the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/95 via-[#F8FAFC]/80 to-transparent hidden md:block"
          aria-hidden="true"
        />
        {/* Mobile: slightly denser scrim to guarantee WCAG AAA text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/85 to-[#F8FAFC]/90 md:hidden"
          aria-hidden="true"
        />
        {/* Bottom edge subtle fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#F8FAFC] to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* 2. Main Hero Foreground Content */}
      <div className="relative z-10 container-wide pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 sm:mb-8 transition-all hover:border-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              THE FUTURE OF IT · 2030+
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[11px] text-[#475569] font-medium hidden sm:inline">
              Living Research Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.06]">
            The way we build technology is changing.
          </h1>

          {/* Supporting Statement */}
          <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed font-normal">
            AI will not simply change what developers build. It will change how teams think, collaborate, execute and make decisions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/shift"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:translate-y-[1px]"
            >
              <span>Explore 2030</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/shift"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-[#0F172A] bg-white/90 backdrop-blur-sm border border-[#E2E8F0] hover:bg-white hover:border-slate-300 rounded-lg transition-all duration-200 active:translate-y-[1px]"
            >
              <Layers className="w-4 h-4 text-[#475569]" />
              <span>Understand the Shift</span>
            </Link>
          </div>

          {/* Human-Centered Editorial Message */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0]/70 flex flex-col gap-1.5 text-xs sm:text-sm text-[#475569]">
            <p className="font-medium text-[#0F172A]">
              The future is not humans vs. AI. It is humans working differently with intelligent systems.
            </p>
            <p className="text-xs text-[#475569]/80 italic">
              2030 is not a destination. It is a direction.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Hero Information Strip (Bottom Horizontal Evolution Bar) */}
      <div className="relative z-10 border-t border-[#E2E8F0] bg-white/80 backdrop-blur-md">
        <div className="container-wide py-4 sm:py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Live Year Evolution Stages */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
                {yearPhases.map((phase, idx) => {
                  const isActive = idx === activeYearIndex;
                  return (
                    <button
                      key={phase.year}
                      onClick={() => {
                        setActiveYearIndex(idx);
                        try {
                          localStorage.setItem("itverse_last_year", phase.year);
                        } catch { }
                      }}
                      className={`group relative text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                        isActive
                          ? "bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/30 shadow-xs font-semibold"
                          : "text-[#475569] hover:bg-slate-100 hover:text-[#0F172A] border border-transparent"
                      }`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`font-mono font-bold ${isActive ? "text-[#2563EB]" : "text-[#0F172A]"}`}>
                          {phase.year}
                        </span>
                        <span className="hidden xl:inline text-[11px] opacity-75 font-medium">
                          {phase.stage}
                        </span>
                      </div>
                      {/* Active indicator underline */}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#2563EB] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Evolution Detail & Video Controls */}
            <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 pt-2.5 lg:pt-0 border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                <span className="text-xs font-medium text-[#0F172A]">
                  {currentPhase.year}: <span className="text-[#475569]">{currentPhase.stage}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline"
                >
                  <span>Timeline</span>
                  <Compass className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={toggleVideoPlayback}
                  aria-label={isPlaying ? "Pause background documentary video" : "Play background documentary video"}
                  className="p-1.5 rounded-md hover:bg-slate-100 text-[#475569] hover:text-[#0F172A] transition-colors"
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
