"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Images } from "@/utils/images";
import SectionTopBar from "@/components/ui/SectionTopBar";
import styles from "./VehicleModes.module.css";

const vehicles = [
  { id: "basic", label: "BASIC", image: Images.basicVehicle, alt: "Basic" },
  { id: "premium", label: "PREMIUM", image: Images.premiumVehicle, alt: "Premium" },
  { id: "sport", label: "SPORT", image: Images.sportVehicle, alt: "Sport" },
  { id: "supersport", label: "SUPER SPORT", image: Images.superSportVehicle, alt: "Super Sport" },
];

export default function VehicleModes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className={styles.vehicleModesSection} id="vehicle-modes">
      <SectionTopBar subtitle="VEHICLE MODES" />

      <div className={styles.vehicleModesWrapper}>
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={800}
            loop={true}
            slidesPerView={2.2}
            centeredSlides={true}
            spaceBetween={-50}
            allowTouchMove={true}
            className={styles.vehiclesRow}
          >
            {vehicles.map((v) => (
              <SwiperSlide key={v.id} className={styles.vehicleSlide}>
                <div className={styles.vehicleItemWrapper}>
                  <div className={styles.vehicleModeItem}>
                    <Image
                      src={v.image}
                      alt={v.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="50vw"
                    />
                  </div>
                  <div className={styles.vehicleModeTextWrapper}>
                    <h3 className={styles.vehicleModeText}>
                      <span className={styles.textYellow}>{v.label}</span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.vehiclesRow}>
            {vehicles.map((v) => (
              <div key={v.id} className={styles.vehicleItemWrapper}>
                <div className={styles.vehicleModeItem}>
                  <Image
                    src={v.image}
                    alt={v.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 1200px) 25vw, 476px"
                  />
                </div>
                <div className={styles.vehicleModeTextWrapper}>
                  <h3 className={styles.vehicleModeText}>
                    <span className={styles.textYellow}>{v.label}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
