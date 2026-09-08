import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Descent profile</div>
        <h2>Sink, <em>settle, solve.</em></h2>
        <p>Five layers. Bring a light.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>L1</div>
          <h3>Surface skim</h3>
          <p>PDF floats on top. 300 pages, no weight.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>trench.pdf</span><span>5000m</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>L3</div>
          <h3>Mid-water parse</h3>
          <p>Duration, marking, sections pressurize.</p>
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
          <div className={styles["step-num"]}>L5</div>
          <h3>Bedrock hall</h3>
          <p>Timer glows in the trench. Submit to surface.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
