import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>No framework</div>
        <h2>Three <em>plain steps.</em></h2>
        <p>Just HTML. The exam does the talking.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1.</div>
          <h3>Choose file</h3>
          <p>Any PDF. The button is gray and honest.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>paper.pdf</span><span>2.1 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>2.</div>
          <h3>Server reads it</h3>
          <p>Duration, marking, sections. Plain text out.</p>
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
          <div className={styles["step-num"]}>3.</div>
          <h3>Take test</h3>
          <p>Timer counts. Palette lists. Submit works.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
