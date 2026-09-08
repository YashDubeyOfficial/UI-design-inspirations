import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three camps</div>
        <h2>Base, <em>ridge, summit.</em></h2>
        <p>Acclimatize to pressure gradually.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>I</div>
          <h3>Base camp PDF</h3>
          <p>All provisions inventoried. 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>trail_map.pdf</span><span>42 km</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>II</div>
          <h3>Ridge structure</h3>
          <p>Duration, marking, sections mapped.</p>
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
          <div className={styles["step-num"]}>III</div>
          <h3>Summit hall</h3>
          <p>Timer, palette, auto-submit. Plant the flag.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
