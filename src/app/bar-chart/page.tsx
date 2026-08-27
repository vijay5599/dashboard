"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MonoBarChart } from "@/components/charts/MonochromeCharts";

export default function BarChartPage() {
  const barData1 = [
    { name: "Jan", "Actual Sales": 65000, Target: 50000 },
    { name: "Feb", "Actual Sales": 72000, Target: 60000 },
    { name: "Mar", "Actual Sales": 89000, Target: 75000 },
    { name: "Apr", "Actual Sales": 95000, Target: 85000 },
    { name: "May", "Actual Sales": 118000, Target: 95000 },
    { name: "Jun", "Actual Sales": 142000, Target: 110000 },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Bar Charts" category="Charts" categoryHref="/bar-chart" />

      <div className="space-y-6">
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Grouped Comparison Bar Chart</h2>
          <p className="text-xs text-zinc-400 mb-4">Actual revenue booked vs monthly budgeted targets</p>
          <MonoBarChart data={barData1} categories={["Actual Sales", "Target"]} height={340} />
        </div>
      </div>
    </DashboardLayout>
  );
}
