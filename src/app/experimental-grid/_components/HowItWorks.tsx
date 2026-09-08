import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>COL 02 / 12 — PROCESS</div>
        <h2>Three <em>rows.</em></h2>
        <p>Each row spans differently. All content accounted for.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>R1/C1-4</div>
          <h3>Cell: drop</h3>
          <p>PDFs enter at column one, all 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>grid_spec.pdf</span><span>12 COLS</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>R1/C5-8</div>
          <h3>Cell: parse</h3>
          <p>Duration, marking, sections fill the middle.</p>
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
          <div className={styles["step-num"]}>R1/C9-12</div>
          <h3>Cell: attempt</h3>
          <p>Timer and palette close the row.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
