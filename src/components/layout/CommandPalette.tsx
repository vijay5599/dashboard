"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  FileText, 
  Presentation, 
  Cpu, 
  Globe, 
  ArrowRight,
  Sparkles,
  X,
  FileSpreadsheet,
  ShieldCheck
} from "lucide-react";
import { NavTab } from "@/types/pitch";
import { DATA_ROOM_DOCS, PITCH_SLIDES } from "@/data/pitchData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
  onSelectSlide?: (slideId: number) => void;
  onOpenCommitModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onSelectSlide,
  onOpenCommitModal,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          // will be handled by parent state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: "tab-overview", title: "Go to Executive Summary", category: "Navigation", icon: BarChart3, action: () => { onSelectTab("overview"); onClose(); } },
    { id: "tab-fin", title: "Financials, Runway & Scenario Simulator", category: "Navigation", icon: TrendingUp, action: () => { onSelectTab("financials"); onClose(); } },
    { id: "tab-market", title: "Market Size & Enterprise Traction (48 Logos)", category: "Navigation", icon: Globe, action: () => { onSelectTab("market"); onClose(); } },
    { id: "tab-product", title: "Product Architecture & Moat Benchmarks", category: "Navigation", icon: Cpu, action: () => { onSelectTab("product"); onClose(); } },
    { id: "tab-cap", title: "Cap Table, Valuation & Round Allocation", category: "Navigation", icon: PieChart, action: () => { onSelectTab("captable"); onClose(); } },
    { id: "tab-slides", title: "Interactive Pitch Deck (Presentation Slides)", category: "Navigation", icon: Presentation, action: () => { onSelectTab("slides"); onClose(); } },
    { id: "tab-data", title: "Investor Data Room & Due Diligence Docs", category: "Navigation", icon: FileText, action: () => { onSelectTab("dataroom"); onClose(); } },
    { id: "act-commit", title: "Simulate Investment Ticket & Check Allocation", category: "Actions", icon: Sparkles, action: () => { onClose(); onOpenCommitModal(); } },
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredDocs = DATA_ROOM_DOCS.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase()) ||
    doc.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSlides = PITCH_SLIDES.filter((slide) =>
    slide.title.toLowerCase().includes(query.toLowerCase()) ||
    slide.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#0d0d11] border border-white/20 rounded-2xl shadow-2xl overflow-hidden rim-light">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search size={18} className="text-zinc-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search metrics, pitch slides, documents, cap table..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-zinc-500 hover:text-white hover:bg-white/10"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Navigation Items */}
          {filteredActions.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Quick Navigation & Actions
              </div>
              <div className="space-y-1 mt-1">
                {filteredActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 group-hover:border-white/30">
                          <Icon size={15} className="text-zinc-300 group-hover:text-white" />
                        </div>
                        <span className="font-medium text-sm text-zinc-200 group-hover:text-white">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slides */}
          {filteredSlides.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Pitch Deck Slides
              </div>
              <div className="space-y-1 mt-1">
                {filteredSlides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onSelectTab("slides");
                      if (onSelectSlide) onSelectSlide(slide.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all group text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 bg-white/10 text-zinc-300 rounded">
                        Slide {slide.id}
                      </span>
                      <span className="font-medium text-zinc-200 group-hover:text-white truncate">
                        {slide.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {slide.keyMetric.value}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Data Room Files */}
          {filteredDocs.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Data Room Documents
              </div>
              <div className="space-y-1 mt-1">
                {filteredDocs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => {
                      onSelectTab("dataroom");
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all group text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-white/10">
                        {doc.format}
                      </span>
                      <span className="font-medium text-zinc-200 group-hover:text-white truncate">
                        {doc.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {doc.fileSize}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredActions.length === 0 && filteredSlides.length === 0 && filteredDocs.length === 0 && (
            <div className="py-10 text-center text-zinc-500 text-xs">
              No matching pitch metrics or documents found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-t border-white/[0.08] text-[11px] text-zinc-500 font-mono">
          <span>Use <strong>↑↓</strong> to navigate</span>
          <span><strong>ESC</strong> to close</span>
        </div>
      </div>
    </div>
  );
};
