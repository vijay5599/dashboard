"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Search, Download, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    {
      id: "TXN-84920",
      recipient: "Amazon Web Services",
      date: "24 Oct 2026, 14:32",
      type: "Debit",
      amount: "-$2,450.00",
      status: "Completed",
      method: "Mastercard •••• 8842",
    },
    {
      id: "TXN-84919",
      recipient: "Enterprise Subscription Payout (Stripe)",
      date: "24 Oct 2026, 09:15",
      type: "Credit",
      amount: "+$42,800.00",
      status: "Completed",
      method: "Direct Deposit",
    },
    {
      id: "TXN-84918",
      recipient: "OpenAI API Token Batch",
      date: "23 Oct 2026, 18:40",
      type: "Debit",
      amount: "-$890.00",
      status: "Completed",
      method: "Mastercard •••• 8842",
    },
    {
      id: "TXN-84917",
      recipient: "Figma Organization License",
      date: "22 Oct 2026, 11:00",
      type: "Debit",
      amount: "-$144.00",
      status: "Completed",
      method: "Visa •••• 4102",
    },
    {
      id: "TXN-84916",
      recipient: "Refund: Order #ORD-9478",
      date: "21 Oct 2026, 16:22",
      type: "Debit",
      amount: "-$490.00",
      status: "Refunded",
      method: "Stripe Merchant",
    },
  ];

  const filtered = transactions.filter(
    (t) =>
      t.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Transactions" category="E-commerce" categoryHref="/products-list" />

      <div className="mono-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search transaction ID or vendor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
          </div>

          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Statement</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Transaction ID</th>
                <th className="pb-3 font-semibold">Entity / Description</th>
                <th className="pb-3 font-semibold">Date & Time</th>
                <th className="pb-3 font-semibold">Payment Method</th>
                <th className="pb-3 font-semibold">Amount</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-400">{t.id}</td>
                  <td className="py-3.5 font-semibold text-white">{t.recipient}</td>
                  <td className="py-3.5 font-mono text-zinc-400">{t.date}</td>
                  <td className="py-3.5 text-zinc-300">{t.method}</td>
                  <td
                    className={`py-3.5 font-mono font-bold ${
                      t.type === "Credit" ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {t.amount}
                  </td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 border border-zinc-700 text-zinc-200">
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <Link
                      href="/single-transaction"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </Link>
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
