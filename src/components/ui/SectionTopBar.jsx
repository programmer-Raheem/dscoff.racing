import React from "react";
import { Images } from "@/assets/utils/images";
import styles from "./SectionTopBar.module.css";

export default function SectionTopBar({ subtitle, title, alignment = "left", className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.headerBar} ${styles[alignment]}`}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.yellowBgWrapper}>
          <img
            src={Images.halfNav}
            alt="Slanted background decor"
            width={615}
            height={70}
            className={styles.yellowBg}
          />
        </div>
      </div>
      {title && (
        <div className={`${styles.titleWrapper} ${styles[alignment]}`}>
          <h3 className={styles.titleText}>{title}</h3>
        </div>
      )}
    </div>
  );
}
