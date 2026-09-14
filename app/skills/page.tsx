"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { skillsData } from "@/data/skills";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

const relevanceMap = {
  current: { label: "Current", color: "#2563EB" },
  emerging: { label: "Emerging", color: "#14B8A6" },
  critical: { label: "Critical for 2030+", color: "#7C3AED" },
};

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical");
  const activeCategory = skillsData.find((c) => c.id === activeTab);

const radarData = [
  { subject: "Programming", current: 85, future: 65 },
  { subject: "System Design", current: 60, future: 90 },
  { subject: "Cloud", current: 70, future: 85 },
  { subject: "AI / ML", current: 45, future: 95 },
  { subject: "Security", current: 55, future: 90 },
  { subject: "Communication", current: 65, future: 92 },
  { subject: "Problem Solving", current: 75, future: 95 },
  { subject: "Adaptability", current: 60, future: 98 },
  { subject: "AI Collaboration", current: 40, future: 96 },
];

  return (
    <>
      <PageHeader
        eyebrow="Future Skills"
        title="What Will Make an IT Professional Valuable?"
        subtitle="The most effective IT professionals in 2030+ will combine deep technical expertise, distinctly human judgment, and fluency in AI collaboration."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Radar chart */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Badge type="scenario" label="Conceptual model" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  Skill Importance — Scenario Visualization
                </h3>
                <p className="text-xs text-text-tertiary mb-4">
                  Relative importance of skill areas today vs. 2030+ scenarios
                </p>
                <div className="w-full aspect-square max-w-[320px] mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#E2E8F0" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fontSize: 10, fill: "#64748B" }}
                      />
                      <Radar
                        name="Current"
                        dataKey="current"
                        stroke="#2563EB"
                        fill="#2563EB"
                        fillOpacity={0.1}
                        strokeWidth={1.5}
                      />
                      <Radar
                        name="2030+ Scenario"
                        dataKey="future"
                        stroke="#7C3AED"
                        fill="#7C3AED"
                        fillOpacity={0.1}
                        strokeWidth={1.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="text-xs text-text-tertiary">Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-future" />
                    <span className="text-xs text-text-tertiary">2030+ Scenario</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill categories */}
            <div className="lg:col-span-3">
              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                {skillsData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      activeTab === cat.id
                        ? "text-white shadow-sm"
                        : "bg-white border border-border text-text-secondary hover:text-text-primary hover:border-gray-300"
                    }`}
                    style={{
                      backgroundColor: activeTab === cat.id ? cat.color : undefined,
                    }}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Skills grid */}
              {activeCategory && (
                <div className="space-y-3">
                  {activeCategory.skills.map((skill, i) => {
                    const rel = relevanceMap[skill.relevance];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="card-elevated p-5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold text-text-primary">{skill.name}</h4>
                          <span
                            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{
                              color: rel.color,
                              backgroundColor: `${rel.color}12`,
                            }}
                          >
                            {rel.label}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
