"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  Folder,
  FileText,
  Image as ImageIcon,
  Video,
  FileCode,
  HardDrive,
  Upload,
  Plus,
  MoreVertical,
  Download,
  Trash2,
} from "lucide-react";

export default function FileManagerPage() {
  const folders = [
    { name: "Brand Guidelines & Assets", files: "48 files", size: "1.2 GB" },
    { name: "Production UI Components", files: "184 files", size: "480 MB" },
    { name: "Financial Audits & Invoices", files: "92 files", size: "140 MB" },
    { name: "Architecture RFC Documents", files: "24 files", size: "32 MB" },
  ];

  const recentFiles = [
    { name: "tailadmin-monochrome-tokens.json", type: "JSON", size: "14.2 KB", modified: "10m ago" },
    { name: "series-a-investor-deck-v4.pdf", type: "PDF", size: "8.4 MB", modified: "2h ago" },
    { name: "product-keynote-4k.mp4", type: "Video", size: "184.0 MB", modified: "Yesterday" },
    { name: "system-architecture-spec.md", type: "Markdown", size: "42.8 KB", modified: "2 days ago" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Cloud File Manager" category="Pages" categoryHref="/file-manager" />

      <div className="space-y-6">
        {/* Storage Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mono-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase font-bold">Documents</span>
              <span className="text-base font-bold text-white font-mono">42.8 GB</span>
            </div>
          </div>

          <div className="mono-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase font-bold">Images</span>
              <span className="text-base font-bold text-white font-mono">118.4 GB</span>
            </div>
          </div>

          <div className="mono-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase font-bold">Media</span>
              <span className="text-base font-bold text-white font-mono">294.1 GB</span>
            </div>
          </div>

          <div className="mono-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase font-bold">Total Storage</span>
              <span className="text-base font-bold text-white font-mono">455 GB / 1 TB</span>
            </div>
          </div>
        </div>

        {/* Folders Grid */}
        <div className="mono-card p-5">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
            <h2 className="text-base font-bold text-white">Folders</h2>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>New Folder</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {folders.map((f) => (
              <div
                key={f.name}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <Folder className="w-8 h-8 text-white fill-zinc-900" />
                  <MoreVertical className="w-4 h-4 text-zinc-500 hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white truncate">{f.name}</h3>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mt-1">
                    <span>{f.files}</span>
                    <span>{f.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Files Table */}
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Recent Files</h2>
          <p className="text-xs text-zinc-400 mb-4">Latest uploads & modified assets</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">File Name</th>
                  <th className="pb-3 font-semibold">Type</th>
                  <th className="pb-3 font-semibold">Size</th>
                  <th className="pb-3 font-semibold">Last Modified</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono">
                {recentFiles.map((file) => (
                  <tr key={file.name} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-white flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span className="truncate">{file.name}</span>
                    </td>
                    <td className="py-3.5 text-zinc-400">{file.type}</td>
                    <td className="py-3.5 text-zinc-300">{file.size}</td>
                    <td className="py-3.5 text-zinc-500">{file.modified}</td>
                    <td className="py-3.5 text-right font-sans">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
                          <Download className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
