"use client";

import { cn } from "@/lib/utils";
import { Monitor } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label?: string;
  className?: string;
  aspect?: "video" | "wide" | "square";
}

export function ScreenshotPlaceholder({
  label = "Vista de la plataforma",
  className,
  aspect = "video",
}: ScreenshotPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br from-gray-50 to-gray-100 shadow-card-elevated",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200/60 bg-white/80 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1">
          <div className="mx-auto max-w-sm rounded-md bg-gray-100 px-4 py-1 text-center text-xs text-gray-400">
            portal.bloqer.app
          </div>
        </div>
      </div>
      {/* Content area */}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-950 p-8 bg-blueprint-grid-dark",
          aspectClasses[aspect]
        )}
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <div className="relative flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Monitor className="h-8 w-8 text-blueprint-400/60" />
          </div>
          <p className="text-sm font-medium text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}
