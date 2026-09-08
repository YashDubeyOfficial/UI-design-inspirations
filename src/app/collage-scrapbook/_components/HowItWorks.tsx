import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Rip · Stick · Attempt</div>
        <h2>Three <em>globs of glue.</em></h2>
        <p>No straight edges were used. All rules were kept.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>RIP</div>
          <h3>Tear the PDF</h3>
          <p>Jagged edges preferred. All 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>torn_page_07.pdf</span><span>pre-loved</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>STICK</div>
          <h3>Glue the structure</h3>
          <p>Duration, marking, sections — hold still.</p>
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
          <div className={styles["step-num"]}>GO</div>
          <h3>Frame the mess</h3>
          <p>Timer, palette, auto-submit. Gallery ready.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
