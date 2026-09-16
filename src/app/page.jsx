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
    // Ensure document body overflow remains auto for smooth scrolling
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpenStart = () => {
    setEnvelopeState("opening");
  };

  const handleOpened = () => {
    setEnvelopeState("opened");
  };

  const isRevealed = envelopeState === "opening" || envelopeState === "opened";

  return (
    <div className="min-h-screen w-full bg-backgroundColor-ternary sm:py-6 flex flex-col justify-center items-center relative overflow-x-hidden">
      {/* Desktop Ambient Luxury Canvas Backdrop */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(var(--color-borderColor-primary)_1px,transparent_1px)] [background-size:20px_20px] hidden sm:block" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-backgroundColor-ternary via-transparent to-backgroundColor-secondary hidden sm:block" />

      {/* Desktop Subtitle Badge indicating Mobile Experience */}
      <div className="hidden sm:flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-backgroundColor-primary/80 border border-borderColor-primary/35 shadow-sm text-center z-10">
        <span className="text-xs">📱</span>
        <span className="font-playfair text-[11px] font-bold tracking-[0.2em] text-textColor-ternary uppercase">
          Exclusive Mobile Invitation
        </span>
      </div>

      {/* Mobile-Only Dedicated App Container (Edge-to-Edge on Mobile, Phone Bezel on Desktop) */}
      <main
        className={`relative w-full sm:max-w-[420px] bg-backgroundColor-primary text-textColor-primary selection:bg-borderColor-secondary/30 selection:text-textColor-primary z-10 ${
          envelopeState === "closed"
            ? "h-[100dvh] sm:h-[min(840px,calc(100dvh-3.5rem))] overflow-hidden"
            : "min-h-screen sm:min-h-[min(840px,calc(100dvh-3.5rem))] overflow-x-hidden"
        } sm:rounded-[44px] sm:shadow-[0_25px_80px_rgba(44,30,37,0.35),0_0_0_10px_var(--color-textColor-primary),0_0_0_12px_var(--color-borderColor-primary)]`}
      >
        {/* Desktop Phone Mockup Speaker / Camera Pill (Dynamic Island) */}
        <div className="hidden sm:flex absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-textColor-primary rounded-full z-50 items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-textColor-secondary mr-2" />
          <div className="w-10 h-1 bg-textColor-secondary rounded-full" />
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

          {/* Ceremonies & Events Timeline */}
          <ProgramSection />

          {/* Live Countdown & Add to Calendar */}
          <CountdownSection />

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
