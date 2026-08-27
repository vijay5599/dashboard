"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronDown, Edit, Trash2, Copy, Share2, MoreVertical } from "lucide-react";

export default function DropdownsPage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Dropdown Menus" category="UI Elements" categoryHref="/dropdowns" />

      <div className="mono-card p-6 space-y-6 max-w-4xl">
        <div>
          <h2 className="text-base font-bold text-white mb-2">Dropdown Action Menus</h2>
          <p className="text-xs text-zinc-400 mb-6">Interactive popover menus with icons and separators</p>

          <div className="flex flex-wrap gap-6 items-start">
            {/* Dropdown 1 */}
            <div className="relative">
              <button
                onClick={() => setOpen1(!open1)}
                className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Actions Menu</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {open1 && (
                <div className="absolute left-0 mt-2 w-48 rounded-xl bg-[#09090b] border border-zinc-700 shadow-2xl p-1.5 z-20">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                    <Edit className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Edit Record</span>
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Duplicate Entry</span>
                  </button>
                  <div className="border-t border-zinc-800 my-1" />
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Record</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown 2 */}
            <div className="relative">
              <button
                onClick={() => setOpen2(!open2)}
                className="p-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {open2 && (
                <div className="absolute left-0 mt-2 w-40 rounded-xl bg-[#09090b] border border-zinc-700 shadow-2xl p-1.5 z-20">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Publicly</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
