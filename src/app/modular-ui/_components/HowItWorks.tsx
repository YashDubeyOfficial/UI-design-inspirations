import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Assembly guide</div>
        <h2>Unbox, <em>click, run.</em></h2>
        <p>No tools required. No leftover screws.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>MOD-A</div>
          <h3>Unbox PDF</h3>
          <p>All 300 pages, neatly bagged.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>kit_v2.pdf</span><span>90 pcs</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>MOD-B</div>
          <h3>Click structure</h3>
          <p>Duration, marking, sections snap in.</p>
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
          <div className={styles["step-num"]}>MOD-C</div>
          <h3>Run hall</h3>
          <p>Timer, palette, auto-submit. Powers on.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
