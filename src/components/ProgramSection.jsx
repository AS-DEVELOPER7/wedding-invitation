"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

export default function ProgramSection() {
  const { program } = WEDDING_CONFIG;

  return (
    <section className="py-14 px-3 sm:px-5 bg-backgroundColor-primary relative">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <p className="font-playfair text-[10.5px] tracking-[0.25em] text-textColor-ternary uppercase mb-1.5">
            Wedding Itinerary
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-textColor-primary uppercase mb-2.5">
            Ceremonies &amp; Functions
          </h2>
          <div className="w-36 h-auto opacity-70">
            <Image
              src={ASSETS.svg.zelligeBorder}
              alt="Divider"
              width={150}
              height={18}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[340px] mx-auto">
          {program.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative bg-backgroundColor-primary/95 rounded-2xl p-5 shadow-paper border border-borderColor-primary/40 flex flex-col items-center text-center transition-all hover:shadow-paper-lg"
            >
              <div className="w-9 h-9 mb-3 filter drop-shadow-sm">
                <Image
                  src={ASSETS.hero.lanternCenter}
                  alt="Lantern Motif"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-textColor-ternary direction-rtl mb-0.5">
                {event.titleArabic}
              </h3>

              <h4 className="font-playfair text-base font-bold tracking-wider text-textColor-primary mb-3.5">
                {event.titleEnglish}
              </h4>

              <div className="w-full bg-backgroundColor-secondary rounded-xl p-3 border-l-2 border-borderColor-primary mb-3.5 space-y-1 text-left font-sans text-xs">
                <p className="text-textColor-primary font-semibold flex items-center gap-1.5">
                  <span>📅</span> {event.date}
                </p>
                <p className="text-textColor-ternary font-medium flex items-center gap-1.5">
                  <span>⏰</span> {event.time}
                </p>
                <p className="text-textColor-secondary flex items-center gap-1.5">
                  <span>📍</span> {event.venue}, {event.city}
                </p>
              </div>

              <p className="font-playfair italic text-xs text-textColor-primary/90 leading-relaxed mb-3.5">
                {event.description}
              </p>

              <div className="mt-auto">
                <span className="inline-block text-[10px] font-sans font-semibold tracking-wider text-textColor-ternary bg-backgroundColor-secondary px-3 py-1 rounded-full border border-borderColor-primary/35 uppercase">
                  {event.attire}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
