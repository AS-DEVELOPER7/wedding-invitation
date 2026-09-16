/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── 📜 Background Colors: primary, secondary, ternary ──
        backgroundColor: {
          primary: "#FAF8F5",   // Main luxury canvas ivory
          secondary: "#F4ECE1", // Warm champagne / card surface
          ternary: "#EFE8DC",   // Subtle beige / sand accent
          tertiary: "#EFE8DC",
        },

        // ── 🖋️ Text Colors: primary, secondary, ternary ──
        textColor: {
          primary: "#2C1E25",   // Deep royal espresso ink (headings, couple names, main text)
          secondary: "#6E5B65", // Muted rose-taupe (subtitles, descriptions, parentage)
          ternary: "#8C6110",   // Royal gold-bronze (dates, badges, accent labels)
          tertiary: "#8C6110",
        },

        // ── ⚜️ Border Colors: primary, secondary, ternary ──
        borderColor: {
          primary: "#D4AF37",   // Royal gold
          secondary: "#E5C16C", // Bright gold shimmer
          ternary: "#EFE8DC",   // Soft champagne border
          tertiary: "#EFE8DC",
        },
      },

      fontFamily: {
        westonia: ["var(--font-westonia)", "cursive", "serif"],
        allura: ["var(--font-allura)", "cursive"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
