"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  pageTitle: string;
  category?: string;
  categoryHref?: string;
}

export function Breadcrumb({ pageTitle, category = "Dashboard", categoryHref = "/" }: BreadcrumbProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
      <div>
        <h1
          className="text-xl sm:text-2xl font-bold tracking-tight"
          style={{ color: "var(--text-primary, #ffffff)" }}
        >
          {pageTitle}
        </h1>
      </div>

      <nav className="flex items-center gap-1.5 text-xs opacity-70 font-medium">
        <Link
          href={categoryHref}
          className="hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{category}</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        <span className="font-semibold opacity-100" style={{ color: "var(--text-primary, #ffffff)" }}>
          {pageTitle}
        </span>
      </nav>
    </div>
  );
}
