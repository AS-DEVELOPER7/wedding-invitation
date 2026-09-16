"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

/**
 * Royal timeline node: An intricate 8-pointed star & pearl medallion
 * Replaces the dated square/diamond box with luxury jewelry-grade vector filigree.
 */
function RoyalTimelineNode({ index }) {
  return (
    <div className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 group/node">
      {/* Subtle Golden Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-[#ECC86B]/25 blur-xs transition-opacity duration-300 opacity-60 group-hover/node:opacity-100" />

      <svg
        viewBox="0 0 26 26"
        className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_2px_5px_rgba(160,115,15,0.32)] transition-transform duration-300 group-hover/node:scale-125"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`goldGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3D2" />
            <stop offset="35%" stopColor="#ECC86B" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6110" />
          </linearGradient>
          <radialGradient id={`pearlGrad-${index}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FBF7F0" />
            <stop offset="100%" stopColor="#DFC68E" />
          </radialGradient>
        </defs>

        {/* 1. Outer Delicate Gold Halo Ring */}
        <circle
          cx="13"
          cy="13"
          r="11.2"
          fill="none"
          stroke={`url(#goldGrad-${index})`}
          strokeWidth="0.85"
          opacity="0.8"
        />

        {/* 2. Opaque Silk Shield (cleanly conceals the timeline axis behind the medallion) */}
        <circle
          cx="13"
          cy="13"
          r="9.2"
          fill="#FFFDF9"
          stroke="#D4AF37"
          strokeWidth="0.75"
        />

        {/* 3. Royal 8-Pointed Star Rosette */}
        {/* Primary Cardinal Points */}
        <path
          d="M13 4.8 L14.3 11.7 L21.2 13 L14.3 14.3 L13 21.2 L11.7 14.3 L4.8 13 L11.7 11.7 Z"
          fill={`url(#goldGrad-${index})`}
          stroke="#8C6110"
          strokeWidth="0.35"
        />
        {/* Secondary Diagonal Points (Rotated 45 deg) */}
        <path
          d="M13 6.8 L14.2 11.8 L19.2 13 L14.2 14.2 L13 19.2 L11.8 14.2 L6.8 13 L11.8 11.8 Z"
          transform="rotate(45 13 13)"
          fill={`url(#goldGrad-${index})`}
          stroke="#8C6110"
          strokeWidth="0.35"
          opacity="0.92"
        />

        {/* 4. Raised Luminous Pearl Cabochon */}
        <circle
          cx="13"
          cy="13"
          r="2.7"
          fill={`url(#pearlGrad-${index})`}
          stroke="#AA7C11"
          strokeWidth="0.6"
        />

        {/* 5. Center Gold Jewel Dot */}
        <circle cx="13" cy="13" r="1.1" fill="#8C6110" />
      </svg>
    </div>
  );
}

