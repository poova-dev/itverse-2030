"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { researchData } from "@/data/research";
import { ExternalLink } from "lucide-react";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "evidence", label: "Evidence" },
  { id: "forecast", label: "Forecast" },
  { id: "scenario", label: "Scenario" },
] as const;

export default function ResearchPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? researchData : researchData.filter((r) => r.type === filter);

  return (
    <>
      <PageHeader
        eyebrow="Research & Signals"
        title="Research & Signals"
        subtitle="The evidence, forecasts, and research behind this project. Every claim is grounded in credible sources — and clearly distinguished by type."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          {/* Methodology note */}
          <div className="max-w-2xl mb-10 p-5 rounded-xl bg-white border border-border-light">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              How we distinguish sources
            </h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p className="flex items-center gap-2">
                <Badge type="evidence" /> — Observed trends supported by data and current practice.
              </p>
              <p className="flex items-center gap-2">
                <Badge type="forecast" /> — Projections from credible research organizations.
              </p>
              <p className="flex items-center gap-2">
                <Badge type="scenario" /> — Conceptual explorations by this project, inspired by trends.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  filter === opt.id
                    ? "bg-accent text-white"
                    : "bg-white border border-border text-text-secondary hover:text-text-primary hover:border-gray-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Research items */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="card-elevated p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge type={item.type} />
                        <span className="text-xs text-text-tertiary">{item.year}</span>
                      </div>
                      <h3 className="text-base font-semibold text-text-primary">{item.organization}</h3>
                      <p className="text-sm text-text-tertiary mt-0.5">{item.report}</p>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {item.keyFinding}
                      </p>
                      <div className="mt-3 p-3 rounded-lg bg-bg-primary">
                        <p className="text-xs font-semibold text-text-tertiary uppercase tracking-[0.1em] mb-1">
                          Why it matters
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {item.whyItMatters}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-accent bg-accent-light hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        Source
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
