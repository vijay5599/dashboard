import { 
  KpiMetric, 
  GrowthDataPoint, 
  CohortData, 
  CustomerLogo, 
  CapTableStakeholder, 
  SyndicateCommitment, 
  PitchSlide, 
  DataRoomDoc, 
  Milestone 
} from "@/types/pitch";

export const COMPANY_INFO = {
  name: "Aetheria",
  legalName: "Aetheria Systems, Inc.",
  ticker: "SERIES-A",
  tagline: "Autonomous Agentic Infrastructure for High-Throughput Enterprise AI",
  elevatorPitch: "Aetheria enables Fortune 500 enterprises to deploy deterministic, multi-agent AI workflows into mission-critical production with zero-latency state synchronization, self-healing runtime guarantees, and verifiable security.",
  foundedYear: "2023",
  location: "San Francisco, CA & New York, NY",
  headcount: 24,
  founders: [
    {
      name: "Dr. Elena Vance",
      role: "Co-Founder & CEO",
      prev: "Ex-Staff Research Lead @ DeepMind, PhD Stanford AI",
      avatar: "EV",
    },
    {
      name: "Marcus Thorne",
      role: "Co-Founder & CTO",
      prev: "Ex-Principal Distributed Systems Architect @ Stripe",
      avatar: "MT",
    },
    {
      name: "Sarah Lin",
      role: "VP of Engineering",
      prev: "Ex-Senior Eng Director @ Databricks",
      avatar: "SL",
    }
  ],
  roundDetails: {
    roundName: "Series A Preferred",
    targetAmount: 8500000,
    committedAmount: 5850000,
    preMoneyValuation: 42000000,
    postMoneyValuation: 50500000,
    leadInvestor: "Horizon Apex Capital",
    leadTermSheetSigned: true,
    minCheckSize: 250000,
    closingDate: "Q3 2026 (In 28 Days)",
    currentRunwayMonths: 24,
    grossMarginPercent: 88.4,
    nrrPercent: 142,
    magicNumber: 1.84,
    ruleOf40Score: 68.2,
    cacPaybackMonths: 5.4,
  }
};

export const KPI_METRICS: KpiMetric[] = [
  {
    id: "arr",
    label: "Current ARR",
    value: "$4,850,000",
    subtext: "Annual Recurring Revenue",
    change: "+245% YoY",
    isPositive: true,
    sparkline: [1.1, 1.4, 1.8, 2.3, 2.9, 3.6, 4.2, 4.85],
    category: "growth"
  },
  {
    id: "nrr",
    label: "Net Retention (NRR)",
    value: "142.4%",
    subtext: "Best-in-class SaaS benchmark (>130%)",
    change: "+12.1% YoY",
    isPositive: true,
    sparkline: [118, 122, 126, 131, 136, 139, 142.4],
    category: "retention"
  },
  {
    id: "gross_margin",
    label: "Gross Margin",
    value: "88.4%",
    subtext: "Pure software, optimized GPU inference",
    change: "+4.2% YoY",
    isPositive: true,
    sparkline: [81, 83, 84, 86, 87, 88.4],
    category: "efficiency"
  },
  {
    id: "cac_payback",
    label: "CAC Payback",
    value: "5.4 mo",
    subtext: "Top-decile enterprise velocity",
    change: "-1.8 mo improvement",
    isPositive: true,
    sparkline: [9.2, 8.1, 7.4, 6.8, 6.0, 5.4],
    category: "efficiency"
  },
  {
    id: "ltv_cac",
    label: "LTV / CAC Ratio",
    value: "7.8x",
    subtext: "Sustainable capital efficiency",
    change: "+1.9x YoY",
    isPositive: true,
    sparkline: [4.2, 4.8, 5.5, 6.1, 7.0, 7.8],
    category: "efficiency"
  },
  {
    id: "net_burn",
    label: "Net Monthly Burn",
    value: "$118,000",
    subtext: "24.5 Months Runway at current cash",
    change: "Highly Capital Efficient",
    isPositive: true,
    sparkline: [145, 140, 132, 128, 121, 118],
    category: "cash"
  },
  {
    id: "rule_40",
    label: "Rule of 40 Score",
    value: "68.2%",
    subtext: "Growth Rate (245%) + FCF Margin (-176%)",
    change: "Upper Quartile",
    isPositive: true,
    sparkline: [48, 52, 58, 62, 65, 68.2],
    category: "efficiency"
  },
  {
    id: "acv",
    label: "Average ACV",
    value: "$84,200",
    subtext: "48 Active Enterprise Customers",
    change: "+48% YoY",
    isPositive: true,
    sparkline: [38, 45, 54, 62, 73, 84.2],
    category: "growth"
  }
];

