"use client";

import React from "react";
import { 
  PieChart, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  DollarSign, 
  ArrowUpRight, 
  Users, 
  Lock,
  Layers,
  FileSpreadsheet
} from "lucide-react";
import { 
  ResponsiveContainer, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from "recharts";
import { 
  CAP_TABLE, 
  SYNDICATE_COMMITMENTS, 
  USE_OF_PROCEEDS, 
  COMPANY_INFO 
} from "@/data/pitchData";

interface CapTableViewProps {
  onOpenCommitModal: () => void;
}

export const CapTableView: React.FC<CapTableViewProps> = ({ onOpenCommitModal }) => {
  const round = COMPANY_INFO.roundDetails;
  const committed = round.committedAmount;
  const target = round.targetAmount;
  const remaining = target - committed;
  const percentCommitted = Math.round((committed / target) * 100);

  // Pie chart data formatted
  const pieData = CAP_TABLE.map((item) => ({
    name: item.type,
    value: item.postOwnership,
    role: item.role,
  }));

  // Monochrome colors for cap table pie
  const PIE_COLORS = ["#ffffff", "#a1a1aa", "#52525b", "#27272a", "#18181b"];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Capitalization Table & Series A Syndicate
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Round structure, post-money dilution waterfall, confirmed investor syndicate, and use of proceeds
          </p>
        </div>

        <button
          onClick={onOpenCommitModal}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          <Sparkles size={14} className="text-black" />
          <span>Request Ticket Allocation</span>
        </button>
      </div>

      {/* ROUND VALUATION & SYNDICATE SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Pre-Money Valuation</div>
          <div className="text-2xl font-bold font-mono text-white">$42,000,000</div>
          <div className="text-[11px] text-zinc-400 mt-1">Based on $4.85M ARR (8.6x multiple)</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Target Raise</div>
          <div className="text-2xl font-bold font-mono text-white">$8,500,000</div>
          <div className="text-[11px] text-zinc-400 mt-1">Series A Preferred Stock</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Post-Money Valuation</div>
          <div className="text-2xl font-bold font-mono text-white">$50,500,000</div>
          <div className="text-[11px] text-zinc-400 mt-1">Total fully-diluted capitalization</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Remaining Allocation</div>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            ${(remaining / 1000000).toFixed(2)}M
          </div>
          <div className="text-[11px] text-zinc-400 mt-1">{percentCommitted}% Already Committed</div>
        </div>
      </div>

      {/* CAP TABLE PRO-FORMA & OWNERSHIP DONUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Cap Table Table (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              Pro-Forma Ownership Waterfall
            </h3>
            <span className="text-xs font-mono text-zinc-500">Fully Diluted Basis</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-zinc-900/80 text-zinc-400 border-b border-white/[0.08]">
                <tr>
                  <th className="p-3">Shareholder / Class</th>
                  <th className="p-3 text-right">Pre %</th>
                  <th className="p-3 text-right">Post %</th>
                  <th className="p-3 text-right">Post Shares</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                {CAP_TABLE.map((row) => (
                  <tr key={row.name} className="hover:bg-white/[0.02]">
                    <td className="p-3">
                      <div className="font-semibold text-white">{row.name}</div>
                      <div className="text-[10px] text-zinc-400 font-sans">{row.role}</div>
                    </td>
                    <td className="p-3 text-right text-zinc-400">{row.preOwnership.toFixed(1)}%</td>
                    <td className={`p-3 text-right font-bold ${row.type === "Series A (Target)" ? "text-emerald-400" : "text-white"}`}>
                      {row.postOwnership.toFixed(1)}%
                    </td>
                    <td className="p-3 text-right text-zinc-400">
                      {row.preShares ? row.preShares.toLocaleString() : "1,683,168"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Donut Chart (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light flex flex-col items-center justify-center space-y-4">
          <h3 className="text-base font-semibold text-white self-start">
            Post-Round Ownership Distribution
          </h3>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="rgba(255,255,255,0.1)"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="p-2.5 bg-zinc-950 border border-white/20 rounded-lg text-xs font-mono">
                          <div className="font-semibold text-white">{d.name}</div>
                          <div className="text-zinc-400 mt-0.5">{d.role}</div>
                          <div className="text-white font-bold mt-1">{d.value.toFixed(1)}% Ownership</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="w-full grid grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400">
            {pieData.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span 
                  className="w-2.5 h-2.5 rounded-sm shrink-0" 
                  style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }} 
                />
                <span className="truncate">{item.name}: <strong className="text-white">{item.value.toFixed(1)}%</strong></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SYNDICATE COMMITMENTS ROSTER */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">
              Series A Syndicate Commitments Roster
            </h3>
            <p className="text-xs text-zinc-400">
              $5,850,000 committed out of $8,500,000 target raise
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Min Check Size: $250,000
          </div>
        </div>

        <div className="space-y-2">
          {SYNDICATE_COMMITMENTS.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06] hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-white shrink-0">
                  {s.logo}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {s.investor}
                  </div>
                  <div className="text-zinc-400 text-[11px] font-sans">
                    {s.type} · Confirmed: {s.confirmedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="text-right">
                  <div className="font-bold text-white text-sm">
                    ${(s.amount / 1000).toLocaleString()}k
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {((s.amount / round.postMoneyValuation) * 100).toFixed(2)}% post-money
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${
                  s.status === "Term Sheet Signed" 
                    ? "bg-white text-black border-white" 
                    : s.status === "Committed" 
                    ? "bg-emerald-950/50 text-emerald-300 border-emerald-500/30" 
                    : "bg-zinc-800 text-zinc-300 border-white/10"
                }`}>
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USE OF PROCEEDS BREAKDOWN */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <h3 className="text-base font-semibold text-white">
          Use of Proceeds ($8.5M Deployment Plan)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USE_OF_PROCEEDS.map((u) => (
            <div key={u.category} className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold">{u.percentage}%</span>
                <span className="text-zinc-400">{u.amount}</span>
              </div>
              <div className="font-semibold text-white text-sm">
                {u.category}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {u.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
