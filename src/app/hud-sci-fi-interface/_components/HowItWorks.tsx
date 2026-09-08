import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>BOOT SEQUENCE</div>
        <h2>Three <em>checks.</em></h2>
        <p>All green across the board.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>CHK1</div>
          <h3>FEED DOCUMENT</h3>
          <p>Any PDF accepted by the intake.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>mission_brief.pdf</span><span>CLASSIFIED</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>CHK2</div>
          <h3>PARSE TELEMETRY</h3>
          <p>Duration, marking, sections confirmed.</p>
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
          <div className={styles["step-num"]}>CHK3</div>
          <h3>WEAPONS HOT</h3>
          <p>Timer live. Palette armed. Submit on zero.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
