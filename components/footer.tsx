import { Github, FileText, Shield, Heart } from "lucide-react";
import { Logo } from "@/components/logo";

const repos = [
  { name: "LlamaChat v1", href: "https://github.com/ItsTrag1c/LlamaTalk-Desktop" },
  { name: "LlamaTalk CLI", href: "https://github.com/ItsTrag1c/LlamaTalk-CLI" },
  { name: "LlamaTalk Build", href: "https://github.com/ItsTrag1c/LlamaTalk-Build" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy.pdf", icon: Shield },
  { name: "MIT License", href: "/LICENSE", icon: FileText },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="font-semibold text-white">LlamaTalk</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              AI chat suite by ItsTrag1c. Built with privacy in mind. Local-first, zero telemetry, fully open source.
            </p>
          </div>

          {/* Repositories */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Github className="w-4 h-4" />
              Repositories
            </h4>
            <ul className="space-y-2">
              {repos.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-3 h-3" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © 2025–2026 ItsTrag1c. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> and local AI
          </p>
        </div>
      </div>
    </footer>
  );
}
