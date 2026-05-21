# <p align="center"><img src="https://dscoff.racing/assets/images/logo-hero.svg" onerror="this.src='./assets/images/logo-hero.svg'" alt="DSCOFF Racing Logo" width="380"></p>

<p align="center">
  <strong>Where Adrenaline and Asphalt Meet</strong>
</p>

<p align="center">
  <a href="https://dscoff.racing/"><strong>🌐 Visit Live Website</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Release--Date-Q3%202026-ffcc2a?style=for-the-badge&labelColor=0d1b21" alt="Release Date">
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-549efd?style=for-the-badge&labelColor=0d1b21" alt="Platforms">
  <img src="https://img.shields.io/badge/Token-%24DSC%20Earn-28a745?style=for-the-badge&labelColor=0d1b21" alt="Token DSC">
  <img src="https://img.shields.io/badge/Stack-Next.js%2014-0e4fa3?style=for-the-badge&labelColor=0d1b21" alt="Stack">
  <img src="https://img.shields.io/badge/Year-2026-0e4fa3?style=for-the-badge&labelColor=0d1b21" alt="Year">
</p>

---

## 🏎️ About DSCOFF Racing

**[DSCOFF Racing](https://dscoff.racing/)** is a high-octane, next-generation mobile racing experience built for adrenaline junkies and gaming enthusiasts. Launching in **2026**, DSCOFF Racing combines breathtaking visuals, precise physics, and an immersive **Drive-to-Earn** ecosystem where players can compete in various thrilling racing modes and earn native **$DSC** tokens.

This repository houses the modern **Next.js React Portal** for DSCOFF Racing. It is engineered as a high-performance, single-page application using Next.js 14 and React 18, utilizing modern CSS modules, premium typography, and Swiper carousels to showcase the official release parameters, game modes, developmental milestones, and community features.

---

## ⚡ Key Features of the Portal

The DSCOFF Racing web application is built to replicate the premium, fast-paced atmosphere of AAA gaming titles:

*   **Cinematic Video Hero:** Incorporates an ambient looping background video overlay with optimized styling, dynamic store badges (Apple App Store and Google Play), and custom arrow scroll cues.
*   **Dual Slanted Ribbons:** An attention-grabbing promotional section with cross-slanted banner components. The static ribbon features CSS pulse indicators, and the moving marquee uses optimized CSS/Swiper sliding rails.
*   **HD YouTube Showcase:** Seamlessly embedded high-definition gameplay promotional frame with custom shadows and depth filters.
*   **Game Modes Carousel:** An interactive, touch-friendly slider powered by **Swiper** showcasing the diverse high-speed race formats:
    *   *Circuit Racing* — Dominate the racing line in classical circuit setups.
    *   *Drift Racing* — Master sideways physics and slide through intense curves.
    *   *Highway Racing* — Race through open highways, dodging dynamic traffic.
    *   *Drag Racing* — Perfect your timing and shifting in straight-line sprints.
    *   *Sprint Racing* — High-stakes point-to-point speed tracks.
*   **Vehicle Classes Showcase:** A grid layout representing basic, premium, sport, and super sport tiers. In mobile layouts, this seamlessly transitions into a responsive swipeable slider.
*   **The DSCOFF Crew:** A styled grid showcasing the project founders and key developers (Founder, Game Developer, Technical Artist).
*   **Milestone Roadmap:** A comprehensive interactive timeline tracking major project milestones from the Alpha launch in **May 2026** up to the Career Mode release in **2027**.
*   **SEO & Analytics Ready:** Fully optimized using semantic HTML5 tags, unique accessibility tags, and Next.js meta optimizations.

---

## 🛠️ Technology Stack

This application is built with modern, light-weight, and highly-optimized front-end frameworks:

*   **Framework:** **Next.js 14.2.x** (App Router Architecture)
*   **Library:** **React 18.3.x** (Component-driven development)
*   **Slider Engine:** **Swiper 11.x** (Hardware-accelerated touch sliders, highly customizable responsive parameters)
*   **Styling & UI:**
    *   Vanilla CSS3 (Using isolated **CSS Modules** `*.module.css` for zero styling collision)
    *   Custom local `@font-face` racing fonts (**Race Sport**)
    *   Google Fonts integration (`Orbitron`, `Syncopate`, `Inter`)
*   **Asset Management:** Local SVG optimizations, high-performance Cloudinary video integration, and optimized icons.

---

## 📂 Project Directory Structure

Below is a map of the repository's files and directory structure:

```text
dscoff/
├── public/                         # Static assets (images, badges, logos, global fonts)
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── logo-hero.svg
│   │   │   └── ...
│   │   └── web-font/
│   │       ├── RaceSportRegular.woff
│   │       └── RaceSportRegular.woff2
├── src/
│   ├── app/                        # Next.js App Router root & layout
│   │   ├── layout.js               # Global HTML wrappers & font loading
│   │   ├── page.js                 # Landing page assembly
│   │   └── globals.css             # Base resets & CSS variable definitions
│   ├── components/                 # Reusable layout and custom components
│   │   ├── sections/
│   │   │   ├── Header/             # Sporty slanted navigation header
│   │   │   ├── Hero/               # Responsive ambient video welcome section
│   │   │   ├── Giveaway/           # YouTube embed & marquee crossing ribbons
│   │   │   ├── GiveawaysPromo/     # Telegram CTA promotions
│   │   │   ├── GameModes/          # Swiper carousel showing race formats
│   │   │   ├── VehicleModes/       # Grid / Swiper responsive car tiers
│   │   │   ├── Team/               # Profile grids for the core staff
│   │   │   ├── Roadmap/            # Timeline roadmap scheduler
│   │   │   └── Footer/             # Social networks & copyright section
│   │   └── ui/                     # Shared UI modules (Section top-bars, layout blocks)
│   ├── data/                       # Structured JSON arrays for sliders & staff
│   └── utils/                      # Helper hooks and transition helpers
├── next.config.js                  # Next.js specific build settings
├── package.json                    # Dependencies & execution scripts
└── README.md                       # Repository documentation
```

---

## 🚀 Getting Started & Local Development

Follow these steps to set up the development environment on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or later recommended) and **npm** (or yarn) installed.
*   Check Node version: `node -v`

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/programmer-Raheem/dscoff-html-css.git
cd dscoff-html-css
npm install
```

### 3. Running the Development Server
Launch the local Next.js development server:
```bash
npm run dev
```
Open your web browser and navigate to **`http://localhost:3000`** to view the live responsive interface.

