"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, Trash2, ArrowLeft, Check, Send } from "lucide-react";

export default function CreateInvoicePage() {
  const router = useRouter();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dueDate, setDueDate] = useState("2026-11-15");
  const [items, setItems] = useState([
    { desc: "Software Development Retainer", qty: 1, unit: 2500 },
  ]);

  const addItem = () => {
    setItems([...items, { desc: "", qty: 1, unit: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((acc, it) => acc + it.qty * it.unit, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/invoices");
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Create New Invoice" category="Invoices" categoryHref="/invoices" />

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/invoices"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Invoices</span>
          </Link>

          <button
            type="submit"
            className="px-5 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Save & Send Invoice</span>
          </button>
        </div>

        <div className="mono-card p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Client Name / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. OpenAI Inc."
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Client Email *
              </label>
              <input
                type="email"
                required
                placeholder="billing@client.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Currency</label>
              <select className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white">
                <option value="USD">USD ($) United States Dollar</option>
                <option value="EUR">EUR (€) Euro</option>
                <option value="GBP">GBP (£) British Pound</option>
              </select>
            </div>
          </div>

          {/* Dynamic Line Items */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Line Items
              </h3>
              <button
                type="button"
                onClick={addItem}
                className="flex items-center gap-1 text-xs font-semibold text-white hover:text-zinc-300 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-6">
                    <input
                      type="text"
                      placeholder="Item title / description"
                      value={item.desc}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[index].desc = e.target.value;
                        setItems(updated);
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.qty}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[index].qty = parseFloat(e.target.value) || 0;
                        setItems(updated);
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono text-center focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="number"
                      placeholder="Price"
                      value={item.unit}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[index].unit = parseFloat(e.target.value) || 0;
                        setItems(updated);
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono text-right focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="col-span-1 text-right">
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-2 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 flex justify-end">
              <div className="text-right">
                <span className="text-xs text-zinc-400 mr-3">Total Calculated:</span>
                <span className="text-lg font-bold font-mono text-white">
                  ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
