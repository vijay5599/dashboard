"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Pagination Controls" category="UI Elements" categoryHref="/pagination" />

      <div className="mono-card p-6 space-y-6 max-w-3xl">
        <h2 className="text-base font-bold text-white mb-2">Monochrome Pagination Styles</h2>

        {/* Style 1: Numeric */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-8 h-8 rounded-lg font-bold transition-all ${
                currentPage === p
                  ? "bg-white text-black shadow-sm"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
          <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
