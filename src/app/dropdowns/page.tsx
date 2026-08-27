"use client";

import React, { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  ChevronDown,
  Edit,
  Trash2,
  Copy,
  Share2,
  MoreVertical,
  MoreHorizontal,
  Search,
  Check,
  User,
  Settings,
  CreditCard,
  LogOut,
  Sparkles,
  Filter,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  Plus,
} from "lucide-react";

export default function DropdownsPage() {
  // Dropdown states
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  // Dropdown 4: Search state
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState("Musharof Chowdhury");

  // Dropdown 6: Status state
  const [selectedStatus, setSelectedStatus] = useState("Online");

  // Refs for outside click
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref1.current && !ref1.current.contains(target)) setOpen1(false);
      if (ref2.current && !ref2.current.contains(target)) setOpen2(false);
      if (ref3.current && !ref3.current.contains(target)) setOpen3(false);
      if (ref4.current && !ref4.current.contains(target)) setOpen4(false);
      if (ref5.current && !ref5.current.contains(target)) setOpen5(false);
      if (ref6.current && !ref6.current.contains(target)) setOpen6(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const usersList = [
    { name: "Musharof Chowdhury", role: "Lead Architect", email: "musharof@krypton.io", avatar: "MC" },
    { name: "Marcus Vance", role: "Principal Designer", email: "marcus@krypton.io", avatar: "MV" },
    { name: "Elena Rostova", role: "DevOps Engineer", email: "elena@krypton.io", avatar: "ER" },
    { name: "Jessica Alba", role: "Product Manager", email: "jessica@krypton.io", avatar: "JA" },
    { name: "Karim Benzema", role: "Database Admin", email: "karim@krypton.io", avatar: "KB" },
    { name: "Alex Morgan", role: "Security Architect", email: "alex@krypton.io", avatar: "AM" },
  ];

  const filteredUsers = usersList.filter(
    (u) =>
      u.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      u.role.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Dropdown Menus & Popovers" category="UI Elements" categoryHref="/dropdowns" />

      <div className="space-y-8 max-w-6xl">
        {/* Page Intro Banner */}
        <div className="mono-card p-6 border-zinc-700/60">
          <h2 className="text-lg font-bold">Interactive Dropdown Components</h2>
          <p className="text-xs opacity-70 mt-1 max-w-2xl leading-relaxed">
            Responsive, theme-adaptive dropdown menus with click-outside dismissal, live searching, user account headers, badges, keyboard shortcuts, and status selectors.
          </p>
        </div>

        {/* Grid of 6 Dropdown Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Card 1: Standard Action Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown One</h3>
              <p className="text-xs opacity-70 mt-0.5">Primary action menu with icons & shortcuts</p>
            </div>

            <div className="relative inline-block" ref={ref1}>
              <button
                type="button"
                onClick={() => setOpen1(!open1)}
                className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Actions Menu</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open1 ? "rotate-180" : ""}`} />
              </button>

              {open1 && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-xl border shadow-2xl p-1.5 z-30 animate-in fade-in-50 zoom-in-95"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  <button
                    onClick={() => setOpen1(false)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <Edit className="w-3.5 h-3.5 opacity-70" />
                      <span>Edit Item</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-50">⌘E</span>
                  </button>

                  <button
                    onClick={() => setOpen1(false)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                      <span>Duplicate</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-50">⌘D</span>
                  </button>

                  <button
                    onClick={() => setOpen1(false)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <Share2 className="w-3.5 h-3.5 opacity-70" />
                      <span>Share Project</span>
                    </div>
                  </button>

                  <div className="border-t my-1" style={{ borderColor: "var(--border-color, #27272a)" }} />

                  <button
                    onClick={() => setOpen1(false)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-rose-400 hover:bg-rose-500/10"
                  >
                    <div className="flex items-center gap-2.5">
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Record</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-60">⌫</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Filter & Badge Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown Two</h3>
              <p className="text-xs opacity-70 mt-0.5">Filter options with status badges & counters</p>
            </div>

            <div className="relative inline-block" ref={ref2}>
              <button
                type="button"
                onClick={() => setOpen2(!open2)}
                className="px-3.5 py-2 border rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: "var(--bg-card-subtle, #18181b)",
                  borderColor: "var(--border-color, #27272a)",
                }}
              >
                <Filter className="w-3.5 h-3.5 opacity-70" />
                <span>Filter Projects</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open2 ? "rotate-180" : ""}`} />
              </button>

              {open2 && (
                <div
                  className="absolute left-0 mt-2 w-60 rounded-xl border shadow-2xl p-2 z-30 animate-in fade-in-50 zoom-in-95 space-y-1"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider opacity-60">
                    Filter by Status
                  </div>

                  {[
                    { label: "Active Deployments", count: "18", color: "bg-emerald-500" },
                    { label: "In Progress Sprints", count: "6", color: "bg-blue-500" },
                    { label: "Pending Reviews", count: "3", color: "bg-amber-500" },
                    { label: "Archived Buckets", count: "12", color: "bg-zinc-500" },
                  ].map((f) => (
                    <button
                      key={f.label}
                      onClick={() => setOpen2(false)}
                      className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs hover:bg-zinc-900/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${f.color}`} />
                        <span>{f.label}</span>
                      </div>
                      <span
                        className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded border"
                        style={{
                          backgroundColor: "var(--bg-card-subtle, #18181b)",
                          borderColor: "var(--border-color, #27272a)",
                        }}
                      >
                        {f.count}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Card 3: User Profile Card Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown Three</h3>
              <p className="text-xs opacity-70 mt-0.5">User profile card with role & settings</p>
            </div>

            <div className="relative inline-block" ref={ref3}>
              <button
                type="button"
                onClick={() => setOpen3(!open3)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--bg-card-subtle, #18181b)",
                  borderColor: "var(--border-color, #27272a)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm"
                  style={{
                    backgroundColor: "var(--brand-primary, #3C50E0)",
                    color: "var(--brand-primary-text, #ffffff)",
                  }}
                >
                  MC
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold block leading-tight">Musharof C.</span>
                  <span className="text-[10px] opacity-60 font-mono">System Admin</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 ml-1 transition-transform ${open3 ? "rotate-180" : ""}`} />
              </button>

              {open3 && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-xl border shadow-2xl p-2 z-30 animate-in fade-in-50 zoom-in-95"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  <div className="p-3 border-b mb-1" style={{ borderColor: "var(--border-color, #27272a)" }}>
                    <p className="text-xs font-bold">Musharof Chowdhury</p>
                    <p className="text-[11px] opacity-70 truncate">musharof@krypton.io</p>
                    <span className="inline-block mt-2 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Enterprise Tier Pro
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <button
                      onClick={() => setOpen3(false)}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs hover:bg-zinc-900/60 transition-colors"
                    >
                      <User className="w-4 h-4 opacity-70" />
                      <span>Account Profile</span>
                    </button>

                    <button
                      onClick={() => setOpen3(false)}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs hover:bg-zinc-900/60 transition-colors"
                    >
                      <CreditCard className="w-4 h-4 opacity-70" />
                      <span>Subscription & Billing</span>
                    </button>

                    <button
                      onClick={() => setOpen3(false)}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs hover:bg-zinc-900/60 transition-colors"
                    >
                      <Settings className="w-4 h-4 opacity-70" />
                      <span>System Settings</span>
                    </button>
                  </div>

                  <div className="border-t pt-1 mt-1" style={{ borderColor: "var(--border-color, #27272a)" }}>
                    <button
                      onClick={() => setOpen3(false)}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 4: Searchable Live Filter Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown Four</h3>
              <p className="text-xs opacity-70 mt-0.5">Searchable team selector with live search</p>
            </div>

            <div className="relative inline-block w-full max-w-xs" ref={ref4}>
              <button
                type="button"
                onClick={() => setOpen4(!open4)}
                className="w-full flex items-center justify-between px-3.5 py-2 border rounded-lg text-xs font-semibold transition-colors"
                style={{
                  backgroundColor: "var(--bg-card-subtle, #18181b)",
                  borderColor: "var(--border-color, #27272a)",
                }}
              >
                <div className="flex items-center gap-2 truncate">
                  <User className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  <span className="truncate">{selectedUser}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 shrink-0 transition-transform ${open4 ? "rotate-180" : ""}`} />
              </button>

              {open4 && (
                <div
                  className="absolute left-0 mt-2 w-full rounded-xl border shadow-2xl p-2 z-30 animate-in fade-in-50 zoom-in-95 space-y-2"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  {/* Search bar inside dropdown */}
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-50" />
                    <input
                      type="text"
                      placeholder="Search member..."
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border focus:outline-none"
                      style={{
                        backgroundColor: "var(--bg-card-subtle, #18181b)",
                        borderColor: "var(--border-color, #27272a)",
                      }}
                    />
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-0.5">
                    {filteredUsers.map((u) => {
                      const isSelected = selectedUser === u.name;
                      return (
                        <button
                          key={u.email}
                          onClick={() => {
                            setSelectedUser(u.name);
                            setOpen4(false);
                          }}
                          className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                            isSelected ? "bg-zinc-900/80 font-bold" : "hover:bg-zinc-900/50"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 text-left">
                            <div
                              className="w-6 h-6 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0"
                              style={{
                                backgroundColor: "var(--bg-card-subtle, #18181b)",
                                borderColor: "var(--border-color, #27272a)",
                              }}
                            >
                              {u.avatar}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate leading-none">{u.name}</p>
                              <span className="text-[10px] opacity-60 leading-none">{u.role}</span>
                            </div>
                          </div>

                          {isSelected && (
                            <Check
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: "var(--brand-primary, #3C50E0)" }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 5: 3-Dots Action Ellipsis Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown Five</h3>
              <p className="text-xs opacity-70 mt-0.5">Contextual ellipsis menu for table rows & cards</p>
            </div>

            <div className="relative inline-block" ref={ref5}>
              <button
                type="button"
                onClick={() => setOpen5(!open5)}
                className="p-2 border rounded-lg transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "var(--bg-card-subtle, #18181b)",
                  borderColor: "var(--border-color, #27272a)",
                }}
                title="More Actions"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              {open5 && (
                <div
                  className="absolute left-0 mt-2 w-48 rounded-xl border shadow-2xl p-1.5 z-30 animate-in fade-in-50 zoom-in-95"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  <button
                    onClick={() => setOpen5(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy API Token</span>
                  </button>

                  <button
                    onClick={() => setOpen5(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    <span>Open in New Tab</span>
                  </button>

                  <button
                    onClick={() => setOpen5(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors hover:bg-zinc-900/60"
                  >
                    <Shield className="w-3.5 h-3.5 opacity-70" />
                    <span>Audit Access Logs</span>
                  </button>

                  <div className="border-t my-1" style={{ borderColor: "var(--border-color, #27272a)" }} />

                  <button
                    onClick={() => setOpen5(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors text-rose-400 hover:bg-rose-500/10"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Revoke Permissions</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 6: Live Status Radio Selector Dropdown */}
          <div className="mono-card p-6 space-y-4 min-h-[300px]">
            <div>
              <h3 className="text-sm font-bold">Dropdown Six</h3>
              <p className="text-xs opacity-70 mt-0.5">Availability radio status with pulsing indicators</p>
            </div>

            <div className="relative inline-block" ref={ref6}>
              <button
                type="button"
                onClick={() => setOpen6(!open6)}
                className="px-3.5 py-2 border rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: "var(--bg-card-subtle, #18181b)",
                  borderColor: "var(--border-color, #27272a)",
                }}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    selectedStatus === "Online"
                      ? "bg-emerald-400 animate-pulse"
                      : selectedStatus === "Busy"
                      ? "bg-rose-500"
                      : selectedStatus === "Away"
                      ? "bg-amber-400"
                      : "bg-zinc-400"
                  }`}
                />
                <span>Status: {selectedStatus}</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${open6 ? "rotate-180" : ""}`} />
              </button>

              {open6 && (
                <div
                  className="absolute left-0 mt-2 w-52 rounded-xl border shadow-2xl p-1.5 z-30 animate-in fade-in-50 zoom-in-95 space-y-0.5"
                  style={{
                    backgroundColor: "var(--bg-card, #09090b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  {[
                    { title: "Online", desc: "Available for requests", dot: "bg-emerald-400" },
                    { title: "Busy", desc: "Do not disturb", dot: "bg-rose-500" },
                    { title: "Away", desc: "Stepped away", dot: "bg-amber-400" },
                    { title: "Offline", desc: "Invisible mode", dot: "bg-zinc-500" },
                  ].map((s) => {
                    const isSelected = selectedStatus === s.title;
                    return (
                      <button
                        key={s.title}
                        onClick={() => {
                          setSelectedStatus(s.title);
                          setOpen6(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-xs text-left transition-colors ${
                          isSelected ? "bg-zinc-900/80 font-bold" : "hover:bg-zinc-900/50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                          <div>
                            <p className="leading-tight">{s.title}</p>
                            <span className="text-[10px] opacity-60 block leading-tight">{s.desc}</span>
                          </div>
                        </div>

                        {isSelected && (
                          <Check
                            className="w-3.5 h-3.5"
                            style={{ color: "var(--brand-primary, #3C50E0)" }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
