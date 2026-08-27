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
import { DollarSign, Users, RefreshCw, Activity, Zap, Server } from "lucide-react";

export default function SaaSDashboard() {
  const mrrGrowth = [
    { name: "Jan", MRR: 42000, ChurnMRR: 1200 },
    { name: "Feb", MRR: 49000, ChurnMRR: 1400 },
    { name: "Mar", MRR: 58000, ChurnMRR: 1100 },
    { name: "Apr", MRR: 69000, ChurnMRR: 1600 },
    { name: "May", MRR: 81000, ChurnMRR: 1800 },
    { name: "Jun", MRR: 96000, ChurnMRR: 2100 },
    { name: "Jul", MRR: 114000, ChurnMRR: 2400 },
  ];

  const planBreakdown = [
    { name: "Enterprise ($999/mo)", value: 45 },
    { name: "Pro Plan ($199/mo)", value: 35 },
    { name: "Starter ($49/mo)", value: 20 },
  ];

  const subRetentionCohorts = [
    { cohort: "May 2026", users: 1420, m1: "100%", m2: "94%", m3: "91%", m4: "89%", m5: "88%" },
    { cohort: "Jun 2026", users: 1680, m1: "100%", m2: "95%", m3: "92%", m4: "90%", m5: "-" },
    { cohort: "Jul 2026", users: 2100, m1: "100%", m2: "96%", m3: "94%", m4: "-", m5: "-" },
    { cohort: "Aug 2026", users: 2450, m1: "100%", m2: "97%", m3: "-", m4: "-", m5: "-" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="SaaS Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Monthly Recurring (MRR)"
          value="$114,200"
          change="18.7%"
          isPositive={true}
          subtitle="ARR: $1.37M"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Active Paid Subscriptions"
          value="2,840"
          change="14.2%"
          isPositive={true}
          subtitle="Net +320 this month"
          icon={<Users className="w-4 h-4" />}
        />
        <MetricCard
          title="Logo Churn Rate"
          value="1.84%"
          change="0.4%"
          isPositive={true}
          subtitle="Industry avg: 3.5%"
          icon={<RefreshCw className="w-4 h-4" />}
        />
        <MetricCard
          title="Net Revenue Retention (NRR)"
          value="128%"
          change="4.0%"
          isPositive={true}
          subtitle="Strong enterprise expansion"
          icon={<Zap className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">MRR Expansion vs Churn</h2>
          <p className="text-xs text-zinc-400 mb-4">Monthly compounding recurring revenue trajectory</p>
          <MonoAreaChart
            data={mrrGrowth}
            categories={["MRR", "ChurnMRR"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Revenue by Tier</h2>
            <p className="text-xs text-zinc-400 mb-4">Plan share</p>
            <MonoDonutChart data={planBreakdown} height={200} />
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs">
            {planBreakdown.map((p) => (
              <div key={p.name} className="flex justify-between items-center">
                <span className="text-zinc-400 truncate">{p.name}</span>
                <span className="font-mono font-bold text-white">{p.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Cohort Retention Matrix</h2>
        <p className="text-xs text-zinc-400 mb-4">User retention percentages over successive months</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Cohort</th>
                <th className="pb-3 font-semibold">New Users</th>
                <th className="pb-3 font-semibold">Month 1</th>
                <th className="pb-3 font-semibold">Month 2</th>
                <th className="pb-3 font-semibold">Month 3</th>
                <th className="pb-3 font-semibold">Month 4</th>
                <th className="pb-3 font-semibold">Month 5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {subRetentionCohorts.map((row) => (
                <tr key={row.cohort} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-semibold text-white">{row.cohort}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{row.users}</td>
                  <td className="py-3.5 font-mono text-white font-bold">{row.m1}</td>
                  <td className="py-3.5 font-mono text-zinc-200">{row.m2}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{row.m3}</td>
                  <td className="py-3.5 font-mono text-zinc-400">{row.m4}</td>
                  <td className="py-3.5 font-mono text-zinc-500">{row.m5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
