"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send, Check } from "lucide-react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 bg-mono-dots relative">
      <div className="w-full max-w-md space-y-6 mono-card p-8 sm:p-10 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-3 shadow-xl">
            <Mail className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">Reset Password</h1>
          <p className="text-xs text-zinc-400">
            Enter your account email to receive a password recovery link
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Recovery Link</span>
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <Check className="w-4 h-4 text-white" />
              <span>Recovery Email Dispatched</span>
            </div>
            <p className="text-zinc-400">
              We have sent instructions to <span className="text-white font-mono">{email}</span>.
              Please check your inbox.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-zinc-800 text-center">
          <Link
            href="/signin"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
