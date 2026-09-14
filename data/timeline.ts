export interface TimelineEntry {
  year: string;
  label: string;
  signal: string;
  description: string;
  techTrend: string;
  workplaceImpact: string;
  developerImpact: string;
  skillsImpact: string;
  researchRef: string;
}

export const timelineData: TimelineEntry[] = [
  {
    year: "2026",
    label: "AI-Assisted Development",
    signal: "Human + Tools",
    description:
      "AI coding assistants are widely adopted across the industry. Developers use AI to accelerate routine tasks while retaining full ownership of architecture and decision-making.",
    techTrend:
      "AI code completion and generation tools become standard in most IDEs. Large language models are integrated into development workflows.",
    workplaceImpact:
      "Teams begin restructuring around AI-assisted workflows. Junior developer roles shift toward AI-guided code review and validation.",
    developerImpact:
      "Developers spend less time on boilerplate code. Prompt engineering becomes a practical skill alongside traditional programming.",
    skillsImpact:
      "AI tool proficiency becomes expected. Understanding model capabilities and limitations is increasingly valuable.",
    researchRef:
      "Stack Overflow Developer Survey 2024 — 76% of developers use or plan to use AI tools in their workflow.",
  },
  {
    year: "2027",
    label: "AI Embedded into Workflows",
    signal: "AI-assisted workflows",
    description:
      "AI moves beyond code generation into testing, documentation, code review, and project management. Entire development workflows incorporate intelligent automation.",
    techTrend:
      "AI-powered CI/CD pipelines, automated code review systems, and intelligent project management tools gain adoption.",
    workplaceImpact:
      "Development teams become smaller but more productive. Cross-functional collaboration increases as AI handles routine coordination.",
    developerImpact:
      "Developers shift toward higher-level system design. The ability to evaluate AI-generated outputs becomes critical.",
    skillsImpact:
      "System design thinking grows in importance. Developers need to understand when to trust and when to override AI suggestions.",
    researchRef:
      "McKinsey Global Institute — research indicates generative AI could automate 60-70% of employee work activities across industries.",
  },
  {
    year: "2028",
    label: "Agentic Workflows Emerge",
    signal: "AI agents",
    description:
      "AI agents capable of executing multi-step tasks begin operating in production environments. Agents handle defined workflows with human oversight.",
    techTrend:
      "Autonomous AI agents handle complex task sequences — from bug triage to deployment pipelines — with human checkpoints at critical decisions.",
    workplaceImpact:
      "New roles emerge around agent supervision, governance, and orchestration. Teams restructure to manage both human and AI workers.",
    developerImpact:
      "Developers become orchestrators of AI-driven systems rather than sole implementers. Architecture and oversight skills gain prominence.",
    skillsImpact:
      "Agent orchestration, workflow design, and AI governance become emerging skill categories.",
    researchRef:
      "Gartner predicts that by 2028, 33% of enterprise software applications will include agentic AI capabilities.",
  },
  {
    year: "2029",
    label: "Human + AI Operational Collaboration",
    signal: "Human + Agent collaboration",
    description:
      "Organizations establish formal human-AI collaboration frameworks. Teams operate with defined boundaries between human judgment and AI execution.",
    techTrend:
      "AI governance frameworks mature. Standardized protocols emerge for human-AI task allocation, accountability, and decision rights.",
    workplaceImpact:
      "Hybrid teams — where humans and AI agents share workloads — become an operational standard in technology organizations.",
    developerImpact:
      "IT professionals increasingly focus on system architecture, security oversight, ethical AI deployment, and cross-domain problem-solving.",
    skillsImpact:
      "Leadership in human-AI teams, ethical reasoning, and strategic thinking become differentiating skills.",
    researchRef:
      "World Economic Forum Future of Jobs Report 2025 — 86% of employers expect AI to transform their business by 2030.",
  },
  {
    year: "2030",
    label: "AI-Integrated Organizations",
    signal: "AI-integrated organizations",
    description:
      "AI is embedded into organizational structure itself. Technology teams operate as human-AI systems with continuous optimization loops.",
    techTrend:
      "Enterprise platforms natively integrate AI at every layer — from infrastructure management to customer interaction to internal decision-making.",
    workplaceImpact:
      "Traditional departmental boundaries blur. Continuous learning systems enable real-time skill development and role evolution.",
    developerImpact:
      "The IT professional's primary value shifts toward judgment, creativity, stakeholder communication, and managing complex systems.",
    skillsImpact:
      "Adaptive learning, cross-functional expertise, and the ability to work across human-AI boundaries define career advancement.",
    researchRef:
      "Deloitte Tech Trends 2025 — organizations increasingly view AI not as a tool but as a team member integrated into workflows.",
  },
  {
    year: "2030+",
    label: "Continuous Human-Machine Collaboration",
    signal: "Human judgment + intelligent systems",
    description:
      "The boundary between human work and machine work becomes fluid. IT professionals continuously adapt as intelligent systems evolve alongside human expertise.",
    techTrend:
      "Self-improving AI systems, real-time learning environments, and adaptive infrastructure create a continuously evolving technology landscape.",
    workplaceImpact:
      "Work becomes project-based and adaptive. Roles are defined by outcomes rather than fixed job descriptions. Continuous learning replaces periodic upskilling.",
    developerImpact:
      "IT professionals function as systems thinkers who design, oversee, and optimize intelligent systems while maintaining human accountability.",
    skillsImpact:
      "The most valuable professionals combine deep technical knowledge with human judgment, creativity, and the ability to navigate ambiguity.",
    researchRef:
      "Stanford HAI AI Index Report 2025 — AI capabilities continue accelerating while human oversight remains essential for complex decision-making.",
  },
];
