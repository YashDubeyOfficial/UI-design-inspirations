import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Seed · Iterate · Select</div>
        <h2>Roll, <em>keep, attempt.</em></h2>
        <p>Randomness with excellent taste.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>s1</div>
          <h3>Seed the PDF</h3>
          <p>Any paper becomes entropy. Good entropy.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>seed_42.pdf</span><span>random-ish</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>s2</div>
          <h3>Iterate structure</h3>
          <p>Duration, marking, sections converge.</p>
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
          <div className={styles["step-num"]}>s3</div>
          <h3>Select the hall</h3>
          <p>Timer, palette, auto-submit. Keepers only.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
