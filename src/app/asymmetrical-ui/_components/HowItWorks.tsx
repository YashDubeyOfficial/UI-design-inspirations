import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three uneven steps</div>
        <h2>Lean <em>in.</em></h2>
        <p>Symmetry is a suggestion we politely declined.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>a.</div>
          <h3>Drop, off-center</h3>
          <p>PDFs land left of where expected.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>crooked_scan.pdf</span><span>~8 MB?</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>b.</div>
          <h3>Parse, oversized</h3>
          <p>Duration and marking set HUGE.</p>
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
          <div className={styles["step-num"]}>c.</div>
          <h3>Attempt, sideways</h3>
          <p>Timer tilted 2 degrees. Still exact.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
