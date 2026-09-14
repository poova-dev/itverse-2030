export interface ScoreMap {
  programming: number;
  cloud: number;
  ai: number;
  security: number;
  communication: number;
  systemDesign: number;
  problemSolving: number;
  adaptability: number;
  aiCollab: number;
  creativity: number;
  criticalThinking: number;
  leadership: number;
  data: number;
  agentSkill: number;
}

export const emptyScores: ScoreMap = {
  programming: 0,
  cloud: 0,
  ai: 0,
  security: 0,
  communication: 0,
  systemDesign: 0,
  problemSolving: 0,
  adaptability: 0,
  aiCollab: 0,
  creativity: 0,
  criticalThinking: 0,
  leadership: 0,
  data: 0,
  agentSkill: 0,
};

export function calculateReadinessScore(scores: ScoreMap): number {
  const weights: Record<keyof ScoreMap, number> = {
    programming: 8,
    cloud: 7,
    ai: 9,
    security: 6,
    communication: 7,
    systemDesign: 8,
    problemSolving: 7,
    adaptability: 8,
    aiCollab: 9,
    creativity: 5,
    criticalThinking: 6,
    leadership: 5,
    data: 5,
    agentSkill: 7,
  };

  let weightedSum = 0;
  let totalWeight = 0;

  for (const key of Object.keys(weights) as (keyof ScoreMap)[]) {
    const maxPossible = key === "adaptability" || key === "leadership" ? 4 : 3;
    const normalized = Math.min(scores[key] / maxPossible, 1);
    weightedSum += normalized * weights[key];
    totalWeight += weights[key];
  }

  return Math.round((weightedSum / totalWeight) * 100);
}

export interface ReadinessCategory {
  label: string;
  key: keyof ScoreMap;
  score: number;
  maxScore: number;
}

export function getReadinessCategories(scores: ScoreMap): ReadinessCategory[] {
  return [
    { label: "AI Fluency", key: "ai", score: scores.ai, maxScore: 3 },
    { label: "Programming", key: "programming", score: scores.programming, maxScore: 3 },
    { label: "Cloud", key: "cloud", score: scores.cloud, maxScore: 3 },
    { label: "Security", key: "security", score: scores.security, maxScore: 3 },
    { label: "System Thinking", key: "systemDesign", score: scores.systemDesign, maxScore: 3 },
    { label: "Problem Solving", key: "problemSolving", score: scores.problemSolving, maxScore: 3 },
    { label: "Communication", key: "communication", score: scores.communication, maxScore: 3 },
    { label: "Adaptability", key: "adaptability", score: scores.adaptability, maxScore: 4 },
    { label: "Human-AI Collaboration", key: "aiCollab", score: scores.aiCollab, maxScore: 3 },
  ];
}
