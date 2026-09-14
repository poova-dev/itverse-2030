export interface Role {
  id: string;
  title: string;
  category: "engineering" | "security" | "product" | "architecture" | "design";
  description: string;
  responsibilities: string[];
  whyItMatters: string;
  technicalSkills: string[];
  humanSkills: string[];
  tools: string[];
  currentRelevance: string;
  futureDirection: string;
}

export const rolesData: Role[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    category: "engineering",
    description:
      "Designs, builds, and maintains AI-powered systems that integrate large language models, machine learning pipelines, and intelligent automation into production applications.",
    responsibilities: [
      "Design and implement AI-powered features and systems",
      "Fine-tune and deploy machine learning models",
      "Build evaluation frameworks for AI system quality",
      "Optimize model inference and performance",
      "Integrate AI capabilities into existing applications",
    ],
    whyItMatters:
      "As AI moves from experimental to production, organizations need engineers who understand both the capabilities and limitations of AI systems.",
    technicalSkills: ["Python", "ML frameworks", "LLM APIs", "Vector databases", "Model evaluation"],
    humanSkills: ["Critical evaluation", "Problem decomposition", "Risk assessment"],
    tools: ["PyTorch", "TensorFlow", "LangChain", "Cloud AI platforms", "MLflow"],
    currentRelevance:
      "High — demand for AI engineering skills has grown significantly since 2023.",
    futureDirection:
      "Likely to evolve toward orchestrating multi-model systems and ensuring AI reliability at scale.",
  },
  {
    id: "ai-agent-engineer",
    title: "AI Agent Engineer",
    category: "engineering",
    description:
      "Specializes in building autonomous AI agents that can execute multi-step workflows, interact with tools and APIs, and operate with appropriate human oversight.",
    responsibilities: [
      "Design agent architectures and workflow patterns",
      "Implement tool-use and API integration for agents",
      "Build safety guardrails and human-in-the-loop systems",
      "Create testing frameworks for agent behavior",
      "Monitor and optimize agent performance in production",
    ],
    whyItMatters:
      "Agentic AI represents a shift from AI that answers questions to AI that executes tasks — requiring specialized engineering.",
    technicalSkills: ["Agent frameworks", "Workflow orchestration", "API design", "Safety systems", "Monitoring"],
    humanSkills: ["Systems thinking", "Risk management", "Workflow design"],
    tools: ["LangGraph", "AutoGen", "CrewAI", "Agent evaluation tools", "Observability platforms"],
    currentRelevance:
      "Emerging — growing rapidly as agent capabilities mature.",
    futureDirection:
      "Expected to become a core engineering discipline as agentic workflows become standard in organizations.",
  },
  {
    id: "llmops-engineer",
    title: "LLMOps Engineer",
    category: "engineering",
    description:
      "Manages the operational lifecycle of large language models — from deployment and monitoring to cost optimization and version management.",
    responsibilities: [
      "Deploy and manage LLM infrastructure",
      "Optimize inference costs and latency",
      "Build model evaluation and monitoring pipelines",
      "Manage model versioning and A/B testing",
      "Ensure compliance with data governance policies",
    ],
    whyItMatters:
      "Running AI systems in production requires operational expertise that bridges traditional DevOps with AI-specific challenges.",
    technicalSkills: ["Infrastructure as code", "GPU optimization", "Model serving", "Cost management", "Monitoring"],
    humanSkills: ["Operational judgment", "Cost-benefit analysis", "Communication"],
    tools: ["Kubernetes", "vLLM", "TensorRT", "Cloud AI infrastructure", "Prometheus/Grafana"],
    currentRelevance:
      "Growing — organizations deploying LLMs at scale increasingly need this expertise.",
    futureDirection:
      "May merge with broader AI platform engineering as tooling matures.",
  },
  {
    id: "ai-security-engineer",
    title: "AI Security Engineer",
    category: "security",
    description:
      "Protects AI systems from adversarial attacks, data poisoning, prompt injection, and other AI-specific security threats while ensuring responsible AI deployment.",
    responsibilities: [
      "Assess and mitigate AI-specific security vulnerabilities",
      "Implement prompt injection defenses and content filtering",
      "Design secure AI system architectures",
      "Conduct red-team exercises for AI systems",
      "Develop AI security policies and incident response plans",
    ],
    whyItMatters:
      "AI systems introduce novel attack surfaces that traditional cybersecurity approaches may not adequately address.",
    technicalSkills: ["AI security frameworks", "Adversarial ML", "Prompt injection defense", "Data security", "Audit"],
    humanSkills: ["Threat modeling", "Ethical reasoning", "Communication"],
    tools: ["AI red-teaming frameworks", "Security scanners", "Audit platforms", "OWASP AI guidelines"],
    currentRelevance:
      "Emerging — growing rapidly as AI deployment increases attack surface.",
    futureDirection:
      "Likely to become a mandatory function in any organization deploying AI at scale.",
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    category: "architecture",
    description:
      "Designs and governs cloud infrastructure and platform architecture that supports AI workloads, distributed systems, and global-scale operations.",
    responsibilities: [
      "Design scalable cloud infrastructure for AI and traditional workloads",
      "Establish cloud governance and cost optimization strategies",
      "Architect multi-cloud and hybrid deployment patterns",
      "Ensure security, compliance, and resilience of cloud systems",
      "Guide teams on cloud-native development practices",
    ],
    whyItMatters:
      "Cloud infrastructure is the foundation for AI, distributed teams, and modern applications — architecture decisions have long-term impact.",
    technicalSkills: ["Cloud platforms", "Infrastructure as code", "Networking", "Security", "Cost optimization"],
    humanSkills: ["Strategic thinking", "Stakeholder management", "Technical leadership"],
    tools: ["AWS/Azure/GCP", "Terraform", "Kubernetes", "Cloud-native monitoring", "FinOps tools"],
    currentRelevance:
      "Established — already a critical role that continues to evolve with AI workload requirements.",
    futureDirection:
      "Will increasingly focus on AI infrastructure, edge computing, and sustainable cloud architecture.",
  },
  {
    id: "ai-governance-specialist",
    title: "AI Governance Specialist",
    category: "product",
    description:
      "Develops and enforces policies, standards, and frameworks that ensure AI systems are deployed responsibly, ethically, and in compliance with regulations.",
    responsibilities: [
      "Define organizational AI governance policies",
      "Assess AI systems for bias, fairness, and compliance",
      "Manage AI risk and ethical review processes",
      "Monitor regulatory developments and ensure compliance",
      "Bridge technical AI teams with legal and compliance functions",
    ],
    whyItMatters:
      "As AI regulation increases globally, organizations need professionals who can navigate the intersection of technology, ethics, and compliance.",
    technicalSkills: ["AI auditing", "Fairness metrics", "Regulatory frameworks", "Risk assessment", "Data governance"],
    humanSkills: ["Ethical reasoning", "Policy writing", "Cross-functional communication", "Negotiation"],
    tools: ["AI audit platforms", "Bias detection tools", "Compliance frameworks", "Documentation systems"],
    currentRelevance:
      "Growing — regulatory pressure (EU AI Act, US executive orders) is accelerating demand.",
    futureDirection:
      "Expected to become a required function in organizations above a certain scale, similar to data protection officers.",
  },
  {
    id: "data-privacy-engineer",
    title: "Data Privacy Engineer",
    category: "security",
    description:
      "Implements technical systems that protect user privacy, ensure data compliance, and enable responsible data use in AI and analytics pipelines.",
    responsibilities: [
      "Implement privacy-preserving data architectures",
      "Build consent management and data lifecycle systems",
      "Ensure compliance with GDPR, CCPA, and emerging privacy regulations",
      "Design anonymization and differential privacy mechanisms",
      "Audit data flows across AI and analytics systems",
    ],
    whyItMatters:
      "AI systems require large amounts of data — privacy engineering ensures this data is used responsibly and legally.",
    technicalSkills: ["Privacy engineering", "Encryption", "Data anonymization", "Regulatory compliance", "Audit systems"],
    humanSkills: ["Attention to detail", "Ethical awareness", "Legal interpretation"],
    tools: ["Privacy-enhancing technologies", "Data catalogs", "Consent management platforms", "Audit tools"],
    currentRelevance:
      "Established — demand has grown steadily with expanding privacy regulations.",
    futureDirection:
      "Will become more complex as AI systems process increasingly diverse and sensitive data types.",
  },
  {
    id: "ai-product-engineer",
    title: "AI Product Engineer",
    category: "product",
    description:
      "Bridges product thinking and AI engineering to build user-facing products that leverage AI effectively while maintaining excellent user experience.",
    responsibilities: [
      "Translate product requirements into AI-powered features",
      "Design user interactions with AI capabilities",
      "Build and iterate on AI-integrated product experiences",
      "Define evaluation metrics for AI feature quality",
      "Balance AI capability with user needs and constraints",
    ],
    whyItMatters:
      "AI technology alone does not create value — it needs to be integrated into products that users actually find helpful and trustworthy.",
    technicalSkills: ["Full-stack development", "AI APIs", "UX engineering", "A/B testing", "Performance optimization"],
    humanSkills: ["Product thinking", "User empathy", "Communication", "Iterative design"],
    tools: ["Modern web frameworks", "AI SDKs", "Analytics platforms", "Design tools", "Prototyping tools"],
    currentRelevance:
      "Growing — as AI features become expected in products, this hybrid skill set is increasingly valuable.",
    futureDirection:
      "Likely to become one of the most in-demand roles as every product incorporates AI capabilities.",
  },
  {
    id: "automation-architect",
    title: "Automation Architect",
    category: "architecture",
    description:
      "Designs end-to-end automation strategies that combine AI, traditional automation, and human processes to optimize organizational workflows.",
    responsibilities: [
      "Assess and prioritize automation opportunities across the organization",
      "Design automation architectures that integrate AI agents, RPA, and human workflows",
      "Establish standards for automation quality, testing, and monitoring",
      "Measure and communicate the impact of automation initiatives",
      "Manage the transition from manual to automated processes",
    ],
    whyItMatters:
      "Effective automation requires architectural thinking — not just applying AI to individual tasks, but designing integrated systems.",
    technicalSkills: ["Workflow orchestration", "Integration architecture", "RPA", "AI agents", "Process modeling"],
    humanSkills: ["Strategic thinking", "Change management", "Stakeholder engagement"],
    tools: ["Workflow platforms", "Integration tools", "Process mining", "Agent frameworks", "Monitoring dashboards"],
    currentRelevance:
      "Moderate — role is evolving from traditional RPA toward AI-integrated automation.",
    futureDirection:
      "Expected to grow as organizations seek to integrate AI agents into broader operational workflows.",
  },
  {
    id: "human-ai-interaction-designer",
    title: "Human-AI Interaction Designer",
    category: "design",
    description:
      "Designs the interactions, interfaces, and experiences through which humans collaborate with AI systems — ensuring clarity, trust, and effective collaboration.",
    responsibilities: [
      "Design intuitive interfaces for AI-powered features",
      "Create interaction patterns for human-AI collaboration",
      "Research and test user mental models of AI behavior",
      "Design transparency and explainability features",
      "Establish design patterns for AI uncertainty and error communication",
    ],
    whyItMatters:
      "The value of AI depends on how well humans can understand, trust, and work with it — interaction design is the bridge.",
    technicalSkills: ["UX design", "Prototyping", "User research", "AI literacy", "Accessibility"],
    humanSkills: ["Empathy", "Communication", "Research methodology", "Ethical reasoning"],
    tools: ["Figma", "Prototyping tools", "User testing platforms", "AI design pattern libraries"],
    currentRelevance:
      "Emerging — recognized as important but not yet widely established as a distinct role.",
    futureDirection:
      "As AI becomes embedded in every product, designing human-AI interaction will become a foundational discipline.",
  },
];

export const roleCategories = [
  { id: "all", label: "All Roles" },
  { id: "engineering", label: "Engineering" },
  { id: "security", label: "Security" },
  { id: "product", label: "Product" },
  { id: "architecture", label: "Architecture" },
  { id: "design", label: "Design" },
] as const;
