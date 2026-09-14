"use client";

import { useState, useCallback } from "react";
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
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className={introComplete ? "animate-fade-in" : "opacity-0"}>
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
