"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function BlankPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Blank Canvas" category="Pages" categoryHref="/blank" />

      <div className="mono-card p-8 min-h-[400px] flex flex-col items-center justify-center text-center border-dashed border-zinc-800 bg-zinc-950/40">
        <h2 className="text-base font-bold text-white mb-1">Clean Slate Canvas</h2>
        <p className="text-xs text-zinc-400 max-w-sm">
          Use this boilerplate view to build custom features or specialized application modules.
        </p>
      </div>
    </DashboardLayout>
  );
}
