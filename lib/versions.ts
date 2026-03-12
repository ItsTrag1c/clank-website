export const VERSIONS = {
  cli: "2.5.18",
  desktop: "2.4.15",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  cli: {
    name: "Clank CLI",
    tagline: "Agentic coding from the terminal",
    description: "A ReAct-style coding agent with 14 tools, self-learning memory, 4 modes (Build, Plan, Q&A, Manage), and Telegram integration. Reads, writes, and executes — so you can focus on the problem, not the plumbing.",
    color: "build",
    github: "ItsTrag1c/Clank-Build",
    features: ["4 Modes", "14 Tools", "ReAct Agent", "Telegram Bot", "Self-Learning"],
  },
  desktop: {
    name: "Clank Desktop",
    tagline: "Agentic coding with a desktop GUI",
    description: "The Clank agent wrapped in a desktop interface with agent management, 4 modes, a home dashboard, onboarding, and Telegram settings. All the same tools and capabilities, with a visual experience.",
    color: "build",
    github: "ItsTrag1c/Clank-Build",
    features: ["Agent Management", "4 Modes", "Desktop GUI", "ReAct Agent", "Home Dashboard", "14 Tools"],
  },
} as const;

export function getDownloadUrl(app: AppKey, type: "installer" | "standalone" = "installer", platform: "windows" | "mac" = "windows"): string {
  const version = VERSIONS[app];
  const repo = APP_DATA[app].github;
  // Desktop releases are on the same repo (same release includes CLI + Desktop)
  const releaseTag = `v${app === "desktop" ? VERSIONS.cli : version}`;
  const base = `https://github.com/${repo}/releases/download/${releaseTag}`;

  if (app === "desktop") {
    if (platform === "mac") {
      return `${base}/Clank.Desktop_${version}_aarch64.dmg`;
    }
    return type === "installer"
      ? `${base}/Clank.Desktop_${version}_x64-setup.exe`
      : `${base}/Clank.Desktop_${version}_x64-setup.exe`;
  }

  return type === "installer"
    ? `${base}/Clank_${version}_setup.exe`
    : `${base}/Clank_${version}.exe`;
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
