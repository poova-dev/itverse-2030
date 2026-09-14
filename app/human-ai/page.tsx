"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/shared/Badge";
import { User, Bot, Users } from "lucide-react";

interface Task {
  id: string;
  label: string;
  defaultOwner: "human" | "ai" | "collaborative";
}

const allTasks: Task[] = [
  { id: "define-problems", label: "Define problems", defaultOwner: "human" },
  { id: "set-objectives", label: "Set objectives", defaultOwner: "human" },
  { id: "understand-context", label: "Understand context", defaultOwner: "human" },
  { id: "make-decisions", label: "Make decisions", defaultOwner: "human" },
  { id: "validate-outputs", label: "Validate outputs", defaultOwner: "human" },
  { id: "manage-risk", label: "Manage risk", defaultOwner: "human" },
  { id: "take-accountability", label: "Take accountability", defaultOwner: "human" },
  { id: "communicate", label: "Communicate with stakeholders", defaultOwner: "human" },
  { id: "analyze-info", label: "Analyze information", defaultOwner: "ai" },
  { id: "generate-code", label: "Generate code", defaultOwner: "ai" },
  { id: "search-knowledge", label: "Search knowledge", defaultOwner: "ai" },
  { id: "test-systems", label: "Test systems", defaultOwner: "ai" },
  { id: "automate-tasks", label: "Automate repetitive tasks", defaultOwner: "ai" },
  { id: "summarize-info", label: "Summarize information", defaultOwner: "ai" },
  { id: "detect-patterns", label: "Detect patterns", defaultOwner: "ai" },
  { id: "execute-workflows", label: "Execute defined workflows", defaultOwner: "ai" },
];

type Column = "human" | "ai" | "collaborative";

const columnConfig: Record<Column, { label: string; color: string; icon: typeof User }> = {
  human: { label: "Human", color: "#2563EB", icon: User },
  ai: { label: "AI", color: "#7C3AED", icon: Bot },
  collaborative: { label: "Human + AI", color: "#14B8A6", icon: Users },
};

export default function HumanAIPage() {
  const [assignments, setAssignments] = useState<Record<string, Column>>(() => {
    const init: Record<string, Column> = {};
    allTasks.forEach((t) => {
      init[t.id] = t.defaultOwner;
    });
    return init;
  });

  const moveTask = useCallback((taskId: string, to: Column) => {
    setAssignments((prev) => ({ ...prev, [taskId]: to }));
  }, []);

  const resetAssignments = useCallback(() => {
    const init: Record<string, Column> = {};
    allTasks.forEach((t) => {
      init[t.id] = t.defaultOwner;
    });
    setAssignments(init);
  }, []);

  const getTasksForColumn = (col: Column) =>
    allTasks.filter((t) => assignments[t.id] === col);

  const columns: Column[] = ["human", "ai", "collaborative"];

  return (
    <>
      <PageHeader
        eyebrow="Human + AI"
        title="Human + AI"
        subtitle="The future workflow is collaborative. Explore how responsibilities might be distributed between human professionals and AI systems."
      />

      <SectionWrapper className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Badge type="scenario" />
              <span className="text-xs text-text-tertiary">
                Interactive — assign tasks to explore collaboration models
              </span>
            </div>
            <button
              onClick={resetAssignments}
              className="text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors"
            >
              Reset to default
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {columns.map((col) => {
              const config = columnConfig[col];
              const Icon = config.icon;
              const tasks = getTasksForColumn(col);

              return (
                <div
                  key={col}
                  className="rounded-2xl border border-border bg-white p-4"
                >
                  {/* Column header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-light">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${config.color}12` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: config.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{config.label}</h3>
                      <p className="text-xs text-text-tertiary">{tasks.length} tasks</p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2 min-h-[200px]">
                    <AnimatePresence>
                      {tasks.map((task) => (
                        <motion.div
                          key={task.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="group p-3 rounded-lg border border-border-light bg-bg-primary hover:border-gray-300 transition-colors"
                        >
                          <p className="text-sm text-text-primary font-medium">{task.label}</p>
                          {/* Move buttons */}
                          <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {columns
                              .filter((c) => c !== col)
                              .map((target) => {
                                const tConfig = columnConfig[target];
                                return (
                                  <button
                                    key={target}
                                    onClick={() => moveTask(task.id, target)}
                                    className="text-[10px] font-medium px-2 py-1 rounded-md border border-border-light hover:bg-gray-50 transition-colors"
                                    style={{ color: tConfig.color }}
                                  >
                                    → {tConfig.label}
                                  </button>
                                );
                              })}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {tasks.length === 0 && (
                      <p className="text-xs text-text-tertiary text-center py-8">
                        Move tasks here to explore this allocation
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          <div className="mt-16 max-w-2xl">
            <h3 className="text-xl font-bold tracking-tight mb-4">
              Augmentation, not replacement
            </h3>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The default distribution above reflects a model where AI handles execution-heavy
                tasks while humans retain ownership of judgment, accountability, and
                stakeholder communication. This is consistent with the &ldquo;human-in-the-loop&rdquo;
                model recommended by most enterprise AI governance frameworks.
              </p>
              <p>
                Try moving tasks between columns to explore different collaboration models.
                Notice that some tasks — like accountability and stakeholder communication —
                are difficult to delegate entirely to AI, while tasks like pattern detection
                and code generation benefit significantly from AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
