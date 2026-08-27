"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Sparkles, Shield, Check } from "lucide-react";

export default function BadgePage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Badges & Chips" category="UI Elements" categoryHref="/badge" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Monochrome Badge Styles</h2>
            <p className="text-xs text-zinc-400 mb-4">Tag indicators for status and metadata</p>

            <div className="flex flex-wrap gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-black font-mono">
                SOLID WHITE
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-zinc-800 text-white border border-zinc-700 font-mono">
                BORDERED ZINC
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono">
                SUBTLE OUTLINE
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono uppercase bg-zinc-900 border border-zinc-700 text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>LIVE STREAM</span>
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-black text-white border-2 border-white font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>PRO BADGE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
