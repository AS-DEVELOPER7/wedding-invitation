"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

export default function VenueSection() {
  const { venue } = WEDDING_CONFIG;

  return (
    <section className="py-14 px-3 sm:px-5 bg-backgroundColor-secondary border-t border-borderColor-primary/30">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <p className="font-playfair text-[10.5px] tracking-[0.25em] text-textColor-ternary uppercase mb-1.5">
            Location &amp; Directions
          </p>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-textColor-primary uppercase mb-2.5">
            Wedding Venue
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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-backgroundColor-primary rounded-2xl shadow-paper-lg border border-borderColor-primary/45 overflow-hidden max-w-[340px] mx-auto"
        >
          <div className="relative w-full h-[175px] sm:h-[200px]">
            <Image
              src={ASSETS.venue.hallBanner}
              alt={venue.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-3.5 inset-x-4 text-white text-center">
              <h3 className="font-playfair text-base sm:text-lg font-bold tracking-wider text-borderColor-secondary uppercase">
                {venue.name}
              </h3>
              <p className="font-playfair italic text-xs text-white/90">
                {venue.subHall}
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 text-center flex flex-col items-center">
            <p className="font-sans text-xs leading-relaxed text-textColor-primary mb-1.5">
              {venue.address}
            </p>
            <p className="font-sans text-[11px] text-textColor-ternary italic mb-4">
              {venue.valetNote}
            </p>

            <div className="w-full h-[190px] rounded-xl overflow-hidden border border-borderColor-primary/40 mb-5 shadow-inner">
              <iframe
                title="Wedding Venue Map"
                src="https://maps.google.com/maps?q=Surat,+Gujarat,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-textColor-primary hover:opacity-90 active:scale-[0.98] text-backgroundColor-primary font-playfair text-xs font-bold tracking-wider py-3 px-5 rounded-xl border border-borderColor-primary/50 shadow-sm transition-all w-full max-w-[260px]"
            >
              <span>📍</span> Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
