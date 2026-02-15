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
        "relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1">
          <div className="mx-auto max-w-md rounded-md bg-gray-100 px-4 py-1 text-center text-xs text-gray-400">
            portal.bloqer.app
          </div>
        </div>
      </div>
      {/* Content area */}
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary-50/50 via-white to-primary-100/30 p-8",
          aspectClasses[aspect]
        )}
      >
        <Monitor className="h-12 w-12 text-primary-300" />
        <p className="text-sm font-medium text-gray-400">{label}</p>
      </div>
    </div>
  );
}
