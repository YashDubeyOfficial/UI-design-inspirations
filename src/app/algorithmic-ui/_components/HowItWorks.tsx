import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three passes</div>
        <h2>Map, <em>reduce, render.</em></h2>
        <p>Deterministic. Reproducible. Fast.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>map()</div>
          <h3>Map the PDF</h3>
          <p>Every page becomes structured data.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>input_batch/</span><span>300 files</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>reduce()</div>
          <h3>Reduce to structure</h3>
          <p>Duration, marking, sections aggregated.</p>
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
          <div className={styles["step-num"]}>render()</div>
          <h3>Render the hall</h3>
          <p>Timer, palette, auto-submit painted.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
