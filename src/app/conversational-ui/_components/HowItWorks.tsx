import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three messages</div>
        <h2>Hi, <em>ready, go.</em></h2>
        <p>Read receipts: your score.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Hi</div>
          <h3>Send the PDF</h3>
          <p>Drop it in chat like a photo.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>chat_export.pdf</span><span>threaded</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>...</div>
          <h3>It prepares</h3>
          <p>Duration, marking, sections. Typing…</p>
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
          <div className={styles["step-num"]}>Go</div>
          <h3>Answer inline</h3>
          <p>Timer, palette, auto-submit. React with ✅.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
