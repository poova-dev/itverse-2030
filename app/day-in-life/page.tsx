"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { dayInLifeData } from "@/data/scenarios";
import { User, Bot, Users } from "lucide-react";

const actorConfig = {
  human: { label: "Human", color: "#2563EB", icon: User },
  ai: { label: "AI", color: "#7C3AED", icon: Bot },
  collaborative: { label: "Collaborative", color: "#14B8A6", icon: Users },
};

export default function DayInLifePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = dayInLifeData[activeIndex];
  const actorInfo = actorConfig[active.actor];
  const ActorIcon = actorInfo.icon;

  return (
    <>
      <PageHeader
        eyebrow="Scenario"
        title="A Day in IT — 2035"
        subtitle="A speculative but research-grounded scenario of what a typical workday might look like for an IT professional in 2035."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          <div className="flex items-center gap-2 mb-10">
            <Badge type="scenario" />
            <span className="text-xs text-text-tertiary">
              Scenario — a possible future day based on current trends
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Timeline strip */}
            <div className="lg:col-span-2">
              <div className="space-y-1 sticky top-24">
                {dayInLifeData.map((entry, i) => {
                  const info = actorConfig[entry.actor];
                  return (
                    <button
                      key={entry.time}
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                        activeIndex === i
                          ? "bg-white border border-border shadow-sm"
                          : "hover:bg-white/60"
                      }`}
                    >
                      <span className="text-sm font-mono font-bold text-text-tertiary w-12 shrink-0">
                        {entry.time}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${activeIndex === i ? "text-text-primary" : "text-text-secondary"}`}>
                          {entry.title}
                        </p>
                      </div>
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: info.color }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="card-elevated p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-mono font-bold text-text-primary">
                      {active.time}
                    </span>
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${actorInfo.color}12`,
                        color: actorInfo.color,
                      }}
                    >
                      <ActorIcon className="w-3 h-3" />
                      {actorInfo.label}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {active.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {active.description}
                  </p>

                  <div className="space-y-2">
                    {active.details.map((detail, i) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-bg-primary"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: actorInfo.color }}
                        />
                        <p className="text-sm text-text-secondary">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8 pt-4 border-t border-border-light">
                    <button
                      onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                      disabled={activeIndex === 0}
                      className="text-sm font-semibold text-text-secondary hover:text-text-primary disabled:opacity-30 transition-colors"
                    >
                      ← Earlier
                    </button>
                    <button
                      onClick={() => setActiveIndex(Math.min(dayInLifeData.length - 1, activeIndex + 1))}
                      disabled={activeIndex === dayInLifeData.length - 1}
                      className="text-sm font-semibold text-text-secondary hover:text-text-primary disabled:opacity-30 transition-colors"
                    >
                      Later →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
