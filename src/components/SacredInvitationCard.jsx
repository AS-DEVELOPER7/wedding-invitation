"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";

export default function SacredInvitationCard() {
  const { sacredText, couple, familyHonors, closingDua } = WEDDING_CONFIG;

  return (
    <section id="sacred-card" className="relative py-14 px-3 sm:px-5 bg-[#FAF8F5] flex justify-center">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 text-center shadow-paper-lg border border-[#D4AF37]/45 overflow-hidden z-10"
        style={{
          backgroundImage: `url(${ASSETS.envelope.paperTexture})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/60 pointer-events-none rounded-xl" />
        <div className="absolute inset-4 sm:inset-5 border border-dashed border-[#C59B27]/40 pointer-events-none rounded-lg" />

        <div className="absolute top-3 left-3 w-7 h-7 pointer-events-none opacity-80">
          <Image src={ASSETS.svg.geometricCorner} alt="Corner Motif" fill className="object-contain" />
        </div>
        <div className="absolute top-3 right-3 w-7 h-7 pointer-events-none opacity-80 rotate-90">
          <Image src={ASSETS.svg.geometricCorner} alt="Corner Motif" fill className="object-contain" />
        </div>
        <div className="absolute bottom-3 left-3 w-7 h-7 pointer-events-none opacity-80 -rotate-90">
          <Image src={ASSETS.svg.geometricCorner} alt="Corner Motif" fill className="object-contain" />
        </div>
        <div className="absolute bottom-3 right-3 w-7 h-7 pointer-events-none opacity-80 rotate-180">
          <Image src={ASSETS.svg.geometricCorner} alt="Corner Motif" fill className="object-contain" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[82%] max-w-[290px] h-auto mb-4">
            <Image
              src={ASSETS.svg.bismillah}
              alt={sacredText.bismillahArabic}
              width={300}
              height={70}
              className="w-full h-auto filter drop-shadow-sm"
            />
          </div>

          <div className="font-playfair text-[#3D2833] text-[12.5px] sm:text-[14px] leading-[1.8] max-w-[340px] mb-4">
            <p className="font-semibold text-[#8C6110] mb-1">{sacredText.vasilaLine1}</p>
            <p className="font-medium">{sacredText.vasilaLine2}</p>
            <p className="font-medium text-[#2C1E25]">{sacredText.vasilaLine3}</p>
            <p className="font-bold text-[#8C6110] mt-1">{sacredText.vasilaLine4}</p>
          </div>

          <div className="w-full bg-[#FAF3E8]/85 border-y border-[#D4AF37]/55 py-3 px-3.5 my-2 shadow-sm rounded-sm">
            <p className="font-cinzel text-[10.5px] sm:text-xs font-bold tracking-wider text-[#8C6110] uppercase mb-1">
              Nikah Solemnised on Dast-e-Mubarak
            </p>
            <p className="font-playfair text-xs sm:text-sm font-semibold text-[#2C1E25] leading-relaxed">
              {sacredText.nikahDeclaration}
            </p>
          </div>

          <div className="mt-4 max-w-[340px] text-center font-playfair text-[#2C1E25]">
            <p className="italic text-xs text-[#6E5B65] mb-0.5">
              {sacredText.invitationPreamble}
            </p>
            <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#3D2833] my-1.5">
              {sacredText.invitationHosts}
            </h3>
            <p className="text-xs sm:text-[13px] text-[#4D3643] leading-relaxed">
              {sacredText.invitationRequest}
            </p>
          </div>

          <div className="my-4 py-1 flex flex-col items-center">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.14em] text-[#2C1E25] uppercase">
              {couple.bride.firstName}
            </h2>
            <span className="font-playfair italic font-normal text-lg text-[#C59B27] my-0.5">
              with
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.14em] text-[#2C1E25] uppercase">
              {couple.groom.firstName}
            </h2>
            <p className="font-playfair italic text-xs text-[#6E5B65] mt-1.5 font-medium">
              {sacredText.groomParentage}
            </p>
          </div>

          <div className="w-48 h-auto my-4 opacity-70">
            <Image
              src={ASSETS.svg.zelligeBorder}
              alt="Divider"
              width={200}
              height={16}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full bg-[#FAF5ED]/80 border border-[#D4AF37]/40 rounded-xl p-4 sm:p-5 flex flex-col gap-4 text-center mt-1">
            <div>
              <p className="font-cinzel text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] text-[#9E731B] uppercase mb-1.5">
                With Blessings Of:
              </p>
              <div className="font-sans text-[11px] sm:text-xs font-medium text-[#2C1E25] leading-relaxed space-y-1">
                {familyHonors.withBlessingsOf.map((name, idx) => (
                  <p key={idx} className="tracking-wide">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="font-cinzel text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] text-[#9E731B] uppercase mb-1.5">
                Special Request:
              </p>
              <div className="font-sans text-[11px] sm:text-xs font-medium text-[#2C1E25] leading-relaxed space-y-1">
                {familyHonors.specialRequest.map((name, idx) => (
                  <p key={idx} className="tracking-wide">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="font-cinzel text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] text-[#9E731B] uppercase mb-1.5">
                With Best Compliments From:
              </p>
              <div className="font-sans text-[11px] sm:text-xs font-medium text-[#4D3643] leading-relaxed space-y-1">
                {familyHonors.withBestComplimentsFrom.map((comp, idx) => (
                  <p key={idx} className="tracking-wide">
                    {comp}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <p className="font-amiri text-xl sm:text-2xl font-bold text-[#8C6110] direction-rtl mb-1.5">
              {closingDua.arabic}
            </p>
            <p className="font-playfair italic text-[11px] text-[#6E5B65] max-w-[300px] leading-relaxed">
              &quot;{closingDua.english}&quot;
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
