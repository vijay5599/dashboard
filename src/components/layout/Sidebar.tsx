"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig, NavItem } from "@/types/navigation";
import { DynamicIcon } from "./IconHelper";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface SidebarProps {
  isCollapsed?: boolean;
  setIsCollapsed?: (collapsed: boolean) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function Sidebar({
  isCollapsed = false,
  setIsCollapsed,
  isMobileOpen = false,
  setIsMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const { theme, config } = useTheme();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // Auto-expand the dropdown matching current path
  useEffect(() => {
    navigationConfig.forEach((section) => {
      section.items.forEach((item) => {
        if (item.subItems) {
          const match = item.subItems.some((sub) => sub.href === pathname);
          if (match) {
            setOpenDropdowns((prev) => ({ ...prev, [item.name]: true }));
          }
        }
      });
    });
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleLinkClick = () => {
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  // Active link styling based on theme
  const getActiveLinkClasses = () => {
    if (theme === "monochrome") {
      return "text-black bg-white font-semibold shadow-sm";
    }
    if (theme === "tailadmin-dark" || theme === "tailadmin-light") {
      return "text-white bg-[#3C50E0] font-semibold shadow-md shadow-[#3C50E0]/20";
    }
    if (theme === "emerald") {
      return "text-black bg-[#10B981] font-semibold shadow-md shadow-[#10B981]/20";
    }
    if (theme === "violet") {
      return "text-white bg-[#8B5CF6] font-semibold shadow-md shadow-[#8B5CF6]/20";
    }
    return "text-black bg-white font-semibold shadow-sm";
  };

  const activeClasses = getActiveLinkClasses();

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen flex flex-col transition-all duration-300 ease-in-out select-none mono-card rounded-none border-t-0 border-b-0 border-l-0
        ${isCollapsed ? "w-[78px]" : "w-[280px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        xl:translate-x-0
      `}
      style={{
        backgroundColor: "var(--bg-card, #09090b)",
        borderColor: "var(--border-color, #27272a)",
      }}
    >
      {/* Brand Header */}
      <div
        className="h-16 flex items-center justify-between px-5 border-b shrink-0"
        style={{ borderColor: "var(--border-color, #27272a)" }}
      >
        <Link href="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-base tracking-tighter shadow-md transition-transform group-hover:scale-105"
            style={{
              backgroundColor: theme === "monochrome" ? "#ffffff" : "var(--brand-primary, #3C50E0)",
              color: theme === "monochrome" ? "#000000" : "#ffffff",
            }}
          >
            KR
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-wide flex items-center gap-1.5">
                Krypton
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {config.badge.split("·")[0].trim()}
                </span>
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">Autonomous Hub</span>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation Links (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navigationConfig.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {!isCollapsed && (
              <h3 className="px-3 text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1 mt-1">
              {section.items.map((item) => {
                const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
                const isOpen = openDropdowns[item.name];
                const isDirectActive = item.href === pathname;
                const isChildActive =
                  hasSubItems && item.subItems?.some((sub) => sub.href === pathname);

                return (
                  <li key={item.name}>
                    {hasSubItems ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.name)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group cursor-pointer
                            ${
                              isChildActive
                                ? "text-white bg-zinc-900/80 border border-zinc-700"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                            }
                            ${isCollapsed ? "justify-center px-2" : "justify-between"}
                          `}
                          title={isCollapsed ? item.name : undefined}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {item.icon && (
                              <DynamicIcon
                                name={item.icon}
                                className={`shrink-0 ${
                                  isChildActive ? "text-white" : "text-zinc-400 group-hover:text-white"
                                }`}
                              />
                            )}
                            {!isCollapsed && (
                              <span className="truncate">{item.name}</span>
                            )}
                          </div>

                          {!isCollapsed && (
                            <div className="flex items-center gap-1.5">
                              {item.badge && (
                                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                                  {item.badge}
                                </span>
                              )}
                              {isOpen ? (
                                <ChevronDown className="w-4 h-4 text-zinc-500 transition-transform duration-200" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-zinc-500 transition-transform duration-200" />
                              )}
                            </div>
                          )}
                        </button>

                        {/* Accordion Submenu */}
                        {!isCollapsed && isOpen && (
                          <ul
                            className="mt-1 space-y-0.5 pl-8 border-l ml-5 py-1"
                            style={{ borderColor: "var(--border-color, #27272a)" }}
                          >
                            {item.subItems?.map((sub) => {
                              const isSubActive = sub.href === pathname;
                              return (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={handleLinkClick}
                                    className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150
                                      ${
                                        isSubActive
                                          ? activeClasses
                                          : "text-zinc-400 hover:text-white hover:bg-zinc-900/80"
                                      }
                                    `}
                                  >
                                    <span className="truncate">{sub.name}</span>
                                    {sub.badge && (
                                      <span
                                        className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                          isSubActive
                                            ? "bg-black/40 text-white"
                                            : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                                        }`}
                                      >
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={handleLinkClick}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group
                          ${
                            isDirectActive
                              ? activeClasses
                              : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                          }
                          ${isCollapsed ? "justify-center px-2" : "justify-between"}
                        `}
                        title={isCollapsed ? item.name : undefined}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {item.icon && (
                            <DynamicIcon
                              name={item.icon}
                              className={`shrink-0 ${
                                isDirectActive
                                  ? theme === "monochrome" ? "text-black" : "text-white"
                                  : "text-zinc-400 group-hover:text-white"
                              }`}
                            />
                          )}
                          {!isCollapsed && <span className="truncate">{item.name}</span>}
                        </div>

                        {!isCollapsed && item.badge && (
                          <span
                            className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                              isDirectActive
                                ? "bg-black/40 text-white"
                                : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Pro Banner in Footer (When Expanded) */}
      {!isCollapsed && (
        <div
          className="p-3 border-t shrink-0"
          style={{ borderColor: "var(--border-color, #27272a)" }}
        >
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white mb-1">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{config.label}</span>
            </div>
            <p className="text-[11px] text-zinc-400 mb-3 leading-relaxed">
              Krypton Next.js 16 Pro Suite
            </p>
            <div
              className="w-full py-1.5 text-xs font-semibold rounded-lg shadow-sm text-center cursor-default"
              style={{
                backgroundColor: theme === "monochrome" ? "#ffffff" : "var(--brand-primary, #3C50E0)",
                color: theme === "monochrome" ? "#000000" : "#ffffff",
              }}
            >
              Active Theme
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
