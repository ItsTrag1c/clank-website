"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Monitor, Terminal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APP_DATA, VERSIONS, getDownloadUrl, type AppKey } from "@/lib/versions";
import { cn } from "@/lib/utils";

const icons = {
  chat: Monitor,
  cli: Terminal,
  build: Wrench,
};

const colorClasses = {
  chat: {
    border: "border-indigo-500/30",
    bg: "from-indigo-500/10 to-violet-500/10",
    accent: "bg-indigo-500",
    text: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
  },
  cli: {
    border: "border-emerald-500/30",
    bg: "from-emerald-500/10 to-teal-500/10",
    accent: "bg-emerald-500",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  build: {
    border: "border-amber-500/30",
    bg: "from-amber-500/10 to-orange-500/10",
    accent: "bg-amber-500",
    text: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
  },
};

export function AppsSection() {
  return (
    <section className="py-24 px-6" id="apps">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Three Apps. One Ecosystem.</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Choose the interface that fits your workflow. All apps share the same providers, settings, and zero-telemetry philosophy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {(Object.keys(APP_DATA) as AppKey[]).map((key, index) => (
            <AppCard key={key} appKey={key} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ appKey, index }: { appKey: AppKey; index: number }) {
  const app = APP_DATA[appKey];
  const version = VERSIONS[appKey];
  const colors = colorClasses[appKey];
  const Icon = icons[appKey];

  return (
    <motion.div
      className={cn(
        "group relative rounded-xl border bg-gradient-to-b p-6 transition-all duration-300",
        "hover:shadow-lg hover:shadow-black/50",
        colors.border,
        colors.bg,
        colors.glow
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", colors.accent)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Badge variant="secondary" className="bg-black/30 text-neutral-300">
          v{version}
        </Badge>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
      <p className={cn("text-sm font-medium mb-3", colors.text)}>{app.tagline}</p>
      <p className="text-sm text-neutral-400 mb-6">{app.description}</p>

      <div className="space-y-2 mb-6">
        {app.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
            <div className={cn("w-1.5 h-1.5 rounded-full", colors.accent)} />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          size="sm"
          className={cn("flex-1 text-white", colors.accent, "hover:opacity-90")}
          asChild
        >
          <a href={getDownloadUrl(appKey)}>
            <Download className="w-4 h-4 mr-2" />
            Download
          </a>
        </Button>
        <Button size="sm" variant="outline" className="border-neutral-700 hover:bg-neutral-800" asChild>
          <a href={`https://github.com/${app.github}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
