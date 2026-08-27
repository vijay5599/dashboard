"use client";

import React from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Lock, 
  CheckCircle2, 
  FileCode, 
  Network, 
  GitBranch, 
  Server,
  ArrowRight,
  Database
} from "lucide-react";

export const ProductView: React.FC = () => {
  const patents = [
    { number: "US Patent #11,942,108", title: "Deterministic Multi-Agent State Synchronization Over Distributed Networks", status: "Granted", year: "2024" },
    { number: "US Patent #12,048,912", title: "Cryptographically Audited Action Boundary Shims for Autonomous Agents", status: "Granted", year: "2025" },
    { number: "US Patent #12,180,344", title: "Self-Healing Dynamic Agent Graph Rebalancing Under Node Failure", status: "Granted", year: "2025" },
    { number: "US App #18/902,441", title: "Zero-Knowledge Proof of Non-Hallucinatory Agent Execution Paths", status: "Pending", year: "2026" },
  ];

  const benchmarks = [
    { metric: "Kernel Latency Overhead", aetheria: "1.1 ms", competitor: "42.6 ms", advantage: "38x Lower Latency" },
    { metric: "State Mutation Drift / Corruption", aetheria: "0.00%", competitor: "4.82%", advantage: "100% Deterministic" },
    { metric: "Max Concurrent Agent Nodes", aetheria: "250,000+", competitor: "1,200", advantage: "208x Scale" },
    { metric: "Cold-Start Execution Spinup", aetheria: "<4 ms", competitor: "380 ms", advantage: "95x Faster" },
    { metric: "Token Caching Cost Reduction", aetheria: "64.2%", competitor: "12.0%", advantage: "5.3x Lower GPU Cost" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Kernel Architecture, IP & Technological Moat
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Hardened kernel-level determinism, multi-agent fault tolerance, and proprietary patent defensibility
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/15">
            4 Granted / Pending Patents
          </span>
        </div>
      </div>

      {/* ARCHITECTURE DIAGRAM / SCHEMATIC */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] rim-light space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Aetheria Deterministic Agent Execution Mesh
            </h3>
            <p className="text-xs text-zinc-400">
              High-throughput asynchronous state synchronization engine sitting between enterprise databases and LLMs
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500">v3.4 Production Kernel</span>
        </div>

        {/* Visual Multi-Tier Architecture Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {/* Tier 1: Client & Enterprise Systems */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase text-[11px] pb-2 border-b border-white/10">
              <Database size={15} />
              <span>1. Enterprise Surface</span>
            </div>
            <div className="space-y-2 text-zinc-300">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Core DBs (Postgres, Snowflake, BigQuery)
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Enterprise APIs & Webhooks (Salesforce, Stripe)
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Internal RPC & Microservices (gRPC / Kafka)
              </div>
            </div>
          </div>

          {/* Tier 2: Aetheria Kernel (Highlight) */}
          <div className="p-5 rounded-xl bg-white text-black border border-white space-y-3 shadow-[0_0_30px_rgba(255,255,255,0.15)] relative">
            <div className="flex items-center justify-between pb-2 border-b border-black/15">
              <div className="flex items-center gap-2 font-bold uppercase text-[11px]">
                <Cpu size={15} />
                <span>2. Aetheria Kernel (Moat)</span>
              </div>
              <span className="text-[9px] bg-black text-white px-1.5 py-0.5 rounded font-black">CORE</span>
            </div>
            <div className="space-y-2 text-black font-semibold text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-100 border border-black/10">
                Deterministic State-Machine & Rollback
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-100 border border-black/10">
                Action Boundary Enforcer & Security Shim
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-100 border border-black/10">
                Sub-millisecond Shared Memory Mesh
              </div>
            </div>
          </div>

          {/* Tier 3: Foundation Model Swarm */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase text-[11px] pb-2 border-b border-white/10">
              <Server size={15} />
              <span>3. Model Substrate</span>
            </div>
            <div className="space-y-2 text-zinc-300">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Frontier LLMs (Claude 3.5 Sonnet, GPT-4o)
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Private Self-Hosted Clusters (Llama 3 70B)
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                Specialized Fast Routing & Token Cache
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENCHMARK COMPARISON TABLE */}
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Empirical Performance Benchmarks vs Generic Orchestrators
            </h3>
            <p className="text-xs text-zinc-400">
              Validated on 100,000 multi-agent synthetic production workflows
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500">Zero-Overhead Substrate</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zinc-900/80 text-zinc-400 border-b border-white/[0.08]">
              <tr>
                <th className="p-3">Benchmark Metric</th>
                <th className="p-3 text-white">Aetheria Kernel</th>
                <th className="p-3 text-zinc-400">Generic Frameworks (LangChain/AutoGen)</th>
                <th className="p-3 text-right">Performance Delta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-zinc-300">
              {benchmarks.map((b) => (
                <tr key={b.metric} className="hover:bg-white/[0.02]">
                  <td className="p-3 font-medium text-white">{b.metric}</td>
                  <td className="p-3 font-bold text-white bg-white/[0.04]">{b.aetheria}</td>
                  <td className="p-3 text-zinc-400">{b.competitor}</td>
                  <td className="p-3 text-right font-bold text-emerald-400">{b.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PATENTS & COMPLIANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patents */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              Proprietary Patent Portfolio
            </h3>
            <span className="text-xs font-mono text-zinc-500">USPTO Filings</span>
          </div>

          <div className="space-y-3">
            {patents.map((p) => (
              <div key={p.number} className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-bold">{p.number}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] ${
                    p.status === "Granted" ? "bg-white text-black font-bold" : "bg-zinc-800 text-zinc-300"
                  }`}>
                    {p.status} ({p.year})
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-sans">
                  {p.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Compliance */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              Enterprise Trust & Compliance
            </h3>
            <span className="text-xs font-mono text-emerald-400">Audited & Certified</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>SOC-2 Type II</span>
              </div>
              <div className="text-[11px] text-zinc-400">
                Audited by Ernst & Young. Zero exceptions.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Lock size={16} className="text-emerald-400" />
                <span>HIPAA & GDPR</span>
              </div>
              <div className="text-[11px] text-zinc-400">
                BAA support for healthcare customers.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Zero Data Retention</span>
              </div>
              <div className="text-[11px] text-zinc-400">
                No customer prompt data stored or trained on.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Server size={16} className="text-zinc-300" />
                <span>FedRAMP Ready</span>
              </div>
              <div className="text-[11px] text-zinc-400">
                GovCloud compliance target Q4 2026.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
