"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Send, Check } from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 text-center bg-mono-dots relative">
      <div className="max-w-lg mx-auto space-y-6 mono-card p-8 sm:p-12 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mx-auto mb-2 font-bold shadow-xl">
          <Sparkles className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            NEXT GEN ENGINE
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            We are Launching Soon
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Our next-generation AI orchestration platform with zero-latency streaming is almost ready for production rollout.
          </p>
        </div>

        {/* Countdown preview */}
        <div className="grid grid-cols-4 gap-3 font-mono">
          {[
            { label: "Days", val: "14" },
            { label: "Hours", val: "08" },
            { label: "Mins", val: "32" },
            { label: "Secs", val: "45" },
          ].map((c) => (
            <div key={c.label} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-xl font-bold text-white block">{c.val}</span>
              <span className="text-[10px] text-zinc-500 uppercase">{c.label}</span>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        {!subscribed ? (
          <form onSubmit={handleNotify} className="flex gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Notify Me</span>
            </button>
          </form>
        ) : (
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-semibold text-white flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            <span>You are on the VIP priority access waitlist!</span>
          </div>
        )}

        <div className="pt-4 border-t border-zinc-800">
          <Link href="/" className="text-xs text-zinc-400 hover:text-white transition-colors">
            ← Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
