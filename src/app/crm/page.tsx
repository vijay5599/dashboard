"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoBarChart,
  MonoAreaChart,
  MonoDonutChart,
} from "@/components/charts/MonochromeCharts";
import { Users, DollarSign, Target, CheckCircle2, Briefcase, PhoneCall, Mail } from "lucide-react";

export default function CRMDashboard() {
  const dealStagesData = [
    { name: "Lead In", Deals: 42, Value: 180000 },
    { name: "Contacted", Deals: 34, Value: 240000 },
    { name: "Proposal Sent", Deals: 22, Value: 390000 },
    { name: "Negotiation", Deals: 15, Value: 420000 },
    { name: "Won", Deals: 18, Value: 580000 },
  ];

  const pipelineStatus = [
    { name: "Enterprise", value: 50 },
    { name: "Mid-Market", value: 30 },
    { name: "SMB", value: 20 },
  ];

  const recentDeals = [
    {
      company: "Stripe Technologies",
      contact: "Sarah Jenkins",
      dealValue: "$120,000",
      stage: "Contract Signed",
      probability: "100%",
      owner: "Alex Morgan",
    },
    {
      company: "Linear Systems",
      contact: "Karim Benzema",
      dealValue: "$85,000",
      stage: "Legal Review",
      probability: "90%",
      owner: "Jessica Alba",
    },
    {
      company: "Vercel Inc.",
      contact: "Guillermo Rauch",
      dealValue: "$240,000",
      stage: "Negotiation",
      probability: "75%",
      owner: "Musharof C.",
    },
    {
      company: "Raycast Ltd",
      contact: "Thomas Paul",
      dealValue: "$45,000",
      stage: "Proposal Sent",
      probability: "60%",
      owner: "Alex Morgan",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="CRM Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Pipeline Value"
          value="$1,810,000"
          change="15.2%"
          isPositive={true}
          subtitle="131 active opportunities"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Deals Closed Won"
          value="$580,000"
          change="24.0%"
          isPositive={true}
          subtitle="18 closed this month"
          icon={<CheckCircle2 className="w-4 h-4" />}
        />
        <MetricCard
          title="Avg. Deal Size"
          value="$32,200"
          change="4.5%"
          isPositive={true}
          subtitle="Up from $30.8k"
          icon={<Briefcase className="w-4 h-4" />}
        />
        <MetricCard
          title="Win Rate"
          value="42.8%"
          change="3.1%"
          isPositive={true}
          subtitle="Sales cycle: 28 days"
          icon={<Target className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Deal Pipeline Stages</h2>
          <p className="text-xs text-zinc-400 mb-4">Volume and gross value by sales stage</p>
          <MonoBarChart
            data={dealStagesData}
            categories={["Value"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Pipeline by Segment</h2>
            <p className="text-xs text-zinc-400 mb-4">Target client categorization</p>
            <MonoDonutChart data={pipelineStatus} height={200} />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800 text-center text-xs">
            {pipelineStatus.map((p) => (
              <div key={p.name} className="p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 block truncate">{p.name}</span>
                <span className="font-mono font-bold text-white text-sm">{p.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Key Enterprise Opportunities</h2>
        <p className="text-xs text-zinc-400 mb-4">High-value deals currently in active pipeline</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Company</th>
                <th className="pb-3 font-semibold">Key Contact</th>
                <th className="pb-3 font-semibold">Deal Value</th>
                <th className="pb-3 font-semibold">Stage</th>
                <th className="pb-3 font-semibold">Probability</th>
                <th className="pb-3 font-semibold">Deal Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {recentDeals.map((deal) => (
                <tr key={deal.company} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-semibold text-white">{deal.company}</td>
                  <td className="py-3.5 text-zinc-300">{deal.contact}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{deal.dealValue}</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 border border-zinc-700 text-zinc-200">
                      {deal.stage}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono text-zinc-300">{deal.probability}</td>
                  <td className="py-3.5 text-zinc-400">{deal.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
