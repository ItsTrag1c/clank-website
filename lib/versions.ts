export const VERSIONS = {
  chat: "0.16.0",
  cli: "0.9.12",
  build: "0.9.19",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  chat: {
    name: "LlamaTalk Chat",
    tagline: "Beautiful desktop chat interface",
    description: "Frameless window, floating assistant, system tray integration. Built with React 19 + Vite 7 + Tauri 2.",
    color: "chat",
    github: "ItsTrag1c/LlamaTalk-Desktop",
    features: ["Frameless UI", "Floating Assistant", "System Tray", "Multi-provider"],
  },
  cli: {
    name: "LlamaTalk CLI",
    tagline: "Chat from your terminal",
    description: "Interactive REPL plus one-shot mode. Perfect for quick questions without leaving the command line.",
    color: "cli",
    github: "ItsTrag1c/LlamaTalk-CLI",
    features: ["REPL Mode", "One-shot Mode", "Streaming Output", "8 Providers"],
  },
  build: {
    name: "LlamaTalk Build",
    tagline: "AI agent that codes alongside you",
    description: "ReAct-style AI with 14 built-in tools, project memory, and file generation.",
    color: "build",
    github: "ItsTrag1c/LlamaTalk-Build",
    features: ["14 Tools", "ReAct Agent", "Project Memory", "File Generation"],
  },
} as const;

export function getDownloadUrl(app: AppKey, type: "installer" | "standalone" = "installer"): string {
  const version = VERSIONS[app];
  const base = `https://github.com/${APP_DATA[app].github}/releases/download/v${version}`;
  
  if (app === "chat") {
    return type === "installer" 
      ? `${base}/LlamaTalk_${version}_x64-setup.exe`
      : `${base}/LlamaTalk_${version}_x64.exe`;
  }
  
  const name = app === "cli" ? "LlamaTalkCLI" : "LlamaTalkBuild";
  return type === "installer"
    ? `${base}/${name}_${version}_setup.exe`
    : `${base}/${name}_${version}.exe`;
}

export async function fetchLatestVersion(repo: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.tag_name?.replace("v", "");
  } catch {
    return null;
  }
}
