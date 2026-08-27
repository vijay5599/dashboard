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
import { DollarSign, Award, Target, Users, TrendingUp, ChevronRight } from "lucide-react";

export default function SalesDashboard() {
  const quotaData = [
    { name: "Q1", Target: 650000, Achieved: 710000 },
    { name: "Q2", Target: 750000, Achieved: 840000 },
    { name: "Q3", Target: 900000, Achieved: 980000 },
    { name: "Q4", Target: 1100000, Achieved: 1280000 },
  ];

  const salesReps = [
    { name: "Marcus Vance", quota: "$450,000", closed: "$580,000", attainment: "128%", deals: 24 },
    { name: "Elena Rostova", quota: "$400,000", closed: "$495,000", attainment: "123%", deals: 19 },
    { name: "Jessica Alba", quota: "$350,000", closed: "$390,000", attainment: "111%", deals: 16 },
    { name: "Karim Benzema", quota: "$300,000", closed: "$310,000", attainment: "103%", deals: 14 },
    { name: "Alex Morgan", quota: "$250,000", closed: "$240,000", attainment: "96%", deals: 11 },
  ];

  const regionalSales = [
    { name: "North America", value: 52 },
    { name: "Europe (EMEA)", value: 28 },
    { name: "Asia-Pacific", value: 15 },
    { name: "Latin America", value: 5 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Sales Performance Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Closed Revenue"
          value="$3,810,000"
          change="21.5%"
          isPositive={true}
          subtitle="Annual quota attainment: 114%"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Avg Sales Cycle"
          value="21.4 Days"
          change="4 days faster"
          isPositive={true}
          subtitle="Down from 25.4 days"
          icon={<Target className="w-4 h-4" />}
        />
        <MetricCard
          title="Quota Attainment"
          value="114.2%"
          change="8.2%"
          isPositive={true}
          subtitle="8 of 10 reps over quota"
          icon={<Award className="w-4 h-4" />}
        />
        <MetricCard
          title="Total New Logos"
          value="84"
          change="12 logos"
          isPositive={true}
          subtitle="ACV: $45,350"
          icon={<Users className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Quarterly Quota Target vs Achieved</h2>
          <p className="text-xs text-zinc-400 mb-4">Gross contract value bookings</p>
          <MonoBarChart
            data={quotaData}
            categories={["Target", "Achieved"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Sales by Region</h2>
            <p className="text-xs text-zinc-400 mb-4">Territory revenue share</p>
            <MonoDonutChart data={regionalSales} height={200} />
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs">
            {regionalSales.map((r) => (
              <div key={r.name} className="flex justify-between items-center">
                <span className="text-zinc-400 truncate">{r.name}</span>
                <span className="font-mono font-bold text-white">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Sales Representative Leaderboard</h2>
        <p className="text-xs text-zinc-400 mb-4">Individual quota attainment rankings</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Representative</th>
                <th className="pb-3 font-semibold">Assigned Quota</th>
                <th className="pb-3 font-semibold">Closed Revenue</th>
                <th className="pb-3 font-semibold">Deals Closed</th>
                <th className="pb-3 font-semibold">Attainment %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {salesReps.map((rep, idx) => (
                <tr key={rep.name} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-[10px] text-white">
                        0{idx + 1}
                      </div>
                      <span className="font-semibold text-white">{rep.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 font-mono text-zinc-400">{rep.quota}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{rep.closed}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{rep.deals} deals</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                        parseInt(rep.attainment) >= 100
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : "bg-zinc-950 text-zinc-400 border-zinc-800"
                      }`}
                    >
                      {rep.attainment}
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
