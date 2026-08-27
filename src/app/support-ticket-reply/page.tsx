"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArrowLeft, Send, Paperclip, Shield, CheckCircle2, User, Clock } from "lucide-react";

export default function SupportTicketReplyPage() {
  const [replyText, setReplyText] = useState("");
  const [ticketStatus, setTicketStatus] = useState("In Progress");

  const [thread, setThread] = useState([
    {
      id: 1,
      sender: "DevOps Lead (Vertex Studio)",
      role: "Client",
      time: "24 Oct 2026 at 10:15 AM",
      content:
        "Hello Krypton Team,\n\nWe are encountering an issue when attempting to hook up SAML 2.0 Single Sign-On with Okta. The ACS assertion URL returns a 401 unauthorized loop when verifying XML signatures.\n\nCould you please verify our certificate thumbprint on your backend cluster?",
    },
    {
      id: 2,
      sender: "Musharof Chowdhury",
      role: "Support Architect",
      time: "24 Oct 2026 at 10:38 AM",
      content:
        "Hi there,\n\nWe have reviewed the Okta metadata endpoint on your tenant and confirmed that the SHA-256 fingerprint was matching an older rotation key. We have invalidated the cache and re-synchronized the identity provider certificate.\n\nPlease attempt sign in again and let us know if the assertion passes.",
    },
  ]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setThread([
      ...thread,
      {
        id: Date.now(),
        sender: "Musharof Chowdhury",
        role: "Support Architect",
        time: "Just now",
        content: replyText,
      },
    ]);
    setReplyText("");
  };

  return (
    <DashboardLayout>
      <Breadcrumb
        pageTitle="Ticket #TCK-4819"
        category="Support"
        categoryHref="/support-tickets"
      />

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/support-tickets"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Tickets</span>
          </Link>

          <div className="flex items-center gap-3">
            <select
              value={ticketStatus}
              onChange={(e) => setTicketStatus(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-xs font-semibold text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-white"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Waiting Client">Waiting Client</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Ticket Details Box */}
        <div className="mono-card p-6 border-zinc-700 space-y-6">
          <div className="pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                #TCK-4819
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white text-black font-mono">
                Urgent Priority
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">
              SSO SAML authentication loop with Okta
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Submitted by <span className="text-white font-medium">DevOps at Vertex Studio</span>{" "}
              (devops@vertex.io)
            </p>
          </div>

          {/* Conversation Thread */}
          <div className="space-y-6">
            {thread.map((msg) => (
              <div
                key={msg.id}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 font-bold text-xs text-white flex items-center justify-center">
                      {msg.sender.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white">{msg.sender}</span>
                      <span className="text-[10px] text-zinc-500 font-mono ml-2">
                        {msg.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{msg.time}</span>
                </div>

                <div className="text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <form onSubmit={handleSendReply} className="pt-4 border-t border-zinc-800 space-y-3">
            <label className="block text-xs font-semibold text-zinc-300">
              Compose Response / Solution
            </label>
            <textarea
              rows={5}
              required
              placeholder="Write a message to the customer..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
            />

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Reply</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
