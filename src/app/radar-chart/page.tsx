"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MonoRadarChart } from "@/components/charts/MonochromeCharts";

export default function RadarChartPage() {
  const radarData = [
    { subject: "Latency", value: 92 },
    { subject: "Throughput", value: 85 },
    { subject: "Reliability", value: 98 },
    { subject: "Cost Efficiency", value: 88 },
    { subject: "Security", value: 96 },
    { subject: "Scalability", value: 90 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Radar Chart" category="Charts" categoryHref="/radar-chart" />

      <div className="mono-card p-6 max-w-2xl mx-auto">
        <h2 className="text-base font-bold text-white mb-1">Architecture System Health Radar</h2>
        <p className="text-xs text-zinc-400 mb-6">Multi-dimensional operational capability assessment</p>
        <MonoRadarChart data={radarData} height={340} />
      </div>
    </DashboardLayout>
  );
}
