"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  FileText, 
  Presentation, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  DownloadCloud,
  CheckCircle2,
  Lock
} from "lucide-react";
import { NavTab } from "@/types/pitch";
import { COMPANY_INFO } from "@/data/pitchData";

interface SidebarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  onOpenCommitModal: () => void;
  onOpenDeckMode: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
  onOpenCommitModal,
  onOpenDeckMode
}) => {
  const round = COMPANY_INFO.roundDetails;
  const percentCommitted = Math.round((round.committedAmount / round.targetAmount) * 100);

  const navigationGroups = [
    {
      group: "INVESTOR NARRATIVE",
      items: [
        { id: "overview" as NavTab, label: "Executive Summary", icon: BarChart3, badge: "Live" },
        { id: "financials" as NavTab, label: "Financials & Runway", icon: TrendingUp, badge: "Simulate" },
        { id: "market" as NavTab, label: "Market & Traction", icon: Globe, badge: "48 Logos" },
        { id: "product" as NavTab, label: "Architecture & Moat", icon: Cpu },
      ]
    },
    {
      group: "ROUND & DUE DILIGENCE",
      items: [
        { id: "captable" as NavTab, label: "Cap Table & Round", icon: PieChart, badge: "68% Filled" },
        { id: "slides" as NavTab, label: "Interactive Deck", icon: Presentation, badge: "8 Slides" },
        { id: "dataroom" as NavTab, label: "Investor Data Room", icon: FileText, badge: "SOC2 ✓" },
      ]
    }
  ];

  return (
    <aside
      className={`relative flex flex-col h-screen bg-[#08080a] border-r border-white/[0.08] transition-all duration-300 ease-in-out select-none z-30 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white text-black font-mono font-black text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0">
            <span>Æ</span>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-black" />
          </div>

          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-white tracking-tight text-base truncate">
                  {COMPANY_INFO.name}
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-white/10 text-zinc-300 rounded border border-white/15">
                  Series A
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 truncate">
                Investor Portal 2026
              </span>
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Round Progress Banner (TailAdmin style widget) */}
      {!isCollapsed && (
        <div className="p-3 mx-3 mt-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden rim-light">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-zinc-400 font-mono text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Round Status
            </span>
            <span className="text-white font-mono font-semibold text-[11px]">
              {percentCommitted}% Allocated
            </span>
          </div>

          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-2">
            <div 
              className="bg-white h-full rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${percentCommitted}%` }} 
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>$5.85M Committed</span>
            <span className="text-zinc-200 font-mono font-medium">$8.5M Cap</span>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navigationGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 pb-1 text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                {group.group}
              </div>
            )}
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  } ${isCollapsed ? "justify-center px-0" : ""}`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon size={18} className={isActive ? "text-black" : "text-zinc-400"} />
                  {!isCollapsed && (
                    <div className="flex items-center justify-between w-full">
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            isActive
                              ? "bg-black/15 text-black font-bold"
                              : "bg-white/[0.08] text-zinc-400 border border-white/10"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}

        {/* Quick Pitch Action Buttons */}
        <div className="pt-2 border-t border-white/[0.08] space-y-2">
          {!isCollapsed && (
            <div className="px-3 pb-1 text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
              QUICK ACTIONS
            </div>
          )}

          <button
            onClick={onOpenDeckMode}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/90 border border-white/10 hover:border-white/20 transition-all ${
              isCollapsed ? "justify-center px-0" : ""
            }`}
            title={isCollapsed ? "Presentation Pitch Mode" : undefined}
          >
            <Presentation size={16} className="text-zinc-400" />
            {!isCollapsed && <span>Open Pitch Deck (Slides)</span>}
          </button>

          <button
            onClick={onOpenCommitModal}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] ${
              isCollapsed ? "justify-center px-0" : ""
            }`}
            title={isCollapsed ? "Request / Commit Allocation" : undefined}
          >
            <Sparkles size={16} className="text-black" />
            {!isCollapsed && <span>Commit / Request Ticket</span>}
          </button>
        </div>
      </div>

      {/* Sidebar Footer: Founder info & Data Room status */}
      <div className="p-3 border-t border-white/[0.08] bg-zinc-950/60">
        {!isCollapsed ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
                EV
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium text-white truncate">
                  Dr. Elena Vance
                </div>
                <div className="text-[10px] text-zinc-400 font-mono truncate">
                  Founder & CEO (DeepMind)
                </div>
              </div>
            </div>
            <a 
              href="mailto:elena@aetheria.ai"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              title="Contact Founder directly"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-white">
              EV
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
