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
import { TrendingUp, Target, MousePointer, Share2, Award, ExternalLink } from "lucide-react";

export default function MarketingDashboard() {
  const campaignData = [
    { name: "Week 1", Impressions: 82000, Clicks: 9400, Conversions: 1200 },
    { name: "Week 2", Impressions: 94000, Clicks: 11200, Conversions: 1650 },
    { name: "Week 3", Impressions: 120000, Clicks: 14800, Conversions: 2100 },
    { name: "Week 4", Impressions: 145000, Clicks: 18900, Conversions: 2950 },
  ];

  const adSpendData = [
    { name: "Google Ads", value: 45 },
    { name: "Meta Ads", value: 25 },
    { name: "LinkedIn", value: 20 },
    { name: "Twitter/X", value: 10 },
  ];

  const activeCampaigns = [
    {
      name: "Q4 Enterprise Push",
      channel: "LinkedIn Ads",
      spend: "$12,400",
      cpc: "$3.40",
      roas: "4.8x",
      status: "Active",
    },
    {
      name: "Developer Tool Launch",
      channel: "Google Search",
      spend: "$8,900",
      cpc: "$1.80",
      roas: "6.2x",
      status: "Active",
    },
    {
      name: "Black Friday Early Access",
      channel: "Meta Retargeting",
      spend: "$5,200",
      cpc: "$0.95",
      roas: "8.5x",
      status: "Active",
    },
    {
      name: "Newsletter Sponsorship",
      channel: "Substack Tech",
      spend: "$3,000",
      cpc: "$2.10",
      roas: "3.4x",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Marketing Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Campaign ROI / ROAS"
          value="5.6x"
          change="1.2x"
          isPositive={true}
          subtitle="Avg return on ad spend"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <MetricCard
          title="Total Ad Spend"
          value="$29,500"
          change="8.4%"
          isPositive={false}
          subtitle="Budget allocated: $35,000"
          icon={<Target className="w-4 h-4" />}
        />
        <MetricCard
          title="Click-Through Rate (CTR)"
          value="4.82%"
          change="0.65%"
          isPositive={true}
          subtitle="Benchmark: 2.5%"
          icon={<MousePointer className="w-4 h-4" />}
        />
        <MetricCard
          title="Total Conversions"
          value="7,900"
          change="22.1%"
          isPositive={true}
          subtitle="CAC: $3.73 / user"
          icon={<Award className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Campaign Funnel Conversion</h2>
          <p className="text-xs text-zinc-400 mb-4">Impressions vs Clicks vs Paid Conversions</p>
          <MonoBarChart
            data={campaignData}
            categories={["Clicks", "Conversions"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Ad Spend by Platform</h2>
            <p className="text-xs text-zinc-400 mb-4">Budget allocation</p>
            <MonoDonutChart data={adSpendData} height={200} />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800 text-xs">
            {adSpendData.map((d) => (
              <div key={d.name} className="flex justify-between">
                <span className="text-zinc-400 truncate">{d.name}</span>
                <span className="font-mono font-semibold text-white">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Active Ad Campaigns</h2>
        <p className="text-xs text-zinc-400 mb-4">Real-time performance across channels</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Campaign Name</th>
                <th className="pb-3 font-semibold">Channel</th>
                <th className="pb-3 font-semibold">Spend</th>
                <th className="pb-3 font-semibold">CPC</th>
                <th className="pb-3 font-semibold">ROAS</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {activeCampaigns.map((camp) => (
                <tr key={camp.name} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-semibold text-white">{camp.name}</td>
                  <td className="py-3.5 text-zinc-400">{camp.channel}</td>
                  <td className="py-3.5 font-mono text-zinc-200">{camp.spend}</td>
                  <td className="py-3.5 font-mono text-zinc-400">{camp.cpc}</td>
                  <td className="py-3.5 font-mono font-semibold text-white">{camp.roas}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                        camp.status === "Active"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {camp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
