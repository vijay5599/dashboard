"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  Plus,
  CheckSquare,
  Search,
  Filter,
  Trash2,
  CheckCircle2,
  Clock,
  MoreVertical,
  X,
  Calendar,
  User,
  AlertCircle,
} from "lucide-react";

interface TaskItem {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  priority: "Urgent" | "High" | "Medium" | "Low";
  completed: boolean;
  category?: string;
}

export default function TaskListPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "TSK-101",
      title: "Migrate Postgres database cluster to multi-region RDS",
      assignee: "Musharof C.",
      dueDate: "28 Oct 2026",
      priority: "Urgent",
      completed: false,
      category: "Backend",
    },
    {
      id: "TSK-102",
      title: "Refactor Tailwind design tokens to strict monochrome palette",
      assignee: "Alex Morgan",
      dueDate: "25 Oct 2026",
      priority: "High",
      completed: true,
      category: "Design",
    },
    {
      id: "TSK-103",
      title: "Setup automated KMS key rotation for API endpoints",
      assignee: "Elena Rostova",
      dueDate: "30 Oct 2026",
      priority: "Medium",
      completed: false,
      category: "Security",
    },
    {
      id: "TSK-104",
      title: "Benchmark Recharts tooltip latency under 10k data points",
      assignee: "Karim B.",
      dueDate: "02 Nov 2026",
      priority: "Low",
      completed: false,
      category: "Frontend",
    },
  ]);

  // Quick add input
  const [quickTitle, setQuickTitle] = useState("");

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "completed">("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalAssignee, setModalAssignee] = useState("Musharof C.");
  const [modalPriority, setModalPriority] = useState<"Urgent" | "High" | "Medium" | "Low">("High");
  const [modalDueDate, setModalDueDate] = useState("Tomorrow");
  const [modalCategory, setModalCategory] = useState("Engineering");

  // Toggle Complete
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete Task
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Quick Add submit
  const handleQuickAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickTitle.trim()) return;

    const newTask: TaskItem = {
      id: `TSK-${Date.now().toString().slice(-4)}`,
      title: quickTitle.trim(),
      assignee: "Musharof C.",
      dueDate: "Today",
      priority: "Medium",
      completed: false,
      category: "General",
    };

    setTasks((prev) => [newTask, ...prev]);
    setQuickTitle("");
  };

  // Modal Add submit
  const handleModalAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalTitle.trim()) return;

    const newTask: TaskItem = {
      id: `TSK-${Date.now().toString().slice(-4)}`,
      title: modalTitle.trim(),
      assignee: modalAssignee,
      dueDate: modalDueDate,
      priority: modalPriority,
      completed: false,
      category: modalCategory,
    };

    setTasks((prev) => [newTask, ...prev]);
    setModalTitle("");
    setIsModalOpen(false);
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesStatus;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Task List Management" category="Tasks" categoryHref="/task-list" />

      <div className="space-y-6 max-w-5xl">
        {/* Header Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold">Engineering Sprint Tasks</h2>
            <p className="text-xs opacity-70">
              {completedCount} of {tasks.length} tasks completed ({tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0}%)
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Task</span>
          </button>
        </div>

        {/* Quick Add Bar */}
        <form onSubmit={handleQuickAdd} className="mono-card p-3 sm:p-4 flex gap-2 sm:gap-3">
          <input
            type="text"
            placeholder="Quick add: Type task specification and press Enter or click Add..."
            value={quickTitle}
            onChange={(e) => setQuickTitle(e.target.value)}
            className="flex-1 rounded-lg px-4 py-2 text-xs border focus:outline-none"
            style={{
              backgroundColor: "var(--bg-card-subtle, #18181b)",
              borderColor: "var(--border-color, #27272a)",
              color: "var(--text-primary, #ffffff)",
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Task</span>
          </button>
        </form>

        {/* Filter & Search Bar */}
        <div className="mono-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
            <input
              type="text"
              placeholder="Search by title, assignee, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border focus:outline-none"
              style={{
                backgroundColor: "var(--bg-card-subtle, #18181b)",
                borderColor: "var(--border-color, #27272a)",
                color: "var(--text-primary, #ffffff)",
              }}
            />
          </div>

          {/* Status Tabs */}
          <div className="inline-flex rounded-lg border p-1" style={{ borderColor: "var(--border-color, #27272a)" }}>
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                statusFilter === "all"
                  ? "bg-white text-black font-bold"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              All ({tasks.length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("pending")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                statusFilter === "pending"
                  ? "bg-white text-black font-bold"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              Pending ({tasks.length - completedCount})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("completed")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                statusFilter === "completed"
                  ? "bg-white text-black font-bold"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              Completed ({completedCount})
            </button>
          </div>
        </div>

        {/* Task List Table / Container */}
        <div className="mono-card p-5">
          <div className="divide-y" style={{ borderColor: "var(--border-color, #27272a)" }}>
            {filteredTasks.length === 0 ? (
              <div className="py-12 text-center">
                <AlertCircle className="w-8 h-8 opacity-40 mx-auto mb-2" />
                <p className="text-xs font-semibold">No tasks found matching your criteria</p>
                <p className="text-[11px] opacity-60 mt-0.5">Try adjusting your search query or create a new task</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="py-3.5 px-2 flex items-center justify-between gap-4 rounded-lg transition-colors hover:opacity-90 group"
                  style={{
                    backgroundColor: task.completed ? "transparent" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 accent-white cursor-pointer shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs block font-medium truncate ${
                            task.completed ? "line-through opacity-50" : "font-semibold"
                          }`}
                        >
                          {task.title}
                        </span>
                        {task.category && (
                          <span className="hidden sm:inline-block text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border opacity-70">
                            {task.category}
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] opacity-60 font-mono block mt-0.5">
                        {task.id} · Assignee: {task.assignee}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                        task.priority === "Urgent"
                          ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
                          : task.priority === "High"
                          ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                          : task.priority === "Medium"
                          ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                          : "opacity-60 border-zinc-700"
                      }`}
                    >
                      {task.priority}
                    </span>

                    <span className="text-xs opacity-70 font-mono hidden sm:inline">
                      {task.dueDate}
                    </span>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 rounded opacity-0 group-hover:opacity-100 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                      title="Delete task"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal for Creating New Detailed Task */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className="mono-card p-6 w-full max-w-md border shadow-2xl relative animate-in fade-in-50 zoom-in-95"
            style={{
              backgroundColor: "var(--bg-card, #09090b)",
              borderColor: "var(--border-color, #27272a)",
            }}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b" style={{ borderColor: "var(--border-color, #27272a)" }}>
              <h3 className="text-sm font-bold">Create New Task Specification</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleModalAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Implement OAuth PKCE flow on gateway"
                  value={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border focus:outline-none"
                  style={{
                    backgroundColor: "var(--bg-card-subtle, #18181b)",
                    borderColor: "var(--border-color, #27272a)",
                    color: "var(--text-primary, #ffffff)",
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Assignee
                  </label>
                  <select
                    value={modalAssignee}
                    onChange={(e) => setModalAssignee(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-card-subtle, #18181b)",
                      borderColor: "var(--border-color, #27272a)",
                      color: "var(--text-primary, #ffffff)",
                    }}
                  >
                    <option value="Musharof C.">Musharof C.</option>
                    <option value="Alex Morgan">Alex Morgan</option>
                    <option value="Elena Rostova">Elena Rostova</option>
                    <option value="Jessica Alba">Jessica Alba</option>
                    <option value="Karim B.">Karim B.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Priority
                  </label>
                  <select
                    value={modalPriority}
                    onChange={(e) =>
                      setModalPriority(e.target.value as "Urgent" | "High" | "Medium" | "Low")
                    }
                    className="w-full px-3 py-2 text-xs rounded-lg border focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-card-subtle, #18181b)",
                      borderColor: "var(--border-color, #27272a)",
                      color: "var(--text-primary, #ffffff)",
                    }}
                  >
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={modalCategory}
                    onChange={(e) => setModalCategory(e.target.value)}
                    placeholder="e.g. Backend, Security"
                    className="w-full px-3 py-2 text-xs rounded-lg border focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-card-subtle, #18181b)",
                      borderColor: "var(--border-color, #27272a)",
                      color: "var(--text-primary, #ffffff)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={modalDueDate}
                    onChange={(e) => setModalDueDate(e.target.value)}
                    placeholder="e.g. 30 Oct 2026"
                    className="w-full px-3 py-2 text-xs rounded-lg border focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-card-subtle, #18181b)",
                      borderColor: "var(--border-color, #27272a)",
                      color: "var(--text-primary, #ffffff)",
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t" style={{ borderColor: "var(--border-color, #27272a)" }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--bg-card-subtle, #18181b)",
                    borderColor: "var(--border-color, #27272a)",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
