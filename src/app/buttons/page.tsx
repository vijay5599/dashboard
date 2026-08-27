"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, ArrowRight, Download, Trash2, Check, Sparkles } from "lucide-react";

export default function ButtonsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Buttons" category="UI Elements" categoryHref="/buttons" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Monochrome Button Hierarchy</h2>
            <p className="text-xs text-zinc-400 mb-4">Primary, secondary, outline, ghost, and icon button states</p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Solid White */}
              <button className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm">
                Primary Button
              </button>

              {/* Secondary Dark */}
              <button className="px-4 py-2 bg-zinc-800 text-white font-semibold text-xs rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700">
                Secondary Button
              </button>

              {/* Outline Border */}
              <button className="px-4 py-2 bg-transparent text-white font-semibold text-xs rounded-lg hover:bg-zinc-900 transition-colors border border-zinc-600">
                Outline Button
              </button>

              {/* Ghost */}
              <button className="px-4 py-2 bg-transparent text-zinc-400 font-semibold text-xs rounded-lg hover:text-white hover:bg-zinc-900 transition-colors">
                Ghost Button
              </button>

              {/* With Icon */}
              <button className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>With Icon</span>
              </button>

              {/* Danger / Destructive */}
              <button className="px-4 py-2 bg-zinc-950 text-zinc-400 font-semibold text-xs rounded-lg hover:text-white hover:border-zinc-500 transition-colors border border-zinc-800 flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Destructive</span>
              </button>

              {/* Disabled */}
              <button
                disabled
                className="px-4 py-2 bg-zinc-900 text-zinc-600 font-semibold text-xs rounded-lg border border-zinc-800 cursor-not-allowed"
              >
                Disabled Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
