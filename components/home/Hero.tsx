"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const workflowSteps = [
  { label: "Human", sub: "Define the problem", color: "#2563EB" },
  { label: "AI / Agent", sub: "Analyze & implement", color: "#7C3AED" },
  { label: "Execution", sub: "Automated pipeline", color: "#14B8A6" },
  { label: "Human Review", sub: "Validate & decide", color: "#2563EB" },
  { label: "Outcome", sub: "Shipped with confidence", color: "#16A34A" },
];

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-default relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              The Future of IT
            </p>
            <h1 className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold tracking-tight leading-[1.15]">
              The Future of IT Is Not About Replacing People.
            </h1>
            <p className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-text-secondary leading-[1.2]">
              It&apos;s About Changing How People Work.
            </p>
            <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
              AI, automation, cloud computing and intelligent systems are changing the structure of
              technical work. Explore how roles, workflows and skills may evolve toward 2030 and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                Explore 2030
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shift"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text-primary bg-white border border-border hover:border-gray-300 rounded-lg transition-colors"
              >
                Understand the Shift
              </Link>
            </div>
          </motion.div>

          {/* Right — workflow visualization */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary mb-6">
                The 2030+ Workflow
              </p>
              <div className="space-y-0">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Node */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: step.color }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary">{step.label}</p>
                        <p className="text-xs text-text-tertiary">{step.sub}</p>
                      </div>
                    </div>
                    {/* Connector line */}
                    {i < workflowSteps.length - 1 && (
                      <div className="flex items-center ml-5 py-1">
                        <div className="w-px h-6 bg-border" />
                        <ArrowDown className="w-3 h-3 text-text-tertiary ml-[-6.5px] mt-1" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
