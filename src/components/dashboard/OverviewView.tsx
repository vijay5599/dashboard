"use client";

import React from "react";
import { 
  TrendingUp, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  DollarSign, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  ArrowRight,
  Flame,
  Award,
  Zap
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";
import { Scenario, NavTab, GrowthDataPoint } from "@/types/pitch";
import { 
  COMPANY_INFO, 
  KPI_METRICS, 
  GROWTH_TRAJECTORY, 
  CUSTOMER_LOGOS, 
  MILESTONES,
  SYNDICATE_COMMITMENTS
} from "@/data/pitchData";

interface OverviewViewProps {
  scenario: Scenario;
  setActiveTab: (tab: NavTab) => void;
  onOpenCommitModal: () => void;
  onOpenDeckMode: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  scenario,
  setActiveTab,
  onOpenCommitModal,
  onOpenDeckMode,
}) => {
  const round = COMPANY_INFO.roundDetails;
  const percentCommitted = Math.round((round.committedAmount / round.targetAmount) * 100);

  // Format data for growth chart based on selected scenario
  const chartData = GROWTH_TRAJECTORY.map((item) => ({
    ...item,
    displayArr: scenario === "conservative" 
      ? item.conservativeArr 
      : scenario === "bull" 
      ? item.bullArr 
      : item.arr,
  }));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Hero Banner / Pitch Thesis */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#121217] to-[#08080a] border border-white/[0.12] p-6 md:p-8 rim-light shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white text-black">
                SERIES A EXECUTIVE MEMO
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.08] text-zinc-300 border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Target Close: {round.closingDate}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {COMPANY_INFO.location}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              The Mission-Critical Substrate for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Autonomous Enterprise AI
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl font-sans">
              {COMPANY_INFO.elevatorPitch}
            </p>

            {/* Founder credibility tags */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-zinc-300" />
                <span>Founders ex-DeepMind & Stripe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-zinc-300" />
                <span>Lead: {round.leadInvestor}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-zinc-300" />
                <span>48 Enterprise Deployments</span>
              </div>
            </div>
          </div>

          {/* Quick Round Syndicate Box */}
          <div className="shrink-0 w-full lg:w-80 p-5 rounded-xl bg-black/60 border border-white/[0.12] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-zinc-400">Round Allocation</span>
              <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                {percentCommitted}% Filled
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-white">$5.85M</span>
                <span className="text-xs font-mono text-zinc-400">of $8.5M Target</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-1000"
                  style={{ width: `${percentCommitted}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
              <div className="p-2 rounded bg-zinc-900 border border-white/[0.05]">
                <div className="text-zinc-500 text-[10px]">PRE-MONEY</div>
                <div className="font-bold text-white mt-0.5">$42.0M</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-white/[0.05]">
                <div className="text-zinc-500 text-[10px]">POST-MONEY</div>
                <div className="font-bold text-white mt-0.5">$50.5M</div>
              </div>
            </div>

            <button
              onClick={onOpenCommitModal}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Sparkles size={14} className="text-black" />
              <span>Simulate / Commit Allocation</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-white tracking-tight">
              Investor Key Performance Indicators
            </h2>
            <p className="text-xs text-zinc-400">
              Audited SaaS unit economics and growth velocity
            </p>
          </div>
          <button
            onClick={() => setActiveTab("financials")}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
          >
            <span>View Full Financials</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KPI_METRICS.slice(0, 8).map((metric) => (
            <div
              key={metric.id}
              className="p-4 rounded-xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all group rim-light relative"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-medium truncate">{metric.label}</span>
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-white/[0.06] text-white border border-white/10">
                  {metric.change}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold font-mono text-white tracking-tight">
                  {metric.value}
                </span>
              </div>

              <div className="text-[11px] text-zinc-400 truncate mb-3">
                {metric.subtext}
              </div>

              {/* Mini Sparkline SVG */}
              <div className="h-8 w-full flex items-end gap-1">
                {metric.sparkline.map((val, idx) => {
                  const max = Math.max(...metric.sparkline);
                  const min = Math.min(...metric.sparkline);
                  const heightPercent = max === min ? 50 : Math.max(15, Math.round(((val - min) / (max - min)) * 100));
                  return (
                    <div
                      key={idx}
                      className="flex-1 bg-zinc-700 group-hover:bg-zinc-400 rounded-t transition-colors"
                      style={{ height: `${heightPercent}%` }}
                      title={`Value: ${val}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Growth Trajectory Chart & Scenario Modeling */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-white">
                ARR Growth Trajectory & Forecast (2024 - 2026)
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-white/10 text-white rounded border border-white/10">
                {scenario.toUpperCase()} CASE
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Historical performance through Q1 2025 ($4.85M) + post-Series A expansion model
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-white" />
              <span>Projected ARR ($M)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-zinc-600" />
              <span>Net Burn ($k/mo)</span>
            </div>
          </div>
        </div>

        {/* Recharts Area Chart */}
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="arrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="#52525b" 
                fontSize={11} 
                tickLine={false} 
                axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                fontFamily="var(--font-geist-mono)"
              />
              <YAxis 
                stroke="#52525b" 
                fontSize={11} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(v) => `$${v}M`}
                fontFamily="var(--font-geist-mono)"
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as GrowthDataPoint & { displayArr: number };
                    return (
                      <div className="p-3 bg-zinc-950 border border-white/20 rounded-xl shadow-2xl text-xs font-mono space-y-1.5">
                        <div className="font-semibold text-white border-b border-white/10 pb-1">
                          {label}
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-300">
                          <span>Projected ARR:</span>
                          <span className="font-bold text-white">${data.displayArr.toFixed(2)}M</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-400">
                          <span>Monthly MRR:</span>
                          <span>${(data.displayArr / 12).toFixed(2)}M</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-400">
                          <span>Enterprise Customers:</span>
                          <span>{data.customers}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-400">
                          <span>Net Monthly Burn:</span>
                          <span>${data.netBurn}k</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="displayArr" 
                stroke="#ffffff" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#arrGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Growth Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-white/[0.08] text-xs">
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
            <div className="font-mono font-semibold text-white mb-1">Land & Expand Model</div>
            <p className="text-zinc-400 leading-relaxed">
              Initial pilot contracts of $45k average expand to $180k+ within 9 months as agent swarms deploy into production.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
            <div className="font-mono font-semibold text-white mb-1">Negative Churn Dynamics</div>
            <p className="text-zinc-400 leading-relaxed">
              142.4% Net Revenue Retention makes revenue grow exponentially even with zero new outbound sales spend.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
            <div className="font-mono font-semibold text-white mb-1">Cash Flow Breakeven</div>
            <p className="text-zinc-400 leading-relaxed">
              Series A capital provides 36+ months runway to reach $25M+ ARR and free cash flow profitability by Q1 2027.
            </p>
          </div>
        </div>
      </div>

      {/* Enterprise Customer Traction Wall */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Enterprise Customer Roster & Expansion Velocity
            </h3>
            <p className="text-xs text-zinc-400">
              Sample tier-1 production deployments across Fortune 1000 enterprises
            </p>
          </div>
          <button
            onClick={() => setActiveTab("market")}
            className="text-xs text-zinc-400 hover:text-white font-mono flex items-center gap-1"
          >
            <span>View All 48 Logos</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CUSTOMER_LOGOS.slice(0, 4).map((cust) => (
            <div
              key={cust.id}
              className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                  {cust.tier}
                </span>
                <span className="text-xs font-mono font-bold text-white">
                  {cust.arr}
                </span>
              </div>
              <div className="font-semibold text-white text-sm mb-1 group-hover:text-zinc-200">
                {cust.name}
              </div>
              <div className="text-[11px] text-zinc-400 mb-2">
                {cust.industry}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/[0.05]">
                <span>NRR: {cust.nrr}</span>
                <span>Live since {cust.contractDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Progress & Interactive Deck CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Milestones Roadmap */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              Company Milestones & Execution Roadmap
            </h3>
            <span className="text-xs font-mono text-zinc-500">2024 - 2026</span>
          </div>

          <div className="space-y-4">
            {MILESTONES.map((m, idx) => (
              <div key={m.id} className="flex items-start gap-4 text-xs group">
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
                    m.status === "completed" 
                      ? "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                      : m.status === "in-progress" 
                      ? "bg-zinc-800 text-white border border-white/30" 
                      : "bg-zinc-900 text-zinc-600 border border-white/5"
                  }`}>
                    {idx + 1}
                  </div>
                  {idx < MILESTONES.length - 1 && (
                    <div className="w-0.5 h-10 bg-zinc-800 my-1" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-sm">
                      {m.title}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/10">
                      {m.quarter}
                    </span>
                  </div>
                  <p className="text-zinc-400 mt-0.5 leading-relaxed">
                    {m.description}
                  </p>
                  <div className="text-[11px] font-mono text-zinc-300 mt-1">
                    Impact: <span className="text-white font-semibold">{m.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Deck Preview Card */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 text-[10px] font-mono bg-white/10 text-white rounded">
                SLIDE PRESENTATION
              </span>
              <span className="text-xs font-mono text-zinc-400">8 Investor Slides</span>
            </div>

            <h3 className="text-lg font-bold text-white">
              Interactive Pitch Deck (Full Presentation Mode)
            </h3>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Step through our 8-slide investor pitch deck with keyboard navigation, detailed speaker notes, thesis breakdown, and full-screen presentation mode.
            </p>

            <div className="p-3 rounded-xl bg-black border border-white/10 text-xs font-mono text-zinc-400 space-y-1">
              <div>Slide 1: Executive Vision</div>
              <div>Slide 2: The $142B Market Shift</div>
              <div>Slide 3: Deterministic Kernel Solution</div>
              <div>Slide 8: Series A Syndicate & The Ask</div>
            </div>
          </div>

          <button
            onClick={onOpenDeckMode}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span>Launch Pitch Deck Mode</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
