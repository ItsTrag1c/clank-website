export const VERSIONS = {
  chat: "0.16.1",
  cli: "0.9.14",
  build: "2.5.2",
  buildDesktop: "2.4.1",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  chat: {
    name: "Clank Chat",
    tagline: "Desktop GUI for conversations",
    description: "Frameless desktop window with a floating assistant overlay and system tray. Available on Windows and macOS.",
    color: "chat",
    github: "ItsTrag1c/Clank-Chat",
    features: ["Frameless UI", "Floating Assistant", "System Tray", "Windows & macOS"],
  },
  cli: {
    name: "Clank Chat CLI",
    tagline: "Quick answers from the terminal",
    description: "Lightweight REPL and one-shot mode. Ask a question without leaving your shell — no agent overhead, just fast answers.",
    color: "cli",
    github: "ItsTrag1c/Clank-Chat",
    features: ["REPL Mode", "One-shot Mode", "Streaming Output", "8 Providers"],
  },
  build: {
    name: "Clank Build CLI",
    tagline: "Agentic coding from the terminal",
    description: "A ReAct-style coding agent with manager/sub-agent architecture, 14 tools, self-learning memory, 4 modes (Build, Plan, Q&A, Manage), and Telegram integration. Reads, writes, and executes — so you can focus on the problem, not the plumbing.",
    color: "build",
    github: "ItsTrag1c/Clank-Build",
    features: ["Sub-Agents", "4 Modes", "14 Tools", "ReAct Agent", "Telegram Bot", "Self-Learning"],
  },
  buildDesktop: {
    name: "Clank Build Desktop",
    tagline: "Agentic coding with a desktop GUI",
    description: "The Clank Build agent wrapped in a desktop interface with agent management, 4 modes, a home dashboard, onboarding, and Telegram settings. All the same tools and capabilities, with a visual experience.",
    color: "build",
    github: "ItsTrag1c/Clank-Build",
    features: ["Agent Management", "4 Modes", "Desktop GUI", "ReAct Agent", "Home Dashboard", "14 Tools"],
  },
} as const;

export function getDownloadUrl(app: AppKey, type: "installer" | "standalone" = "installer", platform: "windows" | "mac" = "windows"): string {
  const version = VERSIONS[app];
  const repo = APP_DATA[app].github;
  // Build Desktop releases are on the Build repo (same release includes CLI + Desktop)
  const releaseTag = `v${app === "buildDesktop" ? VERSIONS.build : version}`;
  const base = `https://github.com/${repo}/releases/download/${releaseTag}`;

  if (app === "chat") {
    if (platform === "mac") {
      return `${base}/Clank.Chat_${version}_aarch64.dmg`;
    }
    return type === "installer"
      ? `${base}/Clank.Chat_${version}_x64-setup.exe`
      : `${base}/Clank.Chat_${version}_x64-setup.exe`;
  }

  if (app === "buildDesktop") {
    if (platform === "mac") {
      return `${base}/Clank.Build.Desktop_${version}_aarch64.dmg`;
    }
    return type === "installer"
      ? `${base}/Clank.Build.Desktop_${version}_x64-setup.exe`
      : `${base}/Clank.Build.Desktop_${version}_x64-setup.exe`;
  }

  const name = app === "cli" ? "ClankCLI" : "ClankBuild";
  return type === "installer"
    ? `${base}/${name === "ClankCLI" ? "Clank.CLI" : "Clank.Build"}_${version}_setup.exe`
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
