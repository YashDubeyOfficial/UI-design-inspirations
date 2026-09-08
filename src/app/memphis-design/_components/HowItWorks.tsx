import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Dot · Squiggle · Test</div>
        <h2>Shape, <em>color, hall.</em></h2>
        <p>Postmodernism passed the exam.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>●</div>
          <h3>Dot the PDF</h3>
          <p>Any 300 pages, polka-dotted.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>squiggle.pdf</span><span>dot matrix</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>▲</div>
          <h3>Triangle structure</h3>
          <p>Duration, marking, sections in brights.</p>
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
          <div className={styles["step-num"]}>■</div>
          <h3>Square the hall</h3>
          <p>Timer, palette, auto-submit. Boxed fun.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
