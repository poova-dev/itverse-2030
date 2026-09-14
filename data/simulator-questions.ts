export interface SimulatorQuestion {
  id: string;
  question: string;
  type: "single" | "multi" | "scale";
  options?: { label: string; value: string; scores: Record<string, number> }[];
  scaleConfig?: {
    labels: string[];
    dimensions: string[];
  };
}

export const simulatorQuestions: SimulatorQuestion[] = [
  {
    id: "interest",
    question: "What type of work do you most enjoy?",
    type: "single",
    options: [
      { label: "Building software and writing code", value: "coding", scores: { programming: 3, systemDesign: 1 } },
      { label: "Designing user experiences and interfaces", value: "design", scores: { creativity: 3, communication: 2 } },
      { label: "Working with data and finding insights", value: "data", scores: { data: 3, ai: 1 } },
      { label: "Protecting systems and managing risk", value: "security", scores: { security: 3, criticalThinking: 1 } },
      { label: "Solving complex problems and strategy", value: "problemSolving", scores: { problemSolving: 3, systemDesign: 2 } },
      { label: "Building products and understanding users", value: "product", scores: { communication: 2, creativity: 2, problemSolving: 1 } },
    ],
  },
  {
    id: "ai-comfort",
    question: "How comfortable are you with AI tools in your workflow?",
    type: "single",
    options: [
      { label: "Beginner — I've tried them a few times", value: "beginner", scores: { aiCollab: 1 } },
      { label: "Intermediate — I use them regularly", value: "intermediate", scores: { aiCollab: 2 } },
      { label: "Advanced — AI tools are integrated into my daily work", value: "advanced", scores: { aiCollab: 3 } },
    ],
  },
  {
    id: "programming-strength",
    question: "How would you rate your programming skills?",
    type: "scale",
    scaleConfig: {
      labels: ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"],
      dimensions: ["programming"],
    },
  },
  {
    id: "cloud-strength",
    question: "How experienced are you with cloud computing?",
    type: "scale",
    scaleConfig: {
      labels: ["No experience", "Basic concepts", "Some projects", "Professional use", "Architecture level"],
      dimensions: ["cloud"],
    },
  },
  {
    id: "ai-knowledge",
    question: "What is your experience with AI and machine learning?",
    type: "scale",
    scaleConfig: {
      labels: ["No experience", "Conceptual understanding", "Used AI APIs", "Built ML models", "Production AI systems"],
      dimensions: ["ai"],
    },
  },
  {
    id: "security-awareness",
    question: "How strong is your security and risk awareness?",
    type: "scale",
    scaleConfig: {
      labels: ["Minimal", "Basic practices", "Security-conscious", "Active security work", "Security specialist"],
      dimensions: ["security"],
    },
  },
  {
    id: "communication",
    question: "How would you rate your communication and collaboration skills?",
    type: "scale",
    scaleConfig: {
      labels: ["Developing", "Adequate", "Good", "Strong", "Excellent"],
      dimensions: ["communication"],
    },
  },
  {
    id: "system-design",
    question: "How comfortable are you with system design and architecture?",
    type: "scale",
    scaleConfig: {
      labels: ["No experience", "Basic understanding", "Some practice", "Experienced", "Architect level"],
      dimensions: ["systemDesign"],
    },
  },
  {
    id: "adaptability",
    question: "How do you respond to learning new technologies?",
    type: "single",
    options: [
      { label: "I prefer stability and mastering what I know", value: "stable", scores: { adaptability: 1 } },
      { label: "I learn new things when required", value: "required", scores: { adaptability: 2 } },
      { label: "I regularly explore new technologies", value: "regular", scores: { adaptability: 3 } },
      { label: "I actively seek out emerging technologies to learn", value: "proactive", scores: { adaptability: 4 } },
    ],
  },
  {
    id: "leadership",
    question: "What is your experience with leading teams or projects?",
    type: "single",
    options: [
      { label: "Individual contributor — no leadership experience", value: "none", scores: { leadership: 1 } },
      { label: "I've led small projects or mentored others", value: "some", scores: { leadership: 2 } },
      { label: "I regularly lead teams or drive initiatives", value: "regular", scores: { leadership: 3 } },
      { label: "I lead cross-functional teams and strategic decisions", value: "strategic", scores: { leadership: 4 } },
    ],
  },
  {
    id: "agent-experience",
    question: "Have you worked with AI agents or autonomous workflows?",
    type: "single",
    options: [
      { label: "No — I'm not sure what AI agents are", value: "none", scores: { agentSkill: 0 } },
      { label: "I understand the concept but haven't built any", value: "conceptual", scores: { agentSkill: 1 } },
      { label: "I've experimented with agent frameworks", value: "experimental", scores: { agentSkill: 2 } },
      { label: "I've built or deployed AI agent systems", value: "deployed", scores: { agentSkill: 3 } },
    ],
  },
  {
    id: "future-focus",
    question: "What area of IT interests you most for the future?",
    type: "single",
    options: [
      { label: "Building AI-powered applications", value: "ai-apps", scores: { ai: 2, programming: 1 } },
      { label: "Cloud and infrastructure architecture", value: "cloud-infra", scores: { cloud: 2, systemDesign: 1 } },
      { label: "AI safety, security and governance", value: "ai-safety", scores: { security: 2, ai: 1 } },
      { label: "Product development with AI", value: "ai-product", scores: { creativity: 1, communication: 1, ai: 1 } },
      { label: "Automation and operational efficiency", value: "automation", scores: { systemDesign: 1, agentSkill: 1, cloud: 1 } },
      { label: "Human-AI interaction and design", value: "interaction", scores: { creativity: 2, communication: 1, aiCollab: 1 } },
    ],
  },
];
