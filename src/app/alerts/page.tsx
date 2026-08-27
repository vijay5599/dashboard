"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Alerts & Banners" category="UI Elements" categoryHref="/alerts" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-4">
          <h2 className="text-base font-bold text-white mb-2">Monochrome Alert Variations</h2>

          {/* Success Alert */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-bold text-white">System Deployment Succeeded</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                All 24 worker pods have synchronized with the latest kernel release.
              </p>
            </div>
            <button className="text-zinc-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Info Alert */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-bold text-zinc-200">Scheduled Database Snapshot</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Automated backup routine is scheduled for 02:00 UTC.
              </p>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-600 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-bold text-white">API Token Rate Limit Warning</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Your application has consumed 85% of its hourly OpenAI inference quota.
              </p>
            </div>
          </div>

          {/* Error Alert */}
          <div className="p-4 rounded-xl bg-black border-2 border-white flex items-start gap-3 shadow-xl">
            <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-bold text-white">Critical Security Policy Violation</h4>
              <p className="text-xs text-zinc-300 mt-0.5">
                Unauthorized SSH connection attempt blocked by zero-trust firewall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
