"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Loader2, RefreshCw } from "lucide-react";

export default function SpinnersPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Spinners & Loaders" category="UI Elements" categoryHref="/spinners" />

      <div className="mono-card p-6 space-y-6 max-w-3xl">
        <h2 className="text-base font-bold text-white mb-2">Monochrome Loading Indicators</h2>

        <div className="flex flex-wrap items-center gap-8">
          {/* Border Spinner */}
          <div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-white animate-spin" />

          {/* Double ring */}
          <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-b-white border-t-white animate-spin" />

          {/* Lucide Loader Icon */}
          <Loader2 className="w-8 h-8 text-white animate-spin" />

          {/* Pulse Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
