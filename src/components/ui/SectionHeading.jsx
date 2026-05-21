import React from "react";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ text, highlightText, align = "left", className = "" }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`}>
      <h2 className={styles.heading}>
        {text} {highlightText && <span className={styles.highlight}>{highlightText}</span>}
      </h2>
    </div>
  );
}
