import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>0-100 in three</div>
        <h2>Ready, <em>set, blur.</em></h2>
        <p>Motion blur complimentary.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>V1</div>
          <h3>Launch the PDF</h3>
          <p>Zero to parsed before you blink.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>velocity.pdf</span><span>88 mph</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>V2</div>
          <h3>Sustain structure</h3>
          <p>Duration, marking, sections at cruise.</p>
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
          <div className={styles["step-num"]}>V3</div>
          <h3>Brake for hall</h3>
          <p>Timer, palette, auto-submit. Controlled stop.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
