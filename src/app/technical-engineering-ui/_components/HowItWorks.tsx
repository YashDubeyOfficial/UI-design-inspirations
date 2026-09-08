import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Procedure 1-2-3</div>
        <h2>Measure, <em>verify, certify.</em></h2>
        <p>ISO good-practice. Results reproducible.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1.0</div>
          <h3>Sample the PDF</h3>
          <p>n=300 pages max. Representative.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>sample_n300.pdf</span><span>±0.0 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>2.0</div>
          <h3>Quantify structure</h3>
          <p>Duration, marking, sections ±0.</p>
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
          <div className={styles["step-num"]}>3.0</div>
          <h3>Certify the hall</h3>
          <p>Timer, palette, auto-submit validated.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
