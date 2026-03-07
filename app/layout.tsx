import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LlamaTalk Suite — AI Chat for Power Users",
  description: "Three apps. One ecosystem. Local-first AI chat with zero telemetry. LlamaChat v1, LlamaTalk CLI, and LlamaTalk Build.",
  keywords: ["AI chat", "local AI", "Ollama", "Claude", "OpenAI", "terminal", "coding assistant"],
  authors: [{ name: "ItsTrag1c" }],
  openGraph: {
    title: "LlamaTalk Suite — AI Chat for Power Users",
    description: "Local-first AI chat suite. Zero telemetry. MIT licensed.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LlamaTalk Suite",
    description: "AI Chat for Power Users. Local-first. Zero telemetry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
