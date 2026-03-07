"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Laptop, Apple, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APP_DATA, VERSIONS, getDownloadUrl, type AppKey } from "@/lib/versions";
import { cn } from "@/lib/utils";

type Platform = "windows" | "mac" | "linux";

const platformIcons = {
  windows: Laptop,
  mac: Apple,
  linux: Monitor,
};

const platformNames = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
};

export function Downloads() {
  const [platform, setPlatform] = useState<Platform>("windows");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent;
    if (ua.includes("Win")) setPlatform("windows");
    else if (ua.includes("Mac")) setPlatform("mac");
    else setPlatform("linux");
  }, []);

  return (
    <section className="py-24 px-6" id="download">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Download</h2>
          <p className="mt-4 text-neutral-400">
            Detected:{" "}
            <span className="text-white font-medium">{platformNames[platform]}</span>
          </p>

          {/* Platform toggle */}
          <div className="flex justify-center gap-2 mt-4">
            {(Object.keys(platformNames) as Platform[]).map((p) => {
              const Icon = platformIcons[p];
              return (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all",
                    platform === p
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {platformNames[p]}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="space-y-4">
          {(Object.keys(APP_DATA) as AppKey[]).map((key, index) => (
            <DownloadCard
              key={key}
              appKey={key}
              platform={platform}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 text-center text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>All downloads are cryptographically signed. Verify checksums before installing.</p>
          <p className="mt-2">
            <a href="#" className="text-indigo-400 hover:underline">View verification guide</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadCard({
  appKey,
  platform,
  index,
}: {
  appKey: AppKey;
  platform: Platform;
  index: number;
}) {
  const app = APP_DATA[appKey];
  const version = VERSIONS[appKey];
  const isWindows = platform === "windows";

  const colorClasses = {
    chat: "border-indigo-500/30 bg-indigo-500/5",
    cli: "border-emerald-500/30 bg-emerald-500/5",
    build: "border-amber-500/30 bg-amber-500/5",
  };

  return (
    <motion.div
      className={cn(
        "rounded-xl border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
        colorClasses[appKey]
      )}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-semibold text-white">{app.name}</h3>
          <Badge variant="secondary" className="bg-black/30 text-neutral-300 text-xs">
            v{version}
          </Badge>
        </div>
        <p className="text-sm text-neutral-400">{app.tagline}</p>

        {isWindows ? (
          <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
            <code className="bg-black/30 px-2 py-1 rounded font-mono">
              {getDownloadUrl(appKey, "standalone").split("/").pop()}
            </code>
            <span>~35 MB</span>
          </div>
        ) : (
          <p className="mt-2 text-sm text-amber-400/80">
            {platform === "mac" ? "macOS support coming soon" : "Linux: Build from source"}
          </p>
        )}
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        {isWindows ? (
          <>
            <Button
              size="sm"
              className="flex-1 sm:flex-none bg-white text-black hover:bg-neutral-200"
              asChild
            >
              <a href={getDownloadUrl(appKey, "installer")}>
                <Download className="w-4 h-4 mr-2" />
                Installer
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 sm:flex-none border-neutral-700 hover:bg-neutral-800"
              asChild
            >
              <a href={getDownloadUrl(appKey, "standalone")}>
                Standalone
              </a>
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            variant="outline"
            className="flex-1 sm:flex-none border-neutral-700 hover:bg-neutral-800"
            asChild
          >
            <a href={`https://github.com/${app.github}`} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
