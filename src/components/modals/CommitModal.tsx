"use client";

import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  PieChart, 
  Lock, 
  Building2, 
  Mail, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/pitchData";

interface CommitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommitModal: React.FC<CommitModalProps> = ({ isOpen, onClose }) => {
  const [ticketAmount, setTicketAmount] = useState<number>(500000);
  const [customInput, setCustomInput] = useState<string>("500,000");
  const [investorName, setInvestorName] = useState<string>("");
  const [entityName, setEntityName] = useState<string>("");
  const [investorEmail, setInvestorEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const round = COMPANY_INFO.roundDetails;
  const postMoney = round.postMoneyValuation;
  const ownershipPercentage = ((ticketAmount / postMoney) * 100).toFixed(2);
  const sharesEstimated = Math.round((ticketAmount / 5.05)); // hypothetical price per share

  const presetAmounts = [
    { label: "$250K", value: 250000 },
    { label: "$500K", value: 500000 },
    { label: "$1.0M", value: 1000000 },
    { label: "$2.0M", value: 2000000 },
  ];

  const handleSelectPreset = (val: number) => {
    setTicketAmount(val);
    setCustomInput(val.toLocaleString());
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const num = parseInt(raw || "0", 10);
    setTicketAmount(num);
    setCustomInput(num.toLocaleString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Fire festive monochrome/golden confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffffff", "#cccccc", "#888888", "#111111"]
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-xl bg-[#0b0b0e] border border-white/20 rounded-2xl shadow-2xl overflow-hidden rim-light">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white text-black font-bold">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                Series A Allocation Simulator & Commit
              </h2>
              <p className="text-xs text-zinc-400">
                {COMPANY_INFO.name} · $8.5M Round ($42M Pre / $50.5M Post)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Ticket Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                Select Ticket Size ($ USD)
              </label>
              
              <div className="grid grid-cols-4 gap-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => handleSelectPreset(preset.value)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all border ${
                      ticketAmount === preset.value
                        ? "bg-white text-black border-white shadow-lg shadow-white/10"
                        : "bg-zinc-900/90 text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative mt-2">
                <span className="absolute left-3 top-2.5 text-zinc-500 font-mono text-sm">$</span>
                <input
                  type="text"
                  value={customInput}
                  onChange={handleCustomChange}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-sm text-white font-mono focus:outline-none focus:border-white/30"
                  placeholder="Custom ticket amount..."
                />
              </div>
            </div>

            {/* Live Calculation Cards */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-500">Ownership</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">
                  {ownershipPercentage}%
                </div>
                <div className="text-[10px] text-zinc-400">Post-Dilution</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-500">Implied PPS</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">
                  $5.05
                </div>
                <div className="text-[10px] text-zinc-400">Per Preferred Share</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-500">Estimated Shares</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">
                  {sharesEstimated.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-400">Series A Preferred</div>
              </div>
            </div>

            {/* Investor Contact Details */}
            <div className="space-y-3 pt-2 border-t border-white/[0.08]">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono uppercase block mb-1">
                    Investor / Partner Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marc Andreessen"
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 font-mono uppercase block mb-1">
                    Fund / Family Office
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. a16z Growth Fund"
                    value={entityName}
                    onChange={(e) => setEntityName(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 font-mono uppercase block mb-1">
                  Partner Email for Diligence Access & Docs
                </label>
                <input
                  type="email"
                  required
                  placeholder="partner@venturefund.com"
                  value={investorEmail}
                  onChange={(e) => setInvestorEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            {/* Security note */}
            <div className="flex items-center gap-2 text-[11px] text-zinc-500">
              <Lock size={12} />
              <span>Soft-circled commitment subject to definitive documentation & KYC.</span>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <span>Submit Ticket Request (${ticketAmount.toLocaleString()})</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <CheckCircle2 size={32} />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white">
                Allocation Request Recorded
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Thank you, <span className="text-white font-medium">{investorName || "Partner"}</span> ({entityName || "Fund"}). Your requested ticket of <span className="text-white font-mono font-bold">${ticketAmount.toLocaleString()}</span> ({ownershipPercentage}% post-money) has been reserved.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] text-xs text-zinc-300 text-left space-y-2 max-w-md mx-auto font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Contact:</span>
                <span>{investorEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Syndicate Lead:</span>
                <span>Horizon Apex Capital</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Next Step:</span>
                <span className="text-emerald-400">DocuSign Subscription Sent</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
