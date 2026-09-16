"use client";

import React from "react";
import Image from "next/image";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

export default function FooterSection() {
  const { closingDua } = WEDDING_CONFIG;

  return (
    <footer className="py-14 px-4 bg-backgroundColor-primary text-center border-t border-borderColor-primary/35 relative">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        <div className="w-12 h-12 mb-4 opacity-90 filter drop-shadow-sm">
          <Image
            src={ASSETS.svg.monogram}
            alt="Monogram"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-xl sm:text-2xl font-bold text-textColor-ternary direction-rtl mb-1.5">
          {closingDua.arabic}
        </p>

        <p className="font-playfair italic text-xs text-textColor-secondary max-w-[280px] mb-6">
          &quot;{closingDua.english}&quot;
        </p>

        <p className="font-playfair text-xs font-bold tracking-[0.18em] text-textColor-primary uppercase mb-1.5">
          Dhulebwala &amp; Naharwala Families
        </p>
        <p className="font-sans text-[11px] text-textColor-ternary tracking-wide">
          {closingDua.gratitude}
        </p>
      </div>
    </footer>
  );
}
