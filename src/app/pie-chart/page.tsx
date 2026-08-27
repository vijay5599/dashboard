"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MonoDonutChart } from "@/components/charts/MonochromeCharts";

export default function PieChartPage() {
  const pieData1 = [
    { name: "Direct Traffic", value: 40 },
    { name: "Organic Search", value: 30 },
    { name: "Referral Links", value: 20 },
    { name: "Social Channels", value: 10 },
  ];

  const pieData2 = [
    { name: "Enterprise Pro", value: 55 },
    { name: "Team Growth", value: 25 },
    { name: "Developer Starter", value: 20 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Pie & Donut Charts" category="Charts" categoryHref="/pie-chart" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Traffic Share Donut</h2>
          <p className="text-xs text-zinc-400 mb-4">Channel acquisition percentages</p>
          <MonoDonutChart data={pieData1} height={260} />
        </div>

        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Subscription Tier Donut</h2>
          <p className="text-xs text-zinc-400 mb-4">Revenue composition by tier</p>
          <MonoDonutChart data={pieData2} height={260} />
        </div>
      </div>
    </DashboardLayout>
  );
}
