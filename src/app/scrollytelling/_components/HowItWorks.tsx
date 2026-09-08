import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>The plot</div>
        <h2>Act I, <em>II, III.</em></h2>
        <p>Spoiler: you attempt the hall.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Ch.1</div>
          <h3>The arrival</h3>
          <p>A PDF appears. 300 pages of destiny.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>tale.pdf</span><span>3 chapters</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Ch.2</div>
          <h3>The transformation</h3>
          <p>Duration, marking, sections revealed.</p>
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
          <div className={styles["step-num"]}>Ch.3</div>
          <h3>The triumph</h3>
          <p>Timer, palette, auto-submit. The end? No — results.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
