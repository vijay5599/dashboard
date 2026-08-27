"use client";

import React from "react";
import { 
  Search, 
  Presentation, 
  Sparkles, 
  ShieldCheck, 
  SlidersHorizontal, 
  Menu, 
  ArrowUpRight,
  TrendingUp,
  Download
} from "lucide-react";
import { Scenario } from "@/types/pitch";
import { COMPANY_INFO } from "@/data/pitchData";

interface HeaderProps {
  scenario: Scenario;
  setScenario: (scenario: Scenario) => void;
  currency: string;
  setCurrency: (c: string) => void;
  onOpenCommandPalette: () => void;
  onOpenCommitModal: () => void;
  onOpenDeckMode: () => void;
  onToggleMobileSidebar: () => void;
  onOpenDataRoom: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  scenario,
  setScenario,
  currency,
  setCurrency,
  onOpenCommandPalette,
  onOpenCommitModal,
  onOpenDeckMode,
  onToggleMobileSidebar,
  onOpenDataRoom,
}) => {
  return (
    <header className="sticky top-0 z-20 w-full h-16 bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] px-4 md:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu & Live Ticker / Breadcrumb */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <button
          onClick={onToggleMobileSidebar}
          className="p-2 md:hidden rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
        >
          <Menu size={20} />
        </button>

        {/* Global Live Ticker Bar */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">ROUND:</span>
            <span className="text-white font-semibold">SERIES A PREFERRED</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            <span className="text-zinc-400">ARR:</span>
            <span className="text-white font-semibold">$4.85M</span>
            <span className="text-emerald-400 text-[11px] font-medium">+245% YoY</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            <span className="text-zinc-400">VALUATION:</span>
            <span className="text-white font-semibold">$42.0M Pre</span>
          </div>
        </div>

        {/* Command Search Trigger Button */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-zinc-200 text-xs transition-all w-36 sm:w-56"
        >
          <Search size={14} className="text-zinc-400" />
          <span className="truncate">Search pitch & data...</span>
          <kbd className="ml-auto hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-white/10 text-zinc-300 rounded border border-white/10">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Controls: Scenario Switcher + Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Financial Scenario Switcher */}
        <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-zinc-950 border border-white/[0.08] text-xs font-mono">
          <button
            onClick={() => setScenario("conservative")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              scenario === "conservative"
                ? "bg-zinc-800 text-white font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Bear
          </button>
          <button
            onClick={() => setScenario("base")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              scenario === "base"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Base Case
          </button>
          <button
            onClick={() => setScenario("bull")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              scenario === "bull"
                ? "bg-zinc-800 text-white font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Bull
          </button>
        </div>

        {/* Currency Switcher */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="hidden md:block bg-zinc-950 border border-white/[0.08] text-zinc-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-white/30 font-mono"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>

        {/* Pitch Mode Toggle */}
        <button
          onClick={onOpenDeckMode}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 transition-colors"
          title="Fullscreen Presentation Mode"
        >
          <Presentation size={14} />
          <span>Deck Mode</span>
        </button>

        {/* Commit Ticket CTA */}
        <button
          onClick={onOpenCommitModal}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
        >
          <Sparkles size={14} className="text-black" />
          <span className="hidden sm:inline">Commit / Invest</span>
          <span className="sm:hidden">Invest</span>
        </button>
      </div>
    </header>
  );
};
