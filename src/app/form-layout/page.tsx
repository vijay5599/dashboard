"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { User, Lock, Mail, ShieldCheck, Check } from "lucide-react";

export default function FormLayoutPage() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Form Layouts" category="Forms" categoryHref="/form-layout" />

      <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl">
        {/* Personal & Organization Settings */}
        <div className="mono-card p-6 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
            <User className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-base font-bold text-white">Identity & Organization Information</h2>
              <p className="text-xs text-zinc-400">Account holder credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">First Name *</label>
              <input
                type="text"
                required
                defaultValue="Musharof"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Last Name *</label>
              <input
                type="text"
                required
                defaultValue="Chowdhury"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                defaultValue="musharof@krypton.io"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (415) 890-2144"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

        {/* Security & Access Keys */}
        <div className="mono-card p-6 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
            <Lock className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-base font-bold text-white">Security & Password Update</h2>
              <p className="text-xs text-zinc-400">Change your system authentication key</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">New Password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-1.5"
          >
            {saved ? <Check className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
            <span>{saved ? "Saved Successfully" : "Update Profile & Security"}</span>
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}
