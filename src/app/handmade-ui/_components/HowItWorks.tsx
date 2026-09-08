import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Measure · Cut · Sew</div>
        <h2>Three <em>stitches.</em></h2>
        <p>Hand-finished seams on a machine-precise exam.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>S1</div>
          <h3>Measure the PDF</h3>
          <p>Twice. Then cut 300 pages once.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>quilt_top.pdf</span><span>queen size</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>S2</div>
          <h3>Sew the structure</h3>
          <p>Duration, marking, sections blanket-stitched.</p>
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
          <h3>Wear the hall</h3>
          <p>Timer, palette, auto-submit. Tailored fit.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
