"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Info, HelpCircle } from "lucide-react";

export default function PopoversPage() {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Popovers" category="UI Elements" categoryHref="/popovers" />

      <div className="mono-card p-6 space-y-6 max-w-3xl">
        <h2 className="text-base font-bold text-white mb-2">Interactive Context Popovers</h2>

        <div className="relative inline-block">
          <button
            onClick={() => setShowPopover(!showPopover)}
            className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-zinc-400" />
            <span>Click for Popover Info</span>
          </button>

          {showPopover && (
            <div className="absolute left-0 mt-2 w-72 p-4 rounded-xl bg-[#09090b] border border-zinc-700 shadow-2xl z-30 animate-in fade-in-0 zoom-in-95">
              <h4 className="text-xs font-bold text-white mb-1">Architecture Node Context</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                This compute worker is provisioned with 32GB ECC RAM and hardware NVMe storage.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
