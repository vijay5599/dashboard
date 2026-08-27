"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Send, Paperclip, Search, MoreVertical, Phone, Video, CheckCheck, Smile } from "lucide-react";

export default function ChatPage() {
  const [activeContact, setActiveContact] = useState("Marcus Vance");
  const [messageInput, setMessageInput] = useState("");

  const contacts = [
    { id: 1, name: "Marcus Vance", role: "Frontend Lead", unread: 2, online: true, time: "12m" },
    { id: 2, name: "Elena Rostova", role: "DevOps Engineer", unread: 0, online: true, time: "1h" },
    { id: 3, name: "Jessica Alba", role: "Product Manager", unread: 0, online: false, time: "3h" },
    { id: 4, name: "Karim Benzema", role: "Security Architect", unread: 0, online: false, time: "1d" },
  ];

  const [messages, setMessages] = useState([
    { id: 1, sender: "Marcus Vance", text: "Hey Musharof! Have you verified the new Tailwind v4 monochrome tokens on the dashboard?", time: "10:14 AM", isMe: false },
    { id: 2, sender: "Musharof C.", text: "Yes! All charts and tables are completely converted to strict black, white, and grayscale gradients.", time: "10:16 AM", isMe: true },
    { id: 3, sender: "Marcus Vance", text: "Looks incredible. High contrast and razor sharp clarity. Pushing the PR now.", time: "10:18 AM", isMe: false },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "Musharof C.",
        text: messageInput,
        time: "Just now",
        isMe: true,
      },
    ]);
    setMessageInput("");
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="Messenger & Chat" category="Support" categoryHref="/chat" />

      <div className="mono-card overflow-hidden h-[calc(100vh-210px)] min-h-[500px] flex">
        {/* Contact List Sidebar */}
        <div className="w-80 border-r border-zinc-800 flex flex-col bg-zinc-950/80 shrink-0">
          <div className="p-3.5 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search direct messages..."
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-zinc-900">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact.name)}
                className={`p-3 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                  activeContact === contact.name
                    ? "bg-zinc-900 border-l-2 border-white"
                    : "hover:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 font-bold text-xs text-white flex items-center justify-center shrink-0">
                    {contact.name.charAt(0)}
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-black" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-white truncate">{contact.name}</h4>
                    <p className="text-[11px] text-zinc-500 truncate">{contact.role}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] text-zinc-500 font-mono block">{contact.time}</span>
                  {contact.unread > 0 && (
                    <span className="inline-block mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white text-black font-mono">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Active Thread */}
        <div className="flex-1 flex flex-col justify-between bg-[#050507]">
          {/* Thread Header */}
          <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 font-bold text-xs text-white flex items-center justify-center">
                {activeContact.charAt(0)}
              </div>
              <div>
                <h3 className="text-xs font-bold text-white">{activeContact}</h3>
                <span className="text-[10px] text-zinc-400 font-mono">Active in session</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-zinc-400">
              <button className="p-2 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col max-w-md ${
                  m.isMe ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    m.isMe
                      ? "bg-white text-black font-medium rounded-br-none"
                      : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-none"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-zinc-500 mt-1 font-mono">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Message Composer Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-zinc-800 bg-zinc-950/60 flex items-center gap-2"
          >
            <button
              type="button"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder={`Message ${activeContact}...`}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />
            <button
              type="submit"
              className="p-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
