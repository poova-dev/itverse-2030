"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { ArrowDown } from "lucide-react";

const todayWorkflow = [
  { step: "Requirement", description: "Business stakeholder defines what needs to be built" },
  { step: "Coding", description: "Developer writes implementation from scratch" },
  { step: "Testing", description: "Manual and automated test suites run" },
  { step: "Deployment", description: "Operations team deploys to production" },
  { step: "Monitoring", description: "Dashboards and alerts track system health" },
];

const futureWorkflow = [
  { step: "Problem Framing", description: "Human defines the problem, context and constraints" },
  { step: "Architecture", description: "Human designs system structure with AI assistance" },
  { step: "AI-Assisted Implementation", description: "AI agents generate code following approved patterns" },
  { step: "Automated Testing", description: "AI generates and runs comprehensive test suites" },
  { step: "Security Validation", description: "Automated security scanning and compliance checks" },
  { step: "Human Approval", description: "Developer reviews, validates, and authorizes changes" },
  { step: "Continuous Optimization", description: "AI monitors and suggests improvements over time" },
];

export default function ShiftPage() {
  const [era, setEra] = useState<"today" | "future">("today");
  const workflow = era === "today" ? todayWorkflow : futureWorkflow;

  return (
    <>
      <PageHeader
        eyebrow="The Shift"
        title="From Software Developer to Systems Orchestrator"
        subtitle="Technical work is evolving from writing every line of code toward designing, orchestrating, and supervising intelligent systems. This is the emerging shape of that transition."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white border border-border rounded-xl p-1">
              <button
                onClick={() => setEra("today")}
                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  era === "today"
                    ? "bg-accent text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                2026 — Today
              </button>
              <button
                onClick={() => setEra("future")}
                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  era === "future"
                    ? "bg-accent-future text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                2030+ — Future
              </button>
            </div>
          </div>

          {/* Workflow visualization */}
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Badge type={era === "today" ? "evidence" : "scenario"} />
              <span className="text-xs text-text-tertiary">
                {era === "today" ? "Current observed workflow" : "Scenario — possible future workflow"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={era}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-0"
              >
                {workflow.map((item, i) => (
                  <div key={item.step}>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="card-elevated p-4 flex items-start gap-4"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 ${
                          era === "today" ? "bg-accent" : "bg-accent-future"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{item.step}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{item.description}</p>
                      </div>
                    </motion.div>
                    {i < workflow.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-3.5 h-3.5 text-text-tertiary" />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Explanation */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold tracking-tight mb-4">What changes?</h3>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The fundamental shift is not about removing developers from the process. It is about
                changing where human expertise is most critical. In the current model, developers
                spend significant time on implementation. In the emerging model, human value
                concentrates at the boundaries — problem definition, architecture, review, and
                decision-making.
              </p>
              <p>
                Research from McKinsey and the World Economic Forum indicates that AI is most
                effective at automating well-defined, repetitive tasks. The creative, strategic,
                and judgment-intensive aspects of software development remain distinctly human.
              </p>
              <p className="text-xs text-text-tertiary italic">
                Note: This represents one possible trajectory based on current industry signals.
                Actual outcomes will depend on technology development, organizational adoption,
                and regulatory frameworks.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