export const GROWTH_TRAJECTORY: GrowthDataPoint[] = [
  { month: "Q1 '24", arr: 1.2, mrr: 0.10, conservativeArr: 1.2, bullArr: 1.2, customers: 14, netBurn: 145 },
  { month: "Q2 '24", arr: 1.8, mrr: 0.15, conservativeArr: 1.7, bullArr: 1.9, customers: 20, netBurn: 140 },
  { month: "Q3 '24", arr: 2.6, mrr: 0.21, conservativeArr: 2.3, bullArr: 2.9, customers: 28, netBurn: 135 },
  { month: "Q4 '24", arr: 3.5, mrr: 0.29, conservativeArr: 3.0, bullArr: 3.9, customers: 36, netBurn: 128 },
  { month: "Q1 '25 (Now)", arr: 4.85, mrr: 0.40, conservativeArr: 4.85, bullArr: 4.85, customers: 48, netBurn: 118 },
  { month: "Q2 '25 (Proj)", arr: 6.4, mrr: 0.53, conservativeArr: 5.8, bullArr: 7.2, customers: 62, netBurn: 155 },
  { month: "Q3 '25 (Proj)", arr: 8.5, mrr: 0.70, conservativeArr: 7.1, bullArr: 10.4, customers: 81, netBurn: 190 },
  { month: "Q4 '25 (Proj)", arr: 11.2, mrr: 0.93, conservativeArr: 8.9, bullArr: 14.5, customers: 104, netBurn: 220 },
  { month: "Q1 '26 (Proj)", arr: 14.8, mrr: 1.23, conservativeArr: 11.2, bullArr: 19.8, customers: 132, netBurn: 250 },
  { month: "Q2 '26 (Proj)", arr: 19.5, mrr: 1.62, conservativeArr: 14.0, bullArr: 26.5, customers: 168, netBurn: 280 },
  { month: "Q3 '26 (Proj)", arr: 25.4, mrr: 2.11, conservativeArr: 17.5, bullArr: 35.0, customers: 210, netBurn: 310 },
  { month: "Q4 '26 (Proj)", arr: 32.8, mrr: 2.73, conservativeArr: 21.8, bullArr: 46.2, customers: 265, netBurn: 330 },
];

export const COHORT_DATA: CohortData[] = [
  { cohort: "Q1 2023", size: 6, m0: 100, m3: 108, m6: 119, m9: 128, m12: 138, m15: 146, m18: 154 },
  { cohort: "Q2 2023", size: 8, m0: 100, m3: 106, m6: 115, m9: 125, m12: 134, m15: 142, m18: 149 },
  { cohort: "Q3 2023", size: 11, m0: 100, m3: 112, m6: 122, m9: 132, m12: 141, m15: 151, m18: 158 },
  { cohort: "Q4 2023", size: 14, m0: 100, m3: 110, m6: 120, m9: 130, m12: 140, m15: 148, m18: 156 },
  { cohort: "Q1 2024", size: 18, m0: 100, m3: 114, m6: 125, m9: 136, m12: 147, m15: 157, m18: 164 },
  { cohort: "Q2 2024", size: 24, m0: 100, m3: 112, m6: 123, m9: 134, m12: 145, m15: 153, m18: 160 },
  { cohort: "Q3 2024", size: 32, m0: 100, m3: 116, m6: 128, m9: 139, m12: 149, m15: 159, m18: 166 },
];

