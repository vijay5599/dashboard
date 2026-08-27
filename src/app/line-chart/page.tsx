"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MonoLineChart, MonoAreaChart } from "@/components/charts/MonochromeCharts";

export default function LineChartPage() {
  const lineData1 = [
    { name: "Jan", "Series A": 45, "Series B": 28 },
    { name: "Feb", "Series A": 58, "Series B": 34 },
    { name: "Mar", "Series A": 62, "Series B": 49 },
    { name: "Apr", "Series A": 79, "Series B": 55 },
    { name: "May", "Series A": 85, "Series B": 68 },
    { name: "Jun", "Series A": 105, "Series B": 82 },
  ];

  const multiSeriesData = [
    { name: "Week 1", Product1: 120, Product2: 80, Product3: 40 },
    { name: "Week 2", Product1: 140, Product2: 95, Product3: 50 },
    { name: "Week 3", Product1: 180, Product2: 130, Product3: 75 },
    { name: "Week 4", Product1: 220, Product2: 170, Product3: 110 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Line Charts" category="Charts" categoryHref="/line-chart" />

      <div className="space-y-6">
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Dual Series Smooth Spline Line Chart</h2>
          <p className="text-xs text-zinc-400 mb-4">High-contrast monochrome comparison</p>
          <MonoLineChart data={lineData1} categories={["Series A", "Series B"]} height={320} />
        </div>

        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Multi-Product Trajectory Line Chart</h2>
          <p className="text-xs text-zinc-400 mb-4">Three product line performance metrics</p>
          <MonoLineChart
            data={multiSeriesData}
            categories={["Product1", "Product2", "Product3"]}
            height={320}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
