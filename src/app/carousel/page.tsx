"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function CarouselPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Monochrome Design Paradigm",
      subtitle: "Pure black, white, and high-contrast grayscale interface aesthetics.",
      tag: "Design System",
    },
    {
      title: "Real-time Distributed Kernel",
      subtitle: "Sub-millisecond state synchronization across global edge nodes.",
      tag: "Architecture",
    },
    {
      title: "Generative AI Assistant Suite",
      subtitle: "Integrated token inference for code, text, image, and video generation.",
      tag: "AI Workflows",
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Carousel Slider" category="UI Elements" categoryHref="/carousel" />

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mono-card overflow-hidden relative border-zinc-700 bg-zinc-950">
          <div className="p-12 sm:p-16 min-h-[300px] flex flex-col justify-center text-center bg-mono-dots">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 mx-auto mb-3">
              {slides[currentSlide].tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 border border-zinc-700 text-white hover:bg-black transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 border border-zinc-700 text-white hover:bg-black transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === i ? "bg-white w-6" : "bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
