"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes the TailAdmin Monochrome Design System unique?",
      a: "TailAdmin Monochrome is engineered exclusively in high-contrast black, white, and finely calibrated grayscale spectrums. It eliminates chromatic visual clutter, maximizing information hierarchy and developer ergonomics.",
    },
    {
      q: "How does token streaming and AI assistant generation work?",
      a: "Our AI suites are connected directly to state-of-the-art inference engines including GPT-4o, Claude 3.5 Sonnet, and Llama 3.3 70B, enabling real-time streaming of code, text, image prompts, and video renders with automated KV-caching.",
    },
    {
      q: "Can I self-host this dashboard on Kubernetes or AWS ECS?",
      a: "Yes. The Next.js App Router codebase is fully containerized with Docker and supports standalone node output, allowing effortless deployments across AWS, GCP, Vercel, or on-premise air-gapped clusters.",
    },
    {
      q: "What security compliance standards does the infrastructure support?",
      a: "The architecture adheres to SOC-2 Type II standards, with automated KMS key rotation, mutual TLS 1.3 between internal services, and zero data retention policies on AI model inferences.",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Frequently Asked Questions" category="Pages" categoryHref="/faq" />

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center pb-4">
          <h2 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-zinc-400 mt-1">Everything you need to know about TailAdmin Monochrome</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="mono-card overflow-hidden border-zinc-800 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4"
              >
                <span className="text-xs font-bold text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform ${
                    openIndex === idx ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
