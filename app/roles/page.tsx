"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { rolesData, roleCategories } from "@/data/roles";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RolesPage() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    filter === "all" ? rolesData : rolesData.filter((r) => r.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Future Roles"
        title="The Next Generation of IT Roles"
        subtitle="As AI reshapes technology work, new roles are emerging that blend technical expertise with human judgment, ethics, and cross-functional collaboration."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-default">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {roleCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  filter === cat.id
                    ? "bg-accent text-white"
                    : "bg-white border border-border text-text-secondary hover:text-text-primary hover:border-gray-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Role cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((role) => {
                const isExpanded = expanded === role.id;
                return (
                  <motion.div
                    key={role.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="card-elevated overflow-hidden"
                  >
                    <button
                      onClick={() => setExpanded(isExpanded ? null : role.id)}
                      className="w-full text-left p-6"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-text-primary">{role.title}</h3>
                          <p className="text-xs text-text-tertiary capitalize mt-0.5">{role.category}</p>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-text-tertiary shrink-0 mt-1" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-text-tertiary shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                        {role.description}
                      </p>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-5 border-t border-border-light pt-5">
                            {/* Why it matters */}
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-2">
                                Why This Role Matters
                              </h4>
                              <p className="text-sm text-text-secondary leading-relaxed">{role.whyItMatters}</p>
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-1">
                                {role.responsibilities.map((r) => (
                                  <li key={r} className="text-sm text-text-secondary flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-2">
                                  Technical Skills
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {role.technicalSkills.map((s) => (
                                    <span key={s} className="px-2 py-0.5 text-[11px] font-medium bg-accent-light text-accent rounded">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-secondary mb-2">
                                  Human Skills
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {role.humanSkills.map((s) => (
                                    <span key={s} className="px-2 py-0.5 text-[11px] font-medium bg-accent-secondary-light text-[#0F766E] rounded">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Tools */}
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2">
                                Tools & Platforms
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {role.tools.map((t) => (
                                  <span key={t} className="px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-text-secondary rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Current & Future */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-1.5">
                                  Current Relevance
                                </h4>
                                <p className="text-sm text-text-secondary">{role.currentRelevance}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-future mb-1.5">
                                  Future Direction
                                </h4>
                                <p className="text-sm text-text-secondary">{role.futureDirection}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
