import { type ScoreMap } from "./scoring";

export interface RoleRecommendation {
  roleId: string;
  title: string;
  matchScore: number;
  reason: string;
}

export interface LearningStep {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
}

interface RoleProfile {
  roleId: string;
  title: string;
  weights: Partial<Record<keyof ScoreMap, number>>;
  description: string;
}

const roleProfiles: RoleProfile[] = [
  {
    roleId: "ai-engineer",
    title: "AI Engineer",
    weights: { ai: 3, programming: 2, systemDesign: 1, problemSolving: 1 },
    description: "Your profile suggests strong alignment with AI engineering — building and deploying AI-powered systems.",
  },
  {
    roleId: "ai-agent-engineer",
    title: "AI Agent Engineer",
    weights: { agentSkill: 3, ai: 2, programming: 2, systemDesign: 1 },
    description: "Your interest in agents and AI suggests you could excel at designing autonomous AI workflows.",
  },
  {
    roleId: "ai-security-engineer",
    title: "AI Security Engineer",
    weights: { security: 3, ai: 2, criticalThinking: 1, systemDesign: 1 },
    description: "Your security awareness combined with AI interest aligns with the emerging AI security field.",
  },
  {
    roleId: "cloud-architect",
    title: "Cloud Architect",
    weights: { cloud: 3, systemDesign: 3, leadership: 1 },
    description: "Your cloud and architecture skills position you well for designing large-scale infrastructure.",
  },
  {
    roleId: "ai-product-engineer",
    title: "AI Product Engineer",
    weights: { creativity: 2, communication: 2, ai: 1, programming: 1 },
    description: "Your blend of product thinking and technical skills aligns with building AI-powered products.",
  },
  {
    roleId: "ai-governance-specialist",
    title: "AI Governance Specialist",
    weights: { criticalThinking: 2, communication: 2, leadership: 2, security: 1 },
    description: "Your leadership and critical thinking skills suit the growing need for AI governance expertise.",
  },
  {
    roleId: "automation-architect",
    title: "Automation Architect",
    weights: { systemDesign: 3, agentSkill: 2, cloud: 1 },
    description: "Your systems thinking and interest in automation align with designing enterprise workflow systems.",
  },
  {
    roleId: "human-ai-interaction-designer",
    title: "Human-AI Interaction Designer",
    weights: { creativity: 3, communication: 2, aiCollab: 2 },
    description: "Your design sensibility and communication skills fit the emerging field of human-AI interaction.",
  },
];

export function getRecommendedRoles(scores: ScoreMap): RoleRecommendation[] {
  const recommendations: RoleRecommendation[] = roleProfiles.map((profile) => {
    let matchScore = 0;
    let maxPossible = 0;

    for (const [key, weight] of Object.entries(profile.weights)) {
      const dim = key as keyof ScoreMap;
      const maxDim = dim === "adaptability" || dim === "leadership" ? 4 : 3;
      matchScore += (scores[dim] / maxDim) * weight;
      maxPossible += weight;
    }

    return {
      roleId: profile.roleId,
      title: profile.title,
      matchScore: Math.round((matchScore / maxPossible) * 100),
      reason: profile.description,
    };
  });

  return recommendations.sort((a, b) => b.matchScore - a.matchScore);
}

export function getStrengths(scores: ScoreMap): string[] {
  const dimensionLabels: Record<string, string> = {
    programming: "Programming",
    cloud: "Cloud Computing",
    ai: "AI & Machine Learning",
    security: "Security",
    communication: "Communication",
    systemDesign: "System Design",
    problemSolving: "Problem Solving",
    adaptability: "Adaptability",
    aiCollab: "AI Collaboration",
    creativity: "Creativity",
    criticalThinking: "Critical Thinking",
    leadership: "Leadership",
    data: "Data",
    agentSkill: "AI Agents",
  };

  return Object.entries(scores)
    .filter(([key, val]) => {
      const maxVal = key === "adaptability" || key === "leadership" ? 4 : 3;
      return val / maxVal >= 0.6;
    })
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([key]) => dimensionLabels[key] || key);
}

export function getGaps(scores: ScoreMap): string[] {
  const dimensionLabels: Record<string, string> = {
    programming: "Programming",
    cloud: "Cloud Computing",
    ai: "AI & Machine Learning",
    security: "Security",
    communication: "Communication",
    systemDesign: "System Design",
    problemSolving: "Problem Solving",
    adaptability: "Adaptability",
    aiCollab: "AI Collaboration",
    creativity: "Creativity",
    criticalThinking: "Critical Thinking",
    leadership: "Leadership",
    data: "Data",
    agentSkill: "AI Agents",
  };

  const importantDimensions = [
    "programming", "cloud", "ai", "security", "systemDesign",
    "communication", "adaptability", "aiCollab",
  ];

  return importantDimensions
    .filter((key) => {
      const maxVal = key === "adaptability" || key === "leadership" ? 4 : 3;
      return scores[key as keyof ScoreMap] / maxVal < 0.5;
    })
    .slice(0, 4)
    .map((key) => dimensionLabels[key] || key);
}

export function getLearningPath(gaps: string[]): LearningStep[] {
  const pathMap: Record<string, LearningStep> = {
    "Cloud Computing": {
      title: "Learn Cloud Fundamentals",
      description: "Start with a cloud certification path (AWS, Azure, or GCP). Build and deploy a complete application on a cloud platform.",
      priority: "high",
    },
    "AI & Machine Learning": {
      title: "Build AI Literacy",
      description: "Take a practical AI/ML course. Build an application that integrates AI APIs. Understand model evaluation and limitations.",
      priority: "high",
    },
    "AI Collaboration": {
      title: "Practice AI-Assisted Workflows",
      description: "Integrate AI coding assistants into your daily work. Experiment with prompt engineering. Build a project using AI agents.",
      priority: "high",
    },
    "System Design": {
      title: "Study System Architecture",
      description: "Practice designing scalable systems. Study distributed system patterns. Work through architecture case studies.",
      priority: "medium",
    },
    "Security": {
      title: "Develop Security Awareness",
      description: "Learn OWASP top 10. Understand AI-specific security risks. Practice secure coding and threat modeling.",
      priority: "medium",
    },
    "Programming": {
      title: "Strengthen Programming Skills",
      description: "Deepen your knowledge of a primary language. Build production-quality projects. Practice data structures and algorithms.",
      priority: "high",
    },
    "Communication": {
      title: "Improve Technical Communication",
      description: "Practice explaining technical concepts clearly. Write technical documentation. Present at team meetings or meetups.",
      priority: "medium",
    },
    "Adaptability": {
      title: "Build a Learning Habit",
      description: "Dedicate regular time to learning new technologies. Follow industry trends. Experiment with emerging tools and frameworks.",
      priority: "medium",
    },
    "AI Agents": {
      title: "Explore Agentic Workflows",
      description: "Learn about AI agent architectures. Experiment with agent frameworks. Build a simple agent that performs multi-step tasks.",
      priority: "medium",
    },
  };

  return gaps
    .map((gap) => pathMap[gap])
    .filter((step): step is LearningStep => step !== undefined);
}
