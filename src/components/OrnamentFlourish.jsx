"use client";

import React from "react";
import Image from "next/image";
import { ASSETS } from "@/constants/assets";

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⚜️ ORNAMENT FLOURISH / DIVIDER COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════════
 * Displays the gold needle & diamond divider horizontally or vertically:
 *
 * Usage:
 *   <OrnamentFlourish orientation="horizontal" width={140} />
 *   <OrnamentFlourish orientation="vertical" height={120} />
 */
export default function OrnamentFlourish({
  orientation = "horizontal", // "horizontal" | "vertical"
  className = "",
  width,
  height,
  opacity = 0.85,
}) {
  const isVertical = orientation === "vertical";
  const src = isVertical ? ASSETS.svg.flourishVertical : ASSETS.svg.flourishHorizontal;

  // Default dimensions based on orientation
  const finalWidth = width ?? (isVertical ? 14 : 130);
  const finalHeight = height ?? (isVertical ? 140 : 10);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{
        width: typeof finalWidth === "number" ? `${finalWidth}px` : finalWidth,
        height: typeof finalHeight === "number" ? `${finalHeight}px` : finalHeight,
        opacity,
      }}
    >
      <Image
        src={src}
        alt="Royal Gold Ornamental Divider"
        fill
        className="object-contain"
        sizes={isVertical ? "24px" : "240px"}
        priority={false}
      />
    </div>
  );
}
