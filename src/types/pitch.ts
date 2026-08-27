export type Scenario = "conservative" | "base" | "bull";

export type NavTab = 
  | "overview" 
  | "financials" 
  | "market" 
  | "product" 
  | "captable" 
  | "slides" 
  | "dataroom";

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  change: string;
  isPositive: boolean;
  sparkline: number[];
  category: "growth" | "efficiency" | "retention" | "cash";
}

export interface GrowthDataPoint {
  month: string;
  arr: number;
  mrr: number;
  conservativeArr: number;
  bullArr: number;
  customers: number;
  netBurn: number;
}

export interface CohortData {
  cohort: string;
  size: number;
  m0: number;
  m3: number;
  m6: number;
  m9: number;
  m12: number;
  m15: number;
  m18: number;
}

export interface CustomerLogo {
  id: string;
  name: string;
  tier: "Enterprise" | "Scale" | "Growth";
  arr: string;
  nrr: string;
  industry: string;
  logoText: string;
  contractDate: string;
}

export interface CapTableStakeholder {
  name: string;
  role: string;
  preShares: number;
  preOwnership: number;
  postOwnership: number;
  type: "Founders" | "Seed" | "ESOP" | "Series A (Target)" | "Advisors";
}

export interface SyndicateCommitment {
  id: string;
  investor: string;
  type: "Lead VC" | "Co-Lead" | "Angel / Scout" | "Strategic Fund";
  amount: number;
  status: "Committed" | "Term Sheet Signed" | "In Final Diligence" | "Soft Circled";
  logo: string;
  confirmedDate: string;
}

export interface PitchSlide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  keyMetric: { label: string; value: string; note: string };
  founderNote: string;
}

export interface DataRoomDoc {
  id: string;
  title: string;
  category: "Financials" | "Legal & Cap Table" | "Technical & Security" | "Commercial & Customers";
  format: "XLSX" | "PDF" | "DOCX" | "ZIP";
  fileSize: string;
  lastUpdated: string;
  verified: boolean;
  pagesOrTabs?: number;
  description: string;
  previewSnippet: string;
}

export interface Milestone {
  id: string;
  quarter: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  impact: string;
}
