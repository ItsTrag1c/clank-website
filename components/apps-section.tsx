"use client";

import { Monitor, Terminal, Wrench, ExternalLink, Download, Bot, FileCode, Brain, ShieldCheck, Send, Sparkles } from "lucide-react";
import { APP_DATA, VERSIONS, getDownloadUrl, type AppKey } from "@/lib/versions";

const icons: Record<string, typeof Monitor> = {
  cli: Wrench,
  desktop: Monitor,
};

export function AppsSection() {
  return (
    <section className="py-20 px-6" id="apps">
      <div className="max-w-5xl mx-auto">
        {/* CLI — Spotlight */}
        <h2 className="text-2xl font-bold mb-2">The Flagship</h2>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          An agentic coding assistant that runs on your machine.
        </p>

        <CLISpotlight />

        {/* Desktop — Companion tool */}
        <h3 className="text-lg font-semibold mt-16 mb-2">Companion Tools</h3>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Same ecosystem, same providers. Pick what fits the moment.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {(["desktop"] as AppKey[]).map((key) => (
            <AppCard key={key} appKey={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CLISpotlight() {
  const app = APP_DATA.cli;
  const version = VERSIONS.cli;

  const highlights = [
    { icon: Bot, label: "ReAct Agent", desc: "Iterative reason-and-act loop with streaming tool calls" },
    { icon: Sparkles, label: "Self-Learning", desc: "Learns your preferences and patterns across sessions" },
    { icon: Send, label: "Telegram Bot", desc: "Chat with the agent from your phone via Telegram" },
    { icon: FileCode, label: "14 Built-in Tools", desc: "File I/O, bash, git, search, web fetch, and more" },
    { icon: Brain, label: "Project Memory", desc: "Persistent memory across sessions, per-project context" },
    { icon: ShieldCheck, label: "3-Tier Safety", desc: "Tools classified Low, Medium, or High risk" },
  ];

  return (
    <div className="rounded-xl border border-[var(--accent)]/30 bg-gradient-to-b from-[rgba(249,115,22,0.04)] to-[var(--surface)] overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.25)] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text)]">{app.name}</h3>
              <p className="text-sm text-[var(--accent)]">{app.tagline}</p>
            </div>
          </div>
          <span className="text-xs text-[var(--text-dim)] font-mono mt-1">v{version}</span>
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-2xl">
          {app.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                <Icon className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-[var(--text)]">{h.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          <a
            href={getDownloadUrl("cli")}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CLI
          </a>
          <a
            href={`https://github.com/${app.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function AppCard({ appKey }: { appKey: AppKey }) {
  const app = APP_DATA[appKey];
  const version = VERSIONS[appKey];
  const Icon = icons[appKey];

  return (
    <div className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors">
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <span className="text-xs text-[var(--text-dim)] font-mono">v{version}</span>
        </div>

        <h3 className="font-semibold text-[var(--text)] mb-1">{app.name}</h3>
        <p className="text-sm text-[var(--accent)] mb-3">{app.tagline}</p>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{app.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 text-xs rounded-md bg-[var(--surface-2)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={getDownloadUrl(appKey)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
          <a
            href={`https://github.com/${app.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2 text-xs rounded-md border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
