import React from "react";
import Image from "next/image";
import { Images } from "@/utils/images";
import SectionTopBar from "@/components/ui/SectionTopBar";
import styles from "./GiveawaysPromo.module.css";

export default function GiveawaysPromo() {
  return (
    <section className={styles.giveawaysPromoSection} id="giveaways-promo">
      <SectionTopBar subtitle="GIVAWAYS" />

      <div className={styles.giveawaysPromoContent}>
        <Image
          src={Images.telegramBg}
          alt="DSCOFF Giveaways Promotion"
          fill
          className={styles.giveawaysPromoBg}
          style={{ objectFit: "contain" }}
          sizes="100vw"
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
          />
        </a>
      </div>
    </section>
  );
}
