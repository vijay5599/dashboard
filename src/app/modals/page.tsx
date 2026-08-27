"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { X, Check, ShieldAlert, Sparkles } from "lucide-react";

export default function ModalsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Modals & Dialogs" category="UI Elements" categoryHref="/modals" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-4">
          <h2 className="text-base font-bold text-white mb-2">Interactive Modal Triggers</h2>
          <p className="text-xs text-zinc-400 mb-4">High-contrast dialog boxes and confirmation alerts</p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
            >
              Open Standard Modal
            </button>

            <button
              onClick={() => setConfirmOpen(true)}
              className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-semibold text-xs rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Open Destructive Confirm Modal
            </button>
          </div>
        </div>

        {/* Standard Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="mono-card p-6 w-full max-w-md bg-[#09090b] border-zinc-700 relative animate-in fade-in-0 zoom-in-95">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <h3 className="text-sm font-bold text-white">Monochrome System Dialog</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                This is a fully customizable monochrome modal window with focus-trapping, backdrop blur, and escape key listener support.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200"
                >
                  Confirm Action
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Destructive Confirm Modal */}
        {confirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="mono-card p-6 w-full max-w-md bg-[#09090b] border-zinc-700 relative animate-in fade-in-0 zoom-in-95">
              <div className="text-center pb-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mx-auto mb-3">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">Revoke API Key Access?</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  This action cannot be undone. All active webhooks utilizing this token will immediately fail.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  onClick={() => setConfirmOpen(false)}
                  className="flex-1 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setConfirmOpen(false)}
                  className="flex-1 py-2 text-xs font-bold text-white bg-black border border-white rounded-lg hover:bg-zinc-900"
                >
                  Revoke Key
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
