"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Settings, Key, Shield, Cpu, Database, Save, Check } from "lucide-react";

export default function AISettingsPage() {
  const [saved, setSaved] = useState(false);
  const [openaiKey, setOpenaiKey] = useState("sk-proj-••••••••••••••••••••••••");
  const [anthropicKey, setAnthropicKey] = useState("sk-ant-••••••••••••••••••••••••");
  const [geminiKey, setGeminiKey] = useState("AIzaSy••••••••••••••••••••••••");
  const [defaultModel, setDefaultModel] = useState("gpt-4o");
  const [cachingEnabled, setCachingEnabled] = useState(true);
  const [fallbackEnabled, setFallbackEnabled] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI System Settings" category="AI Assistant" categoryHref="/ai" />

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
        {/* API Credentials */}
        <div className="mono-card p-5">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-800">
            <Key className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-base font-bold text-white">API Keys & Provider Secrets</h2>
              <p className="text-xs text-zinc-400">Encrypted in KMS with zero-retention policies</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                OpenAI API Key
              </label>
              <input
                type="password"
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Anthropic Claude API Key
              </label>
              <input
                type="password"
                value={anthropicKey}
                onChange={(e) => setAnthropicKey(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Google Gemini API Key
              </label>
              <input
                type="password"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

        {/* Inference & Routing Controls */}
        <div className="mono-card p-5">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-800">
            <Cpu className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-base font-bold text-white">Default Inference Routing</h2>
              <p className="text-xs text-zinc-400">Global fallback and cache configurations</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Primary Fallback Model
              </label>
              <select
                value={defaultModel}
                onChange={(e) => setDefaultModel(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              >
                <option value="gpt-4o">GPT-4o (OpenAI)</option>
                <option value="claude-3-5-sonnet">Claude 3.5 Sonnet (Anthropic)</option>
                <option value="gemini-1-5-pro">Gemini 1.5 Pro (Google DeepMind)</option>
                <option value="llama-3-3-70b">Llama 3.3 70B (Groq / Together)</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-white block">Prompt KV Caching</span>
                <span className="text-[11px] text-zinc-400">
                  Cache identical prefix tokens across chat sessions to reduce costs by 50%
                </span>
              </div>
              <input
                type="checkbox"
                checked={cachingEnabled}
                onChange={(e) => setCachingEnabled(e.target.checked)}
                className="w-4 h-4 accent-white"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-white block">
                  Automatic Failover & Circuit Breaker
                </span>
                <span className="text-[11px] text-zinc-400">
                  Reroute to secondary model on 429 rate limit or 5xx outage
                </span>
              </div>
              <input
                type="checkbox"
                checked={fallbackEnabled}
                onChange={(e) => setFallbackEnabled(e.target.checked)}
                className="w-4 h-4 accent-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{saved ? "Settings Saved" : "Save Configurations"}</span>
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}
