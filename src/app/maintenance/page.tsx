"use client";

import React from "react";
import Link from "next/link";
import { Wrench, Shield, Home } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 text-center bg-mono-dots relative">
      <div className="max-w-md mx-auto space-y-6 mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mx-auto mb-2">
          <Wrench className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Under Scheduled Maintenance</h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Our engineering team is currently performing database schema migrations and kernel security patching. We expect to be fully back online shortly.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          Estimated Window: 02:00 - 02:30 UTC
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Check Status</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
