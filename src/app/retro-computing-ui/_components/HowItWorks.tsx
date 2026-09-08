import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>AUTOEXEC.BAT</div>
        <h2>Three <em>commands.</em></h2>
        <p>Type carefully. Backspace works.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>&gt;</div>
          <h3>LOAD PAPER.PDF</h3>
          <p>Any file fits on 1.44MB of attitude.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>EXAM.EXE</span><span>1.44 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>&gt;</div>
          <h3>PARSE /F</h3>
          <p>Duration, marking, sections. No GUI needed.</p>
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
          <div className={styles["step-num"]}>&gt;</div>
          <h3>HALL /GO</h3>
          <p>Timer beeps, palette ASCII-arts, submit on return.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
