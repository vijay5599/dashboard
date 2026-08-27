"use client";

import React from "react";
import Link from "next/link";
import { RefreshCw, Home, ServerCrash } from "lucide-react";

export default function Error500Page() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 text-center bg-mono-dots relative">
      <div className="max-w-md mx-auto space-y-6 mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <span className="text-7xl sm:text-8xl font-extrabold font-mono text-white tracking-tighter block">
          500
        </span>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Internal Server Error</h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The compute kernel encountered an unexpected unhandled exception while processing your request.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 border border-zinc-700 text-white font-semibold text-xs rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Pipeline</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
