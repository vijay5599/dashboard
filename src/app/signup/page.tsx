"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, ArrowRight, ShieldCheck } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/two-step-verification");
  };

  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 bg-mono-dots relative">
      <div className="w-full max-w-md space-y-6 mono-card p-8 sm:p-10 border-zinc-700 bg-zinc-950/80 shadow-2xl">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white text-black font-extrabold text-xl flex items-center justify-center mx-auto mb-3 shadow-xl">
            TA
          </div>
          <h1 className="text-2xl font-extrabold text-white">Create an Account</h1>
          <p className="text-xs text-zinc-400">Join the TailAdmin Monochrome developer ecosystem</p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Choose Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="password"
                required
                placeholder="Minimum 8 characters..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-white placeholder-zinc-500"
              />
            </div>
          </div>

          <div className="py-1">
            <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer">
              <input type="checkbox" required className="accent-white cursor-pointer" />
              <span>
                I agree to the{" "}
                <span className="text-white hover:underline">Terms of Service</span> and{" "}
                <span className="text-white hover:underline">Privacy Policy</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-zinc-800 text-center text-xs text-zinc-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-white font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
