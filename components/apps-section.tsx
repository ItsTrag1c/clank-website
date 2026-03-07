"use client";

import { Monitor, Terminal, Wrench, ExternalLink, Download } from "lucide-react";
import { APP_DATA, VERSIONS, getDownloadUrl, type AppKey } from "@/lib/versions";

const icons = {
  chat: Monitor,
  cli: Terminal,
  build: Wrench,
};

export function AppsSection() {
  return (
    <section className="py-20 px-6" id="apps">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">The Suite</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Three interfaces, same ecosystem. Pick what fits your workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {(Object.keys(APP_DATA) as AppKey[]).map((key) => (
            <AppCard key={key} appKey={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ appKey }: { appKey: AppKey }) {
  const app = APP_DATA[appKey];
  const version = VERSIONS[appKey];
  const Icon = icons[appKey];

  return (
    <div className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <span className="text-xs text-[var(--text-dim)] font-mono">v{version}</span>
        </div>

        {/* Content */}
        <h3 className="font-semibold text-[var(--text)] mb-1">{app.name}</h3>
        <p className="text-sm text-[var(--accent)] mb-3">{app.tagline}</p>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{app.description}</p>

        {/* Features */}
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

        {/* Actions */}
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
