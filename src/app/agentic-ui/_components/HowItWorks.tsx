import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Crew dispatch</div>
        <h2>Assign, <em>execute, report.</em></h2>
        <p>Every agent reports. You review.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>A1</div>
          <h3>Parser takes PDF</h3>
          <p>Reads all 300 pages without complaint.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>crew_brief.pdf</span><span>4 agents</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>A2</div>
          <h3>Planner sections</h3>
          <p>Duration, marking, sections assigned.</p>
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
          <div className={styles["step-num"]}>A3</div>
          <h3>Timer stands watch</h3>
          <p>Palette, countdown, auto-submit guarded.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
