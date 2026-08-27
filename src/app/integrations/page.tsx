"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Check, Plus, ExternalLink, Zap } from "lucide-react";

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState([
    { id: 1, name: "GitHub", desc: "Automated continuous delivery & pull request CI verification", connected: true },
    { id: 2, name: "Slack", desc: "Real-time deployment alerts & incident dispatch channels", connected: true },
    { id: 3, name: "Stripe", desc: "Automated merchant billing, payouts & webhook reconciliations", connected: true },
    { id: 4, name: "AWS Cloud", desc: "Infrastructure provisioning and cloud container auto-scaling", connected: false },
    { id: 5, name: "Linear", desc: "Synchronize issue tracking and engineering sprint workflows", connected: false },
    { id: 6, name: "OpenAI", desc: "Direct model embeddings and token inference gateway", connected: true },
  ]);

  const toggleConnection = (id: number) => {
    setIntegrations(
      integrations.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i))
    );
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Connected Integrations" category="Pages" categoryHref="/integrations" />

      <div className="space-y-6 max-w-5xl">
        <div className="mono-card p-6">
          <h2 className="text-base font-bold text-white mb-1">Third-Party Ecosystem Integrations</h2>
          <p className="text-xs text-zinc-400 mb-6">Connect developer tools and cloud services to your workspace</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((item) => (
              <div
                key={item.id}
                className="mono-card p-5 flex flex-col justify-between border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 font-bold text-xs text-white flex items-center justify-center">
                      {item.name.charAt(0)}
                    </div>
                    {item.connected && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-white border border-zinc-700">
                        Connected
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => toggleConnection(item.id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      item.connected
                        ? "bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white"
                        : "bg-white text-black hover:bg-zinc-200 font-bold"
                    }`}
                  >
                    {item.connected ? "Configure" : "Connect"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
