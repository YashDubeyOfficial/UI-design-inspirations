import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>In this issue</div>
        <h2>Three <em>features.</em></h2>
        <p>Plus fashion (palette) and horoscopes (scores).</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>p.01</div>
          <h3>The pitch meeting</h3>
          <p>Any PDF gets a flatplan. 300 pages, all assigned.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>flatplan.pdf</span><span>90 pp</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>p.02</div>
          <h3>Copy desk parses</h3>
          <p>Duration, marking, sections sub-edited.</p>
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
          <div className={styles["step-num"]}>p.03</div>
          <h3>Press night hall</h3>
          <p>Timer rolls, palette inks, submit binds.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
