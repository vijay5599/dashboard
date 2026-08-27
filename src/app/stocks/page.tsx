"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoAreaChart,
  MonoBarChart,
  MonoLineChart,
} from "@/components/charts/MonochromeCharts";
import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight, BarChart2, ShieldCheck } from "lucide-react";

export default function StocksDashboard() {
  const stockPriceData = [
    { name: "09:30", AAPL: 228, NVDA: 138, TSLA: 248 },
    { name: "10:30", AAPL: 231, NVDA: 142, TSLA: 245 },
    { name: "11:30", AAPL: 229, NVDA: 146, TSLA: 252 },
    { name: "12:30", AAPL: 234, NVDA: 149, TSLA: 258 },
    { name: "13:30", AAPL: 232, NVDA: 147, TSLA: 254 },
    { name: "14:30", AAPL: 236, NVDA: 153, TSLA: 262 },
    { name: "15:30", AAPL: 238, NVDA: 156, TSLA: 268 },
    { name: "16:00", AAPL: 239, NVDA: 158, TSLA: 265 },
  ];

  const watchlist = [
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "$158.40", change: "+4.8%", vol: "48.2M", mcap: "$3.88T" },
    { symbol: "AAPL", name: "Apple Inc.", price: "$239.10", change: "+1.9%", vol: "32.1M", mcap: "$3.62T" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$442.80", change: "-0.4%", vol: "18.5M", mcap: "$3.29T" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$182.50", change: "+2.1%", vol: "22.4M", mcap: "$2.25T" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: "$198.30", change: "+1.3%", vol: "29.8M", mcap: "$2.06T" },
  ];

  const recentOrders = [
    { id: "ORD-892", type: "BUY", symbol: "NVDA", shares: 250, price: "$154.20", total: "$38,550", status: "Executed" },
    { id: "ORD-891", type: "BUY", symbol: "AAPL", shares: 100, price: "$236.80", total: "$23,680", status: "Executed" },
    { id: "ORD-890", type: "SELL", symbol: "TSLA", shares: 80, price: "$264.00", total: "$21,120", status: "Executed" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Stocks Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Portfolio Net Worth"
          value="$482,900"
          change="3.42%"
          isPositive={true}
          subtitle="+$15,980.00 today"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Day Realized P&L"
          value="+$8,420"
          change="1.8%"
          isPositive={true}
          subtitle="Win rate: 78%"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <MetricCard
          title="Buying Power"
          value="$142,500"
          change="Available"
          isPositive={true}
          subtitle="Margin factor: 4.0x"
          icon={<ShieldCheck className="w-4 h-4" />}
        />
        <MetricCard
          title="Total Positions"
          value="14 Assets"
          change="Diversified"
          isPositive={true}
          subtitle="Beta: 1.12"
          icon={<BarChart2 className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Intraday Performance (AAPL vs NVDA vs TSLA)</h2>
              <p className="text-xs text-zinc-400">Real-time quote tracking</p>
            </div>
          </div>
          <MonoLineChart
            data={stockPriceData}
            categories={["AAPL", "NVDA", "TSLA"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Portfolio Watchlist</h2>
          <p className="text-xs text-zinc-400 mb-4">Key market leaders</p>

          <div className="space-y-2.5">
            {watchlist.map((stk) => (
              <div
                key={stk.symbol}
                className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white font-mono text-xs">{stk.symbol}</span>
                    <span className="text-[10px] text-zinc-400 truncate max-w-[80px]">{stk.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Vol: {stk.vol}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white block">{stk.price}</span>
                  <span
                    className={`text-[10px] font-mono font-semibold ${
                      stk.change.startsWith("+") ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {stk.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Executed Orders</h2>
        <p className="text-xs text-zinc-400 mb-4">Today&apos;s trade order blotter</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Order ID</th>
                <th className="pb-3 font-semibold">Side</th>
                <th className="pb-3 font-semibold">Ticker</th>
                <th className="pb-3 font-semibold">Quantity</th>
                <th className="pb-3 font-semibold">Executed Price</th>
                <th className="pb-3 font-semibold">Total Amount</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {recentOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-300">{ord.id}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                        ord.type === "BUY"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : "bg-zinc-950 text-zinc-400 border-zinc-800"
                      }`}
                    >
                      {ord.type}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono font-bold text-white">{ord.symbol}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{ord.shares}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{ord.price}</td>
                  <td className="py-3.5 font-mono font-semibold text-white">{ord.total}</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 border border-zinc-700 text-zinc-200">
                      {ord.status}
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
