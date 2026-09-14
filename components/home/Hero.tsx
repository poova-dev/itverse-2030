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
      {/* Refined subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0F172A 1px, transparent 1px), linear-gradient(to right, #0F172A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-default relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left — copy (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Live research pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-border text-xs font-medium text-text-secondary mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse" />
              <span>Research-Backed Speculative Study · 2026 → 2030+</span>
            </div>

            <h1 className="text-3xl md:text-[2.85rem] lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-text-primary">
              The Future of IT Is Not About Replacing People.
            </h1>
            <p className="mt-2 text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight text-accent leading-[1.2]">
              It&apos;s About Changing How People Work.
            </p>
            <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
              AI agents, automation fabrics, and cloud infrastructure are reshaping the nature of technical craft.
              Explore how engineering roles, organizational workflows, and core skills will transition over the next decade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Assess Your Readiness
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shift"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text-primary bg-white border border-border hover:border-gray-300 rounded-lg transition-all hover:-translate-y-0.5 shadow-xs"
              >
                Understand the Shift
              </Link>
            </div>

            {/* Micro navigation pills */}
            <div className="mt-10 pt-6 border-t border-border-light flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-tertiary">
              <span className="font-semibold uppercase tracking-wider text-text-secondary text-[11px]">Jump to:</span>
              <Link href="/timeline" className="hover:text-accent transition-colors">Timeline 2026–2031</Link>
              <span>•</span>
              <Link href="/roles" className="hover:text-accent transition-colors">10 Future Roles</Link>
              <span>•</span>
              <Link href="/skills" className="hover:text-accent transition-colors">Skills Radar</Link>
              <span>•</span>
              <Link href="/research" className="hover:text-accent transition-colors">15 Citations</Link>
            </div>
          </motion.div>

          {/* Right — workflow orchestration console (5 cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-elevated p-6 md:p-7 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-light">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                    Systems Orchestration Console
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5">Continuous Human-in-the-Loop Architecture</p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md">
                  Active
                </span>
              </div>

              <div className="space-y-0">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3.5 p-2 rounded-lg hover:bg-gray-50/80 transition-colors">
                      {/* Node */}
                      <div className="relative shrink-0">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-mono font-bold shadow-xs"
                          style={{ backgroundColor: step.color }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      {/* Label & Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary leading-tight">{step.label}</p>
                        <p className="text-xs text-text-tertiary leading-tight mt-0.5">{step.sub}</p>
                      </div>
                      {/* Status indicator */}
                      <span className="text-[10px] font-mono text-text-tertiary shrink-0">
                        {i === 0 || i === 3 ? "Human" : "System"}
                      </span>
                    </div>

                    {/* Connector line */}
                    {i < workflowSteps.length - 1 && (
                      <div className="flex items-center ml-6 py-0.5">
                        <div className="w-px h-4 bg-border" />
                        <ArrowDown className="w-2.5 h-2.5 text-text-tertiary ml-[-5px] mt-0.5" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border-light flex items-center justify-between text-[11px] text-text-tertiary font-mono">
                <span>Loop: Deterministic Verification</span>
                <span className="text-accent font-semibold">100% Policy-Safe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
