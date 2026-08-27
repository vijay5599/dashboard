"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Layers, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Filter,
  CheckCircle2,
  Building,
  ArrowUpRight
} from "lucide-react";
import { 
  MARKET_SEGMENTS, 
  CUSTOMER_LOGOS, 
  COMPETITOR_DATA 
} from "@/data/pitchData";

export const MarketView: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Fintech & Banking", "Cloud Infrastructure", "Healthcare & Biotech", "Cybersecurity", "Supply Chain"];

  const filteredCustomers = selectedIndustry === "All"
    ? CUSTOMER_LOGOS
    : CUSTOMER_LOGOS.filter((c) => c.industry.includes(selectedIndustry));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Market Opportunity & Enterprise Pipeline
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Total addressable agentic compute market, competitive moat positioning, and enterprise customer base
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/15">
            $142B TAM by 2028
          </span>
        </div>
      </div>

      {/* TAM / SAM / SOM Concentric Sizing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MARKET_SEGMENTS.map((seg, idx) => (
          <div
            key={seg.name}
            className={`p-5 rounded-2xl border transition-all rim-light ${
              idx === 0 
                ? "bg-zinc-950/80 border-white/[0.12]" 
                : idx === 1 
                ? "bg-zinc-950/70 border-white/[0.08]" 
                : "bg-zinc-950/90 border-white/[0.16] shadow-xl"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
              <span>{seg.name.split(":")[0]}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                {idx === 0 ? "Macro AI Market" : idx === 1 ? "Orchestration" : "High-Value Niche"}
              </span>
            </div>

            <div className="text-3xl font-bold font-mono text-white tracking-tight">
              {seg.label}
            </div>

            <div className="text-xs text-zinc-300 font-medium mt-2">
              {seg.name.split(":")[1]}
            </div>

            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              {seg.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Enterprise Sales Pipeline Funnel */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Enterprise Sales Pipeline & Conversion Funnel
            </h3>
            <p className="text-xs text-zinc-400">
              Active Fortune 1000 pipeline stages in $USD Annual Contract Value (ACV)
            </p>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded">
            92% Pilot-to-Paid Conversion
          </div>
        </div>

        {/* Funnel Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.05] space-y-2">
            <div className="text-[10px] text-zinc-500 uppercase">Stage 1: Inbound Lead</div>
            <div className="text-xl font-bold text-white">$18.4M</div>
            <div className="text-[11px] text-zinc-400">124 Qualified Inbounds</div>
            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
              <div className="bg-zinc-500 h-full w-full" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-2">
            <div className="text-[10px] text-zinc-400 uppercase">Stage 2: Technical POC</div>
            <div className="text-xl font-bold text-white">$9.2M</div>
            <div className="text-[11px] text-zinc-400">42 Active Sandboxes</div>
            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
              <div className="bg-zinc-400 h-full w-[70%]" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.1] space-y-2">
            <div className="text-[10px] text-zinc-300 uppercase">Stage 3: Security & Legal</div>
            <div className="text-xl font-bold text-white">$4.6M</div>
            <div className="text-[11px] text-zinc-400">18 Master Services Agree.</div>
            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
              <div className="bg-zinc-200 h-full w-[45%]" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black border border-white/20 space-y-2 shadow-lg">
            <div className="text-[10px] text-white uppercase font-bold">Stage 4: Active ARR</div>
            <div className="text-xl font-bold text-white">$4.85M</div>
            <div className="text-[11px] text-emerald-400">48 Live Enterprise Logos</div>
            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
              <div className="bg-white h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Matrix 2x2 */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">
              Competitive Moat & Market Positioning (2x2 Matrix)
            </h3>
            <p className="text-xs text-zinc-400">
              Y-Axis: Runtime Determinism & State Verification | X-Axis: Enterprise Multi-Agent Governance
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Clear separation from toy dev frameworks
          </div>
        </div>

        {/* 2x2 Matrix Grid */}
        <div className="relative h-80 w-full rounded-xl bg-black/80 border border-white/10 p-4 font-mono text-xs overflow-hidden">
          {/* Axis lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />

          {/* Quadrant Labels */}
          <div className="absolute top-2 left-2 text-[10px] text-zinc-600">High Reliability / Single Agent</div>
          <div className="absolute top-2 right-2 text-[10px] text-zinc-400 font-bold">★ ENTERPRISE MISSION CRITICAL (LEADER)</div>
          <div className="absolute bottom-2 left-2 text-[10px] text-zinc-700">Toy / Prototyping</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-zinc-600">Multi-Agent Sandbox</div>

          {/* Plot Competitors */}
          {COMPETITOR_DATA.map((item) => (
            <div
              key={item.name}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all p-2 rounded-xl border flex flex-col items-center ${
                item.highlight
                  ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.4)] z-10 scale-110"
                  : "bg-zinc-900/90 text-zinc-400 border-white/10"
              }`}
              style={{ left: `${item.x}%`, top: `${100 - item.y}%` }}
            >
              <span className={`font-bold text-xs ${item.highlight ? "text-black" : "text-zinc-200"}`}>
                {item.name}
              </span>
              <span className={`text-[9px] ${item.highlight ? "text-zinc-700 font-semibold" : "text-zinc-500"}`}>
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* All Enterprise Customer Logos & ARR */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-white">
              Verified Enterprise Customer Accounts
            </h3>
            <p className="text-xs text-zinc-400">
              Contract ACV, Expansion NRR, and Go-Live Date across industries
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all border ${
                  selectedIndustry === ind
                    ? "bg-white text-black border-white font-bold"
                    : "bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredCustomers.map((cust) => (
            <div
              key={cust.id}
              className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                  {cust.tier}
                </span>
                <span className="text-xs font-mono font-bold text-white">
                  {cust.arr}
                </span>
              </div>

              <div className="font-semibold text-white text-sm group-hover:text-zinc-200">
                {cust.name}
              </div>

              <div className="text-xs text-zinc-400">
                {cust.industry}
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>NRR: <strong className="text-emerald-400">{cust.nrr}</strong></span>
                <span>Signed {cust.contractDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
