import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three depths</div>
        <h2>Drop, <em>float, focus.</em></h2>
        <p>Mind the drop shadows.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Z0</div>
          <h3>Drop the PDF</h3>
          <p>It falls 300 pages deep. Cushioned.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>strata.pdf</span><span>3 levels</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Z1</div>
          <h3>Float structure</h3>
          <p>Duration, marking, sections hover.</p>
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
          <div className={styles["step-num"]}>Z2</div>
          <h3>Focus the hall</h3>
          <p>Timer nearest. Grab it.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
