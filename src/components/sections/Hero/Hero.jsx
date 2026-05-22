"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/utils/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.heroBgVideo}
      >
        <source
          src="https://res.cloudinary.com/dgstbxgwt/video/upload/v1737400644/banner-video_anaykr.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className={styles.heroVideoOverlay} />

      <div className={`${styles.container} ${styles.heroContainer}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.heroContent}>
              <h2 className={styles.heroWelcome}>WELCOME TO</h2>

              <div className={styles.heroLogoBox}>
                <Image
                  src={Images.logoHero}
                  alt="DSCOFF RACING"
                  width={480}
                  height={120}
                  className={styles.heroLogoImg}
                  priority
                />
              </div>

              <h3 className={styles.heroSubtitle}>
                Where <span>Adrenaline</span> and <span>Asphalt</span> Meet
              </h3>

              <p className={styles.heroDesc}>
                Ready for the race of a lifetime? <em>DSCOFF</em> awaits – download,{" "}
                <span>drive and earn $DSC</span>
              </p>

              <div className={styles.heroDownloadButtons}>
                <a href="#" className={styles.downloadBadgeLink}>
                  <Image
                    src={Images.appleBadge}
                    alt="Download on the App Store"
                    width={180}
                    height={52}
                  />
                </a>
                <a href="#" className={styles.downloadBadgeLink}>
                  <Image
                    src={Images.googleBadge}
                    alt="GET IT ON Google Play"
                    width={180}
                    height={52}
                  />
                </a>
              </div>

              <p className={styles.heroDateText}>
                Will be available{" "}
                <span className={styles.heroDateLabelDesktop}>Q3 2026</span>
                <span className={styles.heroDateLabelMobile}>January 1 in 2025</span>
              </p>

              <div className={styles.scrollArrowBox}>
                <a href="#details" className={styles.scrollArrow}>
                  <Image
                    src={Images.arrow}
                    alt="Scroll Down"
                    width={44}
                    height={44}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
