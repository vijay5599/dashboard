"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Plus, MoreHorizontal, User, Clock, AlertCircle, X, Trash2, GripVertical } from "lucide-react";

interface KanbanCard {
  id: string;
  title: string;
  priority: "Urgent" | "High" | "Medium" | "Low";
  tag: string;
  user: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

export default function TaskKanbanPage() {
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: "todo",
      title: "To Do",
      cards: [
        { id: "C-1", title: "API Gateway rate limiting rule setup", priority: "High", tag: "Backend", user: "MC" },
        { id: "C-2", title: "Write OpenAPI spec for billing v2", priority: "Medium", tag: "Docs", user: "ER" },
      ],
    },
    {
      id: "in_progress",
      title: "In Progress",
      cards: [
        { id: "C-3", title: "Strict monochrome UI overhaul", priority: "Urgent", tag: "Design", user: "MC" },
        { id: "C-4", title: "Websocket connection pooling", priority: "High", tag: "Infra", user: "KB" },
      ],
    },
    {
      id: "review",
      title: "In Review",
      cards: [
        { id: "C-5", title: "Stripe recurring webhook integration", priority: "High", tag: "Finance", user: "AM" },
      ],
    },
    {
      id: "done",
      title: "Done",
      cards: [
        { id: "C-6", title: "Next.js 16 Turbo compiler verification", priority: "Medium", tag: "Release", user: "MC" },
        { id: "C-7", title: "End-to-end security penetration testing", priority: "Urgent", tag: "Security", user: "JA" },
      ],
    },
  ]);

  // Drag & Drop State
  const [draggedCard, setDraggedCard] = useState<{ cardId: string; sourceColId: string } | null>(null);
  const [dragOverColId, setDragOverColId] = useState<string | null>(null);

  // Modal / Add Card State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [targetColId, setTargetColId] = useState<string>("todo");
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardTag, setNewCardTag] = useState("Feature");
  const [newCardPriority, setNewCardPriority] = useState<"Urgent" | "High" | "Medium" | "Low">("High");
  const [newCardUser, setNewCardUser] = useState("MC");

  // Drag Handlers
  const handleDragStart = (e: React.DragEvent, cardId: string, sourceColId: string) => {
    setDraggedCard({ cardId, sourceColId });
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify({ cardId, sourceColId }));
  };

  const handleDragOver = (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverColId !== colId) {
      setDragOverColId(colId);
    }
  };

  const handleDragLeave = (e: React.DragEvent, colId: string) => {
    // Only reset if we left the column itself
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    if (dragOverColId === colId) {
      setDragOverColId(null);
    }
  };

  const handleDrop = (e: React.DragEvent, targetColId: string) => {
    e.preventDefault();
    setDragOverColId(null);

    let cardId = draggedCard?.cardId;
    let sourceColId = draggedCard?.sourceColId;

    if (!cardId || !sourceColId) {
      try {
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        cardId = data.cardId;
        sourceColId = data.sourceColId;
      } catch (err) {
        return;
      }
    }

    if (!cardId || !sourceColId) return;

    // Find the card being moved
    const sourceCol = columns.find((c) => c.id === sourceColId);
    if (!sourceCol) return;

    const movingCard = sourceCol.cards.find((c) => c.id === cardId);
    if (!movingCard) return;

    if (sourceColId === targetColId) {
      setDraggedCard(null);
      return;
    }

    // Update state: remove from source, add to target
    setColumns((prevCols) =>
      prevCols.map((col) => {
        if (col.id === sourceColId) {
          return {
            ...col,
            cards: col.cards.filter((c) => c.id !== cardId),
          };
        }
        if (col.id === targetColId) {
          return {
            ...col,
            cards: [...col.cards, movingCard],
          };
        }
        return col;
      })
    );

    setDraggedCard(null);
  };

  const handleDeleteCard = (cardId: string, colId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === colId
          ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
          : col
      )
    );
  };

  const handleAddCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCardTitle.trim()) return;

    const newCard: KanbanCard = {
      id: `C-${Date.now().toString().slice(-4)}`,
      title: newCardTitle.trim(),
      priority: newCardPriority,
      tag: newCardTag,
      user: newCardUser,
    };

    setColumns((prev) =>
      prev.map((col) =>
        col.id === targetColId ? { ...col, cards: [...col.cards, newCard] } : col
      )
    );

    setNewCardTitle("");
    setIsAddModalOpen(false);
  };

  const openAddModal = (colId: string) => {
    setTargetColId(colId);
    setIsAddModalOpen(true);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Kanban Task Board" category="Tasks" categoryHref="/task-list" />

      {/* Board Controls & Hint */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <span>Engineering Sprint Board</span>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              Drag & Drop Enabled
            </span>
          </h2>
          <p className="text-xs text-zinc-400">
            Drag cards across swimlane columns to update task progress in real time.
          </p>
        </div>

        <button
          onClick={() => openAddModal("todo")}
          className="px-3.5 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Task Card</span>
        </button>
      </div>

      {/* Columns Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {columns.map((col) => {
          const isOver = dragOverColId === col.id;

          return (
            <div
              key={col.id}
              onDragOver={(e) => handleDragOver(e, col.id)}
              onDragLeave={(e) => handleDragLeave(e, col.id)}
              onDrop={(e) => handleDrop(e, col.id)}
              className={`mono-card p-4 bg-[#09090b]/90 flex flex-col gap-3 transition-all min-h-[380px] ${
                isOver
                  ? "border-2 border-white ring-2 ring-white/20 bg-zinc-900/60 shadow-xl"
                  : "border-zinc-800"
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {col.title}
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {col.cards.length}
                  </span>
                </div>
                <button
                  onClick={() => openAddModal(col.id)}
                  className="text-zinc-500 hover:text-white transition-colors"
                  title="Add card to column"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Column Cards Drop Area */}
              <div className="space-y-3 flex-1 flex flex-col">
                {col.cards.map((card) => {
                  const isBeingDragged = draggedCard?.cardId === card.id;

                  return (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card.id, col.id)}
                      onDragEnd={() => {
                        setDraggedCard(null);
                        setDragOverColId(null);
                      }}
                      className={`p-3.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 transition-all cursor-grab active:cursor-grabbing shadow-sm flex flex-col justify-between space-y-3 group select-none ${
                        isBeingDragged ? "opacity-30 scale-95 border-dashed border-zinc-500" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <GripVertical className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-black border border-zinc-800 text-zinc-400">
                              {card.tag}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                                card.priority === "Urgent"
                                  ? "bg-white text-black font-extrabold"
                                  : card.priority === "High"
                                  ? "bg-zinc-800 text-zinc-200 border border-zinc-700"
                                  : "bg-zinc-950 text-zinc-400 border border-zinc-800"
                              }`}
                            >
                              {card.priority}
                            </span>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCard(card.id, col.id);
                              }}
                              className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-white rounded hover:bg-zinc-800 transition-opacity"
                              title="Delete Card"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <h4 className="text-xs font-semibold text-white leading-snug">{card.title}</h4>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-xs">
                        <span className="text-[10px] text-zinc-500 font-mono">{card.id}</span>
                        <div className="w-5 h-5 rounded-full bg-white text-black font-bold text-[9px] flex items-center justify-center">
                          {card.user}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Empty State Drop Target Indicator */}
                {col.cards.length === 0 && (
                  <div
                    className={`flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl text-center transition-colors ${
                      isOver ? "border-white bg-zinc-900/40" : "border-zinc-800/60"
                    }`}
                  >
                    <p className="text-xs text-zinc-500">Drop cards here</p>
                  </div>
                )}
              </div>

              {/* Quick Card Button */}
              <button
                onClick={() => openAddModal(col.id)}
                className="w-full py-2 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-900/40 hover:bg-zinc-900 border border-dashed border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 mt-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Card</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Add Card Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="mono-card p-6 w-full max-w-md bg-[#09090b] border-zinc-700 relative animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
              <h3 className="text-sm font-bold text-white">Create Kanban Task Card</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddCardSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Card Title / Specification *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Implement Webhook retry backoff algorithm"
                  value={newCardTitle}
                  onChange={(e) => setNewCardTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Column Stage
                  </label>
                  <select
                    value={targetColId}
                    onChange={(e) => setTargetColId(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                  >
                    {columns.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Priority</label>
                  <select
                    value={newCardPriority}
                    onChange={(e) =>
                      setNewCardPriority(e.target.value as "Urgent" | "High" | "Medium" | "Low")
                    }
                    className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
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
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={newCardTag}
                    onChange={(e) => setNewCardTag(e.target.value)}
                    placeholder="e.g. Backend, Design"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Assignee Initials
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={newCardUser}
                    onChange={(e) => setNewCardUser(e.target.value.toUpperCase())}
                    placeholder="e.g. MC, AM"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-black bg-white rounded-lg hover:bg-zinc-200"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
