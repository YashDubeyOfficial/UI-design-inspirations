import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three channels</div>
        <h2>Text, <em>voice, image.</em></h2>
        <p>One exam out.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>TXT</div>
          <h3>Type or drop PDF</h3>
          <p>Classic channel, 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>anything.*</span><span>any modality</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>MIC</div>
          <h3>Dictate structure</h3>
          <p>Speak duration, marking, sections.</p>
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
          <div className={styles["step-num"]}>IMG</div>
          <h3>Show the page</h3>
          <p>Photograph anything. Understood.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
