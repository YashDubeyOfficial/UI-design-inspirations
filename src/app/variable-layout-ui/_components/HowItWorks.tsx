import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three arrangements</div>
        <h2>Wide, <em>tall, wild.</em></h2>
        <p>Familiarity is the enemy of adaptability.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>A</div>
          <h3>Deal the PDF</h3>
          <p>Any deck of 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>deck.pdf</span><span>52 cards</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>B</div>
          <h3>Shuffle structure</h3>
          <p>Duration, marking, sections redealt.</p>
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
          <div className={styles["step-num"]}>C</div>
          <h3>Play the hall</h3>
          <p>Timer, palette, auto-submit. House always wins ties.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
