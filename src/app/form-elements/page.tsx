"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { UploadCloud, Check, Eye, EyeOff, Sliders, ToggleLeft } from "lucide-react";

export default function FormElementsPage() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [sliderVal, setSliderVal] = useState(65);

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Form Elements" category="Forms" categoryHref="/form-elements" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text Inputs & Selects */}
        <div className="mono-card p-5 space-y-4">
          <h2 className="text-base font-bold text-white mb-2">Standard Inputs & Selects</h2>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Text Input</label>
            <input
              type="text"
              placeholder="Enter standard text..."
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Password Input (Toggle)
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                defaultValue="SecretPassword123!"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-3 pr-9 py-2 text-xs focus:outline-none focus:border-white"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Select Dropdown</label>
            <select className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white">
              <option>Standard Tier ($49/mo)</option>
              <option>Professional Tier ($199/mo)</option>
              <option>Enterprise Custom SLA</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Disabled State Input
            </label>
            <input
              type="text"
              disabled
              value="System Generated (Read-Only)"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-500 rounded-lg px-3 py-2 text-xs cursor-not-allowed"
            />
          </div>
        </div>

        {/* Toggles, Checkboxes & Radios */}
        <div className="mono-card p-5 space-y-5">
          <h2 className="text-base font-bold text-white mb-2">Switches, Checkboxes & Range</h2>

          {/* Toggle Switches */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-white block">Email Notifications</span>
                <span className="text-[11px] text-zinc-400">Receive weekly digests</span>
              </div>
              <input
                type="checkbox"
                checked={toggle1}
                onChange={(e) => setToggle1(e.target.checked)}
                className="w-4 h-4 accent-white cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-white block">2FA Enforcement</span>
                <span className="text-[11px] text-zinc-400">Require hardware token</span>
              </div>
              <input
                type="checkbox"
                checked={toggle2}
                onChange={(e) => setToggle2(e.target.checked)}
                className="w-4 h-4 accent-white cursor-pointer"
              />
            </div>
          </div>

          {/* Range Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1">
              <span>CPU Allocation Limit</span>
              <span className="font-mono text-zinc-400">{sliderVal}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(parseInt(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-2">
              Deployment Region
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                <input type="radio" name="region" defaultChecked className="accent-white" />
                <span>us-east-1 (N. Virginia)</span>
              </label>
              <label className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                <input type="radio" name="region" className="accent-white" />
                <span>eu-west-1 (Frankfurt)</span>
              </label>
              <label className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                <input type="radio" name="region" className="accent-white" />
                <span>ap-northeast-1 (Tokyo)</span>
              </label>
            </div>
          </div>
        </div>

        {/* File Dropzone */}
        <div className="lg:col-span-2 mono-card p-5">
          <h2 className="text-base font-bold text-white mb-2">Drag & Dropzone Uploader</h2>
          <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-zinc-500 transition-colors cursor-pointer bg-zinc-950/60">
            <UploadCloud className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-white">
              Drop files here or click to browse from system
            </p>
            <p className="text-[11px] text-zinc-500 mt-1">Accepts CSV, JSON, PDF up to 50MB</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
