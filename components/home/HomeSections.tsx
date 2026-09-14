"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { timelineData } from "@/data/timeline";
import { rolesData } from "@/data/roles";
import { researchData } from "@/data/research";
import { Badge } from "@/components/shared/Badge";

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
              <div key={item.stat} className="card-elevated p-5">
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Human + AI
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The future workflow is collaborative.
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
              The most effective model emerging from research and industry practice is not
              AI replacing humans or humans ignoring AI — it is structured collaboration where
              each contributes their strengths.
            </p>
            <Link
              href="/human-ai"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Explore collaboration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="card-elevated p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-2">Human</p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li>Define problems</li>
                <li>Make decisions</li>
                <li>Manage risk</li>
                <li>Validate outputs</li>
              </ul>
            </div>
            <div className="card-elevated p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-future mb-2">AI</p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li>Generate code</li>
                <li>Analyze data</li>
                <li>Automate tests</li>
                <li>Detect patterns</li>
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
              Future Roles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The Next Generation of IT Roles
            </h2>
          </div>
          <Link
            href="/roles"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            See all roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((role) => (
            <div key={role.id} className="card-elevated p-5">
              <h3 className="text-base font-semibold text-text-primary">{role.title}</h3>
              <p className="text-xs text-text-tertiary capitalize mt-1">{role.category}</p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                {role.description}
              </p>
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
    "System Design", "AI / ML", "Cloud", "Critical Thinking",
    "Agent Orchestration", "Adaptability", "Communication", "Security",
  ];
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="container-default">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-secondary mb-3">
            Future Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            What Will Make an IT Professional Valuable?
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Technical expertise remains essential, but the highest-value skills in 2030+ combine
            deep technical knowledge with human judgment and AI collaboration fluency.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium bg-white border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-gray-300 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href="/skills"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          Explore skill ecosystem <ArrowRight className="w-4 h-4" />
        </Link>
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
            All research <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((item) => (
            <div key={item.id} className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge type={item.type} />
                <span className="text-xs text-text-tertiary">{item.year}</span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary leading-snug">{item.organization}</h3>
              <p className="text-xs text-text-tertiary mt-0.5">{item.report}</p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                {item.keyFinding}
              </p>
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
    <SectionWrapper className="py-24 md:py-32 section-dark" dark>
      <div className="container-default text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          2030 is not a destination.
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-white/80 mt-2">
          It is a direction.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-base text-white/60 leading-relaxed">
            The question is not &ldquo;Will AI replace me?&rdquo;
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            The better question is: &ldquo;How will I work when intelligent systems become part of my team?&rdquo;
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/simulator"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-gray-100 rounded-lg transition-colors"
          >
            Discover My Future Role
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
