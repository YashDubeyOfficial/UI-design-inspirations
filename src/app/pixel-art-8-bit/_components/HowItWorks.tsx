import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>LEVEL 1-1 · PROCESS</div>
        <h2>Three <em>stages.</em></h2>
        <p>No continues needed. Each stage clears in seconds.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1-1</div>
          <h3>INSERT PDF</h3>
          <p>Drop any cartridge — 300 pages fit in 64KB of attitude.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>FINAL_BOSS.pdf</span><span>64 KB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1-2</div>
          <h3>PARSE SPRITES</h3>
          <p>Duration, marking, sections — depixelated perfectly.</p>
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
          <div className={styles["step-num"]}>1-3</div>
          <h3>BOSS: THE HALL</h3>
          <p>Timer, palette, auto-submit. Defeat 90 questions.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
