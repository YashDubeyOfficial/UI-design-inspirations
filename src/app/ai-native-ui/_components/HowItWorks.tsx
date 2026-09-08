import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Cognition</div>
        <h2>Sense, <em>reason, hall.</em></h2>
        <p>The interface is a side effect of understanding.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Sense the PDF</h3>
          <p>Any 300 pages perceived instantly.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>thought.pdf</span><span>conceived</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Reason structure</h3>
          <p>Duration, marking, sections inferred.</p>
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
          <h3>Manifest hall</h3>
          <p>Timer, palette, auto-submit materialize.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
