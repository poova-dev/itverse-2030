"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { timelineData } from "@/data/timeline";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timelineData[activeIndex];

  return (
    <>
      <PageHeader
        eyebrow="Timeline"
        title="The Road to 2030"
        subtitle="A scenario-based timeline of how IT work may evolve. These are directional markers based on current research and industry signals — not guaranteed predictions."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-wide">
          {/* Year selector — horizontal on all screens */}
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
            {timelineData.map((entry, i) => (
              <button
                key={entry.year}
                onClick={() => setActiveIndex(i)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
                  activeIndex === i
                    ? "bg-accent text-white shadow-sm"
                    : "bg-white border border-border text-text-secondary hover:text-text-primary hover:border-gray-300"
                }`}
              >
                {entry.year}
              </button>
            ))}
          </div>

          {/* Active timeline entry */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl md:text-4xl font-bold font-mono text-accent">{active.year}</span>
                <Badge type="scenario" label={active.label} />
              </div>

              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                {active.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-elevated p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                    Technology Trend
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{active.techTrend}</p>
                </div>
                <div className="card-elevated p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-secondary mb-3">
                    Workplace Impact
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{active.workplaceImpact}</p>
                </div>
                <div className="card-elevated p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-future mb-3">
                    Developer Impact
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{active.developerImpact}</p>
                </div>
                <div className="card-elevated p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary mb-3">
                    Skills Impact
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{active.skillsImpact}</p>
                </div>
              </div>

              {/* Research reference */}
              <div className="mt-6 p-4 bg-white border border-border-light rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Badge type="evidence" label="Research Reference" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{active.researchRef}</p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={() => setActiveIndex((i) => Math.min(timelineData.length - 1, i + 1))}
                  disabled={activeIndex === timelineData.length - 1}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </>
  );
}
