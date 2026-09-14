"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { timelineData } from "@/data/timeline";
import { rolesData } from "@/data/roles";
import { researchData } from "@/data/research";
import { Badge } from "@/components/shared/Badge";
import { Spotlight } from "@/components/motion/Spotlight";

/* ---------- Why the Shift Matters ---------- */
export function WhyShiftMatters() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="container-default">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Why This Matters
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Software development is moving from writing every instruction manually toward designing
            systems in which people and intelligent tools share execution.
          </h2>
          <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
            This is not a distant possibility. AI coding assistants are already used by the majority
            of developers. Agentic workflows are emerging in enterprise environments. The question
            is no longer whether work will change — but how professionals will adapt.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: "84%", label: "of developers routinely use AI tools in daily workflows (Stack Overflow)", type: "evidence" as const },
              { stat: "~57%", label: "of US work hours technically automatable by modern AI (McKinsey MGI)", type: "evidence" as const },
              { stat: "+280%", label: "YoY surge in job postings requiring Agentic AI skills (Lightcast / Stanford)", type: "evidence" as const },
              { stat: "85M+", label: "global skilled worker deficit projected by 2030 (Korn Ferry)", type: "forecast" as const },
            ].map((item) => (
              <div key={item.stat} className="card-elevated p-5 relative overflow-hidden group">
                <Spotlight size={220} />
                <Badge type={item.type} />
                <p className="text-2xl md:text-3xl font-bold text-text-primary mt-3">{item.stat}</p>
                <p className="text-xs md:text-sm text-text-secondary mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Timeline Preview ---------- */
export function TimelinePreview() {
  return (
    <SectionWrapper className="py-20 md:py-28 bg-white" dark={false}>
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              2026 → 2030+
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The Road to 2030
            </h2>
          </div>
          <Link
            href="/timeline"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Explore full timeline <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {timelineData.slice(0, 3).map((entry) => (
            <div key={entry.year} className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-bold font-mono text-accent">{entry.year}</span>
                <Badge type="scenario" label={entry.label} />
              </div>
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Collaboration Preview ---------- */
export function CollaborationPreview() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="container-default">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Human + AI Architecture
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The future workflow is collaborative.
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
              The most resilient model emerging from research and industry practice is neither
              full displacement nor human resistance — it is structured symbiosis where humans steer,
              govern, and verify while AI agents execute multi-step routines.
            </p>
            <div className="mt-6">
              <Link
                href="/human-ai"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Explore interactive task matrix <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="card-elevated p-6 border-l-4 border-l-accent">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">Human Sphere</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-accent font-semibold">Judgment</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><strong>Problem Framing:</strong> Decomposing ambiguous business needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><strong>High-Stakes Decision:</strong> Architectural & ethical trade-offs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><strong>Risk & Accountability:</strong> Legal, compliance & safety boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><strong>Output Validation:</strong> Verifying non-deterministic results</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated p-6 border-l-4 border-l-accent-future">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent-future">AI Agent Sphere</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-accent-future font-semibold">Velocity</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-future font-bold mt-0.5">•</span>
                  <span><strong>Code Generation:</strong> Synthesizing boilerplate & scaffolding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-future font-bold mt-0.5">•</span>
                  <span><strong>Automated Testing:</strong> Edge case & regression generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-future font-bold mt-0.5">•</span>
                  <span><strong>Pattern Detection:</strong> Static security & telemetry analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-future font-bold mt-0.5">•</span>
                  <span><strong>Multi-Step Execution:</strong> Tool-use & API orchestration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Roles Preview ---------- */
export function RolesPreview() {
  const featured = rolesData.slice(0, 4);
  return (
    <SectionWrapper className="py-20 md:py-28 bg-white">
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-future mb-3">
              Emerging Taxonomy
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The Next Generation of IT Roles
            </h2>
          </div>
          <Link
            href="/roles"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Explore all 13 roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((role) => (
            <div key={role.id} className="card-elevated p-5 flex flex-col justify-between relative overflow-hidden group">
              <Spotlight size={240} />
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-semibold text-text-primary leading-snug">{role.title}</h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-text-tertiary capitalize">{role.category}</span>
                  {role.demandGrowth && (
                    <span className="text-[10px] font-mono font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded">
                      {role.demandGrowth}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {role.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border-light flex flex-wrap gap-1">
                {role.technicalSkills.slice(0, 3).map((s) => (
                  <span key={s} className="px-1.5 py-0.5 text-[10px] bg-gray-50 text-text-secondary rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Skills Preview ---------- */
export function SkillsPreview() {
  const topSkills = [
    { name: "System Design", level: "Critical" },
    { name: "AI / ML Integration", level: "Critical" },
    { name: "Cloud & Edge Compute", level: "Core" },
    { name: "Critical Thinking", level: "Human" },
    { name: "Agent Orchestration", level: "Emerging" },
    { name: "Cybersecurity & Policy", level: "Critical" },
    { name: "FinOps Optimization", level: "Emerging" },
    { name: "No-Code Automation", level: "Core" },
  ];
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="container-default">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-secondary mb-3">
            Core Competencies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            What Will Make an IT Professional Valuable?
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Technical expertise remains the baseline, but the highest-value professionals in 2030+ combine
            deep systems knowledge with human judgment and multi-agent collaboration fluency.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {topSkills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2.5 text-xs md:text-sm font-medium bg-white border border-border rounded-xl text-text-secondary hover:text-text-primary hover:border-accent/30 transition-all flex items-center gap-2 shadow-2xs"
            >
              <span>{skill.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-gray-100 text-text-tertiary">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Open interactive skills radar <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Research Signals ---------- */
export function ResearchSignals() {
  const featured = researchData.slice(0, 3);
  return (
    <SectionWrapper className="py-20 md:py-28 bg-white">
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-tertiary mb-3">
              Research & Signals
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              What the Research Says
            </h2>
          </div>
          <Link
            href="/research"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Review all citations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((item) => (
            <div key={item.id} className="card-elevated p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge type={item.type} />
                  <span className="text-xs font-mono text-text-tertiary">{item.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary leading-snug">{item.organization}</h3>
                <p className="text-xs text-text-tertiary mt-0.5">{item.report}</p>
                <p className="mt-3 text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {item.keyFinding}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border-light">
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  View Source Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <SectionWrapper className="py-24 md:py-32 section-dark relative overflow-hidden" dark>
      <div className="container-default text-center relative z-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light block mb-4">
          Conclusion & Horizon
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          2030 is not a destination.
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-white/80 mt-2">
          It is a direction.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-base text-white/60 leading-relaxed">
            The question is not &ldquo;Will AI replace me?&rdquo;
          </p>
          <p className="text-lg md:text-xl font-semibold text-white mt-3">
            The better question is: &ldquo;How will I work when intelligent systems become part of my team?&rdquo;
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/simulator"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-gray-100 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Discover My Future Role
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg transition-all"
          >
            Explore the Citations
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
