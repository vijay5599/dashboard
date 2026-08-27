"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Bot, Send, Sparkles, Copy, Check, RotateCcw, Sliders, CornerDownLeft } from "lucide-react";

export default function TextGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gpt-4o");
  const [temperature, setTemperature] = useState("0.7");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const [output, setOutput] = useState(
    `# Executive Summary: Enterprise Cloud Migration Strategy\n\nTransitioning legacy monolithic systems to distributed microservices requires a staged migration pattern.\n\n### Key Architectural Pillars:\n1. **Zero-Trust Network Perimeter**: Mutual TLS authentication across all pod-to-pod communications.\n2. **Horizontal Auto-Scaling**: Kubernetes event-driven autoscaling (KEDA) tied to queue depth.\n3. **Event-Driven Resilience**: Kafka cluster acting as the immutable log stream.`
  );

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setOutput(
        `# Generated Analysis for: "${prompt}"\n\nOur deep reasoning model has evaluated the input requirements and synthesized a production-grade implementation approach.\n\n### Strategic Takeaways:\n- **Efficiency Gains**: Reduced computational overhead by 34%.\n- **Modularity**: Clean separation of domain logic with strongly-typed interfaces.\n- **Reliability**: Fault-tolerant circuit breakers implemented across downstream RPC endpoints.`
      );
      setIsGenerating(false);
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI Text Generator" category="AI Assistant" categoryHref="/ai" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Prompt Input & Model Configuration */}
        <div className="space-y-6">
          <div className="mono-card p-5">
            <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-zinc-300" />
              <span>Prompt Parameters</span>
            </h2>
            <p className="text-xs text-zinc-400 mb-4">Fine-tune generation temperature & tokens</p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Select Model
                </label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                >
                  <option value="gpt-4o">GPT-4o (Reasoning High)</option>
                  <option value="claude-3-5">Claude 3.5 Sonnet</option>
                  <option value="llama-3-3">Llama 3.3 70B Instruct</option>
                  <option value="mistral-large">Mistral Large 2</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
                  <span>Creativity (Temperature)</span>
                  <span className="font-mono text-zinc-400">{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="w-full accent-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Your Instruction / Prompt
                </label>
                <textarea
                  rows={6}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you would like to draft, summarize, or analyze in detail..."
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
                />
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <Sparkles className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>{isGenerating ? "Synthesizing..." : "Generate Output"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Output Stream */}
        <div className="lg:col-span-2 mono-card p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">Stream Output</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {model}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Output"}</span>
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-xs text-zinc-200 leading-relaxed font-mono whitespace-pre-wrap p-4 bg-zinc-950 rounded-xl border border-zinc-800/80 min-h-[360px]">
              {output}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
            <span>Tokens: 384 · Latency: 240ms</span>
            <span>Completed with status 200 OK</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
