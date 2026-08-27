"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { CommitModal } from "@/components/modals/CommitModal";
import { DocPreviewModal } from "@/components/modals/DocPreviewModal";
import { OverviewView } from "@/components/dashboard/OverviewView";
import { FinancialsView } from "@/components/dashboard/FinancialsView";
import { MarketView } from "@/components/dashboard/MarketView";
import { ProductView } from "@/components/dashboard/ProductView";
import { CapTableView } from "@/components/dashboard/CapTableView";
import { PitchDeckView } from "@/components/dashboard/PitchDeckView";
import { DataRoomView } from "@/components/dashboard/DataRoomView";
import { NavTab, Scenario, DataRoomDoc } from "@/types/pitch";

export default function PitchDashboardPage() {
  const [activeTab, setActiveTab] = useState<NavTab>("overview");
  const [scenario, setScenario] = useState<Scenario>("base");
  const [currency, setCurrency] = useState<string>("USD");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isCommitModalOpen, setIsCommitModalOpen] = useState<boolean>(false);
  const [previewDoc, setPreviewDoc] = useState<DataRoomDoc | null>(null);
  const [selectedSlideId, setSelectedSlideId] = useState<number>(1);

  // Global key listener for Command Palette (⌘K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#050507] text-[#f4f4f5] font-sans antialiased">
      {/* Desktop & Tablet Collapsible Sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          onOpenCommitModal={() => setIsCommitModalOpen(true)}
          onOpenDeckMode={() => setActiveTab("slides")}
        />
      </div>

      {/* Mobile Sidebar Overlay Drawer */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="relative z-50 w-72">
            <Sidebar
              activeTab={activeTab}
              setActiveTab={(t) => {
                setActiveTab(t);
                setIsMobileSidebarOpen(false);
              }}
              isCollapsed={false}
              setIsCollapsed={() => setIsMobileSidebarOpen(false)}
              onOpenCommitModal={() => {
                setIsCommitModalOpen(true);
                setIsMobileSidebarOpen(false);
              }}
              onOpenDeckMode={() => {
                setActiveTab("slides");
                setIsMobileSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-[#050507] relative">
        {/* Top Header */}
        <Header
          scenario={scenario}
          setScenario={setScenario}
          currency={currency}
          setCurrency={setCurrency}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenCommitModal={() => setIsCommitModalOpen(true)}
          onOpenDeckMode={() => setActiveTab("slides")}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          onOpenDataRoom={() => setActiveTab("dataroom")}
        />

        {/* Scrollable View Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-dot-grid bg-[#050507]">
          <div className="max-w-7xl mx-auto pb-16">
            {activeTab === "overview" && (
              <OverviewView
                scenario={scenario}
                setActiveTab={setActiveTab}
                onOpenCommitModal={() => setIsCommitModalOpen(true)}
                onOpenDeckMode={() => setActiveTab("slides")}
              />
            )}

            {activeTab === "financials" && (
              <FinancialsView />
            )}

            {activeTab === "market" && (
              <MarketView />
            )}

            {activeTab === "product" && (
              <ProductView />
            )}

            {activeTab === "captable" && (
              <CapTableView
                onOpenCommitModal={() => setIsCommitModalOpen(true)}
              />
            )}

            {activeTab === "slides" && (
              <PitchDeckView
                initialSlideId={selectedSlideId}
                onOpenCommitModal={() => setIsCommitModalOpen(true)}
              />
            )}

            {activeTab === "dataroom" && (
              <DataRoomView
                onPreviewDoc={(doc) => setPreviewDoc(doc)}
              />
            )}
          </div>
        </main>
      </div>

      {/* Global Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectTab={(tab) => setActiveTab(tab)}
        onSelectSlide={(slideId) => {
          setSelectedSlideId(slideId);
          setActiveTab("slides");
        }}
        onOpenCommitModal={() => setIsCommitModalOpen(true)}
      />

      <CommitModal
        isOpen={isCommitModalOpen}
        onClose={() => setIsCommitModalOpen(false)}
      />

      <DocPreviewModal
        doc={previewDoc}
        isOpen={!!previewDoc}
        onClose={() => setPreviewDoc(null)}
      />
    </div>
  );
}
