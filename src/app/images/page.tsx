"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Image as ImageIcon } from "lucide-react";

export default function ImagesPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Images & Aspect Ratios" category="UI Elements" categoryHref="/images" />

      <div className="space-y-6">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Aspect Ratio Containers</h2>
            <p className="text-xs text-zinc-400 mb-6">Responsive image frames with placeholder gradients</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 16:9 */}
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">16:9 Landscape</span>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-700 flex flex-col items-center justify-center text-zinc-400 p-4">
                  <ImageIcon className="w-8 h-8 mb-2 text-zinc-300" />
                  <span className="text-xs font-mono">1920 x 1080</span>
                </div>
              </div>

              {/* 1:1 */}
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">1:1 Square</span>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-700 flex flex-col items-center justify-center text-zinc-400 p-4">
                  <ImageIcon className="w-8 h-8 mb-2 text-zinc-300" />
                  <span className="text-xs font-mono">1024 x 1024</span>
                </div>
              </div>

              {/* 4:3 */}
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">4:3 Standard</span>
                <div className="aspect-4/3 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-700 flex flex-col items-center justify-center text-zinc-400 p-4">
                  <ImageIcon className="w-8 h-8 mb-2 text-zinc-300" />
                  <span className="text-xs font-mono">1440 x 1080</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
