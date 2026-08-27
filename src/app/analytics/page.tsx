"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoAreaChart,
  MonoBarChart,
  MonoLineChart,
  MonoDonutChart,
} from "@/components/charts/MonochromeCharts";
import { Activity, Globe, Users, Clock, ArrowUpRight, Smartphone, Laptop, Tablet } from "lucide-react";

export default function AnalyticsDashboard() {
  const visitorData = [
    { name: "Mon", Pageviews: 42000, Sessions: 28000 },
    { name: "Tue", Pageviews: 56000, Sessions: 34000 },
    { name: "Wed", Pageviews: 61000, Sessions: 39000 },
    { name: "Thu", Pageviews: 74000, Sessions: 48000 },
    { name: "Fri", Pageviews: 69000, Sessions: 42000 },
    { name: "Sat", Pageviews: 48000, Sessions: 31000 },
    { name: "Sun", Pageviews: 52000, Sessions: 33000 },
  ];

  const deviceData = [
    { name: "Desktop", value: 58 },
    { name: "Mobile", value: 34 },
    { name: "Tablet", value: 8 },
  ];

  const topPages = [
    { path: "/docs/getting-started", views: "142,800", bounce: "24.2%", time: "4m 12s" },
    { path: "/components/data-table", views: "98,400", bounce: "18.5%", time: "3m 45s" },
    { path: "/pricing", views: "87,120", bounce: "31.0%", time: "2m 10s" },
    { path: "/blog/tailwind-v4-release", views: "65,300", bounce: "42.1%", time: "5m 30s" },
    { path: "/auth/signin", views: "48,900", bounce: "12.4%", time: "1m 15s" },
  ];

  const countryStats = [
    { country: "United States", visitors: "184,200", pct: "42%" },
    { country: "Germany", visitors: "62,400", pct: "14%" },
    { country: "United Kingdom", visitors: "48,900", pct: "11%" },
    { country: "Japan", visitors: "35,100", pct: "8%" },
    { country: "India", visitors: "31,200", pct: "7%" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Analytics Dashboard" category="Menu" categoryHref="/" />

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Active Users"
          value="3,842"
          change="14.8%"
          isPositive={true}
          subtitle="Real-time live concurrents"
          icon={<Activity className="w-4 h-4" />}
        />
        <MetricCard
          title="Total Pageviews"
          value="1,498,200"
          change="9.2%"
          isPositive={true}
          subtitle="Across all web properties"
          icon={<Globe className="w-4 h-4" />}
        />
        <MetricCard
          title="Avg. Session Duration"
          value="3m 48s"
          change="0.8%"
          isPositive={true}
          subtitle="+14s improvement"
          icon={<Clock className="w-4 h-4" />}
        />
        <MetricCard
          title="Bounce Rate"
          value="26.4%"
          change="3.2%"
          isPositive={true}
          subtitle="Lower is better"
          icon={<Users className="w-4 h-4" />}
        />
      </div>

      {/* Traffic & Device Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Traffic & Session Overview</h2>
              <p className="text-xs text-zinc-400">Total Pageviews vs Unique Sessions</p>
            </div>
          </div>
          <MonoAreaChart
            data={visitorData}
            categories={["Pageviews", "Sessions"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Sessions by Device</h2>
            <p className="text-xs text-zinc-400 mb-4">Hardware breakdown</p>
            <MonoDonutChart data={deviceData} height={200} />
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-zinc-400">
                <Laptop className="w-4 h-4 text-white" /> Desktop
              </span>
              <span className="font-semibold text-white font-mono">58%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-zinc-400">
                <Smartphone className="w-4 h-4 text-zinc-400" /> Mobile
              </span>
              <span className="font-semibold text-white font-mono">34%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-zinc-400">
                <Tablet className="w-4 h-4 text-zinc-600" /> Tablet
              </span>
              <span className="font-semibold text-white font-mono">8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Top Pages & Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Top Performing Pages</h2>
          <p className="text-xs text-zinc-400 mb-4">Ranked by overall pageview volume</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">Page URL</th>
                  <th className="pb-3 font-semibold">Views</th>
                  <th className="pb-3 font-semibold">Bounce Rate</th>
                  <th className="pb-3 font-semibold">Avg. Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {topPages.map((page) => (
                  <tr key={page.path} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-mono text-zinc-200">{page.path}</td>
                    <td className="py-3.5 font-semibold text-white font-mono">{page.views}</td>
                    <td className="py-3.5 text-zinc-400 font-mono">{page.bounce}</td>
                    <td className="py-3.5 text-zinc-400 font-mono">{page.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Top Countries</h2>
          <p className="text-xs text-zinc-400 mb-4">Traffic by geo origin</p>

          <div className="space-y-3.5">
            {countryStats.map((c) => (
              <div key={c.country}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-zinc-300 font-medium">{c.country}</span>
                  <span className="font-mono text-zinc-400">
                    {c.visitors} ({c.pct})
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: c.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
