import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three acts</div>
        <h2>Enter, <em>perform, bow.</em></h2>
        <p>Stage directions included.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>I</div>
          <h3>Cue the PDF</h3>
          <p>Lights up. Pages enter stage left.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>choreography.pdf</span><span>3 acts</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>II</div>
          <h3>Choreograph structure</h3>
          <p>Duration, marking, sections in formation.</p>
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
          <div className={styles["step-num"]}>III</div>
          <h3>Perform the hall</h3>
          <p>Timer solo, palette ensemble, submit finale.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
