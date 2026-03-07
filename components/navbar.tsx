"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Menu, X } from "lucide-react";

const links = [
  { label: "Apps", href: "#apps" },
  { label: "Features", href: "#features" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Image src="/llama.png" alt="LlamaTalk" width={28} height={28} className="rounded-md" />
          <span className="font-semibold text-[var(--text)] text-sm">
            LlamaTalk <span className="text-[var(--text-muted)] font-normal">Suite</span>
          </span>
        </a>

        {/* Desktop links */}
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
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
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
        </div>
      )}
    </nav>
  );
}
