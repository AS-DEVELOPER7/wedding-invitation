"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

// Deterministic golden embers & stardust particles for celebration anticipation
const GOLDEN_EMBERS = [
  { id: 1, left: "7%", bottom: "18%", size: 3, duration: 6.2, delay: 0.2, driftX: [0, 8, -4, 0], rise: -140, type: "dot" },
  { id: 2, left: "16%", bottom: "35%", size: 4, duration: 7.5, delay: 1.8, driftX: [0, -10, 6, 0], rise: -160, type: "star" },
  { id: 3, left: "24%", bottom: "12%", size: 2.5, duration: 5.8, delay: 0.8, driftX: [0, 6, -8, 0], rise: -120, type: "dot" },
  { id: 4, left: "32%", bottom: "48%", size: 3.5, duration: 6.9, delay: 2.5, driftX: [0, -6, 8, 0], rise: -150, type: "dot" },
  { id: 5, left: "44%", bottom: "22%", size: 4, duration: 8.1, delay: 1.2, driftX: [0, 10, -6, 0], rise: -170, type: "star" },
  { id: 6, left: "54%", bottom: "14%", size: 3, duration: 5.5, delay: 0.5, driftX: [0, -8, 6, 0], rise: -130, type: "dot" },
  { id: 7, left: "65%", bottom: "42%", size: 4.5, duration: 7.2, delay: 2.1, driftX: [0, 7, -9, 0], rise: -155, type: "star" },
  { id: 8, left: "74%", bottom: "18%", size: 2.5, duration: 6.4, delay: 1.0, driftX: [0, -7, 5, 0], rise: -135, type: "dot" },
  { id: 9, left: "83%", bottom: "38%", size: 3.5, duration: 7.8, delay: 3.0, driftX: [0, 8, -6, 0], rise: -165, type: "dot" },
  { id: 10, left: "92%", bottom: "20%", size: 4, duration: 6.6, delay: 1.5, driftX: [0, -9, 7, 0], rise: -145, type: "star" },
  { id: 11, left: "12%", bottom: "62%", size: 2, duration: 5.2, delay: 2.8, driftX: [0, 5, -5, 0], rise: -110, type: "dot" },
  { id: 12, left: "88%", bottom: "58%", size: 2.5, duration: 5.6, delay: 0.9, driftX: [0, -6, 6, 0], rise: -115, type: "dot" },
];

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(WEDDING_CONFIG.countdownTarget).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadIcs = () => {
    const { calendar } = WEDDING_CONFIG;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Amatullah & Abbas Ali Wedding//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${calendar.title}`,
      `DESCRIPTION:${calendar.description}`,
      `LOCATION:${calendar.location}`,
      `DTSTART:${calendar.startDate}`,
      `DTEND:${calendar.endDate}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "amatullah-abbasali-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    WEDDING_CONFIG.calendar.title
  )}&details=${encodeURIComponent(WEDDING_CONFIG.calendar.description)}&location=${encodeURIComponent(
    WEDDING_CONFIG.calendar.location
  )}&dates=${WEDDING_CONFIG.calendar.startDate}/${WEDDING_CONFIG.calendar.endDate}`;

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-backgroundColor-secondary to-backgroundColor-primary text-center overflow-hidden">
      {/* Ambient Warm Golden Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] h-[260px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* ⚜️ Golden Celebration Stardust & Twinkling Star Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {GOLDEN_EMBERS.map((ember) => (
          <motion.div
            key={ember.id}
            className="absolute"
            style={{
              left: ember.left,
              bottom: ember.bottom,
            }}
            animate={{
              y: [0, ember.rise * 0.5, ember.rise],
              x: ember.driftX,
              opacity: [0, 0.9, 0.3, 0.95, 0],
              scale: ember.type === "star" ? [0.6, 1.25, 0.8, 1.15, 0.4] : [0.7, 1.1, 0.85, 1.2, 0.5],
              rotate: ember.type === "star" ? [0, 45, 90, 135, 180] : 0,
            }}
            transition={{
              duration: ember.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ember.delay,
            }}
          >
            {ember.type === "star" ? (
              <svg
                viewBox="0 0 24 24"
                className="text-[#D4AF37] fill-current drop-shadow-[0_0_8px_rgba(212,175,55,0.85)]"
                style={{ width: `${ember.size * 2.8}px`, height: `${ember.size * 2.8}px` }}
                aria-hidden="true"
              >
                <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
              </svg>
            ) : (
              <div
                className="rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F3E2A5] to-[#ECC86B] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{
                  width: `${ember.size}px`,
                  height: `${ember.size}px`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Section Header with Royal Star Motifs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-center"
        >
          {/* Mini Royal Star Whisker Badge */}
          <div className="flex items-center justify-center gap-2 mb-2 text-textColor-ternary">
            <span className="w-8 h-[0.6px] bg-gradient-to-r from-transparent to-textColor-ternary/75" />
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current drop-shadow-xs" aria-hidden="true">
              <path d="M12 0 L14.2 9.5 L23 12 L14.2 14.5 L12 24 L9.8 14.5 L1 12 L9.8 9.5 Z" />
              <circle cx="12" cy="12" r="2" fill="var(--color-backgroundColor-secondary)" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className="w-8 h-[0.6px] bg-gradient-to-l from-transparent to-textColor-ternary/75" />
          </div>

          <p className="font-playfair text-[10.5px] tracking-[0.25em] text-textColor-ternary uppercase mb-1 font-semibold">
            Counting Down the Moments
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-textColor-primary uppercase">
            To The Blessed Celebrations
          </h2>

          <OrnamentFlourish orientation="horizontal" width={130} height={9} opacity={0.75} className="mt-2.5" />
        </motion.div>

        {/* 4 Royal Plaque Digit Cards */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[360px] mx-auto mb-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds, isSecs: true },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-[#ECC86B] via-[#D4AF37]/50 to-[#AA7C11]/30 shadow-[0_8px_20px_rgba(140,97,16,0.08),0_2px_6px_rgba(44,30,37,0.04)] group transition-all duration-300"
            >
              {/* Inner Arch Tablet Body */}
              <div className="relative rounded-[15px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF7F2] to-[#F5ECE0] py-3.5 px-1.5 flex flex-col items-center overflow-hidden">
                {/* Subtle Tactile Paper Grain Texture */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.2]"
                  style={{
                    backgroundImage: `url(${ASSETS.sacredCard.paperTexture})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                  }}
                />

                {/* Top Metallic Gold Lip Accent */}
                <div className="absolute top-0 inset-x-2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Digit Value */}
                <span className="relative z-10 font-playfair text-2xl sm:text-[28px] font-bold text-textColor-primary tracking-tight leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  {String(item.value).padStart(2, "0")}
                </span>

                {/* Label with Gold Pulsing Dot for Seconds */}
                <div className="relative z-10 flex items-center justify-center gap-1 mt-1.5">
                  <span className="font-sans text-[9px] sm:text-[9.5px] font-bold tracking-[0.16em] text-textColor-ternary uppercase">
                    {item.label}
                  </span>
                  {item.isSecs && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse inline-block shadow-xs" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regal Date Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="inline-flex items-center justify-center gap-2 mb-7 px-4 py-1.5 rounded-full bg-backgroundColor-primary/80 border border-borderColor-primary/40 shadow-xs text-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-borderColor-primary/80" />
          <p className="font-playfair text-[10.5px] sm:text-[11px] font-semibold tracking-wider text-textColor-primary">
            Friday, 14th October 2026 • Dungarpur, Rajasthan
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-borderColor-primary/80" />
        </motion.div>

        {/* Bespoke Luxury Calendar Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[340px] mx-auto">
          {/* Google Calendar Button */}
          <motion.a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2C1E25] via-[#3E2A34] to-[#2C1E25] text-[#FAF8F5] font-playfair text-[11px] sm:text-xs font-bold tracking-wider py-3 px-3.5 rounded-xl border border-borderColor-primary/50 shadow-[0_4px_16px_rgba(44,30,37,0.2)] hover:shadow-[0_6px_20px_rgba(140,97,16,0.25)] transition-all group"
          >
            {/* Bespoke Gold Calendar Icon */}
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#D4AF37] fill-current group-hover:scale-110 transition-transform" aria-hidden="true">
              <path d="M6 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 19 5.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 1 16.5v-11A2.5 2.5 0 0 1 3.5 3H5V2a1 1 0 0 1 1-1zm11 6H3v9.5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7zm-7 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
            </svg>
            <span>Google Calendar</span>
          </motion.a>

          {/* Apple / Outlook iCal Button */}
          <motion.button
            onClick={handleDownloadIcs}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFFDFB] to-[#F5ECE0] text-textColor-primary font-playfair text-[11px] sm:text-xs font-bold tracking-wider py-3 px-3.5 rounded-xl border border-borderColor-primary/60 shadow-[0_2px_12px_rgba(140,97,16,0.1)] hover:border-borderColor-primary hover:shadow-[0_4px_16px_rgba(140,97,16,0.18)] transition-all group"
          >
            {/* Bespoke Gold iCal Download Icon */}
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#8C6110] fill-current group-hover:scale-110 transition-transform" aria-hidden="true">
              <path d="M10 2a1 1 0 0 1 1 1v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L9 10.59V3a1 1 0 0 1 1-1zm-6 13a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
            </svg>
            <span>Apple / iCal</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
