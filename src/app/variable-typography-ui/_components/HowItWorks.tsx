import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three axes</div>
        <h2>Slide, <em>set, solve.</em></h2>
        <p>Every step tuned on three axes.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>wght</div>
          <h3>Weigh the PDF</h3>
          <p>Any file, measured in grams of meaning.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>variable.pdf</span><span>100–900</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>wdth</div>
          <h3>Widen structure</h3>
          <p>Duration, marking, sections expanded.</p>
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
          <div className={styles["step-num"]}>opsz</div>
          <h3>Size the hall</h3>
          <p>Timer optical-sized for distance reading.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
