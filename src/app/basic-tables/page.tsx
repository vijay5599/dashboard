"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function BasicTablesPage() {
  const users = [
    { name: "Musharof Chowdhury", email: "musharof@krypton.io", role: "Super Admin", status: "Active" },
    { name: "Marcus Vance", email: "marcus@krypton.io", role: "Editor", status: "Active" },
    { name: "Elena Rostova", email: "elena@krypton.io", role: "DevOps", status: "Pending" },
    { name: "Jessica Alba", email: "jessica@krypton.io", role: "Viewer", status: "Inactive" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Basic Tables" category="Tables" categoryHref="/basic-tables" />

      <div className="space-y-6">
        {/* Striped Table */}
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Striped Rows Table</h2>
          <p className="text-xs text-zinc-400 mb-4">Alternating dark row styles</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">User</th>
                  <th className="pb-3 font-semibold">Email</th>
                  <th className="pb-3 font-semibold">Role</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/40">
                {users.map((u, i) => (
                  <tr
                    key={u.email}
                    className={i % 2 === 0 ? "bg-zinc-900/30" : "bg-transparent"}
                  >
                    <td className="py-3 px-2 font-semibold text-white">{u.name}</td>
                    <td className="py-3 px-2 text-zinc-400">{u.email}</td>
                    <td className="py-3 px-2 text-zinc-300">{u.role}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                          u.status === "Active"
                            ? "bg-zinc-800 text-white border-zinc-600"
                            : "bg-zinc-950 text-zinc-500 border-zinc-800"
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hoverable & Bordered Table */}
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Hoverable & Bordered Table</h2>
          <p className="text-xs text-zinc-400 mb-4">Grid boundaries with active hover highlight</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-zinc-800">
              <thead>
                <tr className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-300">
                  <th className="p-3 font-semibold border-r border-zinc-800">Resource</th>
                  <th className="p-3 font-semibold border-r border-zinc-800">Cluster</th>
                  <th className="p-3 font-semibold border-r border-zinc-800">Uptime</th>
                  <th className="p-3 font-semibold">Health Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-900/60 transition-colors">
                  <td className="p-3 font-mono text-zinc-200 border-r border-zinc-800">
                    auth-service-v2
                  </td>
                  <td className="p-3 text-zinc-400 border-r border-zinc-800">us-east-1a</td>
                  <td className="p-3 font-mono text-zinc-300 border-r border-zinc-800">
                    99.99% (42 days)
                  </td>
                  <td className="p-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-white border border-zinc-700">
                      Healthy
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-900/60 transition-colors">
                  <td className="p-3 font-mono text-zinc-200 border-r border-zinc-800">
                    payment-worker-prod
                  </td>
                  <td className="p-3 text-zinc-400 border-r border-zinc-800">us-east-1b</td>
                  <td className="p-3 font-mono text-zinc-300 border-r border-zinc-800">
                    100.00% (118 days)
                  </td>
                  <td className="p-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-white border border-zinc-700">
                      Healthy
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
