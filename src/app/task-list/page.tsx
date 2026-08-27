"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, CheckSquare, Search, Filter, Trash2, CheckCircle2, Clock, MoreVertical } from "lucide-react";

export default function TaskListPage() {
  const [tasks, setTasks] = useState([
    {
      id: "TSK-101",
      title: "Migrate Postgres database cluster to multi-region RDS",
      assignee: "Musharof C.",
      dueDate: "28 Oct 2026",
      priority: "Urgent",
      completed: false,
    },
    {
      id: "TSK-102",
      title: "Refactor Tailwind design tokens to strict monochrome palette",
      assignee: "Alex Morgan",
      dueDate: "25 Oct 2026",
      priority: "High",
      completed: true,
    },
    {
      id: "TSK-103",
      title: "Setup automated KMS key rotation for API endpoints",
      assignee: "Elena Rostova",
      dueDate: "30 Oct 2026",
      priority: "Medium",
      completed: false,
    },
    {
      id: "TSK-104",
      title: "Benchmark Recharts tooltip latency under 10k data points",
      assignee: "Karim B.",
      dueDate: "02 Nov 2026",
      priority: "Low",
      completed: false,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([
      {
        id: `TSK-${tasks.length + 101}`,
        title: newTaskTitle,
        assignee: "Musharof C.",
        dueDate: "Today",
        priority: "Medium",
        completed: false,
      },
      ...tasks,
    ]);
    setNewTaskTitle("");
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Task List Management" category="Tasks" categoryHref="/task-list" />

      <div className="space-y-6 max-w-5xl">
        {/* Quick Add Bar */}
        <form onSubmit={handleAddTask} className="mono-card p-4 flex gap-3">
          <input
            type="text"
            placeholder="Add a new task specification and press Enter..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </form>

        {/* Task List */}
        <div className="mono-card p-5">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-base font-bold text-white">Active Tasks</h2>
              <p className="text-xs text-zinc-400">
                {tasks.filter((t) => t.completed).length} of {tasks.length} completed
              </p>
            </div>
          </div>

          <div className="divide-y divide-zinc-800/80">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="py-3.5 px-2 flex items-center justify-between gap-4 hover:bg-zinc-900/50 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 accent-white cursor-pointer"
                  />
                  <div className="min-w-0">
                    <span
                      className={`text-xs block font-medium truncate ${
                        task.completed ? "line-through text-zinc-500" : "text-white"
                      }`}
                    >
                      {task.title}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {task.id} · Assignee: {task.assignee}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                      task.priority === "Urgent"
                        ? "bg-zinc-800 text-white border-zinc-600"
                        : task.priority === "High"
                        ? "bg-zinc-900 text-zinc-300 border-zinc-700"
                        : "bg-zinc-950 text-zinc-500 border-zinc-800"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                    {task.dueDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
