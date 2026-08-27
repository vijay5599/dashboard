"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Check, Dot } from "lucide-react";

export default function ListPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Lists" category="UI Elements" categoryHref="/list" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Bullet List */}
        <div className="mono-card p-6 space-y-3">
          <h2 className="text-base font-bold text-white mb-2">Checkmark Checklist</h2>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>Full compliance with SOC-2 security protocols</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>Automated Kubernetes pod self-healing</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>Pure black & white high-contrast tokens</span>
            </li>
          </ul>
        </div>

        {/* Ordered List */}
        <div className="mono-card p-6 space-y-3">
          <h2 className="text-base font-bold text-white mb-2">Numbered Deployment Steps</h2>
          <ol className="space-y-2.5 text-xs text-zinc-300 list-decimal list-inside font-mono">
            <li>Initialize Turbo compiler environment</li>
            <li>Run TypeScript static analysis lint checks</li>
            <li>Deploy production container to global clusters</li>
          </ol>
        </div>
      </div>
    </DashboardLayout>
  );
}
