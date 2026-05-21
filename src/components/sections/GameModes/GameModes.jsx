"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { gameModes } from "@/data/gameModes";
import SectionTopBar from "@/components/ui/SectionTopBar";
import styles from "./GameModes.module.css";

export default function GameModes() {
  return (
    <section className={styles.gameModesSection} id="game-modes">
      <SectionTopBar subtitle="GAME MODES" />

      <div className={styles.gameModesSliderWrapper}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={-40}
          allowTouchMove={true}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              centeredSlides: true,
              spaceBetween: -20,
            },
            768: {
              slidesPerView: 2.2,
              centeredSlides: true,
              spaceBetween: -30,
            },
            992: {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: -40,
            },
          }}
          className={styles.gameModesSlider}
        >
          {gameModes.map((mode) => (
            <SwiperSlide key={mode.id} className={styles.gameModeSlide}>
              <div className={styles.gameModeItem}>
                <Image
                  src={mode.image}
                  alt={mode.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 82vw, (max-width: 992px) 50vw, 33vw"
                />
                <div className={styles.gameModeOverlay} />
                <div className={styles.gameModeTextWrapper}>
                  <h3 className={styles.gameModeText}>
                    <span className={styles.textYellow}>{mode.textYellow}</span>{" "}
                    <span className={styles.textWhite}>{mode.textWhite}</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
