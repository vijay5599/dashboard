"use client";

import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Sparkles, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Info,
  Presentation
} from "lucide-react";
import { PITCH_SLIDES, COMPANY_INFO } from "@/data/pitchData";

interface PitchDeckViewProps {
  initialSlideId?: number;
  onOpenCommitModal: () => void;
}

export const PitchDeckView: React.FC<PitchDeckViewProps> = ({
  initialSlideId = 1,
  onOpenCommitModal,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlideId - 1);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const slide = PITCH_SLIDES[currentSlideIndex] || PITCH_SLIDES[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(PITCH_SLIDES.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Pitch timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(PITCH_SLIDES.length - 1, prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className={`space-y-6 animate-in fade-in duration-300 ${
      isFullscreen ? "fixed inset-0 z-50 bg-[#050507] p-6 overflow-y-auto" : ""
    }`}>
      {/* Presentation Top Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950/90 border border-white/[0.08] rim-light font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-white font-bold">
            <Presentation size={16} />
            <span>Aetheria Pitch Deck</span>
          </div>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">
            Slide <strong className="text-white">{slide.id}</strong> of {PITCH_SLIDES.length}
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1 text-zinc-400">
            <Clock size={13} />
            <span>Time: {formatTimer(timerSeconds)}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              showSpeakerNotes
                ? "bg-white text-black border-white font-bold"
                : "bg-zinc-900 text-zinc-400 border-white/10 hover:text-white"
            }`}
          >
            {showSpeakerNotes ? "Hide Investor Notes" : "Show Investor Notes"}
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Deck"}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          <button
            onClick={onOpenCommitModal}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            The Ask ($8.5M)
          </button>
        </div>
      </div>

      {/* MAIN SLIDE CANVAS */}
      <div className="relative min-h-[460px] md:min-h-[520px] rounded-3xl bg-gradient-to-b from-[#111116] to-[#08080a] border border-white/15 p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden rim-light">
        {/* Slide Top Meta */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-zinc-400 tracking-wider">
              {slide.tag}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Aetheria Systems, Inc.</span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Series A Confidential
          </span>
        </div>

        {/* Slide Core Content */}
        <div className="my-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {slide.title}
            </h1>
            <p className="text-base sm:text-xl text-zinc-400 font-medium">
              {slide.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
            {/* Key Bullet Points (7 cols) */}
            <div className="lg:col-span-8 space-y-3.5">
              {slide.bulletPoints.map((bp, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            {/* High Impact Key Metric Box (4 cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/80 border border-white/20 space-y-2 shadow-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {slide.keyMetric.label}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                {slide.keyMetric.value}
              </div>
              <div className="text-xs text-zinc-400 font-sans leading-relaxed pt-1">
                {slide.keyMetric.note}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-white border border-white/10 transition-all"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === PITCH_SLIDES.length - 1}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-white border border-white/10 transition-all"
              title="Next Slide (Right Arrow or Space)"
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
              Use ← → arrow keys to flip slides
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {PITCH_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex 
                    ? "w-8 bg-white" 
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                title={`Go to slide ${s.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FOUNDER / SPEAKER THESIS NOTES */}
      {showSpeakerNotes && (
        <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/[0.08] space-y-2 rim-light animate-in fade-in">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-semibold uppercase">
            <Info size={14} className="text-zinc-300" />
            <span>Founder Diligence Note / Talking Points for Slide {slide.id}:</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans italic bg-zinc-900/60 p-3 rounded-xl border border-white/5">
            &quot;{slide.founderNote}&quot;
          </p>
        </div>
      )}

      {/* SLIDE THUMBNAILS ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {PITCH_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`p-3 rounded-xl text-left border transition-all ${
              idx === currentSlideIndex
                ? "bg-zinc-900 border-white text-white shadow-lg shadow-white/5"
                : "bg-zinc-950/60 border-white/[0.06] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            <div className="text-[10px] font-mono font-bold mb-1">
              Slide 0{s.id}
            </div>
            <div className="text-xs font-semibold truncate text-white">
              {s.title}
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-1">
              {s.keyMetric.value}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
