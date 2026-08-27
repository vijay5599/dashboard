"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, MapPin, X } from "lucide-react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("October 2026");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("2026-10-24");

  const [events, setEvents] = useState([
    { id: 1, title: "Product Launch Strategy", date: 14, time: "10:00 AM", type: "Keynote" },
    { id: 2, title: "Design Sprint Review", date: 19, time: "02:30 PM", type: "Internal" },
    { id: 3, title: "Series A Investor Call", date: 24, time: "11:00 AM", type: "Board" },
    { id: 4, title: "Security Audit Presentation", date: 28, time: "04:00 PM", type: "Security" },
  ]);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle) return;
    setEvents([
      ...events,
      {
        id: Date.now(),
        title: newEventTitle,
        date: parseInt(newEventDate.split("-")[2]) || 24,
        time: "09:00 AM",
        type: "General",
      },
    ]);
    setNewEventTitle("");
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Calendar & Events" category="Menu" categoryHref="/calendar" />

      <div className="space-y-6">
        {/* Calendar Header */}
        <div className="mono-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">{currentMonth}</h2>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="mono-card p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2 pb-3 mb-2 border-b border-zinc-800 text-center text-xs font-bold text-zinc-400 uppercase">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {daysInMonth.map((day) => {
                const dayEvents = events.filter((e) => e.date === day);
                const isToday = day === 24;

                return (
                  <div
                    key={day}
                    className={`min-h-[100px] p-2 rounded-xl border transition-all flex flex-col justify-between ${
                      isToday
                        ? "bg-zinc-900/90 border-white"
                        : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isToday ? "text-white" : "text-zinc-400"
                        }`}
                      >
                        {day}
                      </span>
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </div>

                    <div className="space-y-1 my-1">
                      {dayEvents.map((ev) => (
                        <div
                          key={ev.id}
                          className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] font-medium text-white truncate cursor-pointer hover:bg-zinc-700 transition-colors"
                        >
                          {ev.title}
                        </div>
                      ))}
                    </div>

                    <div className="text-[10px] text-zinc-600 font-mono">
                      {dayEvents.length > 0 ? `${dayEvents.length} event` : ""}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="mono-card p-6 w-full max-w-md bg-[#09090b] border-zinc-700 relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
              <h3 className="text-sm font-bold text-white">Create Calendar Event</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Quarterly Board Review"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Date</label>
                <input
                  type="date"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
