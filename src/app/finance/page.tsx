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
import { DollarSign, CreditCard, PieChart, ShieldCheck, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FinanceDashboard() {
  const cashFlowData = [
    { name: "Jan", Inflow: 180000, Outflow: 110000 },
    { name: "Feb", Inflow: 210000, Outflow: 125000 },
    { name: "Mar", Inflow: 245000, Outflow: 130000 },
    { name: "Apr", Inflow: 290000, Outflow: 145000 },
    { name: "May", Inflow: 340000, Outflow: 160000 },
    { name: "Jun", Inflow: 410000, Outflow: 180000 },
  ];

  const expenseBreakdown = [
    { name: "Payroll & R&D", value: 55 },
    { name: "Cloud & Infrastructure", value: 20 },
    { name: "Sales & Marketing", value: 15 },
    { name: "Legal & G&A", value: 10 },
  ];

  const recentTransactions = [
    { id: "TX-94812", description: "AWS Cloud Services", category: "Infrastructure", date: "24 Oct 2026", amount: "-$14,280.00", type: "debit" },
    { id: "TX-94811", description: "Enterprise License Wire (Apex Corp)", category: "Revenue", date: "24 Oct 2026", amount: "+$85,000.00", type: "credit" },
    { id: "TX-94810", description: "Gusto Payroll Run #42", category: "Payroll", date: "23 Oct 2026", amount: "-$92,400.00", type: "debit" },
    { id: "TX-94809", description: "Stripe Monthly Payout", category: "Revenue", date: "22 Oct 2026", amount: "+$142,500.00", type: "credit" },
    { id: "TX-94808", description: "Google Workspace & OpenAI API", category: "SaaS Tools", date: "21 Oct 2026", amount: "-$3,840.00", type: "debit" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Finance & Cash Flow" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Cash Balance"
          value="$4,280,000"
          change="+$315,000"
          isPositive={true}
          subtitle="Silicon Valley Bank & Mercury"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <MetricCard
          title="Monthly Net Burn"
          value="-$45,000"
          change="Cash Flow Positive soon"
          isPositive={true}
          subtitle="Gross Burn: $180,000"
          icon={<CreditCard className="w-4 h-4" />}
        />
        <MetricCard
          title="Runway"
          value="38 Months"
          change="+6 months"
          isPositive={true}
          subtitle="Based on trailing 3-mo avg"
          icon={<ShieldCheck className="w-4 h-4" />}
        />
        <MetricCard
          title="Operating Margin"
          value="34.2%"
          change="4.8%"
          isPositive={true}
          subtitle="EBITDA positive"
          icon={<PieChart className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Cash Inflow vs Outflow</h2>
              <p className="text-xs text-zinc-400">Monthly bank treasury reconciliation</p>
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg">
              <Download className="w-3.5 h-3.5" />
              <span>Statement</span>
            </button>
          </div>
          <MonoAreaChart
            data={cashFlowData}
            categories={["Inflow", "Outflow"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Operating Expenses</h2>
            <p className="text-xs text-zinc-400 mb-4">Budget division</p>
            <MonoDonutChart data={expenseBreakdown} height={200} />
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs">
            {expenseBreakdown.map((e) => (
              <div key={e.name} className="flex justify-between items-center">
                <span className="text-zinc-400 truncate">{e.name}</span>
                <span className="font-mono font-bold text-white">{e.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">General Ledger Transactions</h2>
        <p className="text-xs text-zinc-400 mb-4">Recent credits and debits</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Reference</th>
                <th className="pb-3 font-semibold">Description</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold">Date</th>
                <th className="pb-3 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-400">{tx.id}</td>
                  <td className="py-3.5 font-semibold text-white">{tx.description}</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono text-zinc-500">{tx.date}</td>
                  <td
                    className={`py-3.5 font-mono font-bold text-right ${
                      tx.type === "credit" ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {tx.amount}
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
