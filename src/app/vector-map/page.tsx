"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Globe, Map, Navigation } from "lucide-react";

export default function VectorMapPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Vector Map Projection" category="Maps" categoryHref="/vector-map" />

      <div className="space-y-6">
        <div className="mono-card p-6 border-zinc-700 bg-zinc-950/80">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-base font-bold text-white">Mercator Vector Projection</h2>
              <p className="text-xs text-zinc-400">High-resolution topological density map</p>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              SVG 2D Vector
            </span>
          </div>

          <div className="h-96 w-full rounded-xl bg-black border border-zinc-800 flex flex-col items-center justify-center p-8 text-center bg-mono-dots relative">
            <Map className="w-20 h-20 text-zinc-700 mb-4" />
            <h3 className="text-sm font-bold text-white">Vector World Rendering Active</h3>
            <p className="text-xs text-zinc-400 max-w-md mt-1 leading-relaxed">
              Global vector coordinates synchronized across all CDN edge routers and distributed compute pods.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
