import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://llamatalksuite.dev"),
  title: "LlamaTalk Suite",
  description: "Three apps. One ecosystem. Local-first AI chat with zero telemetry.",
  keywords: ["AI chat", "local AI", "Ollama", "Claude", "OpenAI", "terminal", "coding assistant"],
  authors: [{ name: "ItsTrag1c" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "LlamaTalk Suite",
    description: "Local-first AI chat suite. Zero telemetry. MIT licensed.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LlamaTalk Suite",
    description: "Local-first AI chat suite. Zero telemetry. MIT licensed.",
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
