"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function TabsPage() {
  const [tab1, setTab1] = useState("overview");
  const [tab2, setTab2] = useState("pill1");

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Tabs Navigation" category="UI Elements" categoryHref="/tabs" />

      <div className="space-y-6 max-w-4xl">
        {/* Underline Tabs */}
        <div className="mono-card p-6 space-y-4">
          <h2 className="text-base font-bold text-white">Underline Tab Bar</h2>
          <div className="flex items-center gap-6 border-b border-zinc-800 text-xs font-semibold">
            {["overview", "security", "billing", "api-tokens"].map((t) => (
              <button
                key={t}
                onClick={() => setTab1(t)}
                className={`py-3 capitalize border-b-2 transition-all ${
                  tab1 === t
                    ? "text-white border-white font-bold"
                    : "text-zinc-500 border-transparent hover:text-zinc-300"
                }`}
              >
                {t.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-zinc-950 text-xs text-zinc-300 leading-relaxed font-mono">
            Active Tab Content: [{tab1.toUpperCase()}]
          </div>
        </div>

        {/* Pill Box Tabs */}
        <div className="mono-card p-6 space-y-4">
          <h2 className="text-base font-bold text-white">Pill Segment Tabs</h2>
          <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-950 p-1">
            {["pill1", "pill2", "pill3"].map((p) => (
              <button
                key={p}
                onClick={() => setTab2(p)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  tab2 === p ? "bg-white text-black font-bold shadow-sm" : "text-zinc-400 hover:text-white"
                }`}
              >
                Segment {p.slice(-1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
