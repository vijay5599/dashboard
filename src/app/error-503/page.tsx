"use client";

import React from "react";
import Link from "next/link";
import { Server, Home } from "lucide-react";

export default function Error503Page() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 text-center bg-mono-dots relative">
      <div className="max-w-md mx-auto space-y-6 mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <span className="text-7xl sm:text-8xl font-extrabold font-mono text-white tracking-tighter block">
          503
        </span>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Service Unavailable</h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The server cluster is temporarily unable to handle the request due to maintenance or capacity throttling.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="w-full px-5 py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
