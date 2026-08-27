"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Key, Plus, Copy, Trash2, Shield, Check } from "lucide-react";

export default function ApiKeysPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [keys, setKeys] = useState([
    {
      id: "KEY-01",
      name: "Production Cluster Webhook",
      prefix: "tm_live_9481••••••••••••",
      created: "14 Oct 2026",
      lastUsed: "2 mins ago",
      status: "Active",
    },
    {
      id: "KEY-02",
      name: "Staging Pipeline CI/CD",
      prefix: "tm_test_3120••••••••••••",
      created: "01 Sep 2026",
      lastUsed: "Yesterday",
      status: "Active",
    },
  ]);

  const copyKey = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="API Keys & Access Tokens" category="Pages" categoryHref="/api-keys" />

      <div className="space-y-6 max-w-5xl">
        <div className="mono-card p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-base font-bold text-white">Active Secret Keys</h2>
              <p className="text-xs text-zinc-400">Tokens authenticate programmatic REST and GraphQL requests</p>
            </div>
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm">
              <Plus className="w-4 h-4" />
              <span>Create New Key</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">Key Name</th>
                  <th className="pb-3 font-semibold">Secret Key</th>
                  <th className="pb-3 font-semibold">Created Date</th>
                  <th className="pb-3 font-semibold">Last Accessed</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono">
                {keys.map((k) => (
                  <tr key={k.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-white">{k.name}</td>
                    <td className="py-3.5 text-zinc-300 flex items-center gap-2">
                      <span>{k.prefix}</span>
                      <button
                        onClick={() => copyKey(k.id)}
                        className="p-1 hover:text-white text-zinc-500 rounded"
                      >
                        {copiedId === k.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </td>
                    <td className="py-3.5 text-zinc-400">{k.created}</td>
                    <td className="py-3.5 text-zinc-400">{k.lastUsed}</td>
                    <td className="py-3.5 font-sans">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-white border border-zinc-700">
                        {k.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-sans">
                      <button className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800">
                        <Trash2 className="w-3.5 h-3.5" />
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
