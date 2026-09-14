export interface RoadmapPhase {
  phase: string;
  focus: string;
  milestones: string[];
  keyTools: string[];
}

export interface PersonaRoadmap {
  id: "student" | "mid-level" | "switcher";
  title: string;
  tagline: string;
  description: string;
  phases: RoadmapPhase[];
}

export const personaRoadmaps: PersonaRoadmap[] = [
  {
    id: "student",
    title: "Student / New to Tech",
    tagline: "Foundations to Agentic Specialization",
    description:
      "For college students and newcomers entering IT. Focuses on building rock-solid computer science foundations, cloud literacy, and high-leverage AI specialization.",
    phases: [
      {
        phase: "Year 1: Foundations",
        focus: "Computer Science & Logic",
        milestones: [
          "Master Python & modern JavaScript fundamentals",
          "Data structures, algorithms & computational thinking",
          "Version control with Git/GitHub and collaborative PR workflows",
        ],
        keyTools: ["Python", "VS Code", "Git/GitHub", "Linux Basics"],
      },
      {
        phase: "Year 2: Infrastructure",
        focus: "Cloud & Distributed Systems",
        milestones: [
          "Earn foundational cloud cert (AWS Cloud Practitioner or Azure Fundamentals)",
          "Deploy containerized microservices (Docker & Linux networking)",
          "REST API design and database modeling (PostgreSQL / NoSQL)",
        ],
        keyTools: ["AWS / Azure", "Docker", "PostgreSQL", "FastAPI"],
      },
      {
        phase: "Year 3: Intelligence",
        focus: "Applied AI & Low-Code",
        milestones: [
          "Machine learning fundamentals (PyTorch / TensorFlow / Scikit-Learn)",
          "API-driven LLM application development & vector embeddings",
          "Experiment with low-code workflow platforms (n8n, Zapier)",
        ],
        keyTools: ["PyTorch", "OpenAI / Gemini SDKs", "Pinecone / Chroma", "n8n"],
      },
      {
        phase: "Year 4: Capstone & Launch",
        focus: "Specialization & Portfolio",
        milestones: [
          "Build an end-to-end multi-agent capstone project with human-in-the-loop review",
          "Contribute to open-source AI developer tooling",
          "Complete industry internship in AI engineering or cloud platform operations",
        ],
        keyTools: ["LangGraph / AutoGen", "Next.js", "Kubernetes", "CI/CD"],
      },
    ],
  },
  {
    id: "mid-level",
    title: "Mid-Level Developer (5+ Yrs)",
    tagline: "From Manual Coder to Systems Orchestrator",
    description:
      "For experienced developers transitioning from writing boilerplate code manually to architecting, governing, and orchestrating autonomous agent workflows.",
    phases: [
      {
        phase: "Phase 1: Skill Audit",
        focus: "Toolchain Modernization",
        milestones: [
          "Audit legacy patterns and integrate AI-assisted coding daily (Copilot, Cursor)",
          "Benchmark personal velocity: shift time toward system design and code verification",
          "Learn modern prompt engineering, structured outputs, and evaluation metrics",
        ],
        keyTools: ["Cursor / Copilot", "Benchmark Suites", "TypeScript / Python"],
      },
      {
        phase: "Phase 2: Agent Orchestration",
        focus: "Autonomous Workflows",
        milestones: [
          "Master agentic frameworks (LangChain, LangGraph, CrewAI, AutoGen)",
          "Design multi-step tool-use pipelines with deterministic fallback guards",
          "Implement LLMOps observability, token usage monitoring, and latency tuning",
        ],
        keyTools: ["LangGraph", "Langfuse", "vLLM", "Docker / K8s"],
      },
      {
        phase: "Phase 3: Cloud & SRE",
        focus: "Platform Engineering & Scale",
        milestones: [
          "Earn professional cloud architect or DevOps certification (AWS/Azure)",
          "Master GPU resource sizing and Cloud FinOps unit economics",
          "Implement automated testing pipelines for non-deterministic AI outputs",
        ],
        keyTools: ["AWS Solutions Architect", "Terraform", "Kubecost", "Prometheus"],
      },
      {
        phase: "Phase 4: Strategic Impact",
        focus: "Governance, Security & Leadership",
        milestones: [
          "Lead cross-functional initiatives bridging technical AI and legal compliance (EU AI Act)",
          "Implement AI threat modeling, prompt injection defenses, and red-teaming",
          "Mentor junior engineers in systems thinking and AI collaboration",
        ],
        keyTools: ["OWASP AI Top 10", "AI Governance Frameworks", "System Architecture"],
      },
    ],
  },
  {
    id: "switcher",
    title: "Career Switcher (Non-IT to IT)",
    tagline: "Practical Problem Solving to Tech Impact",
    description:
      "For professionals pivoting from non-technical careers into tech. Leverages domain expertise, rapid prototyping, and AI leverage for accelerated job entry.",
    phases: [
      {
        phase: "Phase 1: Code Literacy",
        focus: "Programming Fundamentals",
        milestones: [
          "Complete practical bootcamp or university course in Python or JavaScript",
          "Build basic CRUD web applications and understand relational database queries",
          "Learn fundamental terminal navigation, Git, and collaborative problem solving",
        ],
        keyTools: ["Python", "JavaScript / React", "SQLite / PostgreSQL", "GitHub"],
      },
      {
        phase: "Phase 2: Industry Entry",
        focus: "Cloud Basics & Tech Support",
        milestones: [
          "Attain foundational credentials (CompTIA Security+, AWS Cloud Practitioner, or Azure Fundamentals)",
          "Target entry-level tech roles: Technical Support, QA Automation, or Junior Developer",
          "Practice daily problem-solving on interactive platforms and coding challenges",
        ],
        keyTools: ["AWS / Azure Console", "Postman", "Chrome DevTools", "Jira"],
      },
      {
        phase: "Phase 3: AI Leverage",
        focus: "No-Code Automation & AI APIs",
        milestones: [
          "Automate real business workflows using no-code platforms (Zapier, PowerAutomate, Make)",
          "Build AI-enhanced frontends connecting React components with OpenAI / Gemini APIs",
          "Bridge former domain knowledge (finance, healthcare, marketing) with tech automation",
        ],
        keyTools: ["Make.com / Zapier", "Next.js", "OpenAI / Gemini SDK", "Tailwind CSS"],
      },
      {
        phase: "Phase 4: Portfolio Launch",
        focus: "Demonstrable Value",
        milestones: [
          "Publish 3 live, functional portfolio projects solving genuine user problems",
          "Document system architecture and AI prompts transparently on GitHub",
          "Network through tech communities, hackathons, and LinkedIn technical writing",
        ],
        keyTools: ["Vercel Deployment", "GitHub Portfolio", "Kaggle / Demos"],
      },
    ],
  },
];
