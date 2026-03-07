"use client";

import { motion } from "framer-motion";
import { Download, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-black to-black" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo size={80} className="mx-auto mb-8" />
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI Chat for{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Power Users
          </span>
        </motion.h1>
        
        <motion.p
          className="mt-6 text-xl text-neutral-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Three apps. One ecosystem. Local-first AI with zero telemetry.
        </motion.p>
        
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white">
            <Download className="mr-2 h-5 w-5" />
            Download for Windows
          </Button>
          <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-400">
            <Star className="mr-1 h-3 w-3 fill-current" />
            3 repos • MIT Licensed • Zero Telemetry
          </Badge>
        </motion.div>
      </div>
      
      {/* App preview cards */}
      <div className="relative z-10 pb-20">
        <div className="flex justify-center items-end gap-4 md:gap-6 px-6 perspective-1000">
          <AppPreviewCard
            app="chat"
            color="indigo"
            version="0.16.0"
            delay={0.5}
            className="hidden md:block"
          />
          <AppPreviewCard
            app="cli"
            color="emerald"
            version="0.9.12"
            delay={0.6}
            className="mb-8"
          />
          <AppPreviewCard
            app="build"
            color="amber"
            version="0.9.19"
            delay={0.7}
            className="mb-16 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

function AppPreviewCard({
  app,
  color,
  version,
  delay,
  className,
}: {
  app: string;
  color: string;
  version: string;
  delay: number;
  className?: string;
}) {
  const colorClasses = {
    indigo: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
    emerald: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    amber: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  };

  const bgClasses = {
    indigo: "bg-indigo-500/20",
    emerald: "bg-emerald-500/20",
    amber: "bg-amber-500/20",
  };

  return (
    <motion.div
      className={`w-48 md:w-56 h-64 md:h-72 rounded-xl border bg-gradient-to-b backdrop-blur-sm ${
        colorClasses[color as keyof typeof colorClasses]
      } ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className={`w-10 h-10 rounded-lg ${bgClasses[color as keyof typeof bgClasses]} flex items-center justify-center mb-3`}>
          <span className="text-lg font-bold text-white">{app[0].toUpperCase()}</span>
        </div>
        <h3 className="font-semibold text-white capitalize">{app}</h3>
        <p className="text-xs text-neutral-400 mt-1">v{version}</p>
        <div className="flex-1 mt-4 space-y-2">
          <div className="h-2 bg-white/10 rounded w-full" />
          <div className="h-2 bg-white/10 rounded w-3/4" />
          <div className="h-2 bg-white/10 rounded w-5/6" />
        </div>
      </div>
    </motion.div>
  );
}
