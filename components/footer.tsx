import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm6.066 13.073c.042.252.063.51.063.77 0 3.164-3.645 5.735-8.129 5.735S1.871 17.007 1.871 13.843c0-.26.022-.518.063-.77a1.89 1.89 0 0 1-.832-1.563c0-1.048.852-1.9 1.9-1.9.513 0 .977.207 1.316.542 1.293-.882 3.041-1.441 4.993-1.49l1.07-4.887.028-.006a.378.378 0 0 1 .456-.28l3.467.74c.225-.545.772-.93 1.408-.93 .84 0 1.521.681 1.521 1.521s-.681 1.521-1.521 1.521-1.521-.681-1.521-1.521l-.001-.072-3.098-.661-.953 4.358c1.894.072 3.58.632 4.836 1.494a1.895 1.895 0 0 1 1.316-.542c1.048 0 1.9.852 1.9 1.9 0 .642-.32 1.21-.832 1.563zM8.727 11.4c-.84 0-1.521.681-1.521 1.521s.681 1.521 1.521 1.521 1.521-.681 1.521-1.521-.681-1.521-1.521-1.521zm6.546 0c-.84 0-1.521.681-1.521 1.521s.681 1.521 1.521 1.521 1.521-.681 1.521-1.521-.681-1.521-1.521-1.521zm-5.885 4.467a.36.36 0 0 1-.085-.503.36.36 0 0 1 .503-.085c.747.525 1.735.79 2.194.79s1.447-.265 2.194-.79a.36.36 0 0 1 .503.085.36.36 0 0 1-.085.503c-.863.607-1.96.912-2.612.912s-1.749-.305-2.612-.912z" />
    </svg>
  );
}

const repos = [
  { name: "Clank", href: "https://github.com/ItsTrag1c/Clank" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/llama.png" alt="Clank" width={20} height={20} className="rounded" />
              <span className="text-sm font-medium text-[var(--text)]">Clank</span>
            </div>
            <p className="text-xs text-[var(--text-dim)] max-w-xs leading-relaxed">
              Agentic assistant. Local models &amp; cloud providers. Zero telemetry.
            </p>
          </div>

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

          <div>
            <h4 className="text-xs font-medium text-[var(--text-muted)] mb-3">
              Socials
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://x.com/ClankSuite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                >
                  <XIcon className="w-3 h-3" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/u/ClankSuite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                >
                  <RedditIcon className="w-3 h-3" />
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
          <p className="text-xs text-[var(--text-dim)]">
            &copy; 2025&ndash;2026 ItsTrag1c
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-xs text-[var(--text-dim)]">
              MIT License
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
