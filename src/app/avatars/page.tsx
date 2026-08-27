"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function AvatarsPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Avatars" category="UI Elements" categoryHref="/avatars" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Avatar Sizes & Status Indicators</h2>
            <p className="text-xs text-zinc-400 mb-4">Circular and rounded avatars in pure monochrome</p>

            <div className="flex flex-wrap items-center gap-6">
              {/* Extra Large */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white text-black font-extrabold text-xl flex items-center justify-center border-2 border-black shadow-lg">
                  MC
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white" />
              </div>

              {/* Large */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-white font-bold text-sm flex items-center justify-center border border-zinc-700">
                  ER
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
              </div>

              {/* Medium */}
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-zinc-300 font-bold text-xs flex items-center justify-center border border-zinc-800">
                  MV
                </div>
              </div>

              {/* Small */}
              <div className="w-8 h-8 rounded-full bg-white text-black font-bold text-[10px] flex items-center justify-center">
                JA
              </div>

              {/* Avatar Group Stack */}
              <div className="flex -space-x-2 overflow-hidden ml-4">
                <div className="inline-block h-8 w-8 rounded-full bg-white text-black text-[10px] font-bold ring-2 ring-black flex items-center justify-center">
                  A
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-zinc-800 text-white text-[10px] font-bold ring-2 ring-black flex items-center justify-center">
                  B
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-zinc-900 text-zinc-300 text-[10px] font-bold ring-2 ring-black flex items-center justify-center">
                  C
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-black text-white text-[10px] font-bold ring-2 ring-zinc-700 flex items-center justify-center">
                  +5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
