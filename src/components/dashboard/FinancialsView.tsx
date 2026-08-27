"use client";

import React, { useState } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  Flame, 
  ShieldCheck, 
  Sliders, 
  BarChart3, 
  RotateCcw, 
  Layers, 
  Calculator,
  ArrowUpRight,
  Info
} from "lucide-react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  AreaChart, 
  Area 
} from "recharts";
import { COHORT_DATA, KPI_METRICS, COMPANY_INFO } from "@/data/pitchData";

export const FinancialsView: React.FC = () => {
  // Simulator State
  const [raisedAmount, setRaisedAmount] = useState<number>(8500000);
  const [monthlyBurn, setMonthlyBurn] = useState<number>(180000);
  const [newHires, setNewHires] = useState<number>(14);
  const [acvGrowthPct, setAcvGrowthPct] = useState<number>(35);

  // Computed Runway Simulator values
  const currentCash = 2800000;
  const totalCashPool = currentCash + raisedAmount;
  // Estimated burn scaling with new hires ($14k/mo per engineer/AE all-in)
  const adjustedMonthlyBurn = monthlyBurn + (newHires * 12000);
  const calculatedRunwayMonths = Math.round(totalCashPool / adjustedMonthlyBurn);
  const projectedArrSeriesB = (4.85 * (1 + (acvGrowthPct / 100) * 2.2)).toFixed(1);

  const resetSimulator = () => {
    setRaisedAmount(8500000);
    setMonthlyBurn(180000);
    setNewHires(14);
    setAcvGrowthPct(35);
  };

  // Revenue by product line data
  const revenueMixData = [
    { year: "2024 (Act)", kernelSub: 2.1, computeMesh: 0.9, enterpriseSla: 0.5, total: 3.5 },
    { year: "2025 (Runway)", kernelSub: 6.8, computeMesh: 3.2, enterpriseSla: 1.2, total: 11.2 },
    { year: "2026 (Proj)", kernelSub: 19.5, computeMesh: 9.8, enterpriseSla: 3.5, total: 32.8 },
    { year: "2027 (Proj)", kernelSub: 44.0, computeMesh: 22.5, enterpriseSla: 8.0, total: 74.5 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Financial Architecture & Capital Efficiency
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Unit economics, cohort expansion heatmap, and interactive post-Series A runway modeling
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-zinc-200 border border-white/15">
            Audited Q1 2026 Financial Model
          </span>
        </div>
      </div>

      {/* Unit Economics High-Impact Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[11px] font-mono uppercase text-zinc-500 mb-1">Gross Margin</div>
          <div className="text-2xl font-bold font-mono text-white">88.4%</div>
          <div className="text-[11px] text-zinc-400 mt-1">Pure software, local token caching</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[11px] font-mono uppercase text-zinc-500 mb-1">CAC Payback</div>
          <div className="text-2xl font-bold font-mono text-white">5.4 mo</div>
          <div className="text-[11px] text-zinc-400 mt-1">Top-decile enterprise velocity</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[11px] font-mono uppercase text-zinc-500 mb-1">LTV / CAC Ratio</div>
          <div className="text-2xl font-bold font-mono text-white">7.8x</div>
          <div className="text-[11px] text-zinc-400 mt-1">Compound expansion dynamics</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[11px] font-mono uppercase text-zinc-500 mb-1">Magic Number</div>
          <div className="text-2xl font-bold font-mono text-white">1.84</div>
          <div className="text-[11px] text-zinc-400 mt-1">Exceptional sales efficiency (&gt;1.0)</div>
        </div>
      </div>

      {/* INTERACTIVE RUNWAY & BURN SIMULATOR */}
      <div className="p-6 rounded-2xl bg-zinc-950/90 border border-white/[0.12] rim-light space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white text-black font-bold">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Interactive Series A Runway & Hiring Simulator
              </h3>
              <p className="text-xs text-zinc-400">
                Adjust capital deployment parameters to project cash runway and Series B milestone timing
              </p>
            </div>
          </div>

          <button
            onClick={resetSimulator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 hover:border-white/20 transition-all self-start sm:self-auto"
          >
            <RotateCcw size={13} />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Simulator Controls & Output split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Sliders (8 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Slider 1: Capital Raised */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Series A Raise Amount</span>
                <span className="font-bold text-white">${(raisedAmount / 1000000).toFixed(1)}M</span>
              </div>
              <input
                type="range"
                min={5000000}
                max={15000000}
                step={500000}
                value={raisedAmount}
                onChange={(e) => setRaisedAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>$5.0M Min</span>
                <span>$8.5M Target</span>
                <span>$15.0M Max</span>
              </div>
            </div>

            {/* Slider 2: Base Monthly Burn */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Base Net Burn / Month</span>
                <span className="font-bold text-white">${(monthlyBurn / 1000).toFixed(0)}k/mo</span>
              </div>
              <input
                type="range"
                min={80000}
                max={350000}
                step={10000}
                value={monthlyBurn}
                onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>$80k (Lean)</span>
                <span>$180k (Base)</span>
                <span>$350k (Aggressive)</span>
              </div>
            </div>

            {/* Slider 3: Additional Headcount */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Target Hires (AI Research & Enterprise AEs)</span>
                <span className="font-bold text-white">+{newHires} Engineers & Reps</span>
              </div>
              <input
                type="range"
                min={4}
                max={32}
                step={2}
                value={newHires}
                onChange={(e) => setNewHires(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>+4 (Conservative)</span>
                <span>+14 (Target)</span>
                <span>+32 (Fast Scale)</span>
              </div>
            </div>

            {/* Slider 4: ACV Growth Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Annual ACV Expansion Rate</span>
                <span className="font-bold text-white">+{acvGrowthPct}% YoY</span>
              </div>
              <input
                type="range"
                min={15}
                max={60}
                step={5}
                value={acvGrowthPct}
                onChange={(e) => setAcvGrowthPct(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>+15% (Slower)</span>
                <span>+35% (Base Case)</span>
                <span>+60% (Hypergrowth)</span>
              </div>
            </div>
          </div>

          {/* Output Dashboard (5 cols) */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-black border border-white/15 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold border-b border-white/10 pb-2">
              Simulated Milestone Projections
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-zinc-950 border border-white/10">
                <div className="text-[10px] text-zinc-500">PROJECTED RUNWAY</div>
                <div className="text-3xl font-bold text-white mt-0.5">
                  {calculatedRunwayMonths} <span className="text-sm font-normal text-zinc-400">Months</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">
                  Sufficient to comfortably achieve Series B milestones
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                  <div className="text-[10px] text-zinc-500">ADJUSTED BURN</div>
                  <div className="font-bold text-white text-sm mt-0.5">
                    ${(adjustedMonthlyBurn / 1000).toFixed(0)}k / mo
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                  <div className="text-[10px] text-zinc-500">TOTAL TEAM SIZE</div>
                  <div className="font-bold text-white text-sm mt-0.5">
                    {COMPANY_INFO.headcount + newHires} Headcount
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950 border border-white/10">
                <div className="text-[10px] text-zinc-500">PROJECTED ARR AT SERIES B</div>
                <div className="text-xl font-bold text-white mt-0.5">
                  ${projectedArrSeriesB}M <span className="text-xs text-zinc-400 font-normal">ARR</span>
                </div>
                <div className="text-[10px] text-zinc-400 mt-0.5">
                  Target Series B Valuation: $180M - $240M
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COHORT RETENTION HEATMAP */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">
              Net Dollar Retention (NDR) Cohort Matrix
            </h3>
            <p className="text-xs text-zinc-400">
              Expansion percentage by vintage (% of initial cohort ARR) showing compounding expansion
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
            <span>100% (Base)</span>
            <div className="flex h-3 w-20 rounded overflow-hidden border border-white/10">
              <div className="flex-1 bg-zinc-800" />
              <div className="flex-1 bg-zinc-600" />
              <div className="flex-1 bg-zinc-400" />
              <div className="flex-1 bg-white" />
            </div>
            <span>166%+ (High Expansion)</span>
          </div>
        </div>

        {/* Heatmap Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zinc-900/60 text-zinc-400 border-b border-white/[0.08]">
              <tr>
                <th className="p-2.5">Cohort Vintage</th>
                <th className="p-2.5 text-center">Logos</th>
                <th className="p-2.5 text-center">Month 0</th>
                <th className="p-2.5 text-center">Month 3</th>
                <th className="p-2.5 text-center">Month 6</th>
                <th className="p-2.5 text-center">Month 9</th>
                <th className="p-2.5 text-center">Month 12</th>
                <th className="p-2.5 text-center">Month 15</th>
                <th className="p-2.5 text-center">Month 18</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {COHORT_DATA.map((row) => {
                const getBgStyle = (val: number) => {
                  if (val === 100) return "bg-zinc-900 text-zinc-400";
                  if (val < 115) return "bg-zinc-800 text-zinc-200";
                  if (val < 130) return "bg-zinc-700 text-white font-medium";
                  if (val < 145) return "bg-zinc-500 text-black font-bold";
                  if (val < 160) return "bg-zinc-300 text-black font-bold";
                  return "bg-white text-black font-black";
                };

                return (
                  <tr key={row.cohort} className="hover:bg-white/[0.02]">
                    <td className="p-2.5 font-medium text-white">{row.cohort}</td>
                    <td className="p-2.5 text-center text-zinc-400">{row.size}</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m0)}`}>{row.m0}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m3)}`}>{row.m3}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m6)}`}>{row.m6}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m9)}`}>{row.m9}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m12)}`}>{row.m12}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m15)}`}>{row.m15}%</td>
                    <td className={`p-2.5 text-center ${getBgStyle(row.m18)}`}>{row.m18}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* REVENUE BY PRODUCT LINE (Stacked Area / Bar Chart) */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-white">
              Revenue Mix & Product Line Breakdown ($M)
            </h3>
            <p className="text-xs text-zinc-400">
              Core Kernel Subscription vs Distributed GPU Compute Mesh vs Enterprise SLA
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-white" />
              <span>Kernel Core Sub</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-zinc-500" />
              <span>Compute Mesh</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-zinc-800" />
              <span>Enterprise SLA</span>
            </div>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueMixData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
              <XAxis 
                dataKey="year" 
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
                    const d = payload[0].payload;
                    return (
                      <div className="p-3 bg-zinc-950 border border-white/20 rounded-xl shadow-2xl text-xs font-mono space-y-1.5">
                        <div className="font-semibold text-white border-b border-white/10 pb-1">
                          {label} (Total: ${d.total}M ARR)
                        </div>
                        <div className="flex items-center justify-between gap-4 text-white">
                          <span>Kernel Core Sub:</span>
                          <span className="font-bold">${d.kernelSub}M</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-400">
                          <span>Compute Mesh:</span>
                          <span>${d.computeMesh}M</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-zinc-400">
                          <span>Enterprise SLA:</span>
                          <span>${d.enterpriseSla}M</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="kernelSub" stackId="a" fill="#ffffff" radius={[0, 0, 0, 0]} />
              <Bar dataKey="computeMesh" stackId="a" fill="#71717a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="enterpriseSla" stackId="a" fill="#27272a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
