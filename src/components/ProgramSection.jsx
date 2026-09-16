"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

export default function ProgramSection() {
  const { program } = WEDDING_CONFIG;
  const events = program.events || [];
  const residence = program.residence || {};

  // ═══════════════════════════════════════════════════════════════
  // 🌊 SMOOTH PROFESSIONAL PARALLAX SYSTEM
  // ═══════════════════════════════════════════════════════════════
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

  // 1. Ambient Lighting Glow Drift
  const orbY = useTransform(smoothProgress, [0, 1], [-50, 60]);
  const orbScale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 1.08, 0.95]);

  // 2. Section Header Parallax
  const headerY = useTransform(smoothProgress, [0, 1], [22, -18]);

  // 3. Staggered Ceremony Cards Parallax Transforms (Accordion Glide)
  const card1Y = useTransform(smoothProgress, [0, 1], [20, -8]);
  const card2Y = useTransform(smoothProgress, [0, 1], [15, -11]);
  const card3Y = useTransform(smoothProgress, [0, 1], [10, -14]);
  const card4Y = useTransform(smoothProgress, [0, 1], [5, -17]);
  const card5Y = useTransform(smoothProgress, [0, 1], [0, -20]);
  const cardTransforms = [card1Y, card2Y, card3Y, card4Y, card5Y];

  // 5. Hanging Lanterns Depth Counter-Drift
  const lanternY = useTransform(smoothProgress, [0, 1], [-8, 10]);

  // 6. Residence Card Grounding Parallax
  const residenceY = useTransform(smoothProgress, [0, 1], [8, -16]);

  return (
    <section
      id="program-itinerary"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-backgroundColor-secondary via-[#FAF6F0] to-backgroundColor-primary overflow-hidden"
    >
      {/* ── Ambient Palatial Backlight Glow with Scroll Drift ── */}
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] bg-[radial-gradient(circle,rgba(212,175,55,0.13)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10 will-change-transform"
      />

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* ═══════════════════════════════════════════════════════════════
            SECTION HEADER (PARALLAX ELEVATION)
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 flex flex-col items-center will-change-transform"
        >
          {/* Royal Star Whisker Badge */}
          <div className="flex items-center justify-center gap-2 mb-2 text-textColor-ternary">
            <span className="w-8 sm:w-10 h-[0.6px] bg-gradient-to-r from-transparent to-textColor-ternary/75" />
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current drop-shadow-xs" aria-hidden="true">
              <path d="M12 0 L14.2 9.5 L23 12 L14.2 14.5 L12 24 L9.8 14.5 L1 12 L9.8 9.5 Z" />
              <circle cx="12" cy="12" r="2" fill="var(--color-backgroundColor-primary)" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className="w-8 sm:w-10 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/75" />
          </div>

          <p className="font-playfair text-[10.5px] sm:text-[11px] tracking-[0.25em] text-textColor-ternary uppercase mb-1.5 font-semibold">
            Wedding Itinerary
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-textColor-primary uppercase mb-2">
            Ceremonies &amp; Functions
          </h2>

          <OrnamentFlourish orientation="horizontal" width={130} height={9} opacity={0.75} className="mt-1" />
        </motion.div>

      

        {/* ═══════════════════════════════════════════════════════════════
            5 INDIVIDUAL CEREMONY CARDS (STAGGERED PARALLAX GLIDE)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4 max-w-[380px] mx-auto">
          {events.map((event, idx) => {
            const cardYTransform = cardTransforms[idx] || cardTransforms[0];

            return (
              <motion.div
                key={event.id}
                style={{ y: cardYTransform }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="relative p-[1px] rounded-2xl bg-gradient-to-b from-[#ECC86B] via-[#D4AF37]/50 to-[#AA7C11]/30 shadow-[0_8px_20px_rgba(140,97,16,0.08),0_2px_6px_rgba(44,30,37,0.04)] overflow-hidden transition-all group will-change-transform"
              >
                <div className="relative rounded-[15px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF7F2] to-[#F5ECE0] p-4 sm:p-5 flex flex-col overflow-hidden">
                  {/* 1. Paper Texture */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.2]"
                    style={{
                      backgroundImage: `url(${ASSETS.sacredCard.paperTexture})`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "200px 200px",
                    }}
                  />

                  {/* 2. Gold Jali Lattice Watermark (Image 2) */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.1]"
                    style={{
                      backgroundImage: `url(${ASSETS.program.latticeGold})`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "140px 233px",
                    }}
                  />

                  {/* 3. Hanging Golden Lanterns Corner Accent (Image 3) with Delicate Parallax Counter-Drift */}
                  <motion.div
                    style={{ y: lanternY }}
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{ duration: 7 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-16 opacity-80 pointer-events-none group-hover:opacity-75 transition-opacity origin-top will-change-transform"
                  >
                    <Image
                      src={ASSETS.program.hangingLanterns}
                      alt="Decorative Hanging Lanterns"
                      width={201}
                      height={432}
                      className="w-full h-auto object-contain drop-shadow-[0_2px_6px_rgba(212,175,55,0.3)] rotate-y-180"
             
                    />
                  </motion.div>

                  {/* Top Metallic Gold Accent Strip */}
                  <div className="absolute top-0 inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                  {/* Header Row: Day Pill & Arabic Title */}
                  <div className="relative z-10 flex items-center justify-between mb-1.5 pr-14">
                    <span className="font-playfair text-[10px] font-bold tracking-widest text-textColor-ternary uppercase bg-backgroundColor-primary px-2.5 py-0.5 rounded-full border border-borderColor-primary/30 shadow-2xs">
                      {event.dayOfWeek}
                    </span>
                    {/* {event.titleArabic && (
                      <span className="text-xs font-semibold text-textColor-ternary/85 direction-rtl font-playfair">
                        {event.titleArabic}
                      </span>
                    )} */}
                  </div>

                  {/* Ceremony Title */}
                  <div className="relative z-10 mb-2.5">
                    <h3 className="font-allura text-3xl sm:text-[34px] text-textColor-primary leading-none group-hover:text-[#8C6110] transition-colors">
                      {event.title}
                    </h3>
                  </div>

                  {/* Event Date & Venue Badge Box */}
                  <div className="relative z-10 w-full bg-backgroundColor-primary/85 rounded-xl p-2.5 border-l-2 border-borderColor-primary mb-2.5 space-y-1 shadow-2xs">
                    <p className="font-playfair text-xs font-bold text-textColor-primary flex items-center gap-1.5">
                      <span className="text-textColor-ternary">📅</span> {event.date} • {event.dayOfWeek}
                    </p>
                    <p className="font-playfair text-xs font-semibold text-textColor-ternary flex items-center gap-1.5">
                      <span className="text-textColor-ternary">📍</span> {event.venue} ({event.venueDetails})
                    </p>
                  </div>

                  {/* Description Note */}
                  <p className="relative z-10 font-playfair italic text-[11.5px] text-textColor-primary/85 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* ═════════════════════════════════════════════════════════════
              RESIDENCE CARD (PARALLAX GROUNDED)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            style={{ y: residenceY }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-[#ECC86B]/60 via-[#D4AF37]/35 to-[#AA7C11]/25 shadow-xs overflow-hidden mt-1 will-change-transform"
          >
            <div className="relative rounded-[15px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF7F2] to-[#F5ECE0] p-5 text-center flex flex-col items-center overflow-hidden">
              {/* Cotton Rag Paper Texture */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.2]"
                style={{
                  backgroundImage: `url(${ASSETS.sacredCard.paperTexture})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "200px 200px",
                }}
              />

              <p className="relative z-10 font-allura text-2xl sm:text-3xl text-[#8C6110] leading-none mb-1">
                {residence.title || "Our Residence"}
              </p>
              <p className="relative z-10 font-playfair text-xs sm:text-[13px] font-semibold tracking-wider text-textColor-primary mb-3">
                {residence.address || "Shastri Colony Dungarpur, Rajasthan"}
              </p>

              {/* <a
                href="https://maps.google.com/?q=Shastri+Colony+Dungarpur+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-backgroundColor-secondary/85 border border-borderColor-primary/40 text-[10.5px] font-playfair font-semibold text-textColor-ternary hover:border-borderColor-primary hover:text-textColor-primary transition-all shadow-xs"
              >
                <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current text-[#D4AF37]" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Navigate to Residence</span>
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
