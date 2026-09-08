import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>01 / 02 / 03</div>
        <div>
          <h2>Three steps. <em>One grid.</em></h2>
          <p>Upload, parse, attempt. Every element aligned to the same twelve columns.</p>
        </div>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Drop the PDF</h3>
          <p>PYQs, scans, banks. 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>CSAT_2022.pdf</span><span>9.8 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>AI aligns it</h3>
          <p>Duration, marking, sections. Set flush left.</p>
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
          <div className={styles["step-num"]}>03</div>
          <h3>Attempt</h3>
          <p>Timer, palette, auto-submit. On the grid.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
