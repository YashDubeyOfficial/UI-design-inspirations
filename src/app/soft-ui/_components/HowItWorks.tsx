import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Fluff · Fold · Rest (test)</div>
        <h2>Soft, <em>softer, hall.</em></h2>
        <p>Firmness: exam-grade. Everything else: cloud.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Fluff the PDF</h3>
          <p>Any pages, shaken awake.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>pillow.pdf</span><span>cloud Bushels</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Fold structure</h3>
          <p>Duration, marking, sections tucked in.</p>
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
          <h3>Rest (test)</h3>
          <p>Timer hums, palette breathes, submit tucks you in.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
