import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three sliders</div>
        <h2>Set, <em>slide, solve.</em></h2>
        <p>Defaults are sane. Curiosity is rewarded.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>P1</div>
          <h3>Load parameters</h3>
          <p>Any PDF parses into sliders.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>params.json.pdf</span><span>tunable</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>P2</div>
          <h3>Tune the values</h3>
          <p>Duration, marking, sections adjustable.</p>
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
          <div className={styles["step-num"]}>P3</div>
          <h3>Lock and attempt</h3>
          <p>Timer, palette, auto-submit. Committed.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
