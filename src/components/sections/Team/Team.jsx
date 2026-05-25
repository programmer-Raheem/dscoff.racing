import React from "react";
import { teamMembers } from "@/constants/team";
import SectionTopBar from "@/components/ui/SectionTopBar";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.teamSection} id="team">
      <SectionTopBar subtitle="TEAM" />

      <div className={styles.teamWrapper}>
        <div className={styles.teamRow}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.teamMemberPhoto}>
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  width={270}
                  height={270}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className={styles.teamMemberInfo}>
                <h3 className={styles.teamMemberName}>{member.name}</h3>
                <p className={styles.teamMemberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
