"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Globe, MapPin, Server, Shield } from "lucide-react";

export default function MapsPage() {
  const globalNodes = [
    { city: "San Francisco", country: "United States", lat: "37.7749 N", lng: "122.4194 W", status: "Operational", ping: "8ms", traffic: "42%" },
    { city: "Frankfurt", country: "Germany", lat: "50.1109 N", lng: "8.6821 E", status: "Operational", ping: "14ms", traffic: "28%" },
    { city: "Tokyo", country: "Japan", lat: "35.6762 N", lng: "139.6503 E", status: "Operational", ping: "22ms", traffic: "18%" },
    { city: "Singapore", country: "Singapore", lat: "1.3521 N", lng: "103.8198 E", status: "Operational", ping: "19ms", traffic: "12%" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Global Infrastructure Maps" category="Maps" categoryHref="/maps" />

      <div className="space-y-6">
        {/* World Grid Display Card */}
        <div className="mono-card p-6 bg-[#09090b] border-zinc-700">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-base font-bold text-white">Global Edge Node Topology</h2>
              <p className="text-xs text-zinc-400">CDN points of presence and low-latency gateway routing</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono text-zinc-300">4 Global Regions Active</span>
            </div>
          </div>

          {/* Stylized Monochrome SVG World Map */}
          <div className="h-72 w-full rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center relative overflow-hidden bg-mono-dots">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <Globe className="w-64 h-64 text-zinc-600" />
            </div>

            {/* Glowing Map Node Pins */}
            <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-black animate-ping" />
              <span className="text-[10px] font-mono text-white mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-zinc-800">
                US-West (SF)
              </span>
            </div>

            <div className="absolute top-1/4 left-1/2 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-black animate-ping" />
              <span className="text-[10px] font-mono text-white mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-zinc-800">
                EU-Central (FRA)
              </span>
            </div>

            <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-black animate-ping" />
              <span className="text-[10px] font-mono text-white mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-zinc-800">
                AP-East (TYO)
              </span>
            </div>
          </div>
        </div>

        {/* Nodes Status Table */}
        <div className="mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Active Edge Points</h2>
          <p className="text-xs text-zinc-400 mb-4">Real-time health and latency telemetry</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="pb-3 font-semibold">City / Location</th>
                  <th className="pb-3 font-semibold">Country</th>
                  <th className="pb-3 font-semibold">Coordinates</th>
                  <th className="pb-3 font-semibold">RTT Latency</th>
                  <th className="pb-3 font-semibold">Traffic Share</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono">
                {globalNodes.map((n) => (
                  <tr key={n.city} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-white flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{n.city}</span>
                    </td>
                    <td className="py-3.5 font-sans text-zinc-400">{n.country}</td>
                    <td className="py-3.5 text-zinc-400">{n.lat}, {n.lng}</td>
                    <td className="py-3.5 font-bold text-white">{n.ping}</td>
                    <td className="py-3.5 text-zinc-300">{n.traffic}</td>
                    <td className="py-3.5 font-sans">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-white border border-zinc-600">
                        {n.status}
                      </span>
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
