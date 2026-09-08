import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Quest log</div>
        <h2>Accept, <em>grind, loot.</em></h2>
        <p>Side quests optional. Main quest: rank.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Q1</div>
          <h3>Accept quest: PDF</h3>
          <p>Reward: 300 pages of loot.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>quest_log.pdf</span><span>+100 XP</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Q2</div>
          <h3>Parse dungeon</h3>
          <p>Duration, marking, sections mapped.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-grid"]}>
              <div><small>Duration</small><strong>180 min</strong></div>
              <div><small>Marking</small><strong>+4 −1</strong></div>
              <div><small>Sections</small><strong>3</strong></div>
              <div><small>Questions</small><strong>90</strong></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>BOSS</div>
          <h3>Defeat the hall</h3>
          <p>Timer boss, palette minions, submit victory.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
