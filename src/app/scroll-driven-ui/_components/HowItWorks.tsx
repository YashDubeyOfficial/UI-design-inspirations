import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>0% → 50% → 100%</div>
        <h2>Begin, <em>fill, finish.</em></h2>
        <p>The bar never lies.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>0%</div>
          <h3>Empty bar, full PDF</h3>
          <p>All 300 pages ahead of you.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>journey.pdf</span><span>0→100%</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>50%</div>
          <h3>Half parsed</h3>
          <p>Duration, marking, sections filling.</p>
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
          <div className={styles["step-num"]}>100%</div>
          <h3>Bar complete</h3>
          <p>Timer, palette, auto-submit. Full.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
