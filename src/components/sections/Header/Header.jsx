import React from "react";
import { Images } from "@/utils/images";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.headerNavigationWrapper}>
        <a href="#" className={styles.brandLogo}>
          <img
            src={Images.logo}
            alt="DSCOFF RACING Logo"
            width={160}
            height={32}
            className={styles.logoImg}
            loading="eager"
          />
        </a>

        <div className={styles.navbarRightContainer}>
          <img
            src={Images.halfNav}
            alt="Half Nav"
            width={615}
            height={70}
            className={styles.navbarYellowBg}
            loading="eager"
          />

          <nav className={styles.nav} id="nav-main">
            <ul className={styles.navigation}>
              <li className={styles.navItem}>
                <a href="#giveaway">GIVEAWAY</a>
              </li>
              <li className={styles.navItem}>
                <a href="#team">TEAM</a>
              </li>
              <li className={styles.navItem}>
                <a href="#roadmap">ROADMAP</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
