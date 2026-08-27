"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function ProgressBarPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Progress Bars" category="UI Elements" categoryHref="/progress-bar" />

      <div className="mono-card p-6 space-y-6 max-w-3xl">
        <h2 className="text-base font-bold text-white mb-2">Monochrome Progress Indicators</h2>

        <div className="space-y-5">
          {/* Progress 1 */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
              <span>Database Indexing</span>
              <span className="font-mono">82%</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: "82%" }} />
            </div>
          </div>

          {/* Progress 2 */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
              <span>Cloud Storage Capacity</span>
              <span className="font-mono">45%</span>
            </div>
            <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-400 rounded-full transition-all duration-500" style={{ width: "45%" }} />
            </div>
          </div>

          {/* Progress 3 */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
              <span>Security Audit Verification</span>
              <span className="font-mono">100% Complete</span>
            </div>
            <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
