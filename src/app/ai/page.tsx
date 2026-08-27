"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoAreaChart,
  MonoBarChart,
  MonoDonutChart,
} from "@/components/charts/MonochromeCharts";
import { Bot, Zap, Cpu, Clock, Sparkles, Database } from "lucide-react";

export default function AIDashboard() {
  const tokenUsage = [
    { name: "00:00", PromptTokens: 450000, CompletionTokens: 180000 },
    { name: "04:00", PromptTokens: 280000, CompletionTokens: 110000 },
    { name: "08:00", PromptTokens: 920000, CompletionTokens: 420000 },
    { name: "12:00", PromptTokens: 1450000, CompletionTokens: 690000 },
    { name: "16:00", PromptTokens: 1680000, CompletionTokens: 810000 },
    { name: "20:00", PromptTokens: 1120000, CompletionTokens: 530000 },
  ];

  const modelUsage = [
    { name: "GPT-4o / Claude 3.5", value: 55 },
    { name: "Llama 3.3 70B", value: 25 },
    { name: "Mistral Large", value: 12 },
    { name: "Embeddings / Small", value: 8 },
  ];

  const recentInferences = [
    { id: "INF-4890", model: "Claude-3.5-Sonnet", tokens: "4,120", latency: "380ms", cost: "$0.024", task: "Code Refactor" },
    { id: "INF-4889", model: "GPT-4o", tokens: "2,840", latency: "290ms", cost: "$0.018", task: "Summary Extraction" },
    { id: "INF-4888", model: "Llama-3.3-70b-Instruct", tokens: "1,980", latency: "140ms", cost: "$0.004", task: "Sentiment Analysis" },
    { id: "INF-4887", model: "Text-Embedding-3-Large", tokens: "12,400", latency: "65ms", cost: "$0.001", task: "Vector Search" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI Analytics Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Tokens Consumed Today"
          value="18.4M"
          change="24.2%"
          isPositive={true}
          subtitle="Prompt + Completion"
          icon={<Bot className="w-4 h-4" />}
        />
        <MetricCard
          title="Avg Inference Latency"
          value="248ms"
          change="35ms"
          isPositive={true}
          subtitle="Time-to-first-token: 110ms"
          icon={<Zap className="w-4 h-4" />}
        />
        <MetricCard
          title="Model Cost Efficiency"
          value="$0.0028"
          change="12.5%"
          isPositive={true}
          subtitle="Per 1k blended tokens"
          icon={<Cpu className="w-4 h-4" />}
        />
        <MetricCard
          title="Cache Hit Ratio"
          value="74.2%"
          change="8.1%"
          isPositive={true}
          subtitle="Prompt caching enabled"
          icon={<Database className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Live Token Throughput</h2>
          <p className="text-xs text-zinc-400 mb-4">Input context tokens vs generated output tokens</p>
          <MonoAreaChart
            data={tokenUsage}
            categories={["PromptTokens", "CompletionTokens"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Model Distribution</h2>
            <p className="text-xs text-zinc-400 mb-4">Share of total inference load</p>
            <MonoDonutChart data={modelUsage} height={200} />
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs">
            {modelUsage.map((m) => (
              <div key={m.name} className="flex justify-between items-center">
                <span className="text-zinc-400 truncate">{m.name}</span>
                <span className="font-mono font-bold text-white">{m.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Recent Inference Requests</h2>
        <p className="text-xs text-zinc-400 mb-4">High-fidelity log of model calls</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Request ID</th>
                <th className="pb-3 font-semibold">Model</th>
                <th className="pb-3 font-semibold">Task Type</th>
                <th className="pb-3 font-semibold">Tokens</th>
                <th className="pb-3 font-semibold">Latency</th>
                <th className="pb-3 font-semibold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {recentInferences.map((inf) => (
                <tr key={inf.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-300">{inf.id}</td>
                  <td className="py-3.5 font-semibold text-white">{inf.model}</td>
                  <td className="py-3.5 text-zinc-400">{inf.task}</td>
                  <td className="py-3.5 font-mono text-zinc-200">{inf.tokens}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{inf.latency}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{inf.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
