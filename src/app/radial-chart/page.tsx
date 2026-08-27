"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MonoDonutChart } from "@/components/charts/MonochromeCharts";

export default function RadialChartPage() {
  const completionData = [
    { name: "Completed", value: 78 },
    { name: "Remaining", value: 22 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Radial Chart" category="Charts" categoryHref="/radial-chart" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="mono-card p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-base font-bold text-white mb-1">Goal Completion Rate</h2>
          <p className="text-xs text-zinc-400 mb-4">Sprint velocity percentage</p>
          <MonoDonutChart data={completionData} height={240} innerRadius={70} outerRadius={95} />
          <div className="mt-4">
            <span className="text-3xl font-extrabold font-mono text-white">78.4%</span>
            <p className="text-xs text-zinc-500 mt-1">42 of 54 milestones cleared</p>
          </div>
        </div>

        <div className="mono-card p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-base font-bold text-white mb-1">Server Cluster Capacity</h2>
          <p className="text-xs text-zinc-400 mb-4">RAM & CPU load balance</p>
          <MonoDonutChart data={[{ name: "Utilized", value: 64 }, { name: "Free", value: 36 }]} height={240} innerRadius={70} outerRadius={95} />
          <div className="mt-4">
            <span className="text-3xl font-extrabold font-mono text-white">64.0%</span>
            <p className="text-xs text-zinc-500 mt-1">36% compute buffer available</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
