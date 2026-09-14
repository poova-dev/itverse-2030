"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { type ScoreMap, calculateReadinessScore, getReadinessCategories } from "@/lib/scoring";
import { getRecommendedRoles, getStrengths, getGaps, getLearningPath } from "@/lib/recommendations";
import { personaRoadmaps } from "@/data/roadmaps";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ReadinessPage() {
  const storedJson = useSyncExternalStore(
    emptySubscribe,
    () => {
      try {
        return localStorage.getItem("itverse-scores");
      } catch {
        return null;
      }
    },
    () => null
  );

  const scores: ScoreMap | null = storedJson
    ? (() => {
        try {
          return JSON.parse(storedJson);
        } catch {
          return null;
        }
      })()
    : null;

  if (!scores) {
    return (
      <>
        <PageHeader
          eyebrow="Readiness"
          title="Are You Ready for 2030?"
          subtitle="Explore dynamic career roadmaps or take the career simulator for a personalized readiness score."
        />
        <SectionWrapper className="pb-20 md:pb-28">
          <div className="container-default">
            <div className="card-elevated p-8 max-w-md mx-auto text-center mb-12">
              <p className="text-sm text-text-secondary mb-6">
                Complete the career simulator to generate your personalized Future Readiness Score and tailored role recommendations.
              </p>
              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                Take the Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <RoadmapsSection />
          </div>
        </SectionWrapper>
      </>
    );
  }

  const readinessScore = calculateReadinessScore(scores);
  const categories = getReadinessCategories(scores);
  const recommendedRoles = getRecommendedRoles(scores);
  const strengths = getStrengths(scores);
  const gaps = getGaps(scores);
  const learningPath = getLearningPath(gaps);

  return (
    <>
      <PageHeader
        eyebrow="Your Readiness"
        title="Are You Ready for 2030?"
        subtitle="Your personalized readiness assessment based on the career simulator."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default max-w-4xl">
          {/* Score + Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Big score */}
            <div className="card-elevated p-6 text-center">
              <div className="relative w-28 h-28 mx-auto mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - readinessScore / 100) }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{readinessScore}</span>
                </div>
              </div>
              <p className="text-sm font-semibold">Future Readiness</p>
              <p className="text-xs text-text-tertiary">out of 100</p>
            </div>

            {/* Category breakdown */}
            <div className="md:col-span-2 card-elevated p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-4">Category Breakdown</h3>
              <div className="space-y-3">
                {categories.map((cat) => {
                  const pct = Math.round((cat.score / cat.maxScore) * 100);
                  return (
                    <div key={cat.key}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-text-secondary">{cat.label}</span>
                        <span className="text-text-tertiary">{pct}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: pct >= 60 ? "#16A34A" : pct >= 30 ? "#F59E0B" : "#EF4444",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Profile summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="card-elevated p-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-success mb-3">
                Strengths
              </h4>
              {strengths.length > 0 ? (
                <ul className="space-y-1.5">
                  {strengths.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-text-tertiary">Complete more questions to identify strengths.</p>
              )}
            </div>
            <div className="card-elevated p-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-warning mb-3">
                Areas to Develop
              </h4>
              {gaps.length > 0 ? (
                <ul className="space-y-1.5">
                  {gaps.map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-text-tertiary">Strong across all key areas!</p>
              )}
            </div>
          </div>

          {/* Recommended roles */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Recommended Roles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {recommendedRoles.slice(0, 4).map((role, i) => (
                <div key={role.roleId} className="card-elevated p-4">
                  {i === 0 && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1 block">
                      Best Match
                    </span>
                  )}
                  <p className="text-sm font-semibold text-text-primary">{role.title}</p>
                  <p className="text-xs text-text-tertiary mt-1">{role.matchScore}% match</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning path */}
          {learningPath.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-text-primary mb-4">Recommended Next Steps</h3>
              <div className="space-y-3">
                {learningPath.map((s, i) => (
                  <div key={s.title} className="card-elevated p-4 flex gap-4">
                    <div className="w-7 h-7 rounded-lg bg-accent-light text-accent flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Persona Roadmaps */}
          <RoadmapsSection />

          {/* Retake */}
          <div className="text-center mt-12">
            <Link
              href="/simulator"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              Retake the assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function RoadmapsSection() {
  const [activePersonaId, setActivePersonaId] = useState<"student" | "mid-level" | "switcher">("student");
  const activePersona = personaRoadmaps.find((p) => p.id === activePersonaId) || personaRoadmaps[0];

  return (
    <div className="mt-12 text-left">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent block mb-1">
          Career Readiness Framework
        </span>
        <h3 className="text-xl font-bold tracking-tight text-text-primary">
          Dynamic Skill Roadmaps by Persona
        </h3>
        <p className="text-xs md:text-sm text-text-secondary mt-1">
          Explore proven phase-by-phase learning paths for students, experienced developers, and career switchers:
        </p>
      </div>

      {/* Persona Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {personaRoadmaps.map((persona) => (
          <button
            key={persona.id}
            onClick={() => setActivePersonaId(persona.id)}
            className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
              activePersonaId === persona.id
                ? "bg-accent text-white shadow-sm"
                : "bg-white border border-border text-text-secondary hover:text-text-primary hover:border-gray-300"
            }`}
          >
            {persona.title}
          </button>
        ))}
      </div>

      {/* Active Persona Card */}
      <div className="card-elevated p-6 md:p-8">
        <div className="mb-6 pb-4 border-b border-border-light">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            {activePersona.tagline}
          </span>
          <h4 className="text-base md:text-lg font-bold text-text-primary mt-0.5">{activePersona.title}</h4>
          <p className="text-xs md:text-sm text-text-secondary mt-1 leading-relaxed">
            {activePersona.description}
          </p>
        </div>

        {/* Phase Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {activePersona.phases.map((phase, idx) => (
            <div
              key={phase.phase}
              className="p-4 rounded-xl bg-gray-50/70 border border-border-light flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-[11px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
                    {phase.phase}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-text-primary mb-2">{phase.focus}</h5>
                <ul className="space-y-1.5 mb-4">
                  {phase.milestones.map((m) => (
                    <li key={m} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200/60">
                {phase.keyTools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-medium bg-white text-text-secondary border border-border-light rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
