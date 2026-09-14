export interface DayEntry {
  time: string;
  title: string;
  description: string;
  actor: "human" | "ai" | "collaborative";
  details: string[];
}

export const dayInLifeData: DayEntry[] = [
  {
    time: "08:30",
    title: "AI Prepares the Work Briefing",
    description:
      "Before the workday begins, an AI system has analyzed overnight production metrics, support tickets, code repository activity, and team priorities to generate a structured morning briefing.",
    actor: "ai",
    details: [
      "Production health summary — no critical incidents detected",
      "3 pull requests awaiting review (AI pre-reviewed, flagged 1 potential issue)",
      "Sprint priorities updated based on stakeholder feedback",
      "Security scan completed — no vulnerabilities found",
    ],
  },
  {
    time: "09:00",
    title: "Developer Reviews System Priorities",
    description:
      "The developer reviews the AI-generated briefing, validates priorities, adjusts the day's plan based on context the AI may not have, and makes judgment calls on what matters most.",
    actor: "human",
    details: [
      "Reviews AI-flagged issue — confirms it's a valid concern",
      "Re-prioritizes one feature based on customer conversation from yesterday",
      "Decides to address the architectural concern before new feature work",
      "Messages team lead about a strategic decision that needs discussion",
    ],
  },
  {
    time: "10:00",
    title: "AI Agent Implements a Feature",
    description:
      "An AI agent begins implementing a well-defined feature based on approved specifications. The agent writes code, creates tests, and follows established architectural patterns.",
    actor: "ai",
    details: [
      "Agent generates implementation based on approved design document",
      "Creates unit and integration tests automatically",
      "Follows team's established code style and patterns",
      "Flags areas where the specification was ambiguous for human review",
    ],
  },
  {
    time: "11:00",
    title: "Developer Reviews Architecture and Security",
    description:
      "The developer reviews the AI agent's work, focusing on architectural decisions, security implications, and edge cases the AI may not have considered.",
    actor: "human",
    details: [
      "Reviews generated code for architectural alignment",
      "Identifies an edge case the agent missed — adds a note for refinement",
      "Validates security considerations in the implementation",
      "Approves the overall approach, requests one structural change",
    ],
  },
  {
    time: "13:00",
    title: "Global Team Collaboration",
    description:
      "A cross-timezone team sync brings together human team members and AI assistants. The AI provides real-time context, summaries, and action item tracking.",
    actor: "collaborative",
    details: [
      "AI generates a pre-meeting summary of ongoing work across all team members",
      "Team discusses strategic direction for next quarter's architecture",
      "AI captures action items and assigns follow-ups automatically",
      "Human team lead makes final decisions on resource allocation",
    ],
  },
  {
    time: "15:00",
    title: "AI-Driven Testing and Validation",
    description:
      "Automated testing pipelines run comprehensive validation — including AI-generated edge case tests, security scans, and performance benchmarks.",
    actor: "ai",
    details: [
      "AI generates additional test cases based on code change analysis",
      "Performance regression testing runs automatically",
      "Security vulnerability scan completes with no critical findings",
      "AI provides a confidence score and test coverage summary",
    ],
  },
  {
    time: "16:00",
    title: "Human Approval and Decision",
    description:
      "The developer reviews test results, makes the final deployment decision, and takes accountability for releasing the change to production.",
    actor: "human",
    details: [
      "Reviews comprehensive test and security report",
      "Evaluates potential impact on dependent systems",
      "Makes the decision to proceed with deployment",
      "Signs off on the change — human accountability maintained",
    ],
  },
  {
    time: "17:00",
    title: "Automated Deployment",
    description:
      "The deployment pipeline executes automatically with blue-green deployment, canary rollout, and automated rollback capabilities.",
    actor: "ai",
    details: [
      "Blue-green deployment initiated with canary traffic at 5%",
      "AI monitors error rates, latency, and user experience metrics",
      "Gradual traffic increase to 100% over 30 minutes",
      "Deployment complete — all metrics within expected ranges",
    ],
  },
  {
    time: "18:00",
    title: "AI Monitors Production",
    description:
      "AI systems take over production monitoring, watching for anomalies, performance degradation, and potential issues while the developer ends their workday.",
    actor: "ai",
    details: [
      "Continuous monitoring of application health and performance",
      "Anomaly detection active for traffic patterns and error rates",
      "Auto-scaling adjustments based on predicted traffic patterns",
      "Human on-call will be alerted only if critical thresholds are breached",
    ],
  },
];

export interface WorkplaceComponent {
  id: string;
  label: string;
  description: string;
  details: string[];
  color: string;
}

export const workplaceComponents: WorkplaceComponent[] = [
  {
    id: "human-team",
    label: "Human Team",
    description:
      "Cross-functional teams of IT professionals who define strategy, make decisions, and oversee AI-driven operations.",
    details: [
      "Distributed global teams working across time zones",
      "Roles defined by outcomes, not rigid job descriptions",
      "Continuous learning integrated into daily work",
      "Human judgment applied at critical decision points",
    ],
    color: "#2563EB",
  },
  {
    id: "ai-workspace",
    label: "AI Workspace",
    description:
      "An intelligent development environment where AI tools assist with coding, analysis, documentation, and problem-solving.",
    details: [
      "AI-powered IDE with context-aware code suggestions",
      "Natural language interface for complex queries",
      "Automated documentation and knowledge management",
      "Real-time collaboration between human and AI contributors",
    ],
    color: "#14B8A6",
  },
  {
    id: "agents",
    label: "AI Agents",
    description:
      "Autonomous AI agents that execute defined workflows — from code implementation to testing to deployment — with human oversight.",
    details: [
      "Task-specific agents for coding, testing, and deployment",
      "Multi-step workflow execution with checkpoint approvals",
      "Self-monitoring with escalation to human supervisors",
      "Continuous improvement through feedback loops",
    ],
    color: "#7C3AED",
  },
  {
    id: "cloud",
    label: "Cloud Infrastructure",
    description:
      "Scalable, intelligent cloud platforms that automatically manage resources, optimize costs, and adapt to workload changes.",
    details: [
      "Auto-scaling infrastructure managed by AI",
      "Multi-cloud and edge computing deployment",
      "Self-healing systems that detect and resolve issues",
      "Cost optimization through intelligent resource management",
    ],
    color: "#2563EB",
  },
  {
    id: "data",
    label: "Data Layer",
    description:
      "A unified data platform that feeds AI systems, supports analytics, and maintains data quality and governance.",
    details: [
      "Real-time data pipelines for AI model training and inference",
      "Data quality monitoring and automated cleaning",
      "Privacy-preserving data access and governance",
      "Federated data across organizational boundaries",
    ],
    color: "#14B8A6",
  },
  {
    id: "security",
    label: "Security",
    description:
      "AI-enhanced security systems that continuously monitor, detect threats, and enforce compliance across the entire stack.",
    details: [
      "AI-powered threat detection and incident response",
      "Automated security scanning at every deployment stage",
      "Zero-trust architecture with continuous verification",
      "AI model security — defending against adversarial attacks",
    ],
    color: "#F59E0B",
  },
  {
    id: "production",
    label: "Production",
    description:
      "The live environment where applications run, monitored by AI systems with human oversight for critical decisions.",
    details: [
      "AI-driven observability and anomaly detection",
      "Automated incident response with human escalation",
      "Continuous optimization of performance and reliability",
      "Feedback loops that improve both AI and human processes",
    ],
    color: "#16A34A",
  },
];
