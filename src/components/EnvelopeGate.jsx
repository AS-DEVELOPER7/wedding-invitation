"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";
import { WEDDING_CONFIG } from "@/constants/weddingConfig";
import OrnamentFlourish from "@/components/OrnamentFlourish";

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 🔘 MASTER FLAP CORNER ROUNDING CONTROLLER (0 to 100)
 * ═══════════════════════════════════════════════════════════════════════════════
 * Change this ONE number (0 to 100) to adjust how rounded the inner corners are!
 * Only the inner corner facing the seal gets rounded; the outside edges stay flat.
 *
 *   0   = Sharp pointed triangles (0% rounding)
 *   25  = Subtle rounded corners
 *   50  = Beautiful smooth curved corners (Recommended)
 *   75  = Deep prominent elegant curve
 *   100 = Maximum wide rounded arc
 */
export const FLAP_CORNER_ROUNDING = 0; // 👈 ADJUST THIS ONE VALUE (0 to 100)

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⏱️ MASTER ANIMATION SPEED CONTROLLERS (In Seconds)
 * ═══════════════════════════════════════════════════════════════════════════════
 * 1. SEAL_REMOVAL_DURATION: Seal pops & vanishes FIRST while gate stays closed.
 * 2. ENVELOPE_ANIMATION_DURATION: Gate flaps open AFTER seal has disappeared.
 */
export const SEAL_REMOVAL_DURATION = 0.8; // 👈 SEAL REMOVAL SPEED (SECONDS)
export const ENVELOPE_ANIMATION_DURATION = 7; // 👈 FLAPS OPEN SPEED (SECONDS)

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ✨ MASTER ENVELOPE GEOMETRIC PATTERN CONTROLLER
 * ═══════════════════════════════════════════════════════════════════════════════
 * Customize the royal Islamic gold geometric fretwork pattern on the flaps:
 *   - ENVELOPE_PATTERN_ENABLED: set to false to disable
 *   - ENVELOPE_PATTERN_OPACITY: 0 to 1 (0.35 = subtle gold foil, 0.55 = rich & crisp)
 *   - ENVELOPE_PATTERN_SCALE: pattern tile size in pixels (default 160px)
 */
export const ENVELOPE_PATTERN_ENABLED = true;  // 👈 TOGGLE PATTERN (true / false)
export const ENVELOPE_PATTERN_OPACITY = 0.45;  // 👈 PATTERN INTENSITY (0 to 1)
export const ENVELOPE_PATTERN_SCALE = 160;     // 👈 PATTERN TILE SIZE (PIXELS)

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⚜️ HELPER FLOURISH ORIENTATION CONTROLLER
 * ═══════════════════════════════════════════════════════════════════════════════
 * Choose whether the needle divider below "Tap or scroll" is horizontal or vertical:
 *   - "horizontal" = elegant gold spear underline divider
 *   - "vertical"   = sleek gold needle pointing downward to open
 */
export const ENVELOPE_FLOURISH_ORIENTATION = "horizontal"; // 👈 "horizontal" | "vertical"

// ── Mathematical Quadratic Bezier Generator for Smooth Polygon Arcs ──
function getBezierPoints(p0, p1, p2, steps = 10) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const mt = 1 - t;
    const x = mt * mt * p0[0] + 2 * mt * t * p1[0] + t * t * p2[0];
    const y = mt * mt * p0[1] + 2 * mt * t * p1[1] + t * t * p2[1];
    points.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }
  return points;
}

// Generates the Left Flap polygon clip-path based on rounding (0 - 100)
function generateLeftFlapClip(roundingValue) {
  const f = Math.max(0, Math.min(100, roundingValue)) / 100;
  if (f === 0) return "polygon(-2% -2%, -2% 102%, 50% 46%)";

  const p0 = [50 - 24 * f, 46 + 26 * f];
  const p1 = [50 + 10 * f, 46];
  const p2 = [50 - 24 * f, 46 - 22 * f];
  const curve = getBezierPoints(p0, p1, p2, 10);
  return `polygon(-2% -2%, -2% 102%, ${curve.join(", ")})`;
}

