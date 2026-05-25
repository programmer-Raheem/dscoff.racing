import React from "react";
import { Images } from "@/assets/utils/images";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopRow}>
          {/* Left Column: Logo + Yellow Links */}
          <div className={styles.footerLeftCol}>
            <a href="/" className={styles.footerLogo}>
              <img src={Images.logo} alt="DSCOFF RACING Logo" width={150} height={50} />
            </a>
            <div className={styles.footerYellowLinks}>
              <a href="https://dscoff-racing.gitbook.io/dscoff.racing" target="_blank" rel="noopener noreferrer" className={styles.footerLinkYellow}>DSCOFF WIKI</a>
              <a href="https://dscoff-racing.gitbook.io/dscoff.racing" target="_blank" rel="noopener noreferrer" className={styles.footerLinkYellow}>MARKETPLICE</a>
            </div>
          </div>

          {/* Middle Column: Grey Links */}
          <div className={styles.footerMiddleCol}>
            <a href="#giveaway" className={styles.footerLinkGrey}>GIVEAWAY</a>
            <a href="#team" className={styles.footerLinkGrey}>TEAM</a>
            <a href="#roadmap" className={styles.footerLinkGrey}>ROADMAP</a>
          </div>

          {/* Right Column: Stay Connected & Get in the Driver's Seat */}
          <div className={styles.footerRightCol}>
            <div className={styles.footerConnectSection}>
              <h3 className={styles.footerAccentHeading}>STAY CONNECTED</h3>
              <div className={styles.socialIconsWrapper}>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.twitterIcon} alt="Twitter" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.gameIcon} alt="Discord" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.telegramIcon} alt="Telegram" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.instagramIcon} alt="Instagram" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.youtubeIcon} alt="YouTube" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <img src={Images.tiktokIcon} alt="TikTok" width={26} height={26} className={styles.socialIcon} />
                </a>
              </div>
            </div>

            <div className={styles.footerDownloadSection}>
              <h3 className={styles.footerAccentHeading}>GET IN THE DRIVERS SEAT</h3>
              <div className={styles.storeButtons}>
                <a href="#">
                  <img src={Images.appleBadge} alt="Download on the App Store" width={165} height={48} className={`${styles.storeBadge} ${styles.appleBadge}`} />
                </a>
                <a href="#">
                  <img src={Images.googleBadge} alt="Get it on Google Play" width={165} height={55} className={`${styles.storeBadge} ${styles.googleBadge}`} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLinks}>
            <a href="#" className={styles.footerBottomLink}>Legal & Privacy</a>
            <a href="#" className={styles.footerBottomLink}>User Agreement</a>
            <a href="#" className={styles.footerBottomLink}>Privacy & Cookie Policy</a>
          </div>
          <div className={styles.footerCopyright}>
            © 2026 DSCOFF Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
