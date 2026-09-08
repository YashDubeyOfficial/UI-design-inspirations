import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>01 / 02 / 03</div>
        <h2>Three steps. <em>No noise.</em></h2>
        <p>Upload, parse, attempt. The grid holds everything else.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01 <span>↗</span></div>
          <h3>Drop the PDF</h3>
          <p>PYQs, scans, banks. 300 pages max.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>GATE_2023.pdf</span><span>8.4 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02 <span>✦</span></div>
          <h3>AI grids it</h3>
          <p>Duration, marking, sections. Auto-detected.</p>
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
          <div className={styles["step-num"]}>03 <span>▶</span></div>
          <h3>Attempt</h3>
          <p>Timer, palette, auto-submit. Centre rules.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
