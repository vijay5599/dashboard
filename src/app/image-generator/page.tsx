"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Image as ImageIcon, Sparkles, Download, Share2, Sliders, Maximize2 } from "lucide-react";

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [style, setStyle] = useState("Monochrome Minimal");

  const sampleGallery = [
    {
      id: 1,
      title: "Futuristic Architectural Pavilion",
      prompt: "Minimalist brutalist concrete geometry, stark studio lighting, architectural photography",
      dims: "1024x1024",
      date: "Today, 11:20 AM",
    },
    {
      id: 2,
      title: "Abstract Quantum Topography",
      prompt: "Fluid wireframe landscape, isometric monochrome rendering, obsidian marble reflections",
      dims: "1024x1024",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Cybernetic Neural Interface",
      prompt: "Clean geometric silicon wafer nodes, raytraced glass and chrome accents",
      dims: "1024x1024",
      date: "2 days ago",
    },
    {
      id: 4,
      title: "Industrial Design Hardware Prototype",
      prompt: "Matte black titanium chassis, precision knurled dials, clean studio background",
      dims: "1024x1024",
      date: "3 days ago",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI Image Studio" category="AI Assistant" categoryHref="/ai" />

      <div className="mono-card p-5 mb-6">
        <h2 className="text-base font-bold text-white mb-1">Generate High-Resolution Visuals</h2>
        <p className="text-xs text-zinc-400 mb-4">Prompt-to-image synthesis with precise parameter controls</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Prompt</label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Minimalist monochrome product packaging on obsidian stone..."
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Aspect Ratio</label>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            >
              <option value="1:1">1:1 Square (1024x1024)</option>
              <option value="16:9">16:9 Landscape (1920x1080)</option>
              <option value="9:16">9:16 Portrait (1080x1920)</option>
              <option value="4:3">4:3 Standard (1440x1080)</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate (2 Credits)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-white">Generated Gallery</h2>
            <p className="text-xs text-zinc-400">High-contrast asset archive</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleGallery.map((item) => (
            <div
              key={item.id}
              className="group mono-card overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center justify-center p-4 relative border-b border-zinc-800/80">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-300">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 mt-2">{item.dims}</span>

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{item.title}</h3>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1">{item.prompt}</p>
                </div>
                <div className="pt-2 mt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>{item.date}</span>
                  <span>100% Quality</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
