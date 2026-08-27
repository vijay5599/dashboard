"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Bell, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function NotificationsPage() {
  const notifs = [
    { id: 1, title: "New Enterprise License Wire Received", time: "5m ago", desc: "Acme Corp wired $85,000 for annual tier.", unread: true },
    { id: 2, title: "Server Node Auto-Healed", time: "22m ago", desc: "Kubernetes pod pod-worker-04 restarted cleanly.", unread: true },
    { id: 3, title: "Nightly Security Audit Passed", time: "2h ago", desc: "Zero high-risk CVE vulnerabilities found in registry.", unread: false },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Notifications Hub" category="UI Elements" categoryHref="/notifications" />

      <div className="space-y-6 max-w-3xl">
        <div className="mono-card p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <h2 className="text-base font-bold text-white">System Alert Stream</h2>
            <button className="text-xs text-zinc-400 hover:text-white transition-colors">
              Mark all as read
            </button>
          </div>

          <div className="divide-y divide-zinc-800">
            {notifs.map((n) => (
              <div
                key={n.id}
                className={`py-4 flex gap-3.5 ${n.unread ? "bg-zinc-900/30 -mx-4 px-4 rounded-xl" : ""}`}
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{n.title}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">{n.time}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
