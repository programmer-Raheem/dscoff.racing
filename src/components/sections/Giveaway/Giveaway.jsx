"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Images } from "@/utils/images";
import SectionTopBar from "@/components/reusable/SectionTopBar";
import styles from "./Giveaway.module.css";

const ribbonItems = [
  { type: "logo" },
  { type: "text" },
  { type: "logo" },
  { type: "text" },
  { type: "logo" },
  { type: "text" },
  { type: "logo" },
  { type: "text" },
];

export default function Giveaway() {
  return (
    <section className={styles.ribbonVideoSection} id="giveaway">
      {/* Giveaway Ribbons */}
      <div className={styles.giveawayRibbonSection}>
        {/* Yellow Ribbon with pulsing WIN! text */}
        <div className={styles.ribbonYellow}>
          <div className={styles.ribbonStaticTrack}>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
            <span>WIN!</span>
          </div>
        </div>

        {/* Dark Slate Ribbon: Swiper marquee */}
        <div className={styles.ribbonDark}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={800}
            allowTouchMove={true}
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            className={styles.ribbonSwiper}
          >
            {ribbonItems.map((item, index) => (
              <SwiperSlide key={index} className={styles.ribbonItem}>
                {item.type === "logo" ? (
                  <Image
                    src={Images.logo}
                    alt="DSCOFF Logo"
                    width={100}
                    height={42}
                    className={styles.ribbonLogo}
                  />
                ) : (
                  <span className={styles.ribbonText}>GIVAWAYS</span>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* YouTube Video Embed */}
      <div className={styles.videoContentContainer}>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/pE2noJMpJLY?rel=0&modestbranding=1&playsinline=1"
            title="DSCOFF Racing Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
