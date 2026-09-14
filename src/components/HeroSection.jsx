"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

export default function HeroSection({ isOpening = true }) {
  return (
    <motion.section
      initial={{ y: 45, scale: 0.95 }}
      animate={isOpening ? { y: 0, scale: 1 } : { y: 45, scale: 0.95 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background Layer: Sunlit Moorish Archway, Palm Trees & Courtyard */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.hero.sunlitPalace}
          alt="Palatial Moorish Entrance"
          fill
          priority
          className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-white/35 to-[#FAF8F5]/90" />
      </div>

      {/* Hanging Brass Lanterns with Physical Pendulum Motion (Mobile Scaled) */}
      <div className="absolute top-0 inset-x-0 h-[260px] z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[2%] w-[58px] h-[200px] animate-swing-left">
          <Image
            src={ASSETS.hero.lanternLeft}
            alt="Hanging Lantern"
            fill
            className="object-contain object-top"
          />
        </div>

        <div className="absolute top-0 left-1/2 w-[92px] h-[220px] animate-swing-center">
          <Image
            src={ASSETS.hero.lanternCenter}
            alt="Grand Chandelier"
            fill
            className="object-contain object-top filter drop-shadow-md"
          />
        </div>

        <div className="absolute top-0 right-[2%] w-[58px] h-[205px] animate-swing-right">
          <Image
            src={ASSETS.hero.lanternRight}
            alt="Hanging Lantern"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>

      {/* Hero Typography & Content (Illuminated as Card Emerges) */}
      <div className="relative z-20 w-full px-5 pt-28 pb-14 flex flex-col items-center text-center mt-4">
        {/* Bismillah Sacred Calligraphy */}
        <div className="w-[82%] max-w-[320px] h-auto mb-4 filter drop-shadow-sm">
          <Image
            src={ASSETS.svg.bismillah}
            alt="Bismillah ir-Rahman ir-Rahim"
            width={340}
            height={75}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Royal Monogram Medallion */}
        <div className="w-16 h-16 mb-3 filter drop-shadow-md">
          <Image
            src={ASSETS.svg.monogram}
            alt="Monogram A & A"
            width={64}
            height={64}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Couple Names in Arabic Calligraphy */}
        <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-[#8C6110] mb-2 tracking-wide direction-rtl drop-shadow-sm">
          {WEDDING_CONFIG.couple.bride.arabic} &amp; {WEDDING_CONFIG.couple.groom.arabic}
        </h2>

        {/* Couple Names in Royal Latin Typography (Mobile First Stacked Layout) */}
        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.14em] text-[#2C1E25] mb-5 uppercase flex flex-col items-center leading-tight">
          <span>{WEDDING_CONFIG.couple.bride.firstName}</span>
          <span className="font-playfair italic font-normal text-xl sm:text-2xl text-[#C59B27] my-0.5">
            &amp;
          </span>
          <span>{WEDDING_CONFIG.couple.groom.firstName}</span>
        </h1>

        {/* Nikah Solemnisation Honorific Card */}
        <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#D4AF37]/50 shadow-sm shadow-[#8C6110]/10 mb-4 w-full max-w-[340px]">
          <p className="font-playfair italic text-[11px] text-[#8C6B3E]">
            Nikah Solemnised on
          </p>
          <p className="font-cinzel text-[11px] sm:text-xs font-bold tracking-wider text-[#2C1E25] uppercase mt-0.5 leading-snug">
            {WEDDING_CONFIG.nikah.authorityFull}
          </p>
        </div>

        {/* Date and Location Subtitle */}
        <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-[#6E5B65] uppercase mb-8">
          {WEDDING_CONFIG.nikah.dateGregorian} • {WEDDING_CONFIG.nikah.city}
        </p>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 cursor-pointer pt-2"
          onClick={() => {
            const cardElem = document.getElementById("sacred-card");
            cardElem?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6B3E] uppercase">
            Scroll to View Invitation
          </span>
          <svg
            className="w-4 h-4 text-[#D4AF37]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
