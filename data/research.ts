export interface ResearchItem {
  id: string;
  organization: string;
  report: string;
  year: number;
  type: "evidence" | "forecast" | "scenario";
  keyFinding: string;
  whyItMatters: string;
  sourceUrl: string;
}

export const researchData: ResearchItem[] = [
  {
    id: "wef-future-of-jobs-2025",
    organization: "World Economic Forum",
    report: "Future of Jobs Report 2025",
    year: 2025,
    type: "forecast",
    keyFinding:
      "86% of employers surveyed expect AI and information-processing technologies to transform their business by 2030. The report identifies AI and big data specialists as the fastest-growing roles.",
    whyItMatters:
      "Indicates broad employer consensus that AI will significantly reshape organizational structures and skill requirements within the next five years.",
    sourceUrl: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  },
  {
    id: "stanford-ai-index-2025",
    organization: "Stanford HAI",
    report: "AI Index Report 2025",
    year: 2025,
    type: "evidence",
    keyFinding:
      "AI systems have reached human-level performance on several benchmarks, while industry investment in AI reached $110 billion globally in 2024. However, significant challenges remain in reliability and reasoning.",
    whyItMatters:
      "Demonstrates that AI capabilities are advancing rapidly while highlighting that human oversight remains essential for complex, real-world decision-making.",
    sourceUrl: "https://aiindex.stanford.edu/report/",
  },
  {
    id: "mckinsey-state-of-ai-2024",
    organization: "McKinsey & Company",
    report: "The State of AI in 2024",
    year: 2024,
    type: "evidence",
    keyFinding:
      "65% of organizations surveyed report regularly using generative AI — nearly double the percentage from 10 months prior. The most common use cases are in marketing, product development, and IT.",
    whyItMatters:
      "Shows that AI adoption is accelerating across industries, particularly in technical and creative functions, indicating a structural shift in how work is performed.",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    id: "gartner-agentic-ai-2024",
    organization: "Gartner",
    report: "Strategic Technology Trends 2025",
    year: 2024,
    type: "forecast",
    keyFinding:
      "Gartner predicts that by 2028, 33% of enterprise software applications will include agentic AI, up from less than 1% in 2024. Agentic AI is identified as a top strategic technology trend.",
    whyItMatters:
      "Signals a fundamental shift from AI as a conversational tool toward AI as an autonomous actor in enterprise workflows.",
    sourceUrl: "https://www.gartner.com/en/articles/gartner-top-10-strategic-technology-trends-for-2025",
  },
  {
    id: "stackoverflow-survey-2024",
    organization: "Stack Overflow",
    report: "Developer Survey 2024",
    year: 2024,
    type: "evidence",
    keyFinding:
      "76% of developers are using or are planning to use AI tools in their development process. AI-assisted coding tools are now the most commonly adopted new technology category.",
    whyItMatters:
      "Provides direct evidence that the developer community is rapidly integrating AI into daily workflows, making AI proficiency an expected skill.",
    sourceUrl: "https://survey.stackoverflow.co/2024/",
  },
  {
    id: "deloitte-tech-trends-2025",
    organization: "Deloitte",
    report: "Tech Trends 2025",
    year: 2025,
    type: "forecast",
    keyFinding:
      "Organizations are moving from AI experimentation to enterprise-wide integration, treating AI as a core business capability rather than a peripheral tool.",
    whyItMatters:
      "Indicates that AI is transitioning from optional innovation to operational necessity, reshaping how technology teams are structured and managed.",
    sourceUrl: "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html",
  },
  {
    id: "mckinsey-automation-potential",
    organization: "McKinsey Global Institute",
    report: "The Economic Potential of Generative AI",
    year: 2023,
    type: "forecast",
    keyFinding:
      "Generative AI could automate 60–70% of employee work activities, with the greatest impact on knowledge work, including software development, content creation, and data analysis.",
    whyItMatters:
      "Highlights that knowledge work — traditionally considered resistant to automation — is now significantly affected by AI capabilities.",
    sourceUrl: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    id: "github-copilot-research",
    organization: "GitHub",
    report: "Research: Quantifying GitHub Copilot's Impact",
    year: 2024,
    type: "evidence",
    keyFinding:
      "Developers using AI coding assistants complete tasks up to 55% faster, with the most significant productivity gains in repetitive and well-defined coding tasks.",
    whyItMatters:
      "Demonstrates measurable productivity gains from AI-assisted development, supporting the shift toward AI-augmented workflows.",
    sourceUrl: "https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/",
  },
  {
    id: "idc-ai-spending-2024",
    organization: "IDC",
    report: "Worldwide AI Spending Guide",
    year: 2024,
    type: "evidence",
    keyFinding:
      "Global spending on AI solutions is forecast to reach $632 billion by 2028, with a compound annual growth rate of 29%. Software and services represent the largest investment categories.",
    whyItMatters:
      "Investment trends confirm that organizations are committed to AI transformation at scale, creating sustained demand for AI-related skills.",
    sourceUrl: "https://www.idc.com/getdoc.jsp?containerId=prUS52416424",
  },
  {
    id: "wef-reskilling-2025",
    organization: "World Economic Forum",
    report: "Future of Jobs Report 2025 — Skills Outlook",
    year: 2025,
    type: "forecast",
    keyFinding:
      "Analytical thinking, resilience, flexibility, and AI/big data skills are identified as the most important skills for the future workforce. 59% of workers will need reskilling by 2030.",
    whyItMatters:
      "Underscores that the shift is not only about new roles but about every professional evolving their skill set — continuous learning becomes essential.",
    sourceUrl: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  },
  {
    id: "kornferry-talent-shortage-2030",
    organization: "Korn Ferry",
    report: "The $8.5 Trillion Talent Shortage",
    year: 2025,
    type: "forecast",
    keyFinding:
      "Projects an 85M+ skilled tech worker deficit globally by 2030, threatening $8.5 trillion in unrealized annual revenue if organizations and institutions fail to educate and upskill workers.",
    whyItMatters:
      "Demonstrates that AI does not simply eliminate work; it creates an unprecedented demand for skilled professionals who can direct, govern, and orchestrate intelligent systems.",
    sourceUrl: "https://www.kornferry.com/insights/this-week-in-leadership/talent-crunch-future-of-work",
  },
  {
    id: "mckinsey-skill-partnerships-2025",
    organization: "McKinsey Global Institute",
    report: "Agents, Robots, and Us: Skill Partnerships in the Age of AI",
    year: 2025,
    type: "evidence",
    keyFinding:
      "Current AI capabilities can technically automate roughly 57% of US work hours today. However, maximum organizational performance comes from human-agent collaborative partnerships rather than direct worker displacement.",
    whyItMatters:
      "Reframes technology change from job loss to role evolution, emphasizing systems orchestration, judgment, and oversight as core competencies.",
    sourceUrl: "https://www.mckinsey.com/mgi/overview",
  },
  {
    id: "stanford-agentic-ai-surge",
    organization: "Stanford HAI / Lightcast",
    report: "Agentic AI & Emerging Labor Index",
    year: 2026,
    type: "evidence",
    keyFinding:
      "Job postings demanding Agentic AI skills surged by +280% in one year. AI skills now appear in 2.5% of all US job postings — a 297% jump since 2013 and up 55% year-over-year.",
    whyItMatters:
      "Provides hard market data showing that enterprise hiring is pivoting rapidly toward autonomous multi-step agent design and orchestration.",
    sourceUrl: "https://aiindex.stanford.edu/",
  },
  {
    id: "gartner-cloud-ai-2029",
    organization: "Gartner",
    report: "Top Trends in Cloud Computing to 2029",
    year: 2025,
    type: "forecast",
    keyFinding:
      "50% of all cloud computing resources will support AI/ML workloads by 2029, while 70% of new enterprise applications will be built using low-code/no-code platforms.",
    whyItMatters:
      "Proves infrastructure is shifting toward AI-native compute and edge-cloud hybrids, while routine app development is democratized to citizen developers.",
    sourceUrl: "https://www.gartner.com/en/newsroom",
  },
  {
    id: "idc-spatial-computing-2030",
    organization: "IDC",
    report: "Worldwide Augmented and Virtual Reality Headset Forecast",
    year: 2026,
    type: "forecast",
    keyFinding:
      "Enterprise XR headset shipments will grow from 3.2M to 10.4M by 2030 (34% CAGR), led by enterprise smart glasses shipments leaping from 3M to 12.2M units at a 41.9% CAGR.",
    whyItMatters:
      "Signals that spatial computing (AR/VR) will become a dominant human interface for remote collaboration, 3D systems engineering, and virtual data visualization.",
    sourceUrl: "https://www.idc.com/",
  },
  {
    id: "isc2-cybersecurity-gap",
    organization: "ISC2",
    report: "Cybersecurity Workforce Study",
    year: 2025,
    type: "evidence",
    keyFinding:
      "Over 95% of organizations report critical cybersecurity skill gaps. AI has simultaneously enabled automated attacker campaigns while making AI-driven security operations (AI-SecOps) essential.",
    whyItMatters:
      "Identifies security as the single highest-priority constraint on AI adoption, driving immense demand for professionals fluent in AI threat mitigation and regulatory compliance.",
    sourceUrl: "https://www.isc2.org/research",
  },
];
