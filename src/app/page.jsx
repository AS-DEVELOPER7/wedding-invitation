"use client";

import React, { useState, useEffect } from "react";
import EnvelopeGate from "@/components/EnvelopeGate";
import HeroSection from "@/components/HeroSection";
import SacredInvitationCard from "@/components/SacredInvitationCard";
import CountdownSection from "@/components/CountdownSection";
import ProgramSection from "@/components/ProgramSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";
import AudioController from "@/components/AudioController";

export default function Home() {
  const [envelopeState, setEnvelopeState] = useState("closed"); // "closed" | "opening" | "opened"

  useEffect(() => {
    if (envelopeState !== "opened") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [envelopeState]);

  const handleOpenStart = () => {
    setEnvelopeState("opening");
  };

  const handleOpened = () => {
    setEnvelopeState("opened");
  };

  const isRevealed = envelopeState === "opening" || envelopeState === "opened";

  return (
    <div className="min-h-screen w-full bg-[#EFE8DC] sm:py-10 flex flex-col justify-center items-center relative overflow-x-hidden">
      {/* Desktop Ambient Luxury Canvas Backdrop */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] hidden sm:block" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#EFE8DC] via-transparent to-[#E2D5C3] hidden sm:block" />

      {/* Desktop Subtitle Badge indicating Mobile Experience */}
      <div className="hidden sm:flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/70 border border-[#D4AF37]/35 shadow-sm text-center z-10">
        <span className="text-xs">📱</span>
        <span className="font-cinzel text-[11px] font-bold tracking-[0.2em] text-[#8C6B3E] uppercase">
          Exclusive Mobile Invitation
        </span>
      </div>

      {/* Mobile-Only Dedicated App Container (Edge-to-Edge on Mobile, Phone Bezel on Desktop) */}
      <main
        className={`relative w-full max-w-[420px] bg-[#FAF8F5] text-[#2C1E25] selection:bg-[#E5C16C]/30 selection:text-[#2C1E25] z-10 ${
          envelopeState === "opened"
            ? "min-h-screen sm:min-h-[860px] overflow-x-hidden"
            : "h-[100dvh] sm:h-[860px] overflow-hidden"
        } sm:rounded-[44px] sm:shadow-[0_25px_80px_rgba(44,30,37,0.35),0_0_0_10px_#1C1418,0_0_0_12px_#D4AF37]`}
      >
        {/* Desktop Phone Mockup Speaker / Camera Pill (Dynamic Island) */}
        <div className="hidden sm:flex absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1C1418] rounded-full z-50 items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A1E24] mr-2" />
          <div className="w-10 h-1 bg-[#2A1E24] rounded-full" />
        </div>

        {/* 1. Interactive Envelope Gate (Overlay) */}
        {envelopeState !== "opened" && (
          <EnvelopeGate
            isOpening={envelopeState === "opening"}
            onOpenStart={handleOpenStart}
            onOpened={handleOpened}
          />
        )}

        {/* 2. Main Scrolling Invitation Flow (Mobile Optimized) */}
        <div className="relative w-full">
          {/* Sunlit Moorish Archway Entrance (Directly revealed as flaps part) */}
          <HeroSection isOpening={isRevealed} />

          {/* The Sacred Family Invitation Card */}
          <SacredInvitationCard />

          {/* Live Countdown & Add to Calendar */}
          <CountdownSection />

          {/* Ceremonies & Events Timeline */}
          <ProgramSection />

          {/* Venue, Address & Interactive Google Map */}
          <VenueSection />

          {/* Closing Prayers & Family Gratitude */}
          <FooterSection />
        </div>

        {/* Floating Gold Lantern Audio Controller (Mobile Anchored) */}
        <AudioController autoPlayTrigger={isRevealed} />
      </main>
    </div>
  );
}