export default function ProgramSection() {
  const { program, programInvitation, residence } = WEDDING_CONFIG;

  return (
    <section className="py-16 px-3 bg-gradient-to-b from-backgroundColor-primary via-[#F8F4EE] to-backgroundColor-secondary relative overflow-hidden">
      {/* 🌟 Ambient Warm Golden Backlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[380px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[400px] h-[320px] bg-[radial-gradient(circle,rgba(236,200,107,0.10)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Section Header with Royal Whisker Crest */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 flex flex-col items-center"
        >
          {/* Mini Royal Star Whisker Badge */}
          <div className="flex items-center justify-center gap-2 mb-2 text-textColor-ternary">
            <span className="w-8 h-[0.6px] bg-gradient-to-r from-transparent to-textColor-ternary/75" />
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current drop-shadow-xs" aria-hidden="true">
              <path d="M12 0 L14.2 9.5 L23 12 L14.2 14.5 L12 24 L9.8 14.5 L1 12 L9.8 9.5 Z" />
              <circle cx="12" cy="12" r="2" fill="var(--color-backgroundColor-primary)" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className="w-8 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/75" />
          </div>

          <p className="font-playfair text-[10.5px] tracking-[0.25em] text-textColor-ternary uppercase mb-1 font-semibold">
            Wedding Itinerary
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-textColor-primary uppercase">
            Ceremonies &amp; Celebrations
          </h2>

          <OrnamentFlourish orientation="horizontal" width={130} height={9} opacity={0.75} className="mt-2.5" />
        </motion.div>

        {/* 🕌 The Royal Moorish Pavilion Tablet Container */}
        <div className="relative w-full max-w-[370px] sm:max-w-[395px] mx-auto">
          {/* 📜 The Main Pavilion Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="relative rounded-[28px] p-[1.5px] bg-gradient-to-b from-[#ECC86B] via-[#D4AF37]/85 to-[#996515] shadow-[0_20px_50px_rgba(140,97,16,0.12),0_4px_16px_rgba(44,30,37,0.05)] overflow-hidden"
          >
            {/* Inner Tablet Canvas (Encloses all decorations cleanly inside rounded borders) */}
            <div className="relative rounded-[26.5px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF7F2] to-[#F5ECE0] overflow-hidden flex flex-col items-center">
              {/* Soft Silk Sheen Overlay */}
              <div className="absolute inset-0 bg-radial-at-t from-[#FFFDF9]/80 via-transparent to-[#F2E5D2]/40 pointer-events-none" />

              {/* 🏮 Left Hanging Gold Lanterns (Gracefully Suspended INSIDE Top-Left of Card) */}
              <motion.div
                animate={{ rotate: [-1.8, 1.8, -1.8] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-2 sm:left-3 w-10 sm:w-12 h-auto pointer-events-none z-20 origin-top opacity-90"
              >
                <Image
                  src={ASSETS.program.hangingLanterns}
                  alt="Hanging Gold Lanterns"
                  width={201}
                  height={432}
                  className="w-full h-auto object-contain filter drop-shadow-[0_3px_8px_rgba(180,130,20,0.35)]"
                />
              </motion.div>

              {/* 🏮 Right Hanging Gold Lanterns (Gracefully Suspended INSIDE Top-Right of Card, Mirrored) */}
              <motion.div
                animate={{ rotate: [1.8, -1.8, 1.8] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-2 sm:right-3 w-10 sm:w-12 h-auto pointer-events-none z-20 origin-top opacity-90 scale-x-[-1]"
              >
                <Image
                  src={ASSETS.program.hangingLanterns}
                  alt="Hanging Gold Lanterns"
                  width={201}
                  height={432}
                  className="w-full h-auto object-contain filter drop-shadow-[0_3px_8px_rgba(180,130,20,0.35)]"
                />
              </motion.div>

              {/* 🌴 Left Royal Henna Palm Tree (Anchored INSIDE Bottom-Left of Card) */}
              <motion.div
                animate={{ rotate: [-0.6, 0.6, -0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -left-1 w-20 sm:w-24 h-auto pointer-events-none z-10 origin-bottom-left opacity-80"
              >
                <Image
                  src={ASSETS.program.palmTree}
                  alt="Royal Henna Palm Tree"
                  width={195}
                  height={432}
                  className="w-full h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(140,97,16,0.22)]"
                />
              </motion.div>

              {/* 🌴 Right Royal Henna Palm Tree (Anchored INSIDE Bottom-Right of Card, Mirrored) */}
              <motion.div
                animate={{ rotate: [0.6, -0.6, 0.6] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -right-1 w-20 sm:w-24 h-auto pointer-events-none z-10 origin-bottom-right opacity-80 scale-x-[-1]"
              >
                <Image
                  src={ASSETS.program.palmTree}
                  alt="Royal Henna Palm Tree"
                  width={195}
                  height={432}
                  className="w-full h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(140,97,16,0.22)]"
                />
              </motion.div>

              {/* 🏛️ Grand Islamic Archway Pavilion Header */}
              <div className="relative w-full overflow-hidden z-10">
                <Image
                  src={ASSETS.program.islamicArch}
                  alt="Islamic Architectural Arch"
                  width={768}
                  height={361}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(140,97,16,0.14)]"
                />

                {/* 📜 Invitation Preamble (Nestled naturally inside the open portal of the archway) */}
                <div className="absolute bottom-2.5 sm:bottom-4 inset-x-7 text-center flex flex-col items-center justify-center pointer-events-none z-10">
                  <p className="font-allura text-2xl sm:text-[27px] text-[#2C1E25] leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                    {programInvitation?.preamble || "With joy in our hearts,"}
                  </p>
                  <p className="font-allura text-2xl sm:text-[27px] text-[#8C6110] leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5">
                    {programInvitation?.hosts || "Dhuleb Family invites you to the Wedding."}
                  </p>
                </div>
              </div>

              {/* Tablet Content Body */}
              <div className="relative z-10 w-full px-4 pt-2 pb-7 sm:px-6 sm:pb-8 flex flex-col items-center">
                {/* Slender Flourish Divider */}
                <OrnamentFlourish
                  orientation="horizontal"
                  width={110}
                  height={8}
                  opacity={0.65}
                  className="mt-1 mb-5"
                />

                {/* 3. The Central Spine Program Timeline */}
                <div className="relative z-10 w-full my-1">
                  {/* Continuous Vertical Golden Axis Line */}
                  <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1.2px] bg-gradient-to-b from-transparent via-[#D4AF37]/80 to-transparent pointer-events-none" />

                  <div className="flex flex-col space-y-3.5 sm:space-y-4">
                    {program.map((event, idx) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="relative flex items-center justify-between group py-1.5 px-1 rounded-xl transition-all duration-300 hover:bg-[#D4AF37]/[0.05]"
                      >
                        {/* Left Column: Ceremony Name in Royal Cursive Script */}
                        <div className="w-[44%] text-right pr-3 sm:pr-4 flex flex-col items-end justify-center">
                          <h3 className="font-allura text-2xl sm:text-[27px] leading-[1.12] text-[#3E2318] group-hover:text-textColor-ternary transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                            {event.titleScript || event.titleEnglish}
                          </h3>
                        </div>

                        {/* Central Spine Node: Redesigned Royal Star Rosette Medallion */}
                        <div className="relative z-10 flex items-center justify-center w-[12%]">
                          <RoyalTimelineNode index={idx} />
                        </div>

                        {/* Right Column: Date & Venue */}
                        <div className="w-[44%] text-left pl-3 sm:pl-4 flex flex-col items-start justify-center">
                          <p className="font-playfair text-[13.5px] sm:text-[14.5px] font-bold text-textColor-ternary tracking-wide leading-tight group-hover:text-[#AA7C11] transition-colors">
                            {event.date}
                          </p>
                          <p className="font-playfair text-[11px] sm:text-[12px] font-medium text-textColor-primary/90 leading-tight mt-0.5">
                            {event.venue}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 4. Bottom Residence Section */}
                {residence && (
                  <div className="relative z-10 w-full mt-6 pt-3 flex flex-col items-center text-center">
                    {/* Slender Diamond Divider Line */}
                    <div className="w-full max-w-[210px] flex items-center justify-center gap-2 mb-3">
                      <span className="flex-1 h-[0.6px] bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37] fill-current" aria-hidden="true">
                        <path d="M12 2 L15 12 L12 22 L9 12 Z" />
                      </svg>
                      <span className="flex-1 h-[0.6px] bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
                    </div>

                    <h4 className="font-allura text-2xl sm:text-[28px] text-textColor-ternary leading-none mb-1">
                      {residence.title || "Our Residence"}
                    </h4>
                    <p className="font-playfair text-xs sm:text-[13px] font-semibold tracking-wider text-textColor-primary mb-3.5">
                      {residence.address}
                    </p>

                    {/* Interactive Map Button */}
                    {residence.mapsUrl && (
                      <motion.a
                        href={residence.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-backgroundColor-primary/95 border border-borderColor-primary/60 text-[11px] font-playfair font-semibold text-textColor-ternary tracking-wide shadow-xs hover:border-borderColor-primary hover:text-textColor-primary hover:shadow-sm transition-all group"
                      >
                        <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#D4AF37] fill-current group-hover:scale-110 transition-transform" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>View Location Map</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
