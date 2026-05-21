import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/utils/images";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopRow}>
          {/* Left Column: Logo + Yellow Links */}
          <div className={styles.footerLeftCol}>
            <Link href="/" className={styles.footerLogo}>
              <Image src={Images.logo} alt="DSCOFF RACING Logo" width={150} height={50} />
            </Link>
            <div className={styles.footerYellowLinks}>
              <Link href="#" className={styles.footerLinkYellow}>DSCOFF WIKI</Link>
              <Link href="#" className={styles.footerLinkYellow}>MARKETPLICE</Link>
            </div>
          </div>

          {/* Middle Column: Grey Links */}
          <div className={styles.footerMiddleCol}>
            <Link href="#giveaway" className={styles.footerLinkGrey}>GIVEAWAY</Link>
            <Link href="#team" className={styles.footerLinkGrey}>TEAM</Link>
            <Link href="#roadmap" className={styles.footerLinkGrey}>ROADMAP</Link>
          </div>

          {/* Right Column: Stay Connected & Get in the Driver's Seat */}
          <div className={styles.footerRightCol}>
            <div className={styles.footerConnectSection}>
              <h3 className={styles.footerAccentHeading}>STAY CONNECTED</h3>
              <div className={styles.socialIconsWrapper}>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.twitterIcon} alt="Twitter" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.gameIcon} alt="Discord" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.telegramIcon} alt="Telegram" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.instagramIcon} alt="Instagram" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.youtubeIcon} alt="YouTube" width={26} height={26} className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialIconLink}>
                  <Image src={Images.tiktokIcon} alt="TikTok" width={26} height={26} className={styles.socialIcon} />
                </a>
              </div>
            </div>

            <div className={styles.footerDownloadSection}>
              <h3 className={styles.footerAccentHeading}>GET IN THE DRIVER’S SEAT</h3>
              <div className={styles.storeButtons}>
                <a href="#">
                  <Image src={Images.appleBadge} alt="Download on the App Store" width={165} height={48} className={styles.storeBadge} />
                </a>
                <a href="#">
                  <Image src={Images.googleBadge} alt="Get it on Google Play" width={165} height={48} className={styles.storeBadge} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLinks}>
            <Link href="#" className={styles.footerBottomLink}>Legal & Privacy</Link>
            <Link href="#" className={styles.footerBottomLink}>User Agreement</Link>
            <Link href="#" className={styles.footerBottomLink}>Privacy & Cookie Policy</Link>
          </div>
          <div className={styles.footerCopyright}>
            © 2026 DSCOFF Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
