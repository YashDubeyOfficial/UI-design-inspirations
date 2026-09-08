import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Softly, in three</div>
        <h2>Upload. Parsed. Attempt.</h2>
        <p>Nothing here raises its voice. Not even the instructions.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Leave the PDF</h3>
          <p>PYQs, scans, banks. Up to 300 pages, quietly taken.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>PHY_2021.pdf</span><span>7.9 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>It is understood</h3>
          <p>Duration, marking, sections. Noted without fuss.</p>
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
          <h3>Begin silently</h3>
          <p>Timer, palette, auto-submit. All present, all hushed.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
