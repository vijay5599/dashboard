"use client";

import React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArrowLeft, CheckCircle2, Copy, Download, ExternalLink } from "lucide-react";

export default function SingleTransactionPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Transaction #TXN-84920" category="Transactions" categoryHref="/transactions" />

      <div className="max-w-2xl mx-auto space-y-6">
        <Link
          href="/transactions"
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Transactions</span>
        </Link>

        <div className="mono-card p-6 sm:p-8 space-y-6">
          <div className="text-center pb-6 border-b border-zinc-800">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Payment Completed
            </h2>
            <span className="text-3xl font-extrabold font-mono text-white block mt-1">
              $2,450.00 USD
            </span>
            <p className="text-xs text-zinc-500 mt-1">Processed on 24 Oct 2026 at 14:32 UTC</p>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between py-2 border-b border-zinc-800/60">
              <span className="text-zinc-400">Merchant / Beneficiary:</span>
              <span className="font-semibold text-white">Amazon Web Services Inc.</span>
            </div>

            <div className="flex justify-between py-2 border-b border-zinc-800/60">
              <span className="text-zinc-400">Transaction ID:</span>
              <span className="font-mono text-zinc-300 flex items-center gap-1">
                <span>TXN-84920-US-EAST</span>
                <Copy className="w-3 h-3 text-zinc-500 cursor-pointer hover:text-white" />
              </span>
            </div>

            <div className="flex justify-between py-2 border-b border-zinc-800/60">
              <span className="text-zinc-400">Payment Method:</span>
              <span className="text-zinc-300">Corporate Mastercard (•••• 8842)</span>
            </div>

            <div className="flex justify-between py-2 border-b border-zinc-800/60">
              <span className="text-zinc-400">Category:</span>
              <span className="text-zinc-300">Cloud Hosting & Microservices</span>
            </div>

            <div className="flex justify-between py-2 border-b border-zinc-800/60">
              <span className="text-zinc-400">Authorization Code:</span>
              <span className="font-mono text-zinc-300">AUTH_992147_OK</span>
            </div>
          </div>

          <div className="pt-4 flex justify-between gap-3">
            <button className="flex-1 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
