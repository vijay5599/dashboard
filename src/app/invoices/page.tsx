"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, Search, Filter, Download, Eye, MoreVertical } from "lucide-react";

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const invoices = [
    {
      id: "INV-00981",
      client: "Acme Corporation",
      email: "billing@acme.com",
      issueDate: "24 Oct 2026",
      dueDate: "07 Nov 2026",
      amount: "$4,500.00",
      status: "Paid",
    },
    {
      id: "INV-00980",
      client: "Vertex Studio Ltd",
      email: "finance@vertex.io",
      issueDate: "22 Oct 2026",
      dueDate: "05 Nov 2026",
      amount: "$1,850.00",
      status: "Pending",
    },
    {
      id: "INV-00979",
      client: "Nexus Global AI",
      email: "accounts@nexus.ai",
      issueDate: "19 Oct 2026",
      dueDate: "02 Nov 2026",
      amount: "$8,900.00",
      status: "Paid",
    },
    {
      id: "INV-00978",
      client: "Starlight Media",
      email: "pay@starlight.co",
      issueDate: "15 Oct 2026",
      dueDate: "29 Oct 2026",
      amount: "$620.00",
      status: "Overdue",
    },
    {
      id: "INV-00977",
      client: "CloudScale Infra",
      email: "invoice@cloudscale.net",
      issueDate: "12 Oct 2026",
      dueDate: "26 Oct 2026",
      amount: "$3,240.00",
      status: "Draft",
    },
  ];

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch =
      inv.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Invoices" category="E-commerce" categoryHref="/products-list" />

      <div className="mono-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search invoice # or client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            >
              <option value="All">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/create-invoice"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create Invoice</span>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Invoice #</th>
                <th className="pb-3 font-semibold">Client Name</th>
                <th className="pb-3 font-semibold">Issue Date</th>
                <th className="pb-3 font-semibold">Due Date</th>
                <th className="pb-3 font-semibold">Total Amount</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono font-bold text-white">
                    <Link href="/single-invoice" className="hover:underline">
                      {inv.id}
                    </Link>
                  </td>
                  <td className="py-3.5">
                    <div className="font-semibold text-white">{inv.client}</div>
                    <div className="text-[11px] text-zinc-500">{inv.email}</div>
                  </td>
                  <td className="py-3.5 font-mono text-zinc-400">{inv.issueDate}</td>
                  <td className="py-3.5 font-mono text-zinc-400">{inv.dueDate}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{inv.amount}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                        inv.status === "Paid"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : inv.status === "Pending"
                          ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                          : inv.status === "Overdue"
                          ? "bg-zinc-950 text-zinc-400 border-zinc-700"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <Link
                      href="/single-invoice"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
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
