"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Download } from "lucide-react";

export default function DataTablesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<string>("name");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);

  const rawData = [
    { id: 1, name: "Musharof Chowdhury", position: "Lead Architect", office: "San Francisco", age: 34, salary: "$240,000" },
    { id: 2, name: "Marcus Vance", position: "Principal Designer", office: "London", age: 29, salary: "$195,000" },
    { id: 3, name: "Elena Rostova", position: "Security Engineer", office: "Berlin", age: 31, salary: "$180,000" },
    { id: 4, name: "Jessica Alba", position: "Product Manager", office: "New York", age: 33, salary: "$190,000" },
    { id: 5, name: "Karim Benzema", position: "Database Admin", office: "Paris", age: 36, salary: "$175,000" },
    { id: 6, name: "Alex Morgan", position: "DevOps Engineer", office: "Austin", age: 28, salary: "$165,000" },
    { id: 7, name: "Sarah Jenkins", position: "Frontend Engineer", office: "Seattle", age: 27, salary: "$155,000" },
    { id: 8, name: "Guy Hawkins", position: "Solutions Architect", office: "Tokyo", age: 38, salary: "$210,000" },
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filtered = rawData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.office.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Data Tables" category="Tables" categoryHref="/data-tables" />

      <div className="mono-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search table by name, role, office..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
          </div>

          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th
                  onClick={() => handleSort("name")}
                  className="pb-3 font-semibold cursor-pointer hover:text-white"
                >
                  <div className="flex items-center gap-1">
                    <span>Name</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort("position")}
                  className="pb-3 font-semibold cursor-pointer hover:text-white"
                >
                  <div className="flex items-center gap-1">
                    <span>Position</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort("office")}
                  className="pb-3 font-semibold cursor-pointer hover:text-white"
                >
                  <div className="flex items-center gap-1">
                    <span>Office</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th className="pb-3 font-semibold text-center">Age</th>
                <th className="pb-3 font-semibold text-right">Compensation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-semibold text-white">{row.name}</td>
                  <td className="py-3.5 text-zinc-300">{row.position}</td>
                  <td className="py-3.5 text-zinc-400">{row.office}</td>
                  <td className="py-3.5 font-mono text-zinc-400 text-center">{row.age}</td>
                  <td className="py-3.5 font-mono font-bold text-white text-right">
                    {row.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>Showing 1 to {filtered.length} of {rawData.length} entries</span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 rounded bg-zinc-800 text-white font-mono font-semibold">
              1
            </span>
            <button className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
