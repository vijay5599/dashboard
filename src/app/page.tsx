"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoAreaChart,
  MonoBarChart,
  MonoDonutChart,
} from "@/components/charts/MonochromeCharts";
import {
  DollarSign,
  ShoppingCart,
  Eye,
  Users,
  ArrowUpRight,
  TrendingUp,
  Download,
  Filter,
  MoreVertical,
  ChevronRight,
  CheckCircle2,
  Clock,
  RotateCcw,
} from "lucide-react";

export default function EcommerceDashboard() {
  const [dateRange, setDateRange] = useState("Monthly");

  const revenueData = [
    { name: "Jan", Revenue: 38000, Expenses: 18000 },
    { name: "Feb", Revenue: 45000, Expenses: 22000 },
    { name: "Mar", Revenue: 52000, Expenses: 24000 },
    { name: "Apr", Revenue: 68000, Expenses: 31000 },
    { name: "May", Revenue: 61000, Expenses: 28000 },
    { name: "Jun", Revenue: 79000, Expenses: 35000 },
    { name: "Jul", Revenue: 88000, Expenses: 41000 },
    { name: "Aug", Revenue: 95000, Expenses: 44000 },
    { name: "Sep", Revenue: 112000, Expenses: 49000 },
    { name: "Oct", Revenue: 104000, Expenses: 46000 },
    { name: "Nov", Revenue: 125000, Expenses: 53000 },
    { name: "Dec", Revenue: 142000, Expenses: 59000 },
  ];

  const channelData = [
    { name: "Direct", value: 45 },
    { name: "Organic Search", value: 30 },
    { name: "Referral", value: 15 },
    { name: "Social Media", value: 10 },
  ];

  const recentOrders = [
    {
      id: "ORD-9481",
      customer: "Eleanor Pena",
      email: "eleanor@example.com",
      product: "Pro Monochrome UI Kit",
      date: "24 Oct 2026",
      amount: "$289.00",
      status: "Delivered",
    },
    {
      id: "ORD-9480",
      customer: "Wade Warren",
      email: "wade.w@example.com",
      product: "Enterprise SaaS License",
      date: "24 Oct 2026",
      amount: "$1,499.00",
      status: "Processing",
    },
    {
      id: "ORD-9479",
      customer: "Jane Cooper",
      email: "jane.c@example.com",
      product: "Custom Design Tokens",
      date: "23 Oct 2026",
      amount: "$159.00",
      status: "Delivered",
    },
    {
      id: "ORD-9478",
      customer: "Guy Hawkins",
      email: "guy.h@example.com",
      product: "Developer API Pack",
      date: "22 Oct 2026",
      amount: "$490.00",
      status: "Refunded",
    },
    {
      id: "ORD-9477",
      customer: "Leslie Alexander",
      email: "leslie@example.com",
      product: "Next.js Theme Bundle",
      date: "21 Oct 2026",
      amount: "$349.00",
      status: "Delivered",
    },
  ];

  const topProducts = [
    {
      name: "Monochrome Admin Pro",
      sales: "1,420 units",
      revenue: "$124,500",
      growth: "+24.5%",
    },
    {
      name: "SaaS Starter Template",
      sales: "980 units",
      revenue: "$88,200",
      growth: "+18.2%",
    },
    {
      name: "Figma UI Library v4",
      sales: "760 units",
      revenue: "$60,800",
      growth: "+11.4%",
    },
    {
      name: "AI Prompt Studio",
      sales: "640 units",
      revenue: "$44,800",
      growth: "+8.9%",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Ecommerce Dashboard" category="Menu" categoryHref="/" />

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Revenue"
          value="$1,248,500"
          change="18.2%"
          isPositive={true}
          subtitle="Compared to last month"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Total Orders"
          value="8,420"
          change="8.5%"
          isPositive={true}
          subtitle="348 orders today"
          icon={<ShoppingCart className="w-4 h-4" />}
        />
        <MetricCard
          title="Store Visitors"
          value="294,180"
          change="4.1%"
          isPositive={false}
          subtitle="Unique session tracking"
          icon={<Eye className="w-4 h-4" />}
        />
        <MetricCard
          title="Active Customers"
          value="18,940"
          change="12.4%"
          isPositive={true}
          subtitle="92% repeat customer rate"
          icon={<Users className="w-4 h-4" />}
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Performance Spline Chart */}
        <div className="lg:col-span-2 mono-card p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-base font-bold text-white">Revenue Performance</h2>
              <p className="text-xs text-zinc-400">Total gross revenue vs operating expenses</p>
            </div>
            <div className="flex items-center gap-2">
              {["Weekly", "Monthly", "Yearly"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setDateRange(tab)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    dateRange === tab
                      ? "bg-white text-black shadow-sm"
                      : "text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <MonoAreaChart
            data={revenueData}
            categories={["Revenue", "Expenses"]}
            height={320}
          />
        </div>

        {/* Sales by Channel Donut */}
        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-white">Acquisition Channels</h2>
                <p className="text-xs text-zinc-400">Customer source distribution</p>
              </div>
              <button className="p-1 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <MonoDonutChart data={channelData} height={200} />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
            {channelData.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 truncate">{c.name}</span>
                <span className="font-semibold text-white font-mono">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid: Recent Orders & Top Selling Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 mono-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Recent Orders</h2>
              <p className="text-xs text-zinc-400">Live order fulfillment tracking</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Product</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-mono text-zinc-300">{order.id}</td>
                    <td className="py-3.5">
                      <div className="font-semibold text-white">{order.customer}</div>
                      <div className="text-[11px] text-zinc-500">{order.email}</div>
                    </td>
                    <td className="py-3.5 text-zinc-300">{order.product}</td>
                    <td className="py-3.5 text-zinc-500 font-mono">{order.date}</td>
                    <td className="py-3.5 font-semibold text-white font-mono">
                      {order.amount}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                          order.status === "Delivered"
                            ? "bg-zinc-800 text-white border-zinc-600"
                            : order.status === "Processing"
                            ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                            : "bg-zinc-950 text-zinc-500 border-zinc-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="mono-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Top Products</h2>
              <p className="text-xs text-zinc-400">By revenue generated</p>
            </div>
          </div>

          <div className="space-y-4">
            {topProducts.map((p, idx) => (
              <div
                key={p.name}
                className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">{p.name}</h3>
                    <p className="text-[11px] text-zinc-400">{p.sales}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white block font-mono">
                    {p.revenue}
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-400">
                    {p.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