// Generates the Right Flap polygon clip-path based on rounding (0 - 100)
function generateRightFlapClip(roundingValue) {
  const f = Math.max(0, Math.min(100, roundingValue)) / 100;
  if (f === 0) return "polygon(102% -2%, 50% 46%, 102% 102%)";

  const p0 = [50 + 24 * f, 46 - 22 * f];
  const p1 = [50 - 10 * f, 46];
  const p2 = [50 + 24 * f, 46 + 26 * f];
  const curve = getBezierPoints(p0, p1, p2, 10);
  return `polygon(102% -2%, ${curve.join(", ")}, 102% 102%)`;
}

// Generates the Bottom Flap polygon clip-path based on rounding (0 - 100)
function generateBottomFlapClip(roundingValue) {
  const f = Math.max(0, Math.min(100, roundingValue)) / 100;
  if (f === 0) return "polygon(-2% 102%, 50% 46%, 102% 102%)";

  const p0 = [50 - 26 * f, 46 + 20 * f];
  const p1 = [50, 46 - 8 * f];
  const p2 = [50 + 26 * f, 46 + 20 * f];
  const curve = getBezierPoints(p0, p1, p2, 10);
  return `polygon(-2% 102%, ${curve.join(", ")}, 102% 102%)`;
}

// Generates the Top Flap polygon clip-path based on rounding (0 - 100)
function generateTopFlapClip(roundingValue) {
  const f = Math.max(0, Math.min(100, roundingValue)) / 100;
  if (f === 0) return "polygon(-2% -2%, 102% -2%, 50% 46%)";

  const p0 = [50 + 26 * f, 46 - 18 * f];
  const p1 = [50, 46 + 8 * f];
  const p2 = [50 - 26 * f, 46 - 18 * f];
  const curve = getBezierPoints(p0, p1, p2, 10);
  return `polygon(-2% -2%, 102% -2%, ${curve.join(", ")})`;
}

