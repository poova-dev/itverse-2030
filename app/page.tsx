"use client";

import { useState, useCallback, useEffect } from "react";
import { IntroAnimation } from "@/components/home/IntroAnimation";
import { Hero } from "@/components/home/Hero";
import {
  WhyShiftMatters,
  TimelinePreview,
  CollaborationPreview,
  RolesPreview,
  SkillsPreview,
  ResearchSignals,
  FinalCTA,
} from "@/components/home/HomeSections";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("intro") === "true" || urlParams.get("intro") === "1") {
          setShowIntro(true);
          return;
        }
        const seen = sessionStorage.getItem("itverse_intro_seen");
        if (!seen) {
          setShowIntro(true);
        }
      } catch {
        // Fallback
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    try {
      sessionStorage.setItem("itverse_intro_seen", "true");
    } catch { }
  }, []);

  useEffect(() => {
    const handleReplay = () => {
      setShowIntro(true);
    };
    window.addEventListener("itverse-replay-intro", handleReplay);
    return () => window.removeEventListener("itverse-replay-intro", handleReplay);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className="w-full">
        <Hero />
        <WhyShiftMatters />
        <TimelinePreview />
        <CollaborationPreview />
        <RolesPreview />
        <SkillsPreview />
        <ResearchSignals />
        <FinalCTA />
      </div>
    </>
  );
}
