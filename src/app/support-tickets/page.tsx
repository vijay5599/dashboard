"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Search, Plus, Filter, Headphones, Eye, Clock, CheckCircle2 } from "lucide-react";

export default function SupportTicketsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      id: "TCK-4819",
      subject: "SSO SAML authentication loop with Okta",
      requester: "DevOps at Vertex Studio",
      priority: "Urgent",
      status: "Open",
      updated: "15m ago",
      assignee: "Musharof C.",
    },
    {
      id: "TCK-4818",
      subject: "Rate limit threshold adjustments for enterprise tier",
      requester: "Sarah Jenkins (Acme Corp)",
      priority: "High",
      status: "In Progress",
      updated: "1h ago",
      assignee: "Alex Morgan",
    },
    {
      id: "TCK-4817",
      subject: "Custom domain SSL certificate validation failure",
      requester: "Linear Systems Ltd",
      priority: "Medium",
      status: "Waiting Client",
      updated: "4h ago",
      assignee: "Elena R.",
    },
    {
      id: "TCK-4816",
      subject: "Billing invoice address correction for EU VAT",
      requester: "CloudScale Infra",
      priority: "Low",
      status: "Resolved",
      updated: "Yesterday",
      assignee: "Finance Bot",
    },
  ];

  const filtered = tickets.filter(
    (t) =>
      t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Support Tickets" category="Support" categoryHref="/support-tickets" />

      <div className="mono-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search ticket # or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
          </div>

          <Link
            href="/support-ticket-reply"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Open Ticket</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Ticket ID</th>
                <th className="pb-3 font-semibold">Subject</th>
                <th className="pb-3 font-semibold">Requester</th>
                <th className="pb-3 font-semibold">Priority</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Last Updated</th>
                <th className="pb-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-400">{t.id}</td>
                  <td className="py-3.5 font-semibold text-white">
                    <Link href="/support-ticket-reply" className="hover:underline">
                      {t.subject}
                    </Link>
                  </td>
                  <td className="py-3.5 text-zinc-400">{t.requester}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                        t.priority === "Urgent"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : t.priority === "High"
                          ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {t.priority}
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-200">
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono text-zinc-500">{t.updated}</td>
                  <td className="py-3.5 text-right">
                    <Link
                      href="/support-ticket-reply"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Reply</span>
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
