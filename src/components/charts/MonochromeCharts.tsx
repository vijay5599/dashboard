"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Monochrome color tokens for multi-series charts
export const MONO_PALETTE = {
  white: "#ffffff",
  zinc200: "#e4e4e7",
  zinc400: "#a1a1aa",
  zinc600: "#52525b",
  zinc800: "#27272a",
  zinc900: "#18181b",
  black: "#09090b",
};

export const MONO_SERIES_COLORS = [
  "#ffffff",
  "#a1a1aa",
  "#52525b",
  "#d4d4d8",
  "#71717a",
  "#e4e4e7",
];

// Reusable Monochrome Metric Card
export function MetricCard({
  title,
  value,
  change,
  isPositive = true,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mono-card p-5 mono-card-hover">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {title}
        </span>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2.5">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono-num">
          {value}
        </span>
        {change && (
          <span
            className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded border ${
              isPositive
                ? "bg-zinc-800 text-white border-zinc-600"
                : "bg-zinc-900 text-zinc-400 border-zinc-800"
            }`}
          >
            {isPositive ? "↑" : "↓"} {change}
          </span>
        )}
      </div>

      {subtitle && <p className="mt-2 text-xs text-zinc-500">{subtitle}</p>}
    </div>
  );
}

// Reusable Area Spline Chart
export function MonoAreaChart({
  data,
  categories,
  index = "name",
  height = 300,
}: {
  data: any[];
  categories: string[];
  index?: string;
  height?: number;
}) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="monoGrad0" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="monoGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#71717a" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#71717a" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis
            dataKey={index}
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#09090b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          {categories.map((cat, idx) => (
            <Area
              key={cat}
              type="monotone"
              dataKey={cat}
              stroke={idx === 0 ? "#ffffff" : "#a1a1aa"}
              strokeWidth={2}
              fillOpacity={1}
              fill={idx === 0 ? "url(#monoGrad0)" : "url(#monoGrad1)"}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// Reusable Bar Chart
export function MonoBarChart({
  data,
  categories,
  index = "name",
  height = 300,
}: {
  data: any[];
  categories: string[];
  index?: string;
  height?: number;
}) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis
            dataKey={index}
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#09090b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          {categories.map((cat, idx) => (
            <Bar
              key={cat}
              dataKey={cat}
              fill={idx === 0 ? "#ffffff" : idx === 1 ? "#71717a" : "#27272a"}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Reusable Line Chart
export function MonoLineChart({
  data,
  categories,
  index = "name",
  height = 300,
}: {
  data: any[];
  categories: string[];
  index?: string;
  height?: number;
}) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis
            dataKey={index}
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#09090b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          {categories.map((cat, idx) => (
            <Line
              key={cat}
              type="monotone"
              dataKey={cat}
              stroke={idx === 0 ? "#ffffff" : idx === 1 ? "#a1a1aa" : "#52525b"}
              strokeWidth={2}
              dot={{ r: 3, fill: idx === 0 ? "#ffffff" : "#71717a", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#ffffff" }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Reusable Donut / Pie Chart
export function MonoDonutChart({
  data,
  height = 260,
  innerRadius = 60,
  outerRadius = 90,
}: {
  data: { name: string; value: number }[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
}) {
  const colors = ["#ffffff", "#a1a1aa", "#71717a", "#3f3f46", "#27272a"];

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={4}
            dataKey="value"
            stroke="#09090b"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#09090b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Reusable Radar Chart
export function MonoRadarChart({
  data,
  dataKey = "value",
  categoryKey = "subject",
  height = 280,
}: {
  data: any[];
  dataKey?: string;
  categoryKey?: string;
  height?: number;
}) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#27272a" />
          <PolarAngleAxis dataKey={categoryKey} stroke="#a1a1aa" fontSize={11} />
          <PolarRadiusAxis stroke="#3f3f46" fontSize={10} />
          <Radar
            name="Score"
            dataKey={dataKey}
            stroke="#ffffff"
            fill="#ffffff"
            fillOpacity={0.25}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#09090b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
