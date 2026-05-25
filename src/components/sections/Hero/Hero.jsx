import React from "react";
import { Images } from "@/assets/utils/images";
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

      {/* Decorative SVG - Right Side */}
      <div className={styles.heroDecorativeImage}>
        <img
          src={Images.heroRight}
          alt="Decorative"
          width={384}
          height={179}
          className={styles.heroDecorativeImg}
          loading="lazy"
        />
      </div>

      <div className={`${styles.container} ${styles.heroContainer}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.heroContent}>
              <h2 className={styles.heroWelcome}>WELCOME TO</h2>

              <div className={styles.heroLogoBox}>
                <img
                  src={Images.logoHero}
                  alt="DSCOFF RACING"
                  width={480}
                  height={120}
                  className={styles.heroLogoImg}
                  loading="eager"
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
                  <img
                    src={Images.appleBadge}
                    alt="Download on the App Store"
                    width={180}
                    height={52}
                    loading="lazy"
                  />
                </a>
                <a href="#" className={styles.downloadBadgeLink}>
                  <img
                    src={Images.googleBadge}
                    alt="GET IT ON Google Play"
                    width={180}
                    height={52}
                    loading="lazy"
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
                  <img
                    src={Images.arrow}
                    alt="Scroll Down"
                    width={44}
                    height={44}
                    loading="lazy"
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
