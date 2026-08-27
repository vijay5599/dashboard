"use client";

import React, { useState } from "react";
import { 
  X, 
  Download, 
  FileText, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ExternalLink,
  Printer,
  Eye,
  FileSpreadsheet
} from "lucide-react";
import { DataRoomDoc } from "@/types/pitch";

interface DocPreviewModalProps {
  doc: DataRoomDoc | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocPreviewModal: React.FC<DocPreviewModalProps> = ({
  doc,
  isOpen,
  onClose,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen || !doc) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#0c0c10] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col rim-light">
        {/* Document Header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/[0.08] bg-[#08080a]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white shrink-0">
              {doc.format === "XLSX" ? <FileSpreadsheet size={20} /> : <FileText size={20} />}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm truncate">
                  {doc.title}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-white/10 text-zinc-300 rounded border border-white/10 shrink-0">
                  {doc.format}
                </span>
                {doc.verified && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-1.5 py-0.5 rounded shrink-0">
                    <ShieldCheck size={11} />
                    Verified Audit
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 truncate mt-0.5">
                Category: {doc.category} · Size: {doc.fileSize} · Updated: {doc.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-black bg-white hover:bg-zinc-200 transition-colors shadow-sm"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 size={13} className="text-emerald-700" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span>Download</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Document Body / Viewer */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-950 font-sans">
          {/* Watermark Banner */}
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <Lock size={13} className="text-zinc-400" />
              <span>CONFIDENTIAL · AETHERIA SERIES A DATA ROOM</span>
            </div>
            <span className="text-[11px] text-zinc-400">ID: {doc.id}</span>
          </div>

          {/* Document Summary */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
              Document Summary & Scope
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {doc.description}
            </p>
          </div>

          {/* Interactive Simulated Preview Sheet */}
          {doc.format === "XLSX" ? (
            <div className="rounded-xl border border-white/10 overflow-hidden bg-black">
              <div className="px-4 py-2 bg-zinc-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Worksheet: Model_Summary_2024_2027</span>
                <span>Values in $USD (Thousands)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-zinc-900/80 text-zinc-400 border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3">Financial Metric</th>
                      <th className="p-3 text-right">FY 2024 (Act)</th>
                      <th className="p-3 text-right">FY 2025 (Runway)</th>
                      <th className="p-3 text-right">FY 2026 (Proj)</th>
                      <th className="p-3 text-right">FY 2027 (Proj)</th>
                      <th className="p-3 text-right">CAGR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05] text-zinc-300">
                    <tr className="bg-white/[0.02] font-semibold text-white">
                      <td className="p-3">Annual Recurring Revenue (ARR)</td>
                      <td className="p-3 text-right">$3,500</td>
                      <td className="p-3 text-right">$11,200</td>
                      <td className="p-3 text-right">$32,800</td>
                      <td className="p-3 text-right">$74,500</td>
                      <td className="p-3 text-right text-emerald-400">+178%</td>
                    </tr>
                    <tr>
                      <td className="p-3">YoY Revenue Growth</td>
                      <td className="p-3 text-right">+245%</td>
                      <td className="p-3 text-right">+220%</td>
                      <td className="p-3 text-right">+192%</td>
                      <td className="p-3 text-right">+127%</td>
                      <td className="p-3 text-right text-zinc-400">-</td>
                    </tr>
                    <tr>
                      <td className="p-3">Gross Profit (88.4%)</td>
                      <td className="p-3 text-right">$3,094</td>
                      <td className="p-3 text-right">$9,900</td>
                      <td className="p-3 text-right">$29,000</td>
                      <td className="p-3 text-right">$66,300</td>
                      <td className="p-3 text-right text-emerald-400">+181%</td>
                    </tr>
                    <tr>
                      <td className="p-3">R&D & Engineering Spend</td>
                      <td className="p-3 text-right">($2,100)</td>
                      <td className="p-3 text-right">($5,200)</td>
                      <td className="p-3 text-right">($11,400)</td>
                      <td className="p-3 text-right">($19,800)</td>
                      <td className="p-3 text-right text-zinc-400">-</td>
                    </tr>
                    <tr>
                      <td className="p-3">Sales & Marketing (GTM)</td>
                      <td className="p-3 text-right">($1,400)</td>
                      <td className="p-3 text-right">($3,800)</td>
                      <td className="p-3 text-right">($9,200)</td>
                      <td className="p-3 text-right">($16,500)</td>
                      <td className="p-3 text-right text-zinc-400">-</td>
                    </tr>
                    <tr className="bg-white/[0.04] font-bold text-white">
                      <td className="p-3">Net Operating Cash Flow (FCF)</td>
                      <td className="p-3 text-right">($1,416)</td>
                      <td className="p-3 text-right">($1,100)</td>
                      <td className="p-3 text-right">$4,400</td>
                      <td className="p-3 text-right">$24,000</td>
                      <td className="p-3 text-right text-emerald-400">Profitable</td>
                    </tr>
                    <tr>
                      <td className="p-3">End of Period Headcount</td>
                      <td className="p-3 text-right">24</td>
                      <td className="p-3 text-right">46</td>
                      <td className="p-3 text-right">82</td>
                      <td className="p-3 text-right">130</td>
                      <td className="p-3 text-right text-zinc-400">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Document Text Simulation */
            <div className="p-6 rounded-xl border border-white/10 bg-black/70 space-y-4 font-mono text-xs text-zinc-300">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-500">
                <span>DOCUMENT PREVIEW (EXCERPT)</span>
                <span>PAGE 1 OF {doc.pagesOrTabs || 12}</span>
              </div>
              <div className="space-y-3 font-sans leading-relaxed text-zinc-300 text-sm">
                <p className="font-semibold text-white">
                  Executive Brief & Verified Audit Findings:
                </p>
                <p>
                  This memorandum accompanies the official Series A filing for Aetheria Systems, Inc. All customer cohort retention metrics, gross margin unit economics, and security attestations have been independently validated through third-party diligence procedures.
                </p>
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/10 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">{doc.previewSnippet}</div>
                  <div className="text-zinc-500">Audited by Tier-1 Advisory & Legal Counsel · All IP unconditionally assigned to Aetheria Systems, Inc.</div>
                </div>
                <p>
                  To request unredacted full appendix data or schedule an interactive Q&A session with our lead research team and legal counsel, please submit a formal allocation request via the dashboard.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 bg-[#08080a] border-t border-white/[0.08] text-xs text-zinc-400 font-mono">
          <span>Encrypted with AES-256 GCM</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
