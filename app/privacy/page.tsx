import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Clank Suite",
  description: "Privacy policy for Clank Suite applications and website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--text-dim)] mb-10">
          Last updated: March 8, 2026
        </p>

        <div className="space-y-8 text-sm text-[var(--text-muted)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              Overview
            </h2>
            <p>
              Clank Suite is built on a simple principle:{" "}
              <strong className="text-[var(--text)]">your data stays on your machine</strong>.
              Our desktop and CLI applications do not collect telemetry, usage
              analytics, or personal information of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              Clank Applications
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-[var(--text)]">No telemetry.</strong>{" "}
                Our apps do not phone home, track usage, or send any data to us.
              </li>
              <li>
                <strong className="text-[var(--text)]">Local storage only.</strong>{" "}
                All configuration, chat history, sessions, and memory files are
                stored locally on your device (typically in your AppData folder
                on Windows).
              </li>
              <li>
                <strong className="text-[var(--text)]">Encryption at rest.</strong>{" "}
                Sensitive data is encrypted with AES-256-GCM. PIN authentication
                uses PBKDF2 key derivation.
              </li>
              <li>
                <strong className="text-[var(--text)]">Third-party API providers.</strong>{" "}
                When you choose to use cloud providers (Anthropic, OpenAI,
                Google Gemini), your prompts and responses are sent directly to
                those providers. Their respective privacy policies apply. API
                keys are stored locally and never shared with us.
              </li>
              <li>
                <strong className="text-[var(--text)]">Local providers.</strong>{" "}
                When using local providers (Ollama, llama.cpp, LM Studio, vLLM),
                all data stays entirely on your machine or local network.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              This Website
            </h2>
            <p>
              This website (clanksuite.dev) is a static site hosted on
              GitHub Pages. We do not use cookies, analytics scripts, or tracking
              pixels. GitHub may collect standard server logs (IP address,
              browser user agent, page requested) as part of hosting
              infrastructure. See{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub&apos;s Privacy Statement
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              GitHub Downloads
            </h2>
            <p>
              Application downloads are hosted on GitHub Releases. Downloading a
              release is subject to{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub&apos;s Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Clank Suite is not directed at children under 13. We do not
              knowingly collect any personal information from anyone, including
              children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              Changes to This Policy
            </h2>
            <p>
              If this policy changes, the updated version will be posted on this
              page with a new &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Open an issue on{" "}
              <a
                href="https://github.com/ItsTrag1c/Clank-Build/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
