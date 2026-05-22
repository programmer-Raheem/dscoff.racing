import React from "react";
import Image from "next/image";
import { Images } from "@/utils/images";
import SectionTopBar from "@/components/reusable/SectionTopBar";
import styles from "./GiveawaysPromo.module.css";

export default function GiveawaysPromo() {
  return (
    <section className={styles.giveawaysPromoSection} id="giveaways-promo">
      <SectionTopBar subtitle="GIVAWAYS" />

      <div className={styles.giveawaysPromoContent}>
        <Image
          src={Images.telegramBg}
          alt="DSCOFF Giveaways Promotion"
          width={1440}
          height={600}
          className={styles.giveawaysPromoBg}
          sizes="100vw"
          priority
        />

        <a
          href="https://t.me/dscoffracing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegramBtnLink}
        >
          <Image
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
