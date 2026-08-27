"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Code, Copy, Check, Sparkles, Play, Terminal } from "lucide-react";

export default function CodeGeneratorPage() {
  const [lang, setLang] = useState("typescript");
  const [prompt, setPrompt] = useState("Write a high-performance LRU Cache in TypeScript with O(1) get and put operations.");
  const [copied, setCopied] = useState(false);

  const sampleCode = `class Node<K, V> {
  key: K;
  value: V;
  prev: Node<K, V> | null = null;
  next: Node<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, Node<K, V>>;
  private head: Node<K, V>;
  private tail: Node<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    // Dummy sentinel head and tail
    this.head = new Node<K, V>(null as any, null as any);
    this.tail = new Node<K, V>(null as any, null as any);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: K): V | null {
    if (!this.cache.has(key)) return null;
    const node = this.cache.get(key)!;
    this.moveToHead(node);
    return node.value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
      return;
    }

    if (this.cache.size >= this.capacity) {
      const lru = this.tail.prev!;
      this.removeNode(lru);
      this.cache.delete(lru.key);
    }

    const newNode = new Node(key, value);
    this.addNode(newNode);
    this.cache.set(key, newNode);
  }

  private addNode(node: Node<K, V>): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: Node<K, V>): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private moveToHead(node: Node<K, V>): void {
    this.removeNode(node);
    this.addNode(node);
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout>
      <Breadcrumb pageTitle="AI Code Generator" category="AI Assistant" categoryHref="/ai" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="mono-card p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
            <Terminal className="w-4 h-4 text-white" />
            <h2 className="text-base font-bold text-white">Prompt & Config</h2>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Target Language</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-white"
            >
              <option value="typescript">TypeScript / JavaScript</option>
              <option value="python">Python 3.12</option>
              <option value="rust">Rust</option>
              <option value="go">Golang</option>
              <option value="sql">PostgreSQL / SQL</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Specification</label>
            <textarea
              rows={6}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 text-xs focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="button"
            className="w-full py-2.5 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Code Implementation</span>
          </button>
        </div>

        {/* Right Code Block */}
        <div className="lg:col-span-2 mono-card p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-zinc-300" />
                <span className="text-xs font-bold text-white uppercase font-mono">{lang}.ts</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Code"}</span>
              </button>
            </div>

            <pre className="p-4 bg-zinc-950 rounded-xl border border-zinc-800/80 text-xs font-mono text-zinc-200 overflow-x-auto max-h-[500px]">
              <code>{sampleCode}</code>
            </pre>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
            <span>Syntax: Clean TypeScript · No External Dependencies</span>
            <span>Complexity: O(1) Time, O(N) Space</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
