"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Check, Sparkles } from "lucide-react";

export default function PricingTablesPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Developer Starter",
      price: billingCycle === "annual" ? "$39" : "$49",
      desc: "For indie builders and prototype development.",
      features: [
        "100,000 Monthly AI Tokens",
        "5 Team Member Seats",
        "Community Discord Support",
        "10 GB Cloud Storage",
        "Single Region Deployment",
      ],
      highlight: false,
    },
    {
      name: "Enterprise Pro",
      price: billingCycle === "annual" ? "$159" : "$199",
      desc: "For scaling venture startups & production teams.",
      features: [
        "5,000,000 Monthly AI Tokens",
        "Unlimited Team Members",
        "Dedicated 24/7 SLA Slack Channel",
        "1 TB NVMe Cloud Storage",
        "Multi-Region Global CDN Routing",
        "SOC-2 Type II Compliance Logs",
      ],
      highlight: true,
    },
    {
      name: "Custom Enterprise",
      price: "Custom",
      desc: "For global corporations requiring custom SLA.",
      features: [
        "Unlimited Dedicated Token Clusters",
        "Custom Model Fine-Tuning",
        "Dedicated Solutions Architect",
        "Custom Data Residency (EU / US / AP)",
        "On-Premise Air-Gapped Deployments",
      ],
      highlight: false,
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Pricing Tables" category="Pages" categoryHref="/pricing-tables" />

      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Transparent, Scalable Infrastructure Pricing
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Choose the perfect monochrome computing tier for your engineering team.
          </p>

          <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-950 p-1 mt-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-white text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`mono-card p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                plan.highlight
                  ? "border-2 border-white bg-gradient-to-b from-zinc-900 to-black shadow-2xl scale-[1.02]"
                  : "border-zinc-800 bg-zinc-950/60"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider font-mono shadow-md">
                  MOST POPULAR
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-zinc-400 mt-1">{plan.desc}</p>

                <div className="mt-6 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-xs text-zinc-500 font-mono"> / month</span>
                  )}
                </div>

                <div className="space-y-3 pt-6 border-t border-zinc-800/80">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-white shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-colors ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-zinc-200 shadow-sm"
                      : "bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Enterprise Sales" : "Get Started Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
