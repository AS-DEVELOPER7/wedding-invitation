"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";

export default function EnvelopeGate({ isOpening: parentIsOpening, onOpenStart, onOpened }) {
  const [internalOpening, setInternalOpening] = useState(false);
  const isOpening = parentIsOpening || internalOpening;

  const handleOpen = () => {
    if (isOpening) return;
    setInternalOpening(true);
    if (typeof onOpenStart === "function") {
      onOpenStart();
    }

    // Flap parting animation completes in 950ms, then hand off cleanly to opened state
    setTimeout(() => {
      if (typeof onOpened === "function") {
        onOpened();
      }
    }, 100);
  };

  return (
    <div
      className="absolute inset-0 z-40 overflow-hidden select-none cursor-pointer"
      onClick={handleOpen}
    >
      {/* ══════════════════════════════════════════════════════════
          ENVELOPE FRONT POCKET FLAPS (Left, Right, Bottom, Top)
          ══════════════════════════════════════════════════════════ */}

      {/* Left Triangular Flap */}
      <motion.div
        animate={isOpening ? { x: "-105%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          clipPath: "polygon(-1% -1%, -1% 101%, 50.5% 46%)",
          background: "linear-gradient(135deg, #F8F2ED 0%, #EFE7E0 100%)",
          filter: "drop-shadow(3px 0 8px rgba(80, 55, 45, 0.08))",
        }}
      >
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage: `url(${ASSETS.envelope.paperTexture})`,
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* Right Triangular Flap */}
      <motion.div
        animate={isOpening ? { x: "105%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          clipPath: "polygon(101% -1%, 101% 101%, 49.5% 46%)",
          background: "linear-gradient(-135deg, #F8F2ED 0%, #EFE7E0 100%)",
          filter: "drop-shadow(-3px 0 8px rgba(80, 55, 45, 0.08))",
        }}
      >
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage: `url(${ASSETS.envelope.paperTexture})`,
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* Bottom Triangular Flap */}
      <motion.div
        animate={isOpening ? { y: "105%", opacity: 0 } : { y: "0%", opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-25 pointer-events-none"
        style={{
          clipPath: "polygon(-1% 101%, 101% 101%, 50% 45.5%)",
          background: "linear-gradient(to top, #EDE3DC 0%, #FAF5F0 100%)",
          filter: "drop-shadow(0 -5px 14px rgba(80, 55, 45, 0.12))",
        }}
      >
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage: `url(${ASSETS.envelope.paperTexture})`,
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* Top Triangular Flap */}
      <motion.div
        animate={isOpening ? { y: "-105%", opacity: 0 } : { y: "0%", opacity: 1 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "polygon(-1% -1%, 101% -1%, 50% 46.5%)",
          background: "linear-gradient(135deg, #FAF5F0 0%, #EFE6DE 100%)",
          filter: "drop-shadow(0 6px 16px rgba(80, 55, 45, 0.14))",
        }}
        className="absolute inset-0 z-30 pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage: `url(${ASSETS.envelope.paperTexture})`,
            backgroundSize: "cover",
          }}
        />
        {/* Soft light sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent" />
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          TRANSPARENT PNG GOLD WAX SEAL STAMP (Zero Background)
          ══════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ top: "46%", left: "50%" }}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-40 w-22 h-22 sm:w-24 sm:h-24 pointer-events-auto cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleOpen();
        }}
        animate={
          isOpening
            ? { scale: 1.18, opacity: 0 }
            : { scale: [1, 1.03, 1] }
        }
        transition={
          isOpening
            ? { duration: 0.22, ease: "easeOut" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Subtle soft gold ripple ring when idle */}
        {!isOpening && (
          <span className="absolute inset-[-4px] rounded-full border border-[#D4AF37]/50 animate-ping opacity-40 pointer-events-none" />
        )}

        <div className="relative w-full h-full filter drop-shadow-[0_6px_14px_rgba(70,45,30,0.38)] hover:scale-105 active:scale-95 transition-transform">
          <Image
            src={ASSETS.envelope.waxSeal}
            alt="Gold Wax Seal Bismillah"
            fill
            priority
            sizes="96px"
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          HELPER TEXT & ORNAMENTAL FLOURISH (Appuyez pour ouvrir)
          ══════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ top: "54%" }}
        animate={isOpening ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="absolute inset-x-0 z-35 flex flex-col items-center pointer-events-none text-center px-4"
      >
        <p className="font-playfair italic text-[13px] tracking-[0.14em] text-[#9E8578] mb-1">
          Tap to open
        </p>
        <div className="w-12 h-auto opacity-70">
          <Image
            src={ASSETS.svg.flourish}
            alt="Ornamental Flourish"
            width={48}
            height={16}
            className="w-full h-auto filter brightness-90"
          />
        </div>
      </motion.div>
    </div>
  );
}
