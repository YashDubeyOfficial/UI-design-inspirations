import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Loud process</div>
        <h2>Shout, <em>murmur, test.</em></h2>
        <p>Volume varies. Accuracy constant.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>AAH</div>
          <h3>SHOUT the PDF</h3>
          <p>Drop anything. We hear it all.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>LOUD_quiet_LOUD.pdf</span><span>72 dB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>hmm</div>
          <h3>murmur structure</h3>
          <p>Duration, marking, sections, softly noted.</p>
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
          <div className={styles["step-num"]}>TA-DA</div>
          <h3>PERFORM the hall</h3>
          <p>Timer belts, palette harmonizes.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
