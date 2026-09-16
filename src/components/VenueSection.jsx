"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

export default function VenueSection() {
  const { venue } = WEDDING_CONFIG;
  const locations = venue.locations || [
    {
      id: "burhani-hall",
      name: venue.name,
      role: "Wedding Ceremonies",
      dates: "21st – 25th October",
      address: venue.address,
      mapEmbedQuery: `${venue.name}, Dungarpur, Rajasthan`,
      googleMapsUrl: venue.googleMapsUrl,
      type: "Ceremonial Venue",
      highlights: venue.subHall,
    },
  ];

  const [activeTab, setActiveTab] = useState(locations[0].id);
  const [copied, setCopied] = useState(false);

  const activeLocation = locations.find((loc) => loc.id === activeTab) || locations[0];

  // ═══════════════════════════════════════════════════════════════
  // 🌊 SMOOTH PROFESSIONAL PARALLAX SYSTEM
  // ═══════════════════════════════════════════════════════════════
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // 1. Ambient Lighting Drift
  const orbY = useTransform(smoothProgress, [0, 1], [-45, 55]);
  const orbScale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1.06, 0.96]);

  // 2. Section Header Parallax
  const headerY = useTransform(smoothProgress, [0, 1], [20, -18]);

  // 3. Master Card Parallax
  const cardY = useTransform(smoothProgress, [0, 1], [14, -14]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(activeLocation.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="wedding-venue"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-backgroundColor-secondary via-[#FAF6F0] to-backgroundColor-primary overflow-hidden"
    >
      {/* ── Ambient Palatial Backlight Glow with Scroll Drift ── */}
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10 will-change-transform"
      />

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* ═══════════════════════════════════════════════════════════════
            SECTION HEADER
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
              <circle cx="12" cy="12" r="2" fill="var(--color-backgroundColor-secondary)" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className="w-8 sm:w-10 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/75" />
          </div>

          <p className="font-playfair text-[10.5px] sm:text-[11px] tracking-[0.25em] text-textColor-ternary uppercase mb-1.5 font-semibold">
            Location &amp; Directions
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-textColor-primary uppercase mb-2">
            Wedding Venues
          </h2>

          <OrnamentFlourish orientation="horizontal" width={130} height={9} opacity={0.75} className="mt-1" />

          {/* ═════════════════════════════════════════════════════════════
              INTERACTIVE VENUE SELECTOR TABS
          ═════════════════════════════════════════════════════════════ */}
          <div className="flex items-center justify-center gap-1.5 mt-5 p-1 rounded-full bg-backgroundColor-primary/90 border border-borderColor-primary/35 shadow-xs backdrop-blur-xs w-full max-w-[390px]">
            {locations.map((loc) => {
              const isActive = loc.id === activeTab;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`relative flex-1 py-1.5 px-2 rounded-full text-[11px] sm:text-xs font-playfair font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#2C1E25] via-[#3E2A34] to-[#2C1E25] text-[#FAF8F5] shadow-xs"
                      : "text-textColor-secondary hover:text-textColor-primary"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    {loc.id === "residence" ? (
                      "Residence"
                    ) : (
                      <>
                        <span>{loc.name.split(" ")[0]}</span>
                        <span className="hidden sm:inline"> {loc.name.split(" ")[1]}</span>
                      </>
                    )}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse inline-block" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            PALATIAL MASTER VENUE CARD
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-[#ECC86B] via-[#D4AF37]/50 to-[#AA7C11]/30 shadow-[0_16px_40px_rgba(140,97,16,0.1),0_4px_12px_rgba(44,30,37,0.05)] overflow-hidden will-change-transform"
        >
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF7F2] to-[#F5ECE0] overflow-hidden flex flex-col">
            {/* 1. Cotton Rag Paper Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.22] z-0"
              style={{
                backgroundImage: `url(${ASSETS.sacredCard.paperTexture})`,
                backgroundRepeat: "repeat",
                backgroundSize: "200px 200px",
              }}
            />

            {/* 2. Gold Jali Lattice Watermark */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.04] z-0"
              style={{
                backgroundImage: `url(${ASSETS.program.latticeGold})`,
                backgroundRepeat: "repeat",
                backgroundSize: "140px 233px",
              }}
            />

            {/* ═════════════════════════════════════════════════════════════
                HERO BANNER IMAGE WITH MOORISH VIGNETTE
            ═════════════════════════════════════════════════════════════ */}
            <div className="relative w-full h-[190px] sm:h-[220px] overflow-hidden">
              <Image
                src={ASSETS.venue.hallBanner}
                alt={activeLocation.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Royal Palatial Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E25] via-[#2C1E25]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

              {/* Gold Lip Divider Trim */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />

              {/* Banner Text Overlay with Smooth Tab Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-3.5 inset-x-4 text-center z-10"
                >
                  <span className="inline-block px-3 py-0.5 mb-1.5 rounded-full bg-black/45 backdrop-blur-xs border border-[#D4AF37]/50 text-[10px] font-playfair font-bold tracking-widest text-[#F3E2A5] uppercase">
                    {activeLocation.type}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-[#FFFDFB] drop-shadow-md">
                    {activeLocation.name}
                  </h3>
                  <p className="font-playfair italic text-xs text-[#E5C16C] drop-shadow-xs">
                    {activeLocation.role} • {activeLocation.dates}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ═════════════════════════════════════════════════════════════
                VENUE DETAILS & ADDRESS
            ═════════════════════════════════════════════════════════════ */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col items-center text-center">
              {/* Address Badge Box with Smooth Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="w-full bg-backgroundColor-primary/90 rounded-2xl p-3.5 border border-borderColor-primary/35 shadow-2xs mb-4"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1 text-textColor-ternary">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current text-[#D4AF37]" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-playfair text-[10.5px] font-bold tracking-widest uppercase">
                      Address &amp; Directions
                    </span>
                  </div>
                  <p className="font-playfair text-xs sm:text-[13px] font-semibold text-textColor-primary leading-relaxed">
                    {activeLocation.address}
                  </p>
                  {activeLocation.highlights && (
                    <p className="font-playfair italic text-[11px] text-textColor-ternary/90 mt-1">
                      {activeLocation.highlights}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* ═════════════════════════════════════════════════════════════
                  EMBEDDED INTERACTIVE GOOGLE MAP (DUNGARPUR, RAJASTHAN)
              ═════════════════════════════════════════════════════════════ */}
              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden border border-borderColor-primary/45 shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] mb-4 bg-[#FAF7F2]">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeLocation.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    title={`${activeLocation.name} Map`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      activeLocation.mapEmbedQuery
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </AnimatePresence>

                {/* Map Floating Location Pill */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#2C1E25]/90 text-[#FAF8F5] border border-borderColor-primary/40 text-[10px] font-playfair font-semibold tracking-wide shadow-sm flex items-center gap-1.5 pointer-events-none backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping inline-block" />
                  <span>
                    {activeLocation.id === "residence" ? "Residence" : activeLocation.name.split(" ")[0]} • Dungarpur
                  </span>
                </div>
              </div>

              {/* Guest Valet / Parking Convenience Note */}
              <p className="font-playfair italic text-[11px] text-textColor-ternary mb-4.5 flex items-center justify-center gap-1.5">
                <span className="text-[#D4AF37]">✨</span>
                <span>{venue.valetNote || "Complimentary guest parking available at the venue entrance."}</span>
              </p>

              {/* ═════════════════════════════════════════════════════════════
                  BESPOKE LUXURY ACTION BUTTONS
              ═════════════════════════════════════════════════════════════ */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                {/* 1. Open in Google Maps */}
                <motion.a
                  href={activeLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2C1E25] via-[#3E2A34] to-[#2C1E25] text-[#FAF8F5] font-playfair text-[11px] sm:text-xs font-bold tracking-wider py-3 px-3.5 rounded-xl border border-borderColor-primary/50 shadow-[0_4px_16px_rgba(44,30,37,0.2)] hover:shadow-[0_6px_20px_rgba(140,97,16,0.25)] transition-all cursor-pointer group"
                >
                  <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current text-[#D4AF37] group-hover:scale-110 transition-transform" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Open in Maps</span>
                </motion.a>

                {/* 2. Copy Address */}
                <motion.button
                  onClick={handleCopyAddress}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFFDFB] to-[#F5ECE0] text-textColor-primary font-playfair text-[11px] sm:text-xs font-bold tracking-wider py-3 px-3.5 rounded-xl border border-borderColor-primary/60 shadow-[0_2px_12px_rgba(140,97,16,0.1)] hover:border-borderColor-primary hover:shadow-[0_4px_16px_rgba(140,97,16,0.18)] transition-all cursor-pointer group"
                >
                  {copied ? (
                    <>
                      <span className="text-[#8C6110] font-bold">✓</span>
                      <span className="text-[#8C6110]">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current text-[#8C6110] group-hover:scale-110 transition-transform" aria-hidden="true">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 2H9a3 3 0 01-3-2z" />
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
