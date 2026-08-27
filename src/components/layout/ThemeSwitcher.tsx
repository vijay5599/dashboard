"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, THEMES_CONFIG, ThemeMode } from "@/context/ThemeContext";
import { Palette, Check, Sparkles, Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme, config } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themesList: ThemeMode[] = [
    "tailadmin-dark",
    "tailadmin-light",
    "monochrome",
    "emerald",
    "violet",
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all shadow-sm group"
        style={{
          backgroundColor: "var(--bg-card-subtle, #18181b)",
          borderColor: "var(--border-color, #27272a)",
          color: "var(--text-primary, #ffffff)",
        }}
        title="Change Theme & Color Palette"
      >
        <Palette className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider">
          {config.badge}
        </span>
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/30 shadow-sm"
          style={{ backgroundColor: config.preview[1] || "#ffffff" }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl border shadow-2xl p-3.5 z-50 animate-in fade-in-50 slide-in-from-top-2"
          style={{
            backgroundColor: "var(--bg-card, #09090b)",
            borderColor: "var(--border-color, #27272a)",
          }}
        >
          <div
            className="flex items-center justify-between pb-2.5 mb-2.5 border-b"
            style={{ borderColor: "var(--border-color, #27272a)" }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-primary" style={{ color: "var(--brand-primary, #3C50E0)" }} />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Theme & Color Palette
              </h4>
            </div>
            <span className="text-[10px] font-mono opacity-60">TailAdmin v4</span>
          </div>

          <div className="space-y-1.5">
            {themesList.map((tKey) => {
              const item = THEMES_CONFIG[tKey];
              const isActive = theme === tKey;

              return (
                <button
                  key={tKey}
                  type="button"
                  onClick={() => {
                    setTheme(tKey);
                    setIsOpen(false);
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
                    isActive ? "shadow-md ring-1 ring-white/20" : "hover:opacity-90"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? "var(--bg-card-hover, #121215)"
                      : "var(--bg-card-subtle, #18181b)",
                    borderColor: isActive
                      ? "var(--brand-primary, #3C50E0)"
                      : "var(--border-color, #27272a)",
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Swatches preview */}
                    <div className="flex -space-x-1 shrink-0">
                      {item.preview.slice(0, 3).map((color, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full border border-black/40 ring-1 ring-white/10"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold truncate">
                          {item.label}
                        </span>
                        {tKey === "tailadmin-dark" && (
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#3C50E0] text-white font-bold">
                            Official
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] opacity-70 truncate mt-0.5 leading-none">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <Check
                      className="w-4 h-4 shrink-0"
                      style={{ color: "var(--brand-primary, #3C50E0)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div
            className="mt-3 pt-2.5 border-t flex items-center justify-between text-[11px] opacity-70"
            style={{ borderColor: "var(--border-color, #27272a)" }}
          >
            <span>Instant live re-theming</span>
            <span className="font-mono text-[10px]">Auto-saved</span>
          </div>
        </div>
      )}
    </div>
  );
}
