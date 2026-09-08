import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three sheets</div>
        <h2>Sketch, <em>dimension, build.</em></h2>
        <p>All measurements in questions.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>S1</div>
          <h3>Trace the PDF</h3>
          <p>Any sheet up to A0 × 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>PKH-2026-A0.dwg.pdf</span><span>SCALE 1:1</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>S2</div>
          <h3>Dimension structure</h3>
          <p>Duration ±0, marking −1 exact, sections toleranced.</p>
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
          <div className={styles["step-num"]}>S3</div>
          <h3>Build to print</h3>
          <p>Timer, palette, auto-submit. Stamp approved.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
