"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CreditCard, Check, Shield, Plus, Download, Sparkles } from "lucide-react";

export default function BillingPage() {
  const billingHistory = [
    { id: "INV-2026-08", date: "Aug 01, 2026", amount: "$199.00", status: "Paid", plan: "Enterprise Pro Annual" },
    { id: "INV-2026-07", date: "Jul 01, 2026", amount: "$199.00", status: "Paid", plan: "Enterprise Pro Annual" },
    { id: "INV-2026-06", date: "Jun 01, 2026", amount: "$199.00", status: "Paid", plan: "Enterprise Pro Annual" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Billing & Subscription" category="E-commerce" categoryHref="/products-list" />

      <div className="space-y-6 max-w-5xl">
        {/* Current Plan Overview */}
        <div className="mono-card p-6 border-zinc-700 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Current Plan</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-black font-bold">
                  Active
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Enterprise Pro Edition</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Billed annually · Renews on <span className="text-white font-mono">Aug 01, 2027</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
                Cancel Plan
              </button>
              <button className="px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm">
                Change Plan
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-400 block mb-1">Seats Used</span>
              <span className="text-base font-bold text-white font-mono">18 / 25 Members</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">Monthly Inference Limit</span>
              <span className="text-base font-bold text-white font-mono">1.2M / 5.0M Tokens</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">Storage Utilized</span>
              <span className="text-base font-bold text-white font-mono">142 GB / 1 TB</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mono-card p-5">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
            <div>
              <h3 className="text-sm font-bold text-white">Payment Methods</h3>
              <p className="text-xs text-zinc-400">Manage credit cards and billing accounts</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>Add Card</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Mastercard ending in 8842</span>
                  <span className="text-[11px] text-zinc-400 font-mono">Expires 11/29 · Primary</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                Default
              </span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Visa ending in 4102</span>
                  <span className="text-[11px] text-zinc-400 font-mono">Expires 04/28</span>
                </div>
              </div>
              <button className="text-xs text-zinc-400 hover:text-white transition-colors">
                Make Default
              </button>
            </div>
          </div>
        </div>

        {/* Invoices History Table */}
        <div className="mono-card p-5">
          <h3 className="text-sm font-bold text-white mb-1">Billing Statements</h3>
          <p className="text-xs text-zinc-400 mb-4">Download past tax receipts and PDF invoices</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">Invoice ID</th>
                  <th className="pb-3 font-semibold">Billing Date</th>
                  <th className="pb-3 font-semibold">Plan Description</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {billingHistory.map((inv) => (
                  <tr key={inv.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-mono text-zinc-300">{inv.id}</td>
                    <td className="py-3.5 font-mono text-zinc-400">{inv.date}</td>
                    <td className="py-3.5 text-white font-medium">{inv.plan}</td>
                    <td className="py-3.5 font-mono font-bold text-white">{inv.amount}</td>
                    <td className="py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-800 text-white border border-zinc-600">
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
