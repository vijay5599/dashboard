"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 text-center bg-mono-dots relative">
      <div className="max-w-md mx-auto space-y-6 mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-2 shadow-2xl">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-white">Payment & Setup Succeeded</h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Your enterprise license has been activated and your cluster credentials have been generated and dispatched to your email.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="w-full px-5 py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Proceed to Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
