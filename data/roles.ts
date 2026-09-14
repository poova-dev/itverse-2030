export interface Role {
  id: string;
  title: string;
  category: "engineering" | "security" | "product" | "architecture" | "design";
  demandGrowth?: string;
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
    demandGrowth: "~+400% by 2030",
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
    demandGrowth: "~+420% by 2030",
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
    demandGrowth: "~+400% by 2030",
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
    title: "Cybersecurity AI Analyst / Engineer",
    category: "security",
    demandGrowth: "~+300% by 2030",
    description:
      "Protects AI systems from adversarial attacks, data poisoning, prompt injection, and automated cyber threats while leveraging AI for automated threat detection.",
    responsibilities: [
      "Assess and mitigate AI-specific security vulnerabilities",
      "Implement prompt injection defenses and content filtering",
      "Design secure AI system architectures",
      "Hunt AI-driven threats and configure automated security detection",
      "Develop AI security policies and incident response plans",
    ],
    whyItMatters:
      "95% of organizations face cybersecurity skill gaps while attackers scale exploits with AI — making AI-SecOps defensive expertise essential.",
    technicalSkills: ["AI security frameworks", "Adversarial ML", "Prompt injection defense", "Security+ / CySA+", "Threat hunting"],
    humanSkills: ["Threat modeling", "Ethical reasoning", "High-stress communication"],
    tools: ["AI red-teaming frameworks", "Security scanners", "SIEM/SOAR platforms", "OWASP AI guidelines"],
    currentRelevance:
      "Critical — rapidly accelerating with AI-generated exploits.",
    futureDirection:
      "Mandatory function in every enterprise deploying autonomous agents or sensitive data pipelines.",
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    category: "architecture",
    demandGrowth: "~+310% by 2030",
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
      "Gartner forecasts 50% of cloud resources will run AI/ML by 2029 — infrastructure architecture is the backbone of the intelligent enterprise.",
    technicalSkills: ["Cloud platforms (AWS/Azure/GCP)", "Infrastructure as code", "Kubernetes", "FinOps", "Edge computing"],
    humanSkills: ["Strategic thinking", "Stakeholder management", "Technical leadership"],
    tools: ["AWS/Azure/GCP", "Terraform", "Kubernetes", "Cloud-native monitoring", "FinOps tools"],
    currentRelevance:
      "Established — evolving rapidly with AI workload requirements.",
    futureDirection:
      "Will increasingly focus on specialized AI silicon, edge computing, and sovereign cloud fabrics.",
  },
  {
    id: "cloud-finops-specialist",
    title: "Cloud FinOps Specialist",
    category: "architecture",
    demandGrowth: "~+340% by 2030",
    description:
      "Analyzes and optimizes cloud consumption and AI workload unit economics, enforcing cost guardrails and maximizing ROI on generative AI and GPU infrastructure.",
    responsibilities: [
      "Analyze multi-cloud usage patterns and AI training/inference costs",
      "Implement automated budget alerts, anomaly detection, and cost guardrails",
      "Collaborate with AI engineering teams to optimize GPU allocation and token usage",
      "Establish FinOps governance metrics across cloud architectures",
      "Forecast technology infrastructure investments and cloud vendor commitments",
    ],
    whyItMatters:
      "With AI compute expenses expanding exponentially, organizations need specialists to ensure that intelligent infrastructure remains financially sustainable.",
    technicalSkills: ["Multi-cloud architecture (AWS/Azure/GCP)", "Cost analytics", "Kubernetes resource sizing", "SQL/BI tools", "FinOps tooling"],
    humanSkills: ["Cross-functional negotiation", "Strategic financial planning", "Communication"],
    tools: ["FinOps Foundation standards", "AWS Cost Explorer", "Kubecost", "Datadog Cloud Cost", "Terraform"],
    currentRelevance: "High — rising as AI infrastructure expenses pressure enterprise budgets.",
    futureDirection: "Will become an indispensable partner to engineering and finance leadership.",
  },
  {
    id: "ai-governance-specialist",
    title: "AI Ethics & Governance Specialist",
    category: "product",
    demandGrowth: "~+350% by 2030",
    description:
      "Develops and enforces policies, standards, and frameworks that ensure AI systems are deployed responsibly, ethically, and in compliance with regulations like the EU AI Act.",
    responsibilities: [
      "Define organizational AI governance policies and ethical guardrails",
      "Design AI audit trails and assess models for bias and compliance",
      "Manage AI risk, transparency disclosures, and ethical review processes",
      "Monitor global regulatory developments (EU AI Act, GDPR, NIST)",
      "Bridge technical AI teams with legal, risk, and executive compliance functions",
    ],
    whyItMatters:
      "Global compliance mandates make ethical oversight, fairness metrics, and liability management existential for enterprises deploying AI.",
    technicalSkills: ["AI auditing", "Fairness metrics", "Regulatory frameworks", "Risk assessment", "Data governance"],
    humanSkills: ["Ethical reasoning", "Policy writing", "Cross-functional communication", "Negotiation"],
    tools: ["AI audit platforms", "Bias detection tools", "Compliance frameworks", "Documentation systems"],
    currentRelevance:
      "Surging — regulatory enforcement is accelerating global demand.",
    futureDirection:
      "Will function similarly to corporate data protection and chief compliance officers.",
  },
  {
    id: "data-privacy-engineer",
    title: "Data Privacy Engineer",
    category: "security",
    demandGrowth: "~+310% by 2030",
    description:
      "Implements technical systems that protect user privacy, ensure regulatory compliance, and enable responsible data use in AI and analytics pipelines.",
    responsibilities: [
      "Implement privacy-preserving data architectures and anonymization",
      "Build consent management and data lifecycle systems",
      "Ensure compliance with GDPR, CCPA, and emerging global privacy laws",
      "Design differential privacy mechanisms and data masking layers",
      "Audit data flows across AI training sets and analytics systems",
    ],
    whyItMatters:
      "AI systems rely on immense datasets — privacy engineering guarantees data utility while rigorously protecting individual rights.",
    technicalSkills: ["Privacy engineering", "Encryption", "Data anonymization", "Differential privacy", "Audit systems"],
    humanSkills: ["Attention to detail", "Ethical awareness", "Legal interpretation"],
    tools: ["Privacy-enhancing technologies", "Data catalogs", "Consent management platforms", "Audit tools"],
    currentRelevance:
      "Established — expanding rapidly with enterprise AI data ingestion.",
    futureDirection:
      "Will incorporate cryptographic privacy (homomorphic encryption, zero-knowledge proofs).",
  },
  {
    id: "no-code-automation-specialist",
    title: "No-Code / Automation Specialist",
    category: "product",
    demandGrowth: "~+380% by 2030",
    description:
      "Designs and deploys automated workflows, connecting enterprise SaaS tools, databases, and AI capabilities without writing manual boilerplate code.",
    responsibilities: [
      "Architect cross-platform workflows connecting CRM, ERP, and communication tools",
      "Embed AI actions, document parsing, and agentic triggers into business processes",
      "Empower and govern citizen developers across business departments",
      "Eliminate repetitive manual tasks across operations and development",
      "Maintain data integrity and security across automated integration hooks",
    ],
    whyItMatters:
      "Gartner forecasts 70% of new enterprise apps will leverage low-code/no-code by 2026. Specialists accelerate business velocity while freeing developers for core architectures.",
    technicalSkills: ["Workflow logic", "REST APIs & Webhooks", "Data mapping", "Prompt engineering", "Authentication (OAuth)"],
    humanSkills: ["Business process analysis", "User training", "Agile problem solving"],
    tools: ["Zapier", "Make.com", "n8n", "Microsoft PowerAutomate", "Airtable"],
    currentRelevance: "Established & accelerating — critical for bridging business teams and tech capabilities.",
    futureDirection: "Will evolve into autonomous agent orchestration across decentralized business software.",
  },
  {
    id: "autonomous-systems-governance-engineer",
    title: "Autonomous Systems Governance Engineer",
    category: "security",
    demandGrowth: "~+320% by 2030",
    description:
      "Defines deterministic safety boundaries, audit trails, and legal accountability frameworks for autonomous systems, robotics, drones, and agentic software loops.",
    responsibilities: [
      "Define operational safety limits and fallback protocols for autonomous systems",
      "Design tamper-proof audit trails for AI decision-making loops",
      "Ensure compliance with international safety, robotics, and aerospace regulations",
      "Perform fail-safe simulation tests and automated chaos experiments",
      "Bridge systems engineering with legal accountability and risk management",
    ],
    whyItMatters:
      "When autonomous software and physical systems take real-world actions, safety, liability, and governance become mission-critical engineering requirements.",
    technicalSkills: ["Systems engineering", "Formal verification", "Risk modeling", "Simulation environments", "Audit log architecture"],
    humanSkills: ["Ethical rigor", "High-stakes judgment", "Regulatory translation"],
    tools: ["ROS 2", "Digital twins", "Formal verification suites", "Compliance frameworks"],
    currentRelevance: "Emerging — accelerating with physical AI, autonomous transport, and agentic automation.",
    futureDirection: "Will become a foundational role as autonomous decision-making expands into mission-critical infrastructure.",
  },
  {
    id: "ai-product-engineer",
    title: "AI Product Engineer",
    category: "product",
    demandGrowth: "~+360% by 2030",
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
      "AI models provide raw potential; product engineers turn that potential into intuitive, dependable software that delivers real human value.",
    technicalSkills: ["Full-stack development", "AI APIs", "UX engineering", "A/B testing", "Performance optimization"],
    humanSkills: ["Product thinking", "User empathy", "Communication", "Iterative design"],
    tools: ["Modern web frameworks", "AI SDKs", "Analytics platforms", "Design tools", "Prototyping tools"],
    currentRelevance:
      "High — hybrid engineering/product talent is among the most sought after in tech.",
    futureDirection:
      "Will redefine product development into continuous human-AI experience optimization.",
  },
  {
    id: "automation-architect",
    title: "Automation Architect",
    category: "architecture",
    demandGrowth: "~+380% by 2030",
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
    demandGrowth: "~+290% by 2030",
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
