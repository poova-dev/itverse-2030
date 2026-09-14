"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { workplaceComponents } from "@/data/scenarios";
import { X } from "lucide-react";

export default function WorkplacePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = workplaceComponents.find((c) => c.id === selected);

  return (
    <>
      <PageHeader
        eyebrow="Future Workplace"
        title="Where Will We Work?"
        subtitle="The IT workplace of 2030+ is a layered system where human teams, AI agents, cloud infrastructure, and security systems operate as an integrated whole."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          <div className="flex items-center gap-2 mb-8">
            <Badge type="scenario" />
            <span className="text-xs text-text-tertiary">
              Conceptual model — a possible future workplace architecture
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Diagram */}
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {workplaceComponents.map((comp, i) => (
                  <motion.button
                    key={comp.id}
                    onClick={() => setSelected(comp.id === selected ? null : comp.id)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selected === comp.id
                        ? "border-2 shadow-sm"
                        : "border-border bg-white hover:shadow-sm hover:border-gray-300"
                    }`}
                    style={{
                      borderColor: selected === comp.id ? comp.color : undefined,
                      backgroundColor: selected === comp.id ? `${comp.color}08` : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: comp.color }}
                      />
                      <span className="text-sm font-semibold text-text-primary">{comp.label}</span>
                      <span className="text-xs text-text-tertiary ml-auto">
                        {selected === comp.id ? "Selected" : "Click to explore"}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1.5 ml-6 leading-relaxed line-clamp-2">
                      {comp.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Connection lines visualization */}
              <div className="mt-6 flex items-center justify-center gap-1 text-xs text-text-tertiary">
                <div className="w-8 h-px bg-border" />
                <span>All layers interconnected</span>
                <div className="w-8 h-px bg-border" />
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="card-elevated p-6 sticky top-24"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: active.color }}
                        />
                        <h3 className="text-base font-semibold">{active.label}</h3>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Close details"
                      >
                        <X className="w-4 h-4 text-text-tertiary" />
                      </button>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {active.description}
                    </p>
                    <ul className="space-y-2">
                      {active.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card-elevated p-6 text-center sticky top-24"
                  >
                    <p className="text-sm text-text-tertiary">
                      Click a component to explore its role in the future workplace.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