export const CUSTOMER_LOGOS: CustomerLogo[] = [
  { id: "1", name: "Vanguard Global Tech", tier: "Enterprise", arr: "$320,000", nrr: "185%", industry: "Fintech & Banking", logoText: "VANGUARD", contractDate: "Jan 2024" },
  { id: "2", name: "Apex DataCloud", tier: "Enterprise", arr: "$280,000", nrr: "164%", industry: "Cloud Infrastructure", logoText: "APEX CLOUD", contractDate: "Mar 2024" },
  { id: "3", name: "Syntropic BioHealth", tier: "Enterprise", arr: "$240,000", nrr: "152%", industry: "Healthcare & Biotech", logoText: "SYNTROPIC", contractDate: "May 2024" },
  { id: "4", name: "Kinetix Logistics AI", tier: "Scale", arr: "$180,000", nrr: "140%", industry: "Supply Chain", logoText: "KINETIX", contractDate: "Aug 2024" },
  { id: "5", name: "Paladin Cyber Systems", tier: "Enterprise", arr: "$310,000", nrr: "190%", industry: "Cybersecurity", logoText: "PALADIN", contractDate: "Nov 2024" },
  { id: "6", name: "Monolith Financial Corp", tier: "Scale", arr: "$195,000", nrr: "138%", industry: "Asset Management", logoText: "MONOLITH", contractDate: "Dec 2024" },
  { id: "7", name: "NovaStream Telecom", tier: "Scale", arr: "$165,000", nrr: "145%", industry: "Telecom & IoT", logoText: "NOVASTREAM", contractDate: "Feb 2025" },
  { id: "8", name: "Axiom Robotics Lab", tier: "Growth", arr: "$120,000", nrr: "135%", industry: "Industrial Robotics", logoText: "AXIOM", contractDate: "Apr 2025" }
];

export const CAP_TABLE: CapTableStakeholder[] = [
  { name: "Elena Vance & Marcus Thorne", role: "Founders & Common Stock", preShares: 6000000, preOwnership: 60.0, postOwnership: 49.9, type: "Founders" },
  { name: "Seed Syndicate (SV Angels)", role: "Seed Preferred", preShares: 2200000, preOwnership: 22.0, postOwnership: 18.3, type: "Seed" },
  { name: "Unallocated Option Pool (ESOP)", role: "Employee Pool (12% Target)", preShares: 1200000, preOwnership: 12.0, postOwnership: 10.0, type: "ESOP" },
  { name: "Advisor Grants", role: "Technical & Strategy Advisors", preShares: 600000, preOwnership: 6.0, postOwnership: 5.0, type: "Advisors" },
  { name: "Series A Syndicate (New Round)", role: "Series A Preferred ($8.5M Target)", preShares: 0, preOwnership: 0.0, postOwnership: 16.8, type: "Series A (Target)" },
];

export const SYNDICATE_COMMITMENTS: SyndicateCommitment[] = [
  { id: "1", investor: "Horizon Apex Capital", type: "Lead VC", amount: 4000000, status: "Term Sheet Signed", logo: "HA", confirmedDate: "Aug 12, 2026" },
  { id: "2", investor: "Vector Core Ventures", type: "Co-Lead", amount: 1500000, status: "Committed", logo: "VC", confirmedDate: "Aug 18, 2026" },
  { id: "3", investor: "Frontier Operator Fund", type: "Strategic Fund", amount: 350000, status: "Committed", logo: "FO", confirmedDate: "Aug 22, 2026" },
  { id: "4", investor: "Tier-1 Cloud Founder Syndicate", type: "Angel / Scout", amount: 500000, status: "In Final Diligence", logo: "CF", confirmedDate: "Aug 24, 2026" },
  { id: "5", investor: "DeepTech Opportunity Fund", type: "Strategic Fund", amount: 750000, status: "Soft Circled", logo: "DT", confirmedDate: "Pending allocation" },
];

export const USE_OF_PROCEEDS = [
  { category: "AI & Distributed Systems R&D", percentage: 48, amount: "$4.08M", details: "12 AI Research & Kernel Engineers, Autonomous agent runtime optimizations, Multi-model orchestration engine" },
  { category: "Enterprise GTM & Global Sales", percentage: 28, amount: "$2.38M", details: "Enterprise Account Executives, Solutions Architects for Fortune 500 deployments, Developer Evangelism" },
  { category: "GPU Cluster & Compute Infrastructure", percentage: 14, amount: "$1.19M", details: "Reserved H100/B200 GPU compute contracts, Global edge nodes, Zero-latency replication mesh" },
  { category: "Security, Compliance & G&A", percentage: 10, amount: "$0.85M", details: "SOC2 Type II, FedRAMP readiness, Patent IP portfolio maintenance, Legal & Treasury management" },
];

