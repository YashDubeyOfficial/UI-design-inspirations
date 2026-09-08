import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Develop · Stop · Fix</div>
        <h2>Three <em>baths.</em></h2>
        <p>Agitate gently. The structure appears by itself.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Expose the PDF</h3>
          <p>Any negative, even 300 frames.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>roll_36_exp.pdf</span><span>36 exp</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Develop structure</h3>
          <p>Duration, marking, sections surfacing.</p>
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
          <h3>Fix the hall</h3>
          <p>Timer, palette, auto-submit. Archival. </p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
