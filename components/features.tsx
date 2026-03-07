"use client";

import { motion } from "framer-motion";
import {
  Server,
  Zap,
  Shield,
  Lock,
  Cpu,
  GitBranch,
  Terminal,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Server,
    title: "Multi-Server",
    description: "Connect to multiple local endpoints simultaneously. Aggregate models from different sources.",
  },
  {
    icon: Zap,
    title: "Streaming",
    description: "Token-by-token responses with live TK/S counter. Watch AI think in real-time.",
  },
  {
    icon: Shield,
    title: "Zero Telemetry",
    description: "Your data never leaves your machine. No analytics, no tracking, no cloud dependency.",
  },
  {
    icon: Lock,
    title: "PIN + Encryption",
    description: "PBKDF2 key derivation with AES-256-GCM encryption for all local configuration.",
  },
  {
    icon: Cpu,
    title: "8 Providers",
    description: "Ollama, llama.cpp, LM Studio, vLLM, Anthropic Claude, Google Gemini, OpenAI, and more.",
  },
  {
    icon: GitBranch,
    title: "Git Aware",
    description: "Native git operations with safety checks. The Build agent understands your repo.",
  },
  {
    icon: Terminal,
    title: "Tool Calling",
    description: "14 built-in tools: file I/O, bash, search, install, web fetch, and more.",
  },
  {
    icon: Code,
    title: "MIT Licensed",
    description: "Fully open source. Use, modify, and distribute freely. No restrictions.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-neutral-950/50" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Built for Privacy & Power</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Every feature designed with security and performance in mind. Your AI, your data, your control.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      className={cn(
        "group p-5 rounded-xl border border-neutral-800 bg-neutral-900/50",
        "hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-700 transition-colors">
        <Icon className="w-5 h-5 text-neutral-300" />
      </div>
      <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}