export const PITCH_SLIDES: PitchSlide[] = [
  {
    id: 1,
    tag: "01 / EXECUTIVE VISION",
    title: "The OS for Autonomous Enterprise AI",
    subtitle: "Moving beyond toy chatbots to resilient, deterministic multi-agent systems.",
    bulletPoints: [
      "Enterprises are stuck between fragile prompt chains and non-deterministic LLM failures.",
      "Aetheria provides a hardened, kernel-level orchestration substrate for autonomous agent swarms.",
      "Proprietary state-machine architecture ensures zero hallucination leakage into mission-critical DBs.",
      "Already orchestrating 180M+ daily agent transactions for 48 Fortune 1000 customers."
    ],
    keyMetric: { label: "Daily Agent Transactions", value: "180,000,000+", note: "Across 48 enterprise deployments" },
    founderNote: "We position ourselves as the 'Kubernetes of AI Agents'—essential infrastructure that locks in enterprise workflows."
  },
  {
    id: 2,
    tag: "02 / THE PROBLEM",
    title: "Why Enterprise Agentic AI Breaks in Production",
    subtitle: "State drift, unconstrained token loops, and lack of deterministic rollback mechanisms.",
    bulletPoints: [
      "Non-deterministic execution: LLMs hallucinate state mutations, leading to silent data corruption.",
      "Cascading agent deadlocks: Multi-agent handoffs fail without formal verification protocols.",
      "Runaway inference costs: Rogue agent loops drain thousands of dollars in unmonitored API calls.",
      "Compliance wall: Banks and healthcare cannot deploy black-box autonomous agents without immutable audit logs."
    ],
    keyMetric: { label: "Enterprise AI Failure Rate", value: "78%", note: "Projects abandoned before production without hardened orchestration" },
    founderNote: "Every CTO we talk to has an abandoned LangChain/AutoGen pilot. We turn those dead pilots into revenue."
  },
  {
    id: 3,
    tag: "03 / THE SOLUTION",
    title: "Aetheria Deterministic Agent Kernel",
    subtitle: "Fault-tolerant execution, snapshot-and-rollback, and cryptographic verification.",
    bulletPoints: [
      "Snapshot & Rollback Engine: Time-travel debugging for complex multi-agent execution trees.",
      "Constrained Action Shims: Mathematical boundary enforcement on all external API/DB calls.",
      "Sub-millisecond State Mesh: Ultra-low latency memory synchronization across distributed nodes.",
      "One-click Deployment: Drop-in SDK for TypeScript, Python, Go, and Rust with native OpenTelemetry."
    ],
    keyMetric: { label: "Execution Latency Overhead", value: "<1.2ms", note: "Zero observable impact on user experience" },
    founderNote: "Our architecture patent covers state-machine determinism for non-deterministic model outputs."
  },
  {
    id: 4,
    tag: "04 / MARKET OPPORTUNITY",
    title: "A $142B Market Shift Towards Agentic Compute",
    subtitle: "The transition from human-facing copilots to background autonomous systems.",
    bulletPoints: [
      "TAM: $142B Global Enterprise AI & Automation Infrastructure by 2028.",
      "SAM: $38B Enterprise Agent Orchestration, Governance, and Runtime Market.",
      "SOM: $4.2B Focus on High-Security Financial Services, Healthcare, and Tech Hyperscalers.",
      "Tailwind: Agent token consumption is growing 18x faster than traditional conversational chat."
    ],
    keyMetric: { label: "Total Addressable Market", value: "$142 Billion", note: "Compounding at 44.8% CAGR" },
    founderNote: "As inference costs drop towards zero, agent compute volume expands exponentially."
  },
  {
    id: 5,
    tag: "05 / TRACTION & FINANCIALS",
    title: "Exceptional Growth & Capital Efficiency",
    subtitle: "$4.85M ARR (+245% YoY) with 142% Net Revenue Retention.",
    bulletPoints: [
      "$4.85M ARR achieved with only $2.2M total seed capital burned to date.",
      "Net Revenue Retention of 142.4% driven by automatic usage expansion as customer agent swarms scale.",
      "88.4% Gross Margins through proprietary local token caching and model-routing optimizations.",
      "5.4 Month CAC Payback period; 100% inbound enterprise pipeline from developer word-of-mouth."
    ],
    keyMetric: { label: "YoY ARR Growth", value: "+245%", note: "From $1.4M to $4.85M in 12 months" },
    founderNote: "Our land-and-expand motion is unmatched: median account expands 2.6x within 9 months of pilot."
  },
  {
    id: 6,
    tag: "06 / PRODUCT & MOAT",
    title: "Architectural Moat & Defensibility",
    subtitle: "High switching costs, network effects, and deep kernel-level integration.",
    bulletPoints: [
      "Deep Enterprise Lock-in: Once enterprise workflows, security policies, and DB shims are wired in, switching cost is prohibitive.",
      "Proprietary Failure Dataset: 450M+ analyzed agent failure modes train our self-healing routing algorithms.",
      "Multi-Patent Portfolio: 3 granted and 4 pending patents on distributed agent synchronization.",
      "SOC-2 Type II Certified, HIPAA Compliant, ISO 27001 Ready out of the box."
    ],
    keyMetric: { label: "Annual Logo Churn", value: "<1.2%", note: "Zero enterprise tier churn in company history" },
    founderNote: "We sit at the data layer between the LLM and the enterprise DB. That is the highest-value real estate in tech."
  },
  {
    id: 7,
    tag: "07 / TEAM & LEADERSHIP",
    title: "World-Class Systems & AI Researchers",
    subtitle: "Decades of combined experience at DeepMind, Stripe, Databricks, and Stanford AI.",
    bulletPoints: [
      "Dr. Elena Vance (CEO): 8+ years AI research, author of 14 NeurIPS/ICML papers on agentic reasoning.",
      "Marcus Thorne (CTO): Led Stripe's high-reliability distributed ledger scaling to 99.999% uptime.",
      "Sarah Lin (VP Eng): Scaled Databricks data plane from $50M to $500M ARR.",
      "Team of 24 top-tier engineers with zero voluntary attrition since founding."
    ],
    keyMetric: { label: "R&D Team Density", value: "85%", note: "20 of 24 team members are core engineers / researchers" },
    founderNote: "We build lean, senior-heavy engineering teams with an intense culture of shipping velocity."
  },
  {
    id: 8,
    tag: "08 / THE ASK & SYNDICATE",
    title: "Series A: $8.5M at $42M Pre-Money",
    subtitle: "Accelerating enterprise sales, expanding research leadership, and cementing market dominance.",
    bulletPoints: [
      "$8.5M Series A round with $5.85M already committed by Tier-1 lead syndicate.",
      "Proceeds provide 36+ months of runway to reach $25M+ ARR and cash flow self-sustainability.",
      "Target close date: End of Q3 2026.",
      "Inviting select strategic angel and institutional partners for remaining $2.65M allocation."
    ],
    keyMetric: { label: "Series A Target", value: "$8,500,000", note: "68.8% committed · $2.65M allocation remaining" },
    founderNote: "We are choosing long-term partners who can introduce us to Fortune 500 enterprise buyer networks."
  }
];

