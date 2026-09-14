import { Cinzel_Decorative, Playfair_Display, Amiri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
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
    "Dhulewala",
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
      className={`${cinzel.variable} ${playfair.variable} ${amiri.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF8F5] text-[#2C1E25] font-sans antialiased selection:bg-[#E5C16C]/30 selection:text-[#2C1E25] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
