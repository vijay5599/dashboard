"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Play, Video } from "lucide-react";

export default function VideosPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Embedded Video Players" category="UI Elements" categoryHref="/videos" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 border-zinc-700 bg-zinc-950/80">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-base font-bold text-white">4K Video Stream Player</h2>
              <p className="text-xs text-zinc-400">Custom HTML5 media controls with monochrome canvas frame</p>
            </div>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              HLS · 60 FPS
            </span>
          </div>

          <div className="aspect-video w-full rounded-xl bg-black border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-7 h-7 ml-1 fill-black" />
            </div>
            <span className="text-xs text-zinc-400 mt-3 font-mono">TailAdmin_Production_Demo_4K.mp4</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
