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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    shortcut: '/images/favicon.png',
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  themeColor: '#FFCC2A',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DSCOFF Racing',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${syncopate.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/RaceSportRegular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="wrapper-div" id="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
