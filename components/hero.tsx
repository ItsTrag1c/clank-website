"use client";

import Image from "next/image";
import { Download, Github, Wrench } from "lucide-react";
import { VERSIONS, getDownloadUrl } from "@/lib/versions";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/llama.png"
            alt="Clank"
            width={80}
            height={80}
            className="rounded-2xl"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
          AI Tools,{" "}
          <span className="text-[var(--accent)]">Your Data, Your Rules</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          Built for local models. Zero telemetry. Full encryption. An agentic
          coding assistant and companion tools that put you in control — with
          optional cloud API support if you need it.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getDownloadUrl("cli")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Clank CLI
          </a>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Explore the Suite
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-[var(--text-dim)]">
          <span>Local-first</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>Zero telemetry</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>8 providers</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span>MIT licensed</span>
        </div>
      </div>
    </section>
  );
}
