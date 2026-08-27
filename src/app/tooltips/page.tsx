"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Info, HelpCircle } from "lucide-react";

export default function TooltipsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Tooltips" category="UI Elements" categoryHref="/tooltips" />

      <div className="mono-card p-6 space-y-6 max-w-3xl">
        <h2 className="text-base font-bold text-white mb-2">Hover Micro-Tooltips</h2>

        <div className="flex flex-wrap items-center gap-6">
          {/* Top Tooltip */}
          <div className="group relative inline-block">
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800">
              Hover for Top Tooltip
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 bg-white text-black text-[10px] font-bold rounded shadow-lg whitespace-nowrap z-30 font-mono">
              Tooltip on Top
            </div>
          </div>

          {/* Bottom Tooltip */}
          <div className="group relative inline-block">
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800">
              Hover for Bottom Tooltip
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block px-2.5 py-1 bg-white text-black text-[10px] font-bold rounded shadow-lg whitespace-nowrap z-30 font-mono">
              Tooltip on Bottom
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
