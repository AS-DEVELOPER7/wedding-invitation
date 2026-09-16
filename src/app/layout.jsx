import localFont from "next/font/local";
import "./globals.css";

// 1. Westonia (Local Luxury Display / Signature Script)
const westonia = localFont({
  src: "../fonts/Westonia.otf",
  variable: "--font-westonia",
  display: "swap",
  adjustFontFallback: false,
});

// 2. Allura (Local Royal Wedding Cursive Script)
const allura = localFont({
  src: "../fonts/Allura-Regular.ttf",
  variable: "--font-allura",
  display: "swap",
  adjustFontFallback: false,
});

// 3. Playfair Display (Local High-End Editorial Serif)
const playfair = localFont({
  src: [
    {
      path: "../fonts/PlayfairDisplay-Regular.ttf",
      style: "normal",
    },
    {
      path: "../fonts/PlayfairDisplay-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  adjustFontFallback: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAF8F5",
};

export const metadata = {
  title: "Amatullah & Abbas Ali | Wedding Invitation",
  description:
    "We cordially request your presence to grace the Wedding Ceremony of our beloved daughter Amatullah with Abbas Ali. Nikah solemnised on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S).",
  keywords: [
    "Amatullah",
    "Abbas Ali",
    "Dhulebwala",
    "Naharwala",
    "Wedding Invitation",
    "Nikah Surat",
    "Dawoodi Bohra Wedding",
  ],
  openGraph: {
    title: "Amatullah & Abbas Ali | Wedding Celebration",
    description: "In the Name of Allah, the Most Gracious, the Most Merciful. Join us in celebrating the wedding of Amatullah & Abbas Ali.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${westonia.variable} ${allura.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-backgroundColor-primary text-textColor-primary font-playfair antialiased selection:bg-borderColor-secondary/30 selection:text-textColor-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
