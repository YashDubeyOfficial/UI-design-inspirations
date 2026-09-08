import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Unhurried process</div>
        <h2>Inhale. <em>Exhale.</em> Attempt.</h2>
        <p>Three slow steps. No rush anywhere except the timer — and even that is gentle.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Place the PDF down</h3>
          <p>PYQs, scans, banks. Up to 300 pages, softly received.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>CSAT_2023.pdf</span><span>9.6 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>AI breathes it in</h3>
          <p>Duration, marking, sections. Absorbed quietly.</p>
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
          <div className={styles["step-num"]}>03</div>
          <h3>Begin, calmly</h3>
          <p>Timer, palette, auto-submit. Steady and true.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
