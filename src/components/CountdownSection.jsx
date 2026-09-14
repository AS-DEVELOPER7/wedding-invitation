"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

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
    <section className="py-14 px-3 sm:px-5 bg-[#FAF5EE] border-y border-[#D4AF37]/30 text-center">
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-cinzel text-[10.5px] tracking-[0.25em] text-[#8C6B3E] uppercase mb-1.5">
            Counting Down the Moments
          </p>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#2C1E25] uppercase">
            To The Blessed Celebrations
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 max-w-[340px] mx-auto mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/95 rounded-xl border border-[#D4AF37]/45 py-3 px-1.5 shadow-sm shadow-[#8C6110]/10 flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37]/30 via-[#E5C16C] to-[#D4AF37]/30" />
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#2C1E25] tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-sans text-[9px] font-bold tracking-wider text-[#8C6B3E] uppercase mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 w-full max-w-[280px] mx-auto">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#2C1E25] hover:bg-[#422C38] active:scale-[0.98] text-[#FAF8F5] font-cinzel text-xs font-bold tracking-wider py-3 px-4 rounded-xl border border-[#D4AF37]/40 shadow-sm transition-all"
          >
            <span>📅</span> Add to Google Calendar
          </a>
          <button
            onClick={handleDownloadIcs}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF6EE] active:scale-[0.98] text-[#2C1E25] font-cinzel text-xs font-bold tracking-wider py-3 px-4 rounded-xl border border-[#D4AF37]/60 shadow-sm transition-all"
          >
            <span>📥</span> Apple / Outlook iCal
          </button>
        </div>
      </div>
    </section>
  );
}
