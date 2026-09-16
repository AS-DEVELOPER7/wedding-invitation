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
      className="relative w-full flex flex-col items-center overflow-hidden bg-backgroundColor-primary"
    >
      {/* 
        Palatial Moorish Stage:
        Locked to the image's exact 768:1376 aspect ratio.
        This guarantees the background image is 100% visible on ALL mobile screens
        without any left, right, top, or bottom cropping!
      */}
      <div className="relative w-full aspect-[768/1376] overflow-hidden">
        {/* Background Layer: Sunlit Moorish Archway */}
        <Image
          src={ASSETS.hero.sunlitPalace}
          alt="Palatial Moorish Entrance"
          fill
          priority
          sizes="(max-width: 440px) 100vw, 420px"
          className="object-cover object-top select-none"
        />

        {/* Delicate subtle vignette at top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-backgroundColor-primary/25 via-transparent via-50% to-transparent pointer-events-none" />

        {/* Seamless bottom dissolve directly into backgroundColor-primary matching SacredInvitationCard */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-backgroundColor-primary/50 to-backgroundColor-primary pointer-events-none" />

        {/* Floating Hero Typography (Locked directly to the Archway coordinate space) */}
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
          className="absolute inset-0 z-20 flex flex-col items-center text-center px-4"
        >
          {/* 1. Chandelier Clearance: Leaves the top ceiling & crystal chandelier completely clear */}
          <div className="h-[48%] w-full pointer-events-none" />

          {/* 2. Royal Preamble */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10, letterSpacing: "0.22em" },
              visible: {
                opacity: 1,
                y: 0,
                letterSpacing: "0.28em",
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="font-playfair text-[9px] sm:text-[10px] font-bold text-textColor-ternary uppercase mb-0.5 filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
          >
            The Wedding Celebration of
          </motion.p>

          {/* Couple Names in Flowing Royal Calligraphy (Allura) */}
          <div className="flex flex-col items-center my-0 select-none">
            {/* Bride's Name */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ scale: 1.025, transition: { duration: 0.35, ease: "easeOut" } }}
              className="font-allura text-[44px] sm:text-[50px] text-textColor-primary font-normal leading-[1.05] filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.98)] drop-shadow-[0_1px_3px_rgba(255,255,255,1)] tracking-wide cursor-default transition-shadow"
            >
              Amatullah
            </motion.h1>

            {/* Delicate Gold Ampersand with Accent Lines */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex items-center gap-2.5 my-0.5"
            >
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
                className="w-7 h-[1px] bg-gradient-to-r from-transparent to-textColor-ternary filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
              />
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 0.65 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="font-allura text-2xl sm:text-3xl text-textColor-ternary font-normal italic filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)] select-none inline-block leading-none"
              >
                &amp;
              </motion.span>
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
                className="w-7 h-[1px] bg-gradient-to-l from-transparent to-textColor-ternary filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
              />
            </motion.div>

            {/* Groom's Name */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 14, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ scale: 1.025, transition: { duration: 0.35, ease: "easeOut" } }}
              className="font-allura text-[44px] sm:text-[50px] text-textColor-primary font-normal leading-[1.05] filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.98)] drop-shadow-[0_1px_3px_rgba(255,255,255,1)] tracking-wide cursor-default transition-shadow"
            >
              Abbas Ali
            </motion.h2>
          </div>

          {/* Date Pill */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10, scale: 0.93 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ scale: 1.035, transition: { duration: 0.25, ease: "easeOut" } }}
            className="mt-2 mb-3 flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-backgroundColor-primary/80 backdrop-blur-[3px] border border-borderColor-primary/45 shadow-2xs filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)] cursor-default transition-all"
          >
            <span className="text-[6.5px] text-textColor-ternary">◆</span>
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-textColor-primary uppercase">
              {WEDDING_CONFIG.receptionDate}
            </p>
            <span className="text-[6.5px] text-textColor-ternary">◆</span>
          </motion.div>

          {/* Floating Scroll Indicator */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-auto mb-3.5 flex flex-col items-center gap-1 cursor-pointer select-none"
            onClick={() => {
              const cardElem = document.getElementById("sacred-card");
              cardElem?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-playfair text-[9px] sm:text-[9.5px] tracking-[0.22em] font-bold text-textColor-ternary uppercase filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]">
                Scroll to View Invitation
              </span>
              <div className="filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]">
                <OrnamentFlourish orientation="vertical" height={32} width={9} opacity={0.85} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
