"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { simulatorQuestions } from "@/data/simulator-questions";
import { emptyScores, calculateReadinessScore, type ScoreMap } from "@/lib/scoring";
import { getRecommendedRoles, getStrengths, getGaps, getLearningPath } from "@/lib/recommendations";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SimulatorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [scores, setScores] = useState<ScoreMap>({ ...emptyScores });
  const [finished, setFinished] = useState(false);

  const question = simulatorQuestions[step];
  const totalSteps = simulatorQuestions.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSelect = useCallback(
    (value: string, optionScores?: Record<string, number>) => {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
      if (optionScores) {
        setScores((prev) => {
          const next = { ...prev };
          for (const [key, val] of Object.entries(optionScores)) {
            next[key as keyof ScoreMap] = (next[key as keyof ScoreMap] || 0) + val;
          }
          return next;
        });
      }
    },
    [question],
  );

  const handleScale = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
      if (question.scaleConfig) {
        const s = { ...scores };
        for (const dim of question.scaleConfig.dimensions) {
          s[dim as keyof ScoreMap] = value;
        }
        setScores(s);
      }
    },
    [question, scores],
  );

  const handleNext = useCallback(() => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Finish
      try {
        localStorage.setItem("itverse-scores", JSON.stringify(scores));
      } catch {}
      setFinished(true);
    }
  }, [step, totalSteps, scores]);

  const handleBack = useCallback(() => {
    if (step > 0) setStep(step - 1);
  }, [step]);

  const handleRestart = useCallback(() => {
    setStep(0);
    setAnswers({});
    setScores({ ...emptyScores });
    setFinished(false);
  }, []);

  const currentAnswer = answers[question?.id];
  const canProceed = currentAnswer !== undefined;

  // Results
  const readinessScore = calculateReadinessScore(scores);
  const recommendedRoles = getRecommendedRoles(scores);
  const strengths = getStrengths(scores);
  const gaps = getGaps(scores);
  const learningPath = getLearningPath(gaps);

  if (finished) {
    return (
      <>
        <PageHeader
          eyebrow="Your Results"
          title="Future Readiness Profile"
          subtitle="Based on your responses, here is your personalized readiness assessment for IT 2030+."
        />
        <SectionWrapper className="pb-20 md:pb-28">
          <div className="container-default max-w-3xl">
            {/* Score */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex flex-col items-center"
              >
                <div className="relative w-36 h-36 mb-4">
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
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-text-primary">{readinessScore}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-text-primary">Future Readiness Score</p>
                <p className="text-xs text-text-tertiary mt-1">out of 100</p>
              </motion.div>
            </div>

            {/* Top recommended role */}
            {recommendedRoles[0] && (
              <div className="card-elevated p-6 mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-2">
                  Top Recommended Role
                </p>
                <h3 className="text-xl font-bold">{recommendedRoles[0].title}</h3>
                <p className="text-sm text-text-secondary mt-2">{recommendedRoles[0].reason}</p>
                <p className="text-xs text-text-tertiary mt-2">
                  Match score: {recommendedRoles[0].matchScore}%
                </p>
              </div>
            )}

            {/* Other matches */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {recommendedRoles.slice(1, 4).map((role) => (
                <div key={role.roleId} className="card-elevated p-4">
                  <p className="text-sm font-semibold text-text-primary">{role.title}</p>
                  <p className="text-xs text-text-tertiary mt-1">{role.matchScore}% match</p>
                </div>
              ))}
            </div>

            {/* Strengths & Gaps */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="card-elevated p-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-success mb-3">
                  Your Strengths
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

            {/* Learning Path */}
            {learningPath.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-text-primary mb-4">Recommended Next Steps</h4>
                <div className="space-y-3">
                  {learningPath.map((step, i) => (
                    <div key={step.title} className="card-elevated p-4 flex gap-4">
                      <div className="w-7 h-7 rounded-lg bg-accent-light text-accent flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{step.title}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/readiness"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                View Detailed Readiness
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text-secondary bg-white border border-border hover:border-gray-300 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Assessment
              </button>
            </div>
          </div>
        </SectionWrapper>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Career Simulator"
        title="Where Do You Fit in IT 2030?"
        subtitle="Answer a few questions to discover your future readiness score and recommended career direction."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default max-w-2xl">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs text-text-tertiary mb-2">
              <span>Question {step + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
                {question.question}
              </h2>

              {/* Single select */}
              {question.type === "single" && question.options && (
                <div className="space-y-2">
                  {question.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value, opt.scores)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        currentAnswer === opt.value
                          ? "border-accent bg-accent-light text-accent"
                          : "border-border bg-white text-text-secondary hover:border-gray-300 hover:text-text-primary"
                      }`}
                    >
                      <span className="text-sm font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Scale */}
              {question.type === "scale" && question.scaleConfig && (
                <div className="space-y-2">
                  {question.scaleConfig.labels.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => handleScale(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                        currentAnswer === i
                          ? "border-accent bg-accent-light text-accent"
                          : "border-border bg-white text-text-secondary hover:border-gray-300 hover:text-text-primary"
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          borderColor: currentAnswer === i ? "#2563EB" : "#E2E8F0",
                          color: currentAnswer === i ? "#2563EB" : "#94A3B8",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {step === totalSteps - 1 ? "See Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
