"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  MetricCard,
  MonoBarChart,
  MonoAreaChart,
  MonoDonutChart,
} from "@/components/charts/MonochromeCharts";
import { Truck, Package, Clock, CheckCircle, MapPin, AlertTriangle } from "lucide-react";

export default function LogisticsDashboard() {
  const deliveryVolumes = [
    { name: "06:00", Dispatched: 120, Delivered: 85 },
    { name: "09:00", Dispatched: 280, Delivered: 190 },
    { name: "12:00", Dispatched: 410, Delivered: 340 },
    { name: "15:00", Dispatched: 380, Delivered: 395 },
    { name: "18:00", Dispatched: 220, Delivered: 310 },
    { name: "21:00", Dispatched: 95, Delivered: 160 },
  ];

  const fleetStatus = [
    { name: "On Route", value: 65 },
    { name: "Loading / Terminal", value: 20 },
    { name: "Maintenance", value: 10 },
    { name: "Idle", value: 5 },
  ];

  const activeShipments = [
    { id: "TRK-98421", origin: "Seattle Hub", dest: "San Francisco CA", carrier: "FreightLine Express", eta: "2h 45m", status: "In Transit" },
    { id: "TRK-98420", origin: "Chicago IL", dest: "New York NY", carrier: "Apex Cargo", eta: "5h 10m", status: "In Transit" },
    { id: "TRK-98419", origin: "Austin TX", dest: "Denver CO", carrier: "Swift Logistic", eta: "Delivered", status: "Delivered" },
    { id: "TRK-98418", origin: "Boston MA", dest: "Philadelphia PA", carrier: "FreightLine Express", eta: "Delayed (Weather)", status: "Delayed" },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Logistics Dashboard" category="Menu" categoryHref="/" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Active Deliveries"
          value="1,492"
          change="8.1%"
          isPositive={true}
          subtitle="98.4% on-time rate"
          icon={<Truck className="w-4 h-4" />}
        />
        <MetricCard
          title="Packages in Hub"
          value="8,740"
          change="2.4%"
          isPositive={true}
          subtitle="Processing turnaround: 42m"
          icon={<Package className="w-4 h-4" />}
        />
        <MetricCard
          title="Fleet Utilization"
          value="91.2%"
          change="5.0%"
          isPositive={true}
          subtitle="142 active vehicles"
          icon={<Clock className="w-4 h-4" />}
        />
        <MetricCard
          title="Delivery Incidents"
          value="3"
          change="Low"
          isPositive={true}
          subtitle="0 severe delays"
          icon={<AlertTriangle className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-1">Fulfillment Throughput by Hour</h2>
          <p className="text-xs text-zinc-400 mb-4">Packages dispatched vs successfully delivered</p>
          <MonoBarChart
            data={deliveryVolumes}
            categories={["Dispatched", "Delivered"]}
            height={300}
          />
        </div>

        <div className="mono-card p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Fleet Operational Status</h2>
            <p className="text-xs text-zinc-400 mb-4">Vehicle availability</p>
            <MonoDonutChart data={fleetStatus} height={200} />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800 text-xs">
            {fleetStatus.map((s) => (
              <div key={s.name} className="flex justify-between">
                <span className="text-zinc-400 truncate">{s.name}</span>
                <span className="font-mono font-bold text-white">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mono-card p-5">
        <h2 className="text-base font-bold text-white mb-1">Live Shipment Tracker</h2>
        <p className="text-xs text-zinc-400 mb-4">Real-time GPS dispatch monitor</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="pb-3 font-semibold">Tracking #</th>
                <th className="pb-3 font-semibold">Origin Hub</th>
                <th className="pb-3 font-semibold">Destination</th>
                <th className="pb-3 font-semibold">Carrier</th>
                <th className="pb-3 font-semibold">Estimated Arrival</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {activeShipments.map((trk) => (
                <tr key={trk.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 font-mono text-zinc-200 font-semibold">{trk.id}</td>
                  <td className="py-3.5 text-zinc-300">{trk.origin}</td>
                  <td className="py-3.5 text-white font-medium">{trk.dest}</td>
                  <td className="py-3.5 text-zinc-400">{trk.carrier}</td>
                  <td className="py-3.5 font-mono text-zinc-300">{trk.eta}</td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                        trk.status === "Delivered"
                          ? "bg-zinc-800 text-white border-zinc-600"
                          : trk.status === "In Transit"
                          ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                          : "bg-zinc-950 text-zinc-500 border-zinc-800"
                      }`}
                    >
                      {trk.status}
                    </span>
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
