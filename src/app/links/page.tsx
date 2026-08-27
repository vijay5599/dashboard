"use client";

import React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExternalLink, ArrowRight, CornerDownRight } from "lucide-react";

export default function LinksPage() {
  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Links & Anchors" category="UI Elements" categoryHref="/links" />

      <div className="space-y-6 max-w-4xl">
        <div className="mono-card p-6 space-y-4">
          <h2 className="text-base font-bold text-white mb-2">Interactive Hyperlink Variations</h2>

          <div className="space-y-3 text-xs">
            <div>
              <Link href="/" className="text-white hover:underline font-semibold">
                Default Underlined Link →
              </Link>
            </div>
            <div>
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                <span>Subtle Link with Arrow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div>
              <a
                href="https://tailadmin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-zinc-300 font-mono inline-flex items-center gap-1 border-b border-zinc-600 pb-0.5"
              >
                <span>External Link Identifier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
