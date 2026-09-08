import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three breaths</div>
        <h2>Inhale, <em>hold, hall.</em></h2>
        <p>The interface exhales. You inhale questions.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>IN</div>
          <h3>Breathe in PDF</h3>
          <p>Any 300 pages become mist.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>atmosphere.pdf</span><span>100% humidity</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>HOLD</div>
          <h3>Mist parses itself</h3>
          <p>Duration, marking, sections condense.</p>
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
          <div className={styles["step-num"]}>HALL</div>
          <h3>Exhale answers</h3>
          <p>Timer glows, palette drifts, submit releases.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
