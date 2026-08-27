"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { User, Mail, MapPin, Briefcase, Calendar, Camera, Edit, Shield, Check, Save } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [saved, setSaved] = useState(false);

  const [bio, setBio] = useState(
    "Senior Principal Systems Architect specializing in distributed systems, high-concurrency microservices, and high-contrast monochrome design interfaces."
  );

  const timeline = [
    {
      action: "Deployed v2.4.0 Kernel to Production",
      time: "2 hours ago",
      desc: "All Kubernetes cluster nodes upgraded with zero downtime.",
    },
    {
      action: "Approved Architecture RFC #88",
      time: "Yesterday, 4:15 PM",
      desc: "Endorsed vector database migration to Qdrant cluster.",
    },
    {
      action: "Created Organization API Key 'prod_crawler_v1'",
      time: "3 days ago",
      desc: "Allocated 5,000,000 monthly inference tokens.",
    },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="User Profile" category="Menu" categoryHref="/profile" />

      <div className="space-y-6 max-w-5xl">
        {/* Profile Card Header */}
        <div className="mono-card overflow-hidden">
          {/* Cover Banner */}
          <div className="h-40 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-b border-zinc-800 relative bg-mono-dots">
            <button className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 hover:bg-black/90 transition-colors">
              <Camera className="w-3.5 h-3.5" />
              <span>Edit Cover</span>
            </button>
          </div>

          {/* Profile Identity Row */}
          <div className="p-6 sm:p-8 pt-0 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-12">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white text-black font-extrabold text-3xl flex items-center justify-center border-4 border-black shadow-2xl relative">
                MC
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-zinc-900 border-2 border-black rounded-full" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">Musharof Chowdhury</h2>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                    Admin
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">Lead Architect & Core Contributor</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> musharof@tailadmin.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Joined Jan 2024
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("settings")}
                className="px-4 py-2 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-6 px-6 sm:px-8 border-t border-zinc-800 text-xs font-semibold">
            {["overview", "timeline", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 capitalize border-b-2 transition-all ${
                  activeTab === tab
                    ? "text-white border-white font-bold"
                    : "text-zinc-500 border-transparent hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="mono-card p-5">
                <h3 className="text-sm font-bold text-white mb-2">About & Bio</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{bio}</p>
              </div>

              <div className="mono-card p-5">
                <h3 className="text-sm font-bold text-white mb-4">Core Skills & Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Distributed Systems",
                    "Next.js App Router",
                    "Tailwind CSS v4",
                    "TypeScript",
                    "GraphQL",
                    "Kubernetes",
                    "PostgreSQL",
                    "Kafka",
                    "LLM Fine-Tuning",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="mono-card p-5">
                <h3 className="text-sm font-bold text-white mb-3">Activity Metrics</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span className="text-zinc-400">Pull Requests Merged</span>
                    <span className="font-bold text-white font-mono">342</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span className="text-zinc-400">Code Reviews Given</span>
                    <span className="font-bold text-white font-mono">1,120</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span className="text-zinc-400">System Uptime Recorded</span>
                    <span className="font-bold text-white font-mono">99.99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="mono-card p-5">
            <h3 className="text-sm font-bold text-white mb-4">Audit & Activity Log</h3>
            <div className="space-y-6 relative pl-6 border-l border-zinc-800 ml-3">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2 border-black" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{item.action}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">{item.time}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <form onSubmit={handleSave} className="mono-card p-5 space-y-4">
            <h3 className="text-sm font-bold text-white mb-2">Edit Personal Information</h3>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Bio Summary</label>
              <textarea
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                <span>{saved ? "Profile Saved" : "Save Changes"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
}
