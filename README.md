# DSCOFF Racing

<p align="center">
  <img src="https://dscoff.racing/assets/images/logo-hero.svg" alt="DSCOFF Racing Logo" width="380">
</p>
 
<p align="center">
  <strong>Where Adrenaline and Asphalt Meet</strong>
</p>

<p align="center">
  <a href="https://dscoff.racing/"><strong>🌐 Visit Live Website</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Release--Date-Q3%202026-ffcc2a?style=for-the-badge&labelColor=0d1b21" alt="Release Date">
  <img src="https://img.shields.io/badge/Platform-Web%20Application-549efd?style=for-the-badge&labelColor=0d1b21" alt="Platform">
  <img src="https://img.shields.io/badge/Frontend-React-61dafb?style=for-the-badge&labelColor=0d1b21" alt="React">
  <img src="https://img.shields.io/badge/Build-Vite-646cff?style=for-the-badge&labelColor=0d1b21" alt="Vite">
  <img src="https://img.shields.io/badge/Year-2026-0e4fa3?style=for-the-badge&labelColor=0d1b21" alt="Year">
</p>

---

## 🏎️ About DSCOFF Racing

**[DSCOFF Racing](https://dscoff.racing/)** is a high-octane, next-generation racing experience crafted for adrenaline junkies and gaming enthusiasts. Launching in **2026**, DSCOFF Racing combines cinematic visuals, responsive animations, immersive racing environments, and a powerful **Drive-to-Earn** ecosystem powered by the native **$DSC** token.

This repository contains the modern **React + Vite Frontend Portal** for DSCOFF Racing. The application is engineered as a high-performance, component-driven single-page experience using **React 18**, **Vite**, **Swiper.js**, and modular architecture principles to deliver an engaging AAA-style gaming presentation.

---

## ⚡ Key Features

The DSCOFF Racing portal replicates the premium atmosphere of modern AAA racing titles:

* **Cinematic Hero Section**
  * Ambient looping background video
  * Responsive overlay gradients
  * Store badges and scroll indicators

* **Interactive Racing Showcase**
  * Animated promotional ribbons
  * Smooth scrolling marquees
  * Responsive CTA sections

* **HD Gameplay Preview**
  * Embedded YouTube showcase
  * Depth shadows and cinematic styling

* **Game Modes Carousel**
  * Built with **Swiper.js**
  * Fully touch-enabled and responsive
  * Includes:
    * Circuit Racing
    * Drift Racing
    * Highway Racing
    * Drag Racing
    * Sprint Racing

* **Vehicle Classes Section**
  * Responsive grid layout
  * Mobile swipe slider
  * Premium/Sport/SuperSport showcases

* **Core Team Section**
  * Founder and development crew profiles
  * Animated grayscale hover effects

* **Milestone Roadmap**
  * Timeline-based progression
  * Major 2026–2027 development stages

* **Responsive Architecture**
  * Mobile-first optimization
  * Fluid layouts
  * Clean component structure

---

## 🛠️ Technology Stack

This project uses a modern frontend ecosystem optimized for performance and scalability.

### Core Technologies

* **Frontend Library:** React 18
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **Slider Engine:** Swiper.js

### Styling & UI

* CSS Modules
* Vanilla CSS3
* Responsive Flex/Grid layouts
* Custom `Race Sport` typography
* Google Fonts:
  * Orbitron
  * Syncopate
  * Inter

### Assets & Media

* Optimized SVG assets
* Cloudinary-hosted videos
* Responsive image handling

---

## 📂 Project Structure

```text
dscoff-react/
├── public/
│   ├── images/                   # All image assets (SVG, PNG)
│   ├── favicon.ico
│   ├── manifest.json             # PWA manifest
│   └── ICONS_README.md
│
├── src/
│   ├── components/
│   │   ├── sections/             # Major page sections
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── GameModes/
│   │   │   │   ├── GameModes.jsx
│   │   │   │   └── GameModes.module.css
│   │   │   ├── Giveaway/
│   │   │   │   ├── Giveaway.jsx
│   │   │   │   └── Giveaway.module.css
│   │   │   ├── GiveawaysPromo/
│   │   │   │   ├── GiveawaysPromo.jsx
│   │   │   │   └── GiveawaysPromo.module.css
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Hero.module.css
│   │   │   ├── Roadmap/
│   │   │   │   ├── Roadmap.jsx
│   │   │   │   └── Roadmap.module.css
│   │   │   ├── Team/
│   │   │   │   ├── Team.jsx
│   │   │   │   └── Team.module.css
│   │   │   └── VehicleModes/
│   │   │       ├── VehicleModes.jsx
│   │   │       └── VehicleModes.module.css
│   │   │
│   │   └── ui/                   # Reusable UI components
│   │       ├── SectionHeading.jsx
│   │       ├── SectionHeading.module.css
│   │       ├── SectionTopBar.jsx
│   │       └── SectionTopBar.module.css
│   │
│   ├── constants/                # Static data and configuration
│   │   ├── gameModes.js
│   │   ├── roadmap.js
│   │   └── team.js
│   │
│   ├── utils/                    # Utility functions and helpers
│   │   └── images.js             # Centralized image path exports
│   │
│   ├── globals.css               # Global styles and CSS variables
│   └── main.jsx                  # Application entry point
│
├── .gitignore
├── index.html                    # HTML entry point
├── jsconfig.json                 # Path aliases configuration
├── package.json
├── vite.config.js                # Vite configuration
└── README.md
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
Launch the local Vite development server:
```bash
npm run dev
```
Open your web browser and navigate to **`http://localhost:5173`** to view the live responsive interface.

### 4. Building for Production
To compile a highly-optimized, statically cached build for production deployment:
```bash
npm run build
```
To preview the production build locally:
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