export const DATA_ROOM_DOCS: DataRoomDoc[] = [
  {
    id: "doc-1",
    title: "Aetheria Financial Model & 3-Year Projections (2024 - 2027)",
    category: "Financials",
    format: "XLSX",
    fileSize: "4.8 MB",
    lastUpdated: "Aug 24, 2026",
    verified: true,
    pagesOrTabs: 14,
    description: "Granular P&L, hiring plan, headcount budget, GPU compute unit economics, cohort retention waterfall, and 3-statement forecast.",
    previewSnippet: "Revenue 2026E: $32.8M · Gross Margin: 88.4% · Headcount EOY 2026: 62 · FCF Breakeven: Q1 2027"
  },
  {
    id: "doc-2",
    title: "Cap Table Pro-Forma & Series A Waterfall Analysis",
    category: "Legal & Cap Table",
    format: "XLSX",
    fileSize: "1.6 MB",
    lastUpdated: "Aug 25, 2026",
    verified: true,
    pagesOrTabs: 6,
    description: "Detailed capitalization table showing pre/post Series A ownership, SAFEs conversion terms, option pool sizing, and voting rights.",
    previewSnippet: "Post-Money Valuation: $50.5M · Series A Dilution: 16.8% · Unallocated ESOP: 10.0% · Founders: 49.9%"
  },
  {
    id: "doc-3",
    title: "SOC-2 Type II Independent Audit & Security Certification",
    category: "Technical & Security",
    format: "PDF",
    fileSize: "8.2 MB",
    lastUpdated: "Jul 15, 2026",
    verified: true,
    pagesOrTabs: 48,
    description: "Unqualified clean opinion issued by Ernst & Young. Includes penetration testing report, zero critical vulnerabilities, and continuous monitoring.",
    previewSnippet: "Trust Service Principles: Security, Confidentiality, Availability · Observation: Zero exceptions noted."
  },
  {
    id: "doc-4",
    title: "Series A Lead Term Sheet & Subscription Agreement Draft",
    category: "Legal & Cap Table",
    format: "PDF",
    fileSize: "2.4 MB",
    lastUpdated: "Aug 12, 2026",
    verified: true,
    pagesOrTabs: 22,
    description: "Standard NVCA-style Series A Preferred Stock purchase agreement with Horizon Apex Capital as lead investor.",
    previewSnippet: "1x Non-Participating Preferred, Standard Protective Provisions, 1 Board Seat for Lead Investor."
  },
  {
    id: "doc-5",
    title: "Aetheria Kernel Technical Whitepaper & Architectural Deep-Dive",
    category: "Technical & Security",
    format: "PDF",
    fileSize: "5.1 MB",
    lastUpdated: "Aug 02, 2026",
    verified: true,
    pagesOrTabs: 32,
    description: "Exhaustive breakdown of the deterministic state engine, distributed consensus protocols, and self-healing agent recovery mechanisms.",
    previewSnippet: "State Machine Spec: Byzantine Fault Tolerant Agent Quorums · Micro-benchmarks vs gRPC / REST."
  },
  {
    id: "doc-6",
    title: "Enterprise Customer Cohort Study & Expansion Case Studies",
    category: "Commercial & Customers",
    format: "PDF",
    fileSize: "3.9 MB",
    lastUpdated: "Aug 19, 2026",
    verified: true,
    pagesOrTabs: 18,
    description: "Anonymous customer case studies from Tier-1 Investment Bank, Global HealthTech, and Cloud Unicorn showing 3.2x ROI in 90 days.",
    previewSnippet: "Average customer deployment time: 4.5 days · Zero production outages · 142% Net Expansion Rate."
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    quarter: "Q1 2024",
    title: "Kernel v1.0 Launch & First 10 Enterprise Logos",
    description: "Launched core deterministic engine. Reached $1.2M ARR in 4 months.",
    status: "completed",
    impact: "$1.2M ARR"
  },
  {
    id: "m2",
    quarter: "Q3 2024",
    title: "SOC-2 Type II Certification & Multi-Cloud Mesh",
    description: "Secured enterprise compliance; unlocked Wall Street banking pilots.",
    status: "completed",
    impact: "+180% Pipeline"
  },
  {
    id: "m3",
    quarter: "Q1 2025",
    title: "Surpassed $4.85M ARR & Signed Series A Term Sheet",
    description: "Achieved 142% NRR with 48 enterprise contracts; lead term sheet signed.",
    status: "completed",
    impact: "$4.85M ARR"
  },
  {
    id: "m4",
    quarter: "Q3 2025",
    title: "Autonomous Agent Store & Self-Healing Agent Mesh",
    description: "Launch marketplace for verified enterprise agent modules & auto-rebalancing.",
    status: "in-progress",
    impact: "Target $8.5M ARR"
  },
  {
    id: "m5",
    quarter: "Q1 2026",
    title: "International Expansion (EMEA & APAC Cloud Clusters)",
    description: "Deploy localized data sovereignty zones in Frankfurt, London, and Tokyo.",
    status: "upcoming",
    impact: "Target $14.8M ARR"
  }
];

