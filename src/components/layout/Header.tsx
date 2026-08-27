"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  Mail,
  Moon,
  ChevronDown,
  User,
  Settings,
  CreditCard,
  LogOut,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
  onOpenCommandPalette?: () => void;
}

export function Header({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  onOpenCommandPalette,
}: HeaderProps) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false);
      }
      if (msgRef.current && !msgRef.current.contains(e.target as Node)) {
        setIsMessagesOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mockNotifications = [
    {
      id: 1,
      title: "New order received #8921",
      desc: "Enterprise license purchased by Apex Corp.",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Server CPU load normal",
      desc: "Auto-scaled 4 worker nodes smoothly.",
      time: "22m ago",
      unread: true,
    },
    {
      id: 3,
      title: "Database backup completed",
      desc: "Automated snapshot saved to cold storage.",
      time: "2h ago",
      unread: false,
    },
  ];

  const mockMessages = [
    {
      id: 1,
      name: "Marcus Vance",
      msg: "Hey, can you review the latest quarterly reports?",
      time: "12m ago",
      unread: true,
    },
    {
      id: 2,
      name: "Elena Rostova",
      msg: "Product launch timeline is confirmed for Tuesday.",
      time: "1h ago",
      unread: false,
    },
  ];

  return (
    <header
      className="sticky top-0 z-40 h-16 w-full backdrop-blur-md border-b px-4 lg:px-6 flex items-center justify-between"
      style={{
        backgroundColor: "var(--bg-header, rgba(5, 5, 7, 0.9))",
        borderColor: "var(--border-color, #27272a)",
      }}
    >
      {/* Left side: Toggle button + Search Bar */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="xl:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          type="button"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="hidden xl:flex p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Toggle Sidebar Collapse"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar / Command Palette Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-3 w-48 sm:w-72 lg:w-96 px-3.5 py-2 text-xs font-normal text-zinc-400 bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all text-left group"
          >
            <Search className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 shrink-0" />
            <span className="truncate flex-1">Search or jump to page...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 bg-zinc-800 text-zinc-400 border border-zinc-700 rounded">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* Right side: Actions & User Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Color Palette & Theme Switcher */}
        <ThemeSwitcher />

        {/* Notifications Popover */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            onClick={() => {
              setIsNotifOpen(!isNotifOpen);
              setIsMessagesOpen(false);
              setIsProfileOpen(false);
            }}
            className="relative p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full ring-2 ring-black" />
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl p-4 z-50 animate-in fade-in-50 slide-in-from-top-2">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">Notifications</h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-black font-mono">
                    2 NEW
                  </span>
                </div>
                <button className="text-xs text-zinc-400 hover:text-white transition-colors">
                  Mark all read
                </button>
              </div>

              <div className="divide-y divide-zinc-800/80 my-1 max-h-72 overflow-y-auto">
                {mockNotifications.map((n) => (
                  <div
                    key={n.id}
                    className={`py-3 px-2 flex gap-3 rounded-lg hover:bg-zinc-900/60 transition-colors cursor-pointer ${
                      n.unread ? "bg-zinc-900/30" : ""
                    }`}
                  >
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 border border-zinc-700">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">{n.title}</p>
                      <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">{n.desc}</p>
                      <span className="text-[10px] text-zinc-500 mt-1 block font-mono">
                        {n.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800 text-center">
                <Link
                  href="/notifications"
                  onClick={() => setIsNotifOpen(false)}
                  className="text-xs font-medium text-zinc-300 hover:text-white transition-colors block py-1"
                >
                  View all notifications →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Messages Popover */}
        <div className="relative" ref={msgRef}>
          <button
            type="button"
            onClick={() => {
              setIsMessagesOpen(!isMessagesOpen);
              setIsNotifOpen(false);
              setIsProfileOpen(false);
            }}
            className="relative p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
            aria-label="Messages"
          >
            <Mail className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-zinc-400 rounded-full ring-2 ring-black" />
          </button>

          {isMessagesOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-88 rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl p-4 z-50 animate-in fade-in-50 slide-in-from-top-2">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <h4 className="text-sm font-semibold text-white">Messages</h4>
                <Link
                  href="/chat"
                  onClick={() => setIsMessagesOpen(false)}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Open Chat
                </Link>
              </div>

              <div className="divide-y divide-zinc-800/80 my-1">
                {mockMessages.map((m) => (
                  <Link
                    key={m.id}
                    href="/chat"
                    onClick={() => setIsMessagesOpen(false)}
                    className="py-3 px-2 flex gap-3 rounded-lg hover:bg-zinc-900/60 transition-colors block"
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white shrink-0">
                      {m.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white truncate">
                          {m.name}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">{m.time}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{m.msg}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800 text-center">
                <Link
                  href="/inbox"
                  onClick={() => setIsMessagesOpen(false)}
                  className="text-xs font-medium text-zinc-300 hover:text-white transition-colors block py-1"
                >
                  Go to Mail Inbox →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative ml-1" ref={profileRef}>
          <button
            type="button"
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotifOpen(false);
              setIsMessagesOpen(false);
            }}
            className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-sm">
              MC
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-white leading-tight">
                Musharof Chowdhury
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">System Admin</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 hidden md:block" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl p-1.5 z-50">
              <div className="px-3 py-2.5 border-b border-zinc-800 mb-1">
                <p className="text-xs font-semibold text-white">Musharof Chowdhury</p>
                <p className="text-[11px] text-zinc-400 truncate">musharof@tailadmin.com</p>
              </div>

              <div className="space-y-0.5">
                <Link
                  href="/profile"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <User className="w-4 h-4 text-zinc-400" />
                  <span>View Profile</span>
                </Link>
                <Link
                  href="/billing"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-zinc-400" />
                  <span>Subscription & Billing</span>
                </Link>
                <Link
                  href="/ai-settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <Settings className="w-4 h-4 text-zinc-400" />
                  <span>System Settings</span>
                </Link>
              </div>

              <div className="pt-1.5 mt-1.5 border-t border-zinc-800">
                <Link
                  href="/signin"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