### 4. Building for Production
To compile a highly-optimized, statically cached build for production deployment:
```bash
npm run build
```
To run the production-built application locally:
```bash
npm run start
```

---

## 📅 Milestones Roadmap (2026 - 2027)

*   📅 **May 2026:** Single Player Alpha Version Release.
*   📅 **September 2026:** Single Player Beta Version & Comprehensive Bug Fixing.
*   📅 **November 2026:** Official Release V1.0.0.
*   📅 **March 2027:** Career Mode Release & Multiplayer / Openmap Beta Testing.

---

## 🤝 Community & Support

Become an active asphalt warrior and keep up to date with game updates:

*   🌐 **Official Portal:** [dscoff.racing](https://dscoff.racing/)
*   ✈️ **Telegram Community:** [@dscoffracing](https://t.me/dscoffracing)
*   📸 **Instagram:** [@dscoff.racing](https://www.instagram.com/dscoff.racing/)
*   👥 **Facebook Group:** [DSCOFF Racing Group](https://www.facebook.com/groups/dscoff.racing/)
*   🎮 **Discord Server:** [DSCOFF Racing Discord](#)
*   🐦 **Twitter/X:** [@DSCOFFRacing](#)

---

<p align="center">
  © 2026 DSCOFF Racing. All rights reserved. Designed for asphalt warriors.
</p>
