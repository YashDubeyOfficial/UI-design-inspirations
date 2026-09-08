import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Mission plan</div>
        <h2>Three <em>stages.</em></h2>
        <p>Countdown commenced. All systems nominal.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>STAGE 1</div>
          <h3>Fuel the PDF</h3>
          <p>Any 300 pages loaded into the bay.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>mission_plan.pdf</span><span>1955 KB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>STAGE 2</div>
          <h3>Plot the course</h3>
          <p>Duration, marking, sections charted.</p>
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
          <div className={styles["step-num"]}>STAGE 3</div>
          <h3>Splash down certified</h3>
          <p>Timer, palette, auto-submit. Recovery nominal.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
