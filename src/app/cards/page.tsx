"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Sparkles, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function CardsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Cards Layouts" category="UI Elements" categoryHref="/cards" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Standard Card */}
        <div className="mono-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Compute Pod Node</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Auto-scaling Kubernetes deployment worker running on dedicated high-performance hardware.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
            <span className="text-zinc-500 font-mono">Status: 100%</span>
            <span className="text-white font-semibold flex items-center gap-1 cursor-pointer hover:underline">
              Inspect <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card 2: Glassmorphism / Gradient Card */}
        <div className="mono-card p-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border-zinc-700 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-black font-bold">
              PRO FEATURE
            </span>
            <h3 className="text-sm font-bold text-white mt-3 mb-1">Monochrome Zero-Trust Security</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              End-to-end hardware-backed KMS encryption with real-time anomaly detection.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-zinc-800">
            <button className="w-full py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors">
              Activate Module
            </button>
          </div>
        </div>

        {/* Card 3: Interactive Card */}
        <div className="mono-card p-6 mono-card-hover cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Audited Compliance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              SOC-2 Type II, ISO 27001, and HIPAA verified infrastructure logs.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-zinc-800 text-right">
            <span className="text-xs font-mono font-bold text-zinc-300">Verified 2026</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
