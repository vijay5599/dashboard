"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function RibbonsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Ribbons & Corner Badges" category="UI Elements" categoryHref="/ribbons" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="mono-card p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-black font-extrabold text-[10px] font-mono px-3 py-1 rounded-bl-lg">
            TOP SELLER
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Monochrome Design System</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Enterprise design kit built for high performance and sleek dark aesthetics.
          </p>
        </div>

        <div className="mono-card p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-200 border-l border-b border-zinc-700 font-bold text-[10px] font-mono px-3 py-1 rounded-bl-lg">
            BETA 2.0
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Real-time Stream Engine</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Kafka-backed event distribution with sub-millisecond dispatch cycles.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
