export const VERSIONS = {
  cli: "2.6.0",
  desktop: "2.5.0",
  autopilot: "0.2.1",
} as const;

export type AppKey = keyof typeof VERSIONS;

export const APP_DATA = {
  cli: {
    name: "Clank CLI",
    tagline: "Agentic assistant from the terminal",
    description: "A ReAct-style agent with 14 tools, self-learning memory, 3 modes (Build, Plan, Q&A), and Telegram integration. Works with local models and cloud providers — so you can focus on the problem, not the plumbing.",
    color: "build",
    github: "ItsTrag1c/Clank",
    features: ["3 Modes", "14 Tools", "ReAct Agent", "Telegram Bot", "Self-Learning"],
  },
  desktop: {
    name: "Clank Desktop",
    tagline: "Agentic assistant with a desktop GUI",
    description: "The Clank agent wrapped in a desktop interface with 3 modes, a home dashboard, onboarding, and Telegram settings. Local models and cloud providers, same tools — with a visual experience.",
    color: "build",
    github: "ItsTrag1c/Clank",
    features: ["3 Modes", "Desktop GUI", "ReAct Agent", "Home Dashboard", "14 Tools"],
  },
  autopilot: {
    name: "Home Lab Autopilot",
    tagline: "Natural language interface for your homelab",
    description: "AI-powered homelab management. Control Proxmox, TrueNAS, Docker, and Home Assistant with plain English. No more memorizing CLI commands — just ask.",
    color: "build",
    github: "ItsTrag1c/homelab-autopilot",
    features: ["Proxmox VE", "TrueNAS", "Docker", "Home Assistant", "Natural Language"],
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

  if (app === "autopilot") {
    return `${base}/Home_Lab_Autopilot_${version}_setup.exe`;
  }

  if (platform === "mac") {
    return `${base}/Clank`;
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