export default function EnvelopeGate({
  isOpening: parentIsOpening,
  onOpenStart,
  onOpened,
  speed = ENVELOPE_ANIMATION_DURATION,
  sealSpeed = SEAL_REMOVAL_DURATION,
  rounding = FLAP_CORNER_ROUNDING,
  patternEnabled = ENVELOPE_PATTERN_ENABLED,
  patternOpacity = ENVELOPE_PATTERN_OPACITY,
  patternScale = ENVELOPE_PATTERN_SCALE,
  flourishOrientation = ENVELOPE_FLOURISH_ORIENTATION,
}) {
  // Phase 1: "idle" -> Phase 2: "unsealing" (seal removes) -> Phase 3: "opening" (flaps open)
  const [phase, setPhase] = useState("idle");
  const touchStartY = useRef(null);

  // Dynamically compute the rounded clipPaths based on the single `rounding` variable
  const flapClips = useMemo(() => {
    return {
      left: generateLeftFlapClip(rounding),
      right: generateRightFlapClip(rounding),
      bottom: generateBottomFlapClip(rounding),
      top: generateTopFlapClip(rounding),
    };
  }, [rounding]);

  // Proportional Timings derived from the master speed values
  const timing = useMemo(() => {
    return {
      topFlap: speed * 0.95,
      sideFlaps: speed * 1.0,
      sideFlapsDelay: speed * 0.04,
      bottomFlap: speed * 1.02,
      bottomFlapDelay: speed * 0.06,
      ease: [0.22, 1, 0.36, 1],
    };
  }, [speed]);

  const handleOpen = useCallback(() => {
    if (phase !== "idle") return;

    // STEP 1: First remove the seal
    setPhase("unsealing");

    // STEP 2: Only after seal is completely removed, open the gate flaps!
    setTimeout(() => {
      setPhase("opening");
      if (typeof onOpenStart === "function") {
        onOpenStart();
      }

      // STEP 3: Clean handoff to opened state as soon as flaps settle in place (zero lag)
      setTimeout(() => {
        if (typeof onOpened === "function") {
          onOpened();
        }
      }, Math.round(speed * 1000));
    }, Math.round(sealSpeed * 1000));
  }, [phase, onOpenStart, onOpened, sealSpeed, speed]);

  // Synchronize if parent explicitly triggers opening from outside
  useEffect(() => {
    if (parentIsOpening && phase === "idle") {
      const timer = setTimeout(() => {
        handleOpen();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [parentIsOpening, phase, handleOpen]);

  // Handle mouse wheel / trackpad scroll to open
  const handleWheel = (e) => {
    if (e.deltaY > 8 || e.deltaY < -8) {
      handleOpen();
    }
  };

  // Handle touch swipe to open
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current !== null) {
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (deltaY > 20) {
        handleOpen();
      }
    }
  };

  // Handle keyboard interaction (ArrowDown, PageDown, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) {
        handleOpen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleOpen]);

  const isFlapsOpening = phase === "opening";
  const isSealRemoving = phase !== "idle";

  return (
    <div
      className={`absolute top-0 inset-x-0 h-[100dvh] sm:h-[min(840px,calc(100dvh-3.5rem))] z-40 overflow-hidden select-none ${
        isFlapsOpening ? "pointer-events-none" : "cursor-pointer"
      }`}
      onClick={handleOpen}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* ══════════════════════════════════════════════════════════
          ENVELOPE FRONT POCKET FLAPS (Left, Right, Bottom, Top)
          3D Realistic Unfolding Animation: Each panel folds open
          from its outer edge hinge (Top lifts up, Sides swing out,
          Bottom folds down) instead of sliding away!
          ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 46%" }}
      >
        {/* Left Flap: Hinged on Left Edge (Swings outward to the left) */}
        <motion.div
          animate={
            isFlapsOpening
              ? { rotateY: -180, opacity: [1, 1, 0.8, 0] }
              : { rotateY: 0, opacity: 1 }
          }
          transition={{
            duration: timing.sideFlaps,
            delay: timing.sideFlapsDelay,
            ease: timing.ease,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            transformOrigin: "0% 50%",
            transformStyle: "preserve-3d",
            clipPath: flapClips.left,
            background: "linear-gradient(135deg, var(--color-backgroundColor-primary) 0%, var(--color-backgroundColor-secondary) 100%)",
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
          {/* Luxury Gold Islamic Geometric Pattern */}
          {patternEnabled && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url(${ASSETS.envelope.pattern})`,
                backgroundSize: `${patternScale}px ${patternScale}px`,
                backgroundRepeat: "repeat",
                opacity: patternOpacity,
              }}
            />
          )}
        </motion.div>

        {/* Right Flap: Hinged on Right Edge (Swings outward to the right) */}
        <motion.div
          animate={
            isFlapsOpening
              ? { rotateY: 180, opacity: [1, 1, 0.8, 0] }
              : { rotateY: 0, opacity: 1 }
          }
          transition={{
            duration: timing.sideFlaps,
            delay: timing.sideFlapsDelay,
            ease: timing.ease,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            transformOrigin: "100% 50%",
            transformStyle: "preserve-3d",
            clipPath: flapClips.right,
            background: "linear-gradient(-135deg, var(--color-backgroundColor-primary) 0%, var(--color-backgroundColor-secondary) 100%)",
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
          {/* Luxury Gold Islamic Geometric Pattern */}
          {patternEnabled && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url(${ASSETS.envelope.pattern})`,
                backgroundSize: `${patternScale}px ${patternScale}px`,
                backgroundRepeat: "repeat",
                opacity: patternOpacity,
              }}
            />
          )}
        </motion.div>

        {/* Bottom Flap: Hinged on Bottom Edge (Folds downwards) */}
        <motion.div
          animate={
            isFlapsOpening
              ? { rotateX: -180, opacity: [1, 1, 0.8, 0] }
              : { rotateX: 0, opacity: 1 }
          }
          transition={{
            duration: timing.bottomFlap,
            delay: timing.bottomFlapDelay,
            ease: timing.ease,
          }}
          className="absolute inset-0 z-25 pointer-events-none"
          style={{
            transformOrigin: "50% 100%",
            transformStyle: "preserve-3d",
            clipPath: flapClips.bottom,
            background: "linear-gradient(to top, var(--color-backgroundColor-ternary) 0%, var(--color-backgroundColor-primary) 100%)",
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
          {/* Luxury Gold Islamic Geometric Pattern */}
          {patternEnabled && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url(${ASSETS.envelope.pattern})`,
                backgroundSize: `${patternScale}px ${patternScale}px`,
                backgroundRepeat: "repeat",
                opacity: patternOpacity,
              }}
            />
          )}
        </motion.div>

        {/* Top Flap: Hinged on Top Edge (Folds upwards) */}
        <motion.div
          animate={
            isFlapsOpening
              ? { rotateX: 180, opacity: [1, 1, 0.8, 0] }
              : { rotateX: 0, opacity: 1 }
          }
          transition={{
            duration: timing.topFlap,
            ease: timing.ease,
          }}
          style={{
            transformOrigin: "50% 0%",
            transformStyle: "preserve-3d",
            clipPath: flapClips.top,
            background: "linear-gradient(135deg, var(--color-backgroundColor-primary) 0%, var(--color-backgroundColor-secondary) 100%)",
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
          {/* Luxury Gold Islamic Geometric Pattern */}
          {patternEnabled && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url(${ASSETS.envelope.pattern})`,
                backgroundSize: `${patternScale}px ${patternScale}px`,
                backgroundRepeat: "repeat",
                opacity: patternOpacity,
              }}
            />
          )}
          {/* Soft light sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent" />
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          TRANSPARENT PNG GOLD WAX SEAL STAMP (Zero Background)
          Disappears FIRST on tap before gate flaps begin opening!
          ══════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ top: "46%", left: "50%" }}
        className={`absolute -translate-x-1/2 -translate-y-1/2 z-40 w-22 h-22 sm:w-24 sm:h-24 ${
          phase === "idle" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleOpen();
        }}
        animate={
          isSealRemoving
            ? { scale: 1.25, opacity: 0 }
            : { scale: [1, 1.03, 1], opacity: 1 }
        }
        transition={
          isSealRemoving
            ? { duration: sealSpeed, ease: "easeOut" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Subtle soft gold ripple ring when idle */}
        {phase === "idle" && (
          <span className="absolute inset-[-4px] rounded-full border border-borderColor-primary/50 animate-ping opacity-40 pointer-events-none" />
        )}

        <div className="relative w-full h-full filter drop-shadow-[0_6px_14px_rgba(70,45,30,0.38)] hover:scale-115 hover:duration-300 hover:ease-in-out active:scale-95 transition-transform">
          <Image
            src={ASSETS.envelope.waxSeal}
            alt={WEDDING_CONFIG.envelope.sealAlt}
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
        animate={isSealRemoving ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: Math.min(0.28, sealSpeed * 0.5), ease: "easeOut" }}
        className="absolute inset-x-0 z-35 flex flex-col items-center pointer-events-none text-center px-4"
      >
        <p className="font-allura font-semibold italic text-base tracking-[0.14em] text-textColor-ternary mb-1">
          {WEDDING_CONFIG.envelope.tapPrompt}
        </p>
        <OrnamentFlourish
          orientation={flourishOrientation}
          width={flourishOrientation === "vertical" ? 14 : 130}
          height={flourishOrientation === "vertical" ? 64 : 9}
          opacity={0.8}
          className="mt-1"
        />
      </motion.div>
    </div>
  );
}
