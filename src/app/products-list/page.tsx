"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, Search, Filter, Download, MoreVertical, Edit, Trash2, Eye } from "lucide-react";

export default function ProductsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const products = [
    {
      id: "PRD-001",
      name: "Monochrome Pro UI Kit",
      category: "Digital Design",
      price: "$129.00",
      stock: "Unlimited",
      sales: "1,420",
      status: "In Stock",
      rating: "4.9 / 5.0",
    },
    {
      id: "PRD-002",
      name: "SaaS Next.js Boilerplate",
      category: "Development",
      price: "$249.00",
      stock: "Unlimited",
      sales: "980",
      status: "In Stock",
      rating: "5.0 / 5.0",
    },
    {
      id: "PRD-003",
      name: "Obsidian Hardware Keyboard",
      category: "Electronics",
      price: "$189.00",
      stock: "24 units",
      sales: "340",
      status: "Low Stock",
      rating: "4.8 / 5.0",
    },
    {
      id: "PRD-004",
      name: "Architectural Studio Desk Mat",
      category: "Accessories",
      price: "$45.00",
      stock: "0 units",
      sales: "520",
      status: "Out of Stock",
      rating: "4.7 / 5.0",
    },
    {
      id: "PRD-005",
      name: "Titanium Mechanical Dial",
      category: "Electronics",
      price: "$79.00",
      stock: "112 units",
      sales: "210",
      status: "In Stock",
      rating: "4.9 / 5.0",
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Product Catalog" category="E-commerce" categoryHref="/products-list" />

      <div className="mono-card p-5">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search products or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            >
              <option value="All">All Categories</option>
              <option value="Digital Design">Digital Design</option>
              <option value="Development">Development</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <Link
              href="/add-product"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </Link>
          </div>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">SKU / ID</th>
                <th className="pb-3 font-semibold">Product Name</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold">Price</th>
                <th className="pb-3 font-semibold">Stock</th>
                <th className="pb-3 font-semibold">Total Sold</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-400">{p.id}</td>
                  <td className="py-3.5">
                    <div className="font-semibold text-white">{p.name}</div>
                    <div className="text-[11px] text-zinc-500 font-mono">Rating: {p.rating}</div>
                  </td>
                  <td className="py-3.5 text-zinc-400">{p.category}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{p.price}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{p.stock}</td>
                  <td className="py-3.5 font-mono text-zinc-400">{p.sales}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                        p.status === "In Stock"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : p.status === "Low Stock"
                          ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
                        <Edit className="w-3.5 h-3.5" />
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
    </DashboardLayout>
  );
}
