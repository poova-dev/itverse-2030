export interface Skill {
  name: string;
  relevance: "current" | "emerging" | "critical";
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "technical",
    title: "Technical",
    color: "#2563EB",
    skills: [
      {
        name: "Programming",
        relevance: "current",
        description:
          "Core software development skills remain foundational. The emphasis shifts from writing all code manually toward designing, reviewing, and orchestrating code generation.",
      },
      {
        name: "System Design",
        relevance: "critical",
        description:
          "Designing scalable, maintainable architectures becomes increasingly important as systems grow in complexity and incorporate AI components.",
      },
      {
        name: "Cloud Computing",
        relevance: "current",
        description:
          "Cloud infrastructure knowledge is essential for deploying and managing modern applications, AI workloads, and distributed systems.",
      },
      {
        name: "Cybersecurity",
        relevance: "critical",
        description:
          "Security expertise grows in importance as AI introduces new attack vectors and organizations handle increasingly sensitive data.",
      },
      {
        name: "Data Engineering",
        relevance: "current",
        description:
          "Building and maintaining data pipelines, understanding data quality, and managing data lifecycle are foundational for AI-powered systems.",
      },
      {
        name: "AI / Machine Learning",
        relevance: "critical",
        description:
          "Understanding AI capabilities, model evaluation, and integration patterns is becoming expected for all IT professionals.",
      },
      {
        name: "APIs & Integration",
        relevance: "current",
        description:
          "Connecting systems, services, and AI capabilities through well-designed APIs is the backbone of modern software architecture.",
      },
      {
        name: "DevOps & Platform Engineering",
        relevance: "current",
        description:
          "Automating deployment, monitoring, and infrastructure management remains critical — increasingly with AI-assisted tooling.",
      },
      {
        name: "AI Agent Development",
        relevance: "emerging",
        description:
          "Building, testing, and deploying autonomous AI agents that can execute complex workflows with appropriate oversight.",
      },
    ],
  },
  {
    id: "human",
    title: "Human",
    color: "#14B8A6",
    skills: [
      {
        name: "Critical Thinking",
        relevance: "critical",
        description:
          "The ability to evaluate information, question assumptions, and make reasoned judgments becomes more valuable as AI handles routine analysis.",
      },
      {
        name: "Communication",
        relevance: "critical",
        description:
          "Explaining complex technical concepts to diverse stakeholders — and translating business needs into technical requirements — remains irreplaceable.",
      },
      {
        name: "Leadership",
        relevance: "current",
        description:
          "Leading hybrid human-AI teams, making decisions under uncertainty, and guiding organizational change require distinctly human leadership.",
      },
      {
        name: "Problem Solving",
        relevance: "critical",
        description:
          "Defining the right problems to solve — before applying technology — is a skill that distinguishes exceptional professionals.",
      },
      {
        name: "Decision Making",
        relevance: "critical",
        description:
          "Making high-stakes decisions that account for technical, ethical, and business considerations remains a human responsibility.",
      },
      {
        name: "Creativity",
        relevance: "current",
        description:
          "Envisioning novel solutions, designing innovative products, and imagining new possibilities requires human imagination and insight.",
      },
      {
        name: "Adaptability",
        relevance: "critical",
        description:
          "The pace of technological change demands continuous learning and the willingness to evolve skills and approaches.",
      },
      {
        name: "Domain Knowledge",
        relevance: "current",
        description:
          "Deep understanding of specific industries and contexts enables IT professionals to create solutions that address real needs.",
      },
    ],
  },
  {
    id: "ai-collaboration",
    title: "AI Collaboration",
    color: "#7C3AED",
    skills: [
      {
        name: "Prompt Engineering",
        relevance: "current",
        description:
          "Crafting effective instructions for AI systems to produce accurate, relevant, and useful outputs.",
      },
      {
        name: "AI Output Evaluation",
        relevance: "critical",
        description:
          "Assessing the quality, accuracy, and appropriateness of AI-generated content, code, and decisions.",
      },
      {
        name: "Agent Orchestration",
        relevance: "emerging",
        description:
          "Designing and managing workflows where multiple AI agents collaborate to complete complex tasks.",
      },
      {
        name: "Workflow Design",
        relevance: "emerging",
        description:
          "Architecting human-AI workflows that effectively distribute tasks based on the strengths of each.",
      },
      {
        name: "AI Governance",
        relevance: "emerging",
        description:
          "Understanding policies, ethics, and regulatory requirements for responsible AI deployment.",
      },
      {
        name: "Model Validation",
        relevance: "emerging",
        description:
          "Testing and validating AI model behavior, accuracy, and safety before and during production deployment.",
      },
    ],
  },
];

// Flat skill names for radar chart
export const radarSkills = [
  "Programming",
  "System Design",
  "Cloud",
  "AI / ML",
  "Security",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "AI Collaboration",
];
