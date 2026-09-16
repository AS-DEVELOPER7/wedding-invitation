"use client";

import React from "react";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

export default function FooterSection() {
  const { closingDua } = WEDDING_CONFIG;

  return (
    <footer className="py-10 px-4 bg-backgroundColor-primary text-center border-t border-borderColor-primary/35 relative">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        {/* Subtle Star Whisker Top Divider */}
        <div className="flex items-center justify-center gap-2 mb-3 text-textColor-ternary/70">
          <span className="w-8 h-[0.6px] bg-gradient-to-r from-transparent to-textColor-ternary/60" />
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
            <path d="M12 0 L14.2 9.5 L23 12 L14.2 14.5 L12 24 L9.8 14.5 L1 12 L9.8 9.5 Z" />
          </svg>
          <span className="w-8 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/60" />
        </div>

        {/* English Closing Prayer */}
        <p className="font-playfair italic text-xs text-textColor-secondary max-w-[290px] leading-relaxed mb-4">
          &quot;{closingDua.english}&quot;
        </p>

        <OrnamentFlourish orientation="horizontal" width={90} height={7} opacity={0.6} className="mb-4" />

        {/* Family Gratitude Signoff */}
        <p className="font-playfair italic text-sm text-textColor-primary mb-1">
          With heartfelt gratitude,
        </p>
        <p className="font-allura text-2xl font-bold tracking-[0.18em] text-textColor-ternary ">
          Dhulebwala &amp; Naharwala Families
        </p>
      </div>
    </footer>
  );
}
