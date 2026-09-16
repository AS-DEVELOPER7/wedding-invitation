"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

export default function HeroSection({ isOpening = true }) {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-backgroundColor-primary"
    >
      {/* Background Layer: Sunlit Moorish Archway, Palm Trees & Courtyard (100% Visible) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.hero.sunlitPalace}
          alt="Palatial Moorish Entrance"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Delicate subtle vignette at top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-backgroundColor-primary/25 via-transparent via-60% to-transparent pointer-events-none" />
        {/* Seamless bottom dissolve directly into backgroundColor-primary matching SacredInvitationCard */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-backgroundColor-primary/45 to-backgroundColor-primary pointer-events-none" />
      </div>

      {/* Floating Hero Typography (Directly over the Palace, Perfectly Centered under Chandelier) */}
      <motion.div
        initial="hidden"
        animate={isOpening ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.35,
            },
          },
        }}
        className="relative z-20 w-full px-5 pt-[80%] pb-8 flex flex-col items-center text-center"
      >
        {/* 1. Royal Preamble: Delicate Tracking Expansion & Fade */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12, letterSpacing: "0.22em" },
            visible: {
              opacity: 1,
              y: 0,
              letterSpacing: "0.3em",
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="font-playfair text-[9.5px] sm:text-[10px] font-bold text-textColor-ternary uppercase mb-1 filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
        >
          The Wedding Celebration of
        </motion.p>

        {/* Couple Names in Flowing Royal Calligraphy (Allura) */}
        <div className="flex flex-col items-center my-0.5 select-none">
          {/* 2. Bride's Name: Elegant Silk Glide */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.96 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ scale: 1.025, transition: { duration: 0.35, ease: "easeOut" } }}
            className="font-allura text-5xl sm:text-[58px] text-textColor-primary font-normal leading-[1.05] filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.98)] drop-shadow-[0_1px_3px_rgba(255,255,255,1)] tracking-wide cursor-default transition-shadow"
          >
            Amatullah
          </motion.h1>

          {/* 3. Delicate Gold Ampersand with Expanding Accent Lines */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex items-center gap-3 my-0.5"
          >
            {/* Left Accent Line: Smooth Scale from Center */}
            <motion.span
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              style={{ originX: 1 }}
              className="w-8 h-[1px] bg-gradient-to-r from-transparent to-textColor-ternary filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
            />

            {/* Ampersand: Soft Scale-In & Fade */}
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.65 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-allura text-3xl sm:text-4xl text-textColor-ternary font-normal italic filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)] select-none inline-block leading-none"
            >
              &amp;
            </motion.span>

            {/* Right Accent Line: Smooth Scale from Center */}
            <motion.span
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              style={{ originX: 0 }}
              className="w-8 h-[1px] bg-gradient-to-l from-transparent to-textColor-ternary filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
            />
          </motion.div>

          {/* 4. Groom's Name: Matching Royal Glide */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.96 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ scale: 1.025, transition: { duration: 0.35, ease: "easeOut" } }}
            className="font-allura text-5xl sm:text-[58px] text-textColor-primary font-normal leading-[1.05] filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.98)] drop-shadow-[0_1px_3px_rgba(255,255,255,1)] tracking-wide cursor-default transition-shadow"
          >
            Abbas Ali
          </motion.h2>
        </div>

        {/* 5. Date Pill: Regal Entrance with Subtle Hover Micro-Interaction */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.93 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover={{ scale: 1.035, transition: { duration: 0.25, ease: "easeOut" } }}
          className="mt-3.5 mb-7 flex items-center gap-2 px-4 py-1 rounded-full bg-backgroundColor-primary/75 backdrop-blur-[3px] border border-borderColor-primary/45 shadow-xs filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)] cursor-default transition-all"
        >
          <span className="text-[7px] text-textColor-ternary">◆</span>
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] font-bold text-textColor-primary uppercase">
            {WEDDING_CONFIG.receptionDate}
          </p>
          <span className="text-[7px] text-textColor-ternary">◆</span>
        </motion.div>

        {/* 6. Floating Scroll Indicator: Graceful Entrance + Continuous Float */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="flex flex-col items-center gap-1.5 cursor-pointer select-none"
          onClick={() => {
            const cardElem = document.getElementById("sacred-card");
            cardElem?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="font-playfair text-[10px] tracking-[0.25em] font-bold text-textColor-ternary uppercase filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]">
              Scroll to View Invitation
            </span>
            <div className="filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]">
              <OrnamentFlourish orientation="vertical" height={40} width={10} opacity={0.9} />
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
