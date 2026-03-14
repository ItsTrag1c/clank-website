"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Menu, X } from "lucide-react";

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

const links = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Autopilot", href: "/autopilot" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <Image src="/llama.png" alt="Clank" width={28} height={28} className="rounded-md" />
          <span className="font-semibold text-[var(--text)] text-sm">
            Clank
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-[var(--border)] mx-2" />
          <a
            href="https://github.com/ItsTrag1c"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/ClankSuite"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href="https://reddit.com/u/ClankSuite"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <RedditIcon className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)} // close menu on nav
              className="block py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/ItsTrag1c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://x.com/ClankSuite"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <XIcon className="w-4 h-4" />
            X (Twitter)
          </a>
          <a
            href="https://reddit.com/u/ClankSuite"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <RedditIcon className="w-4 h-4" />
            Reddit
          </a>
        </div>
      )}
    </nav>
  );
}
