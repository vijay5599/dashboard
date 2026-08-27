"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Inbox, Send, Star, Trash2, Tag, Search, Archive, MoreVertical, Edit3 } from "lucide-react";

export default function InboxPage() {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [searchTerm, setSearchTerm] = useState("");

  const emails = [
    {
      id: "EM-001",
      sender: "GitHub Notifications",
      subject: "[Security Alert] Dependency vulnerability detected in package.json",
      snippet: "Dependabot detected 1 moderate severity vulnerability in your repository...",
      time: "10:45 AM",
      unread: true,
      starred: true,
    },
    {
      id: "EM-002",
      sender: "Stripe Billing",
      subject: "Your monthly invoice for October 2026 is ready",
      snippet: "The total payment of $199.00 USD has been charged to your default card...",
      time: "08:12 AM",
      unread: true,
      starred: false,
    },
    {
      id: "EM-003",
      sender: "Guillermo Rauch (Vercel)",
      subject: "Next.js 16 Production release keynote recap",
      snippet: "Thanks for tuning in to the Next.js Conf keynote! Here are all the architectural links...",
      time: "Yesterday",
      unread: false,
      starred: true,
    },
    {
      id: "EM-004",
      sender: "AWS Cloud Platform",
      subject: "Scheduled maintenance for ECS Cluster us-east-1",
      snippet: "Your container workloads will be automatically migrated to standby availability zones...",
      time: "2 days ago",
      unread: false,
      starred: false,
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Email Inbox" category="Support" categoryHref="/inbox" />

      <div className="mono-card overflow-hidden min-h-[600px] flex flex-col md:flex-row">
        {/* Mail Folders Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 p-4 bg-zinc-950/80 shrink-0 space-y-4">
          <Link
            href="/inbox-details"
            className="w-full py-2.5 px-4 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Edit3 className="w-4 h-4" />
            <span>Compose Email</span>
          </Link>

          <div className="space-y-1 text-xs font-semibold">
            {[
              { id: "inbox", label: "Inbox", count: 2, icon: Inbox },
              { id: "starred", label: "Starred", count: 2, icon: Star },
              { id: "sent", label: "Sent Mail", count: 0, icon: Send },
              { id: "trash", label: "Trash", count: 0, icon: Trash2 },
            ].map((folder) => {
              const Icon = folder.icon;
              return (
                <button
                  key={folder.id}
                  onClick={() => setActiveFolder(folder.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    activeFolder === folder.id
                      ? "bg-zinc-900 text-white font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{folder.label}</span>
                  </div>
                  {folder.count > 0 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-white">
                      {folder.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mail Message List */}
        <div className="flex-1 flex flex-col bg-[#050507]">
          <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search emails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/60">
            {emails.map((email) => (
              <Link
                key={email.id}
                href="/inbox-details"
                className={`py-3.5 px-4 flex items-center justify-between gap-4 hover:bg-zinc-900/60 transition-colors block ${
                  email.unread ? "bg-zinc-900/30" : ""
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Star
                    className={`w-4 h-4 shrink-0 ${
                      email.starred ? "text-white fill-white" : "text-zinc-600"
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs truncate ${
                          email.unread ? "font-bold text-white" : "text-zinc-300"
                        }`}
                      >
                        {email.sender}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate mt-0.5 ${
                        email.unread ? "font-semibold text-zinc-200" : "text-zinc-400"
                      }`}
                    >
                      {email.subject}
                    </p>
                    <p className="text-[11px] text-zinc-500 truncate mt-0.5">{email.snippet}</p>
                  </div>
                </div>

                <span className="text-[11px] text-zinc-500 font-mono shrink-0">{email.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
