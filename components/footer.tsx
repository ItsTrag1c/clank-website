import Image from "next/image";
import { Github } from "lucide-react";

const repos = [
  { name: "LlamaTalk Chat", href: "https://github.com/ItsTrag1c/LlamaTalk-Desktop" },
  { name: "LlamaTalk CLI", href: "https://github.com/ItsTrag1c/LlamaTalk-CLI" },
  { name: "LlamaTalk Build", href: "https://github.com/ItsTrag1c/LlamaTalk-Build" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/llama.png" alt="LlamaTalk" width={20} height={20} className="rounded" />
              <span className="text-sm font-medium text-[var(--text)]">LlamaTalk Suite</span>
            </div>
            <p className="text-xs text-[var(--text-dim)] max-w-xs leading-relaxed">
              Local-first AI chat by ItsTrag1c. Zero telemetry, full encryption, open source.
            </p>
          </div>

          {/* Repos */}
          <div>
            <h4 className="text-xs font-medium text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
              <Github className="w-3 h-3" />
              Repositories
            </h4>
            <ul className="space-y-1.5">
              {repos.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
          <p className="text-xs text-[var(--text-dim)]">
            &copy; 2025&ndash;2026 ItsTrag1c
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