export const MARKET_SEGMENTS = [
  { name: "TAM: Total Addressable Market", value: 142, label: "$142B", desc: "Global Enterprise AI & Agentic Compute by 2028" },
  { name: "SAM: Serviceable Addressable Market", value: 38, label: "$38B", desc: "Enterprise Agent Orchestration, Governance & Runtime" },
  { name: "SOM: Serviceable Obtainable Market", value: 4.2, label: "$4.2B", desc: "Fortune 2000 FinTech, HealthTech & Cloud Hyperscalers" },
];

export const COMPETITOR_DATA = [
  { name: "Aetheria", x: 92, y: 94, size: 400, highlight: true, category: "Deterministic Agent OS" },
  { name: "LangChain / LangGraph", x: 45, y: 55, size: 220, highlight: false, category: "Dev Framework" },
  { name: "Microsoft AutoGen", x: 55, y: 60, size: 200, highlight: false, category: "Research Sandbox" },
  { name: "CrewAI", x: 40, y: 45, size: 180, highlight: false, category: "Prototyping Tool" },
  { name: "Legacy RPA (UiPath)", x: 25, y: 82, size: 260, highlight: false, category: "Rules-Based Automation" },
  { name: "Cloud Hyperscaler Native", x: 70, y: 38, size: 240, highlight: false, category: "Vendor Locked API" },
];
