"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

export default function SacredInvitationCard() {
  const { sacredText, couple, familyHonors } = WEDDING_CONFIG;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fluid physics spring for silky, natural scroll responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // ── 1. Card Parallax & Dimensional Depth ──
  const cardY = useTransform(smoothProgress, [0, 1], [32, -32]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.97, 1, 0.985]);

  // ── 2. Ambient Lighting Glow Drift ──
  const orbY = useTransform(smoothProgress, [0, 1], [-40, 50]);

  // ── 3. Multi-Layer Text Parallax Transforms ──
  const bismillahY = useTransform(smoothProgress, [0, 1], [22, -22]);
  const rosetteY = useTransform(smoothProgress, [0, 1], [16, -16]);
  const vasilaY = useTransform(smoothProgress, [0, 1], [12, -12]);
  const nikahY = useTransform(smoothProgress, [0, 1], [8, -8]);
  const hostY = useTransform(smoothProgress, [0, 1], [5, -5]);
  const coupleY = useTransform(smoothProgress, [0, 1], [-4, 6]);
  const coupleScale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.98, 1.025, 0.98]);
  const flourishY = useTransform(smoothProgress, [0, 1], [4, -4]);
  const familyY = useTransform(smoothProgress, [0, 1], [8, -8]);

  return (
    <section
      id="sacred-card"
      ref={sectionRef}
      className="relative -mt-1 pt-12 pb-16 px-3 sm:px-4 bg-gradient-to-b from-backgroundColor-primary via-backgroundColor-primary via-35% to-backgroundColor-secondary flex justify-center overflow-hidden"
    >
      {/* Ambient Soft Gold Background Lighting with Gentle Parallax Drift */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(var(--color-borderColor-primary)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_100px)]" />
      <motion.div
        style={{ y: orbY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-backgroundColor-secondary/80 blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ y: cardY, scale: cardScale }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[390px] sm:max-w-[420px] z-10 will-change-transform"
      >
        {/* ══════════════════════════════════════════════════════════
            ROYAL ARCH INVITATION CARD (BACKGROUND SHAPED TO FRAME)
            ══════════════════════════════════════════════════════════ */}
        <div className="relative w-full filter drop-shadow-[0_15px_40px_rgba(140,97,16,0.15)] drop-shadow-[0_4px_12px_rgba(44,30,37,0.06)]">

          {/* ── Seamless Scalable Moorish Arch Frame & Shaped Background Layer ── */}
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col select-none">
            {/* Top Cap with Arch-Shaped Background Fill strictly inside arch (Corners are 100% transparent) */}
            <div className="w-full shrink-0 relative -mb-[1px] ">
              <svg
                viewBox="0 0 960 376"
                className="w-full h-auto block select-none pointer-events-none absolute inset-0"
              >
                <defs>
                  <linearGradient id="topArchBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FCFAF7" />
                    <stop offset="60%" stopColor="#FFFDFB" />
                    <stop offset="100%" stopColor="#FFFDFB" />
                  </linearGradient>
                  {/* Top Arch Clip Path ensuring textures never bleed into outer corners */}
                  <clipPath id="topArchClip">
                    <path
                      d="M 13.33 376 
                         C 13.33 330, 50 290, 80 260 
                         C 85 230, 105 185, 120 164 
                         C 180 120, 420 60, 480 20 
                         C 540 60, 780 120, 840 164 
                         C 855 185, 875 230, 880 260 
                         C 910 290, 946.67 330, 946.67 376 
                         L 946.67 376 L 13.33 376 Z"
                    />
                  </clipPath>
                  {/* Subtle Handmade Paper Texture Pattern */}
                  <pattern
                    id="topArchPaperPattern"
                    patternUnits="userSpaceOnUse"
                    width="480"
                    height="480"
                  >
                    <image
                      href={ASSETS.sacredCard.paperTexture}
                      x="0"
                      y="0"
                      width="480"
                      height="480"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                  {/* Subtle Gold Islamic Geometric Watermark Pattern */}
                  <pattern
                    id="topArchGoldPattern"
                    patternUnits="userSpaceOnUse"
                    width="240"
                    height="240"
                  >
                    <image
                      href={ASSETS.sacredCard.cardPatternGold}
                      x="0"
                      y="0"
                      width="240"
                      height="240"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                </defs>
                {/* Base cream arch fill */}
                <path
                  d="M 13.33 376 
                     C 13.33 330, 50 290, 80 260 
                     C 85 230, 105 185, 120 164 
                     C 180 120, 420 60, 480 20 
                     C 540 60, 780 120, 840 164 
                     C 855 185, 875 230, 880 260 
                     C 910 290, 946.67 330, 946.67 376 
                     L 946.67 376 L 13.33 376 Z"
                  fill="url(#topArchBg)"
                />
                {/* Subtle Textures strictly clipped inside top arch */}
                <g clipPath="url(#topArchClip)">
                  {/* Tactile paper grain */}
                  <rect
                    x="0"
                    y="0"
                    width="960"
                    height="376"
                    fill="url(#topArchPaperPattern)"
                    opacity="0.22"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  {/* Whisper-soft gold watermark pattern */}
                  <rect
                    x="0"
                    y="0"
                    width="960"
                    height="376"
                    fill="url(#topArchGoldPattern)"
                    opacity="0.1"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </g>
              </svg>
              <Image
                src={ASSETS.sacredCard.ornamentalFrameTop}
                alt=""
                width={960}
                height={376}
                className="w-full h-auto block select-none relative z-10"
              />
            </div>

            {/* Seamless Connecting Side Rails & Continuous Middle Background Body */}
            <div className="flex-1 w-full relative">
              {/* Middle Background Fill & Textures strictly inside the main arch line */}
              <div
                className="absolute inset-y-0 overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#FAF6EF] to-[#FAF2E6]"
                style={{
                  left: "1.3885%",
                  right: "1.3885%",
                }}
              >
                {/* Subtle Tactile Paper Grain Texture */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.22]"
                  style={{
                    backgroundImage: `url(${ASSETS.sacredCard.paperTexture})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "480px 480px",
                  }}
                />

                {/* Whisper-Soft Gold Islamic Star Geometric Watermark */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.15]"
                  style={{
                    backgroundImage: `url(${ASSETS.sacredCard.cardPatternGold})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "240px 240px",
                  }}
                />
              </div>

              {/* Exact Mathematical Vector Connecting Rails (Zero gap, 100% seamless at all resolutions) */}
              <svg
                viewBox="0 0 960 100"
                preserveAspectRatio="none"
                className="absolute -top-[2px] -bottom-[2px] left-0 right-0 w-full h-[calc(100%+4px)] pointer-events-none z-10 block"
              >
                <defs>
                  <linearGradient id="middleLeftMainGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E2C87F" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#ECC86A" />
                  </linearGradient>
                  <linearGradient id="middleRightMainGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B38622" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#E2C880" />
                  </linearGradient>
                  <linearGradient id="middleHairlineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#AA7C11" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.75" />
                  </linearGradient>
                </defs>

                {/* LEFT TRIPLE GOLD RAIL */}
                <rect x="5.93" y="0" width="1.8" height="100" fill="url(#middleHairlineGrad)" />
                <rect x="11.33" y="0" width="4.0" height="100" fill="url(#middleLeftMainGrad)" />
                <rect x="26.33" y="0" width="2.0" height="100" fill="url(#middleHairlineGrad)" />

                {/* RIGHT TRIPLE GOLD RAIL */}
                <rect x="931.67" y="0" width="2.0" height="100" fill="url(#middleHairlineGrad)" />
                <rect x="944.67" y="0" width="4.0" height="100" fill="url(#middleRightMainGrad)" />
                <rect x="952.27" y="0" width="1.8" height="100" fill="url(#middleHairlineGrad)" />
              </svg>
            </div>

            {/* Bottom Cap with Arch-Shaped Background Fill strictly inside arch (Corners are 100% transparent) */}
            <div className="w-full shrink-0 relative -mt-[1px]">
              <svg
                viewBox="0 0 960 376"
                className="w-full h-auto block select-none pointer-events-none absolute inset-0"
              >
                <defs>
                  <linearGradient id="botArchBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FAF2E6" />
                    <stop offset="50%" stopColor="#F9F1E5" />
                    <stop offset="100%" stopColor="#F7F0E6" />
                  </linearGradient>
                  {/* Bottom Arch Clip Path ensuring textures never bleed into outer corners */}
                  <clipPath id="botArchClip">
                    <path
                      d="M 13.33 0 
                         C 13.33 46, 50 86, 80 116 
                         C 85 146, 105 191, 120 212 
                         C 180 256, 420 316, 480 356 
                         C 540 316, 780 256, 840 212 
                         C 855 191, 875 146, 880 116 
                         C 910 86, 946.67 46, 946.67 0 
                         L 946.67 0 L 13.33 0 Z"
                    />
                  </clipPath>
                  {/* Subtle Handmade Paper Texture Pattern */}
                  <pattern
                    id="botArchPaperPattern"
                    patternUnits="userSpaceOnUse"
                    width="480"
                    height="480"
                  >
                    <image
                      href={ASSETS.sacredCard.paperTexture}
                      x="0"
                      y="0"
                      width="480"
                      height="480"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                  {/* Subtle Gold Islamic Geometric Watermark Pattern */}
                  <pattern
                    id="botArchGoldPattern"
                    patternUnits="userSpaceOnUse"
                    width="240"
                    height="240"
                  >
                    <image
                      href={ASSETS.sacredCard.cardPatternGold}
                      x="0"
                      y="0"
                      width="240"
                      height="240"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                </defs>
                {/* Base cream arch fill */}
                <path
                  d="M 13.33 0 
                     C 13.33 46, 50 86, 80 116 
                     C 85 146, 105 191, 120 212 
                     C 180 256, 420 316, 480 356 
                     C 540 316, 780 256, 840 212 
                     C 855 191, 875 146, 880 116 
                     C 910 86, 946.67 46, 946.67 0 
                     L 946.67 0 L 13.33 0 Z"
                  fill="url(#botArchBg)"
                />
                {/* Subtle Textures strictly clipped inside bottom arch */}
                <g clipPath="url(#botArchClip)">
                  {/* Tactile paper grain */}
                  <rect
                    x="0"
                    y="0"
                    width="960"
                    height="376"
                    fill="url(#botArchPaperPattern)"
                    opacity="0.3"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  {/* Whisper-soft gold watermark pattern */}
                  <rect
                    x="0"
                    y="0"
                    width="960"
                    height="376"
                    fill="url(#botArchGoldPattern)"
                    opacity="0.3"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </g>
              </svg>
              <Image
                src={ASSETS.sacredCard.ornamentalFrameBottom}
                alt=""
                width={960}
                height={376}
                className="w-full h-auto block select-none relative z-10"
              />
            </div>
          </div>

          {/* ── Main Invitation Content Body ── */}
          <div className="relative z-30 px-6 sm:px-8 pt-10 sm:pt-12 pb-14 sm:pb-16 flex flex-col items-center text-center">
            
            {/* 1. Artistic Bismillah Calligraphy (1st Image) nestled inside the arch */}
            <motion.div
              style={{ y: bismillahY }}
              className="w-[120px] sm:w-[120px] h-auto mb-2 filter drop-shadow-[0_1px_3px_rgba(80,45,40,0.14)] will-change-transform"
            >
              <Image
                src={ASSETS.sacredCard.bismillahArtistic}
                alt={sacredText.bismillahArabic}
                width={100}
                height={100}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* 2. Gold Arabesque Rosette & Filigree Whisker Motif (Reference 3rd Image) */}
            <motion.div
              style={{ y: rosetteY }}
              className="flex items-center justify-center gap-2 mb-3.5 text-textColor-ternary will-change-transform"
            >
              <span className="w-8 h-[0.6px] bg-gradient-to-r from-transparent to-textColor-ternary/75" />
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current drop-shadow-xs"
                aria-hidden="true"
              >
                <path d="M12 0 L14.2 9.5 L23 12 L14.2 14.5 L12 24 L9.8 14.5 L1 12 L9.8 9.5 Z" />
                <circle cx="12" cy="12" r="2" fill="var(--color-backgroundColor-primary)" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
              <span className="w-8 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/75" />
            </motion.div>

            {/* 3. Sacred Vasila & Holy Blessings */}
            <motion.div
              style={{ y: vasilaY }}
              className="font-playfair text-textColor-primary text-[11px] sm:text-[11.5px] leading-[1.75] max-w-[300px] mb-3 tracking-wide will-change-transform"
            >
              <p className="font-semibold text-textColor-ternary mb-0.5">
                {sacredText.vasilaLine1}
              </p>
              <p className="font-normal opacity-90">
                {sacredText.vasilaLine2}
              </p>
              <p className="font-normal opacity-85 text-[10.5px]">
                {sacredText.vasilaLine3}
              </p>
              <p className="font-semibold text-textColor-ternary mt-0.5">
                {sacredText.vasilaLine4}
              </p>
            </motion.div>

            {/* 4. Nikah Solemnization Pill (Regal & Centered) */}
            <motion.div
              style={{ y: nikahY }}
              className="w-full max-w-[290px] border-t border-b border-borderColor-primary/35 py-1.5 my-1.5 text-center bg-backgroundColor-primary/70 backdrop-blur-[2px] rounded-md will-change-transform"
            >
              <p className="font-playfair text-[9.5px] font-bold tracking-[0.16em] text-textColor-ternary uppercase mb-0.5">
                Nikah Solemnised on Dast-e-Mubarak
              </p>
              <p className="font-playfair text-[11px] text-textColor-primary font-medium leading-snug">
                {sacredText.nikahDeclaration}
              </p>
            </motion.div>

            {/* 5. Arabic Host Greeting & Preamble (Matching Image 3) */}
            <motion.div
              style={{ y: hostY }}
              className="mt-2.5 mb-2 max-w-[300px] will-change-transform"
            >
              <p className="font-playfair italic text-[11px] text-textColor-secondary mb-0.5">
                {sacredText.invitationPreamble}
              </p>
              <h3 className="font-allura text-lg sm:text-xl font-bold tracking-[0.14em] text-textColor-primary  my-1">
                {sacredText.invitationHosts}
              </h3>
              <p className="font-playfair text-[11px] text-textColor-secondary leading-relaxed">
                {sacredText.invitationRequest}
              </p>
            </motion.div>

            {/* 6. Focal Royal Couple Announcement */}
            <motion.div
              style={{ y: coupleY, scale: coupleScale }}
              className="my-2.5 py-1 flex flex-col items-center will-change-transform"
            >
              {/* Bride Name */}
              <h2 className="font-allura text-3xl  font-bold tracking-[0.16em] text-textColor-ternary ">
                {couple.bride.firstName}
              </h2>

              {/* Script 'with' flourish */}
              <span className="font-allura text-2xl sm:text-3xl text-textColor-primary -my-1 font-normal select-none">
                with
              </span>

              {/* Groom Name */}
              <h2 className="font-allura text-3xl  font-bold tracking-[0.16em] text-textColor-ternary ">
                {couple.groom.firstName}
              </h2>
              <p className="font-playfair italic text-[11px] text-textColor-secondary mt-1 font-medium">
                {sacredText.groomParentage}
              </p>
            </motion.div>

            {/* 9. Middle Gold Flourish Divider */}
            <motion.div
              style={{ y: flourishY }}
              className="my-3 flex items-center justify-center w-full will-change-transform"
            >
              <OrnamentFlourish orientation="horizontal" width={150} height={10} opacity={0.85} />
            </motion.div>

            {/* 10. Family Honors & Blessings (ALWAYS SHOWN per user request) */}
            <motion.div
              style={{ y: familyY }}
              className="w-full max-w-[310px] my-2 p-3.5 sm:p-4 bg-backgroundColor-primary/85 border border-borderColor-primary/35 rounded-xl text-center space-y-3 shadow-xs will-change-transform"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-[0.5px] bg-borderColor-primary/70" />
                <span className="font-playfair text-[10px] font-bold tracking-[0.18em] text-textColor-ternary uppercase">
                  Family Honors & Blessings
                </span>
                <span className="w-5 h-[0.5px] bg-borderColor-primary/70" />
              </div>

              <div>
                <p className="font-playfair text-[9.5px] font-bold tracking-[0.16em] text-textColor-ternary uppercase mb-1">
                  With Blessings Of:
                </p>
                <div className="font-sans text-[10.5px] text-textColor-primary space-y-0.5 leading-relaxed">
                  {familyHonors.withBlessingsOf.map((name, idx) => (
                    <p key={idx}>{name}</p>
                  ))}
                </div>
              </div>

              <div className="pt-1 border-t border-borderColor-primary/20">
                <p className="font-playfair text-[9.5px] font-bold tracking-[0.16em] text-textColor-ternary uppercase mb-1">
                  Special Request:
                </p>
                <div className="font-sans text-[10.5px] text-textColor-primary space-y-0.5 leading-relaxed">
                  {familyHonors.specialRequest.map((name, idx) => (
                    <p key={idx}>{name}</p>
                  ))}
                </div>
              </div>

              <div className="pt-1 border-t border-borderColor-primary/20">
                <p className="font-playfair text-[9.5px] font-bold tracking-[0.16em] text-textColor-ternary uppercase mb-1">
                  With Best Compliments From:
                </p>
                <div className="font-sans text-[10px] text-textColor-secondary leading-relaxed">
                  {familyHonors.withBestComplimentsFrom.map((comp, idx) => (
                    <p key={idx}>{comp}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 11. Traditional Closing Prayer */}
            <div className="mt-3 mb-10 flex flex-col items-center">
              {/* <p className="text-base sm:text-lg font-bold text-textColor-ternary direction-rtl mb-1">
                {closingDua.arabic}
              </p>
              <p className="font-playfair italic text-[10.5px] text-textColor-secondary max-w-[280px] leading-relaxed">
                &quot;{closingDua.english}&quot;
              </p> */}
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
