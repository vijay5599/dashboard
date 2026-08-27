"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Video, Play, Sparkles, Download, Clock, Sliders } from "lucide-react";

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState("A cinematic drone shot through an architectural tunnel in obsidian black with volumetric neon white light beams.");
  const [fps, setFps] = useState("60");
  const [duration, setDuration] = useState("5s");

  const videoQueue = [
    {
      id: "VID-902",
      prompt: "Cinematic drone sweep across minimalist black marble monoliths in heavy fog",
      res: "4K · 60fps",
      dur: "10s",
      status: "Ready",
    },
    {
      id: "VID-901",
      prompt: "Slow-motion droplet hitting liquid mercury surface with high-contrast ripples",
      res: "1080p · 60fps",
      dur: "5s",
      status: "Ready",
    },
    {
      id: "VID-900",
      prompt: "Futuristic typography morphing from abstract wireframes into clean sans-serif logo",
      res: "4K · 30fps",
      dur: "8s",
      status: "Rendering (84%)",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI Video Generator" category="AI Assistant" categoryHref="/ai" />

      <div className="mono-card p-5 mb-6">
        <h2 className="text-base font-bold text-white mb-1">Generate High-Frame-Rate Video</h2>
        <p className="text-xs text-zinc-400 mb-4">Prompt-to-video neural rendering with temporal stability</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Motion Prompt</label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">FPS & Resolution</label>
            <select
              value={fps}
              onChange={(e) => setFps(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            >
              <option value="60">4K Ultra HD (60 fps)</option>
              <option value="30">1080p Full HD (30 fps)</option>
              <option value="24">2.7K Cinematic (24 fps)</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Render Video Clip</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Rendered Video Queue</h2>
        <p className="text-xs text-zinc-400 mb-4">Completed and in-progress generative videos</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videoQueue.map((item) => (
            <div
              key={item.id}
              className="mono-card overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div className="h-44 bg-zinc-950 flex flex-col items-center justify-center relative border-b border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-600 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                  {item.dur}
                </div>
              </div>

              <div className="p-3">
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-3">
                  {item.prompt}
                </p>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>{item.res}</span>
                  <span
                    className={`font-semibold ${
                      item.status === "Ready" ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
