"use client";

import React, { useState } from "react";
import { 
  FileText, 
  FileSpreadsheet, 
  ShieldCheck, 
  Download, 
  Eye, 
  Lock, 
  CheckCircle2, 
  Clock, 
  FolderArchive,
  ArrowUpRight,
  Search
} from "lucide-react";
import { DataRoomDoc } from "@/types/pitch";
import { DATA_ROOM_DOCS } from "@/data/pitchData";

interface DataRoomViewProps {
  onPreviewDoc: (doc: DataRoomDoc) => void;
}

export const DataRoomView: React.FC<DataRoomViewProps> = ({ onPreviewDoc }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isExportingAll, setIsExportingAll] = useState<boolean>(false);

  const categories = [
    "All",
    "Financials",
    "Legal & Cap Table",
    "Technical & Security",
    "Commercial & Customers"
  ];

  const filteredDocs = DATA_ROOM_DOCS.filter((doc) => {
    const matchesCat = selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleExportAll = () => {
    setIsExportingAll(true);
    setTimeout(() => setIsExportingAll(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Investor Data Room & Due Diligence Vault
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Cryptographically verified audit documentation, audited financials, legal agreements, and security certifications
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          {isExportingAll ? (
            <>
              <CheckCircle2 size={14} className="text-emerald-700" />
              <span>Generating Secure ZIP (24MB)...</span>
            </>
          ) : (
            <>
              <FolderArchive size={14} />
              <span>Download Complete Data Room (.ZIP)</span>
            </>
          )}
        </button>
      </div>

      {/* Due Diligence Audit Health Status Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-emerald-400">
            <ShieldCheck size={22} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">SOC-2 Type II Certified</div>
            <div className="text-[11px] text-zinc-400">Clean unqualified opinion by EY</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-200">
            <FileSpreadsheet size={22} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Full GAAP P&L & Balance Sheet</div>
            <div className="text-[11px] text-zinc-400">Audited monthly financials 2024-2026</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] rim-light flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-200">
            <Lock size={22} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Lead Term Sheet Executed</div>
            <div className="text-[11px] text-zinc-400">Standard NVCA Series A docs ready</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                selectedCategory === cat
                  ? "bg-white text-black border-white font-bold shadow-sm"
                  : "bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search within Data Room */}
        <div className="relative w-full md:w-64">
          <Search size={14} className="absolute left-3 top-2.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 font-sans"
          />
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 group rim-light"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/10">
                    {doc.format}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {doc.category}
                  </span>
                </div>
                {doc.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                    <ShieldCheck size={11} />
                    Verified
                  </span>
                )}
              </div>

              <h4 className="font-semibold text-white text-sm group-hover:text-zinc-200">
                {doc.title}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                {doc.description}
              </p>

              <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/5 text-[11px] font-mono text-zinc-400 truncate">
                Preview: {doc.previewSnippet}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
              <span className="text-zinc-500">
                {doc.fileSize} · {doc.lastUpdated}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onPreviewDoc(doc)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <Eye size={13} />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
