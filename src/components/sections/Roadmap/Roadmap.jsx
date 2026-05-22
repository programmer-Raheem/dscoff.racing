import React from "react";
import { roadmapTimeline } from "@/constants/roadmap";
import SectionTopBar from "@/components/reusable/SectionTopBar";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  return (
    <section className={styles.roadmapSection} id="roadmap">
      <SectionTopBar subtitle="ROADMAP" />

      <div className={styles.roadmapWrapper}>
        <h3 className={styles.roadmapStoryTitle}>DSCOFF STORY</h3>

        <div className={styles.roadmapTimeline}>
          {roadmapTimeline.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineDate}>
                <span className={styles.dateHighlight}>{item.dateHighlight}</span>{" "}
                {item.dateYear}
              </div>
              <div className={styles.timelineDot} />
              <div className={styles.timelineDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
