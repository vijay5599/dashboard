"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { UploadCloud, Check, ArrowLeft, Plus } from "lucide-react";

export default function AddProductPage() {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("SKU-9042");
  const [price, setPrice] = useState("199.00");
  const [category, setCategory] = useState("Digital Design");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/products-list");
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Add New Product" category="E-commerce" categoryHref="/products-list" />

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/products-list"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
          <button
            type="submit"
            className="px-5 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
          >
            Publish Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="mono-card p-5 space-y-4">
              <h2 className="text-base font-bold text-white mb-2">Basic Details</h2>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Product Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next.js SaaS Kit Monochrome"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Detailed specifications, features, and release notes..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 text-xs focus:outline-none focus:border-white"
                />
              </div>
            </div>

            {/* Media Upload */}
            <div className="mono-card p-5">
              <h2 className="text-base font-bold text-white mb-2">Product Media & Assets</h2>
              <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-zinc-500 transition-colors cursor-pointer bg-zinc-950/60">
                <UploadCloud className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-white">
                  Click or drag files here to upload
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">PNG, JPG, SVG or WEBP up to 25MB</p>
              </div>
            </div>
          </div>

          {/* Pricing & Organization */}
          <div className="space-y-6">
            <div className="mono-card p-5 space-y-4">
              <h2 className="text-base font-bold text-white mb-2">Pricing & Inventory</h2>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Price ($ USD) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">SKU Code</label>
                <input
                  type="text"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                >
                  <option value="Digital Design">Digital Design</option>
                  <option value="Development">Development</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
