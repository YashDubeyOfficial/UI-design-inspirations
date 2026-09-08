import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three movements</div>
        <h2>Overture, <em>allegro, finale.</em></h2>
        <p>Composed for concentration.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>I.</div>
          <h3>Overture: PDF</h3>
          <p>Paper rustles in. All 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>focus_lofi.mp3.pdf</span><span>320 kbps</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>II.</div>
          <h3>Allegro: parse</h3>
          <p>Duration, marking, sections in tempo.</p>
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
          <div className={styles["step-num"]}>III.</div>
          <h3>Finale: hall</h3>
          <p>Timer crescendo, palette chorus, submit chord.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
