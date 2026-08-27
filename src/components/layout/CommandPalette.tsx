"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, LayoutDashboard, Layers, Shield } from "lucide-react";
import { navigationConfig } from "@/types/navigation";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten all navigable items
  const allRoutes = React.useMemo(() => {
    const list: { name: string; href: string; section: string; badge?: string }[] = [];
    navigationConfig.forEach((sec) => {
      sec.items.forEach((item) => {
        if (item.href) {
          list.push({
            name: item.name,
            href: item.href,
            section: sec.title,
            badge: item.badge,
          });
        }
        if (item.subItems) {
          item.subItems.forEach((sub) => {
            list.push({
              name: `${item.name} > ${sub.name}`,
              href: sub.href,
              section: sec.title,
              badge: sub.badge,
            });
          });
        }
      });
    });
    return list;
  }, []);

  const filteredRoutes = React.useMemo(() => {
    if (!query.trim()) return allRoutes.slice(0, 12);
    const q = query.toLowerCase();
    return allRoutes.filter(
      (r) => r.name.toLowerCase().includes(q) || r.section.toLowerCase().includes(q)
    );
  }, [allRoutes, query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredRoutes.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredRoutes.length) % filteredRoutes.length);
      } else if (e.key === "Enter" && filteredRoutes[selectedIndex]) {
        e.preventDefault();
        router.push(filteredRoutes[selectedIndex].href);
        onClose();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredRoutes, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#09090b] border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in-0 zoom-in-95">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a page name, section, or action..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-zinc-900">
          {filteredRoutes.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-xs">
              No matching pages found for &quot;{query}&quot;
            </div>
          ) : (
            filteredRoutes.map((route, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={route.href + idx}
                  onClick={() => {
                    router.push(route.href);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-zinc-200 text-black border border-zinc-300"
                          : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                      }`}
                    >
                      {route.section}
                    </span>
                    <span className="text-xs truncate">{route.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {route.badge && (
                      <span
                        className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? "bg-black text-white" : "bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {route.badge}
                      </span>
                    )}
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded font-mono">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded font-mono">
                ↵
              </kbd>{" "}
              Select
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded font-mono">
                ESC
              </kbd>{" "}
              Close
            </span>
          </div>
          <span className="font-mono text-[10px] text-zinc-400">TailAdmin Monochrome</span>
        </div>
      </div>
    </div>
  );
}
