import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three sheets</div>
        <h2>Lay, <em>stack, reveal.</em></h2>
        <p>Every layer lifts. Nothing tears.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>L1</div>
          <h3>Lay the PDF</h3>
          <p>Base sheet, all 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>tracing.pdf</span><span>3 sheets</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>L2</div>
          <h3>Overlay structure</h3>
          <p>Duration, marking, sections on film.</p>
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
          <div className={styles["step-num"]}>L3</div>
          <h3>Reveal the hall</h3>
          <p>Timer floats on top. Peek anytime.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
