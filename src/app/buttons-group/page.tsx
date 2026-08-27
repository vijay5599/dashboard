"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Grid, List, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function ButtonsGroupPage() {
  const [selectedView, setSelectedView] = useState("grid");
  const [selectedAlign, setSelectedAlign] = useState("center");

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Button Groups" category="UI Elements" categoryHref="/buttons-group" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Segmented Control Groups</h2>
            <p className="text-xs text-zinc-400 mb-4">Joined button segments for view and alignment toggles</p>

            <div className="space-y-4">
              {/* Text Segment */}
              <div className="inline-flex rounded-lg border border-zinc-700 bg-zinc-950 p-1">
                {["Day", "Week", "Month", "Year"].map((tab) => (
                  <button
                    key={tab}
                    className="px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-md hover:bg-zinc-800 transition-colors first:bg-white first:text-black"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Icon Segment */}
              <div>
                <div className="inline-flex rounded-lg border border-zinc-700 bg-zinc-900 p-1">
                  <button
                    onClick={() => setSelectedAlign("left")}
                    className={`p-1.5 rounded-md text-xs transition-colors ${
                      selectedAlign === "left" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <AlignLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedAlign("center")}
                    className={`p-1.5 rounded-md text-xs transition-colors ${
                      selectedAlign === "center" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <AlignCenter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedAlign("right")}
                    className={`p-1.5 rounded-md text-xs transition-colors ${
                      selectedAlign === "right" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <AlignRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
