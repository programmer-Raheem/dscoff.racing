import React from "react";
import { Images } from "@/utils/images";
import SectionTopBar from "@/components/ui/SectionTopBar";
import styles from "./GiveawaysPromo.module.css";

export default function GiveawaysPromo() {
  return (
    <section className={styles.giveawaysPromoSection} id="giveaways-promo">
      <SectionTopBar subtitle="GIVAWAYS" />

      <div className={styles.giveawaysPromoContent}>
        <img
          src={Images.telegramBg}
          alt="DSCOFF Giveaways Promotion"
          width={1440}
          height={600}
          className={styles.giveawaysPromoBg}
        />

        <a
          href="https://t.me/dscoffracing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegramBtnLink}
        >
          <img
            src={Images.telegramBtn}
            alt="Go to Telegram"
            width={462}
            height={95}
            className={styles.telegramBtnImg}
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </div>
    </section>
  );
}
