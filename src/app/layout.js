import { Inter, Orbitron, Syncopate } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

export const metadata = {
  title: "DSCOFF Racing | Where Adrenaline and Asphalt Meet",
  description: "Ready for the race of a lifetime? DSCOFF awaits – download, drive and earn $DSC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${syncopate.variable}`}>
      <body>
        <div className="wrapper-div" id="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
