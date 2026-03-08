export const VERSIONS = {
  chat: "0.16.0",
  cli: "0.9.12",
  build: "2.0.0",
  buildDesktop: "0.1.0",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  chat: {
    name: "LlamaTalk Chat",
    tagline: "Desktop GUI for conversations",
    description: "Frameless desktop window with a floating assistant overlay and system tray. For when you want a visual interface alongside Build.",
    color: "chat",
    github: "ItsTrag1c/LlamaTalk-Chat",
    features: ["Frameless UI", "Floating Assistant", "System Tray", "Multi-provider"],
  },
  cli: {
    name: "LlamaTalk Chat CLI",
    tagline: "Quick answers from the terminal",
    description: "Lightweight REPL and one-shot mode. Ask a question without leaving your shell — no agent overhead, just fast answers.",
    color: "cli",
    github: "ItsTrag1c/LlamaTalk-Chat",
    features: ["REPL Mode", "One-shot Mode", "Streaming Output", "8 Providers"],
  },
  build: {
    name: "LlamaTalk Build",
    tagline: "Agentic coding from the terminal",
    description: "A ReAct-style coding agent with 14 tools, project memory, plan/build modes, and session history. Reads, writes, and executes — so you can focus on the problem, not the plumbing.",
    color: "build",
    github: "ItsTrag1c/LlamaTalk-Build",
    features: ["14 Tools", "ReAct Agent", "Project Memory", "Plan & Build Modes"],
  },
  buildDesktop: {
    name: "LlamaTalk Build Desktop",
    tagline: "Agentic coding with a desktop GUI",
    description: "The LlamaTalk Build agent wrapped in a desktop interface. All the same tools and capabilities, with a visual experience.",
    color: "build",
    github: "ItsTrag1c/LlamaTalk-Build-Desktop",
    features: ["Desktop GUI", "ReAct Agent", "Project Memory", "14 Tools"],
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

  if (app === "buildDesktop") {
    return type === "installer"
      ? `${base}/LlamaTalk Build Desktop_${version}_x64-setup.exe`
      : `${base}/LlamaTalk Build Desktop_${version}_x64.exe`;
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
