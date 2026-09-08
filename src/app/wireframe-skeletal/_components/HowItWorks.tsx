import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>[ PROCESS, 3 STEPS ]</div>
        <h2>[ HOW <em>IT WORKS ]</em></h2>
        <p>Each box below is a real component. Xs mark image slots.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>[ STEP: DROP ]</h3>
          <p>User drops [300-page PDF] into [dropzone].</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>[wireframe.pdf]</span><span>[8.8 MB]</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>[ STEP: PARSE ]</h3>
          <p>System extracts [duration, marking, sections].</p>
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
          <h3>[ STEP: ATTEMPT ]</h3>
          <p>User attempts [timed CBT with palette].</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
