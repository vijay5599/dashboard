"use client";

import React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronRight, Home, Slash } from "lucide-react";

export default function BreadcrumbPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Breadcrumbs" category="UI Elements" categoryHref="/breadcrumb" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Breadcrumb Hierarchy Styles</h2>
            <p className="text-xs text-zinc-400 mb-4">Navigational path trails</p>

            <div className="space-y-4">
              {/* Style 1: Chevron */}
              <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Link href="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <span className="hover:text-white cursor-pointer">Components</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <span className="text-white font-bold">Breadcrumbs</span>
              </nav>

              {/* Style 2: Slash */}
              <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="hover:text-white cursor-pointer">Dashboard</span>
                <span className="text-zinc-600">/</span>
                <span className="hover:text-white cursor-pointer">E-commerce</span>
                <span className="text-zinc-600">/</span>
                <span className="text-white font-bold">Product Catalog</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
