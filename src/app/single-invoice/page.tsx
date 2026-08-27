"use client";

import React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Printer, Download, Send, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SingleInvoicePage() {
  const lineItems = [
    { desc: "TailAdmin Monochrome Pro License", qty: 1, unit: "$499.00", total: "$499.00" },
    { desc: "Dedicated Cloud Infrastructure Setup (AWS ECS)", qty: 14, unit: "$150.00", total: "$2,100.00" },
    { desc: "Custom AI Token Inference Pipeline", qty: 1, unit: "$1,400.00", total: "$1,400.00" },
    { desc: "Priority 24/7 SLA Support Tier", qty: 1, unit: "$501.00", total: "$501.00" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Invoice #INV-00981" category="Invoices" categoryHref="/invoices" />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Actions */}
        <div className="flex items-center justify-between">
          <Link
            href="/invoices"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Invoices</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm">
              <Send className="w-3.5 h-3.5" />
              <span>Send Receipt</span>
            </button>
          </div>
        </div>

        {/* Printable Invoice Paper Sheet */}
        <div className="mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white text-black font-bold text-sm flex items-center justify-center">
                  TA
                </div>
                <span className="text-base font-bold text-white tracking-wider">
                  TAILADMIN MONO
                </span>
              </div>
              <p className="text-xs text-zinc-400">TailAdmin Technologies Inc.</p>
              <p className="text-xs text-zinc-500">548 Market St, Suite 2901</p>
              <p className="text-xs text-zinc-500">San Francisco, CA 94104</p>
            </div>

            <div className="sm:text-right">
              <h2 className="text-2xl font-extrabold text-white font-mono">INVOICE</h2>
              <p className="text-xs font-mono text-zinc-400 mt-1">#INV-00981</p>
              <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-200">
                <CheckCircle2 className="w-3 h-3 text-white" />
                <span>PAID IN FULL</span>
              </div>
            </div>
          </div>

          {/* Billed To / Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-500 uppercase tracking-wider font-semibold block mb-1">
                Billed To:
              </span>
              <p className="font-bold text-white text-sm">Acme Corporation</p>
              <p className="text-zinc-400">Attn: Sarah Jenkins (Accounts Payable)</p>
              <p className="text-zinc-400">billing@acme.com</p>
              <p className="text-zinc-500">100 Enterprise Way, Austin TX 78701</p>
            </div>

            <div className="sm:text-right space-y-1">
              <div>
                <span className="text-zinc-500 mr-2">Invoice Date:</span>
                <span className="font-mono text-zinc-200">24 Oct 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 mr-2">Due Date:</span>
                <span className="font-mono text-zinc-200">07 Nov 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 mr-2">Payment Method:</span>
                <span className="font-mono text-zinc-200">Wire (SVB-••••8841)</span>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="py-6">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 font-semibold">
                  <th className="pb-3">Item Description</th>
                  <th className="pb-3 text-center">Qty</th>
                  <th className="pb-3 text-right">Unit Price</th>
                  <th className="pb-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono">
                {lineItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 text-zinc-200 font-sans">{item.desc}</td>
                    <td className="py-3.5 text-center text-zinc-400">{item.qty}</td>
                    <td className="py-3.5 text-right text-zinc-400">{item.unit}</td>
                    <td className="py-3.5 text-right font-bold text-white">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Breakdown */}
          <div className="pt-4 border-t border-zinc-800 flex justify-end">
            <div className="w-full sm:w-64 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal:</span>
                <span className="font-mono">$4,500.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Tax (0.00%):</span>
                <span className="font-mono">$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                <span>Total Due:</span>
                <span className="font-mono">$4,500.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
