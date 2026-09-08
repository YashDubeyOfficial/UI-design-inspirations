import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>★ SO MUCH PROCESS ★</div>
        <h2>THREE <em>STEPS!!!</em></h2>
        <p>Plus confetti. Plus badges. Plus everything else!!!</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>★1</div>
          <h3>DUMP EVERYTHING</h3>
          <p>PDFs! Photos! Screenshots! Napkins! ALL OF IT!</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>EVERYTHING_final_v9.pdf</span><span>9000 MB!!!</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>★2</div>
          <h3>AI GOES FERAL</h3>
          <p>Duration! Marking! Sections! Instructions! WOW!</p>
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
          <div className={styles["step-num"]}>★3</div>
          <h3>MAXIMUM HALL</h3>
          <p>Timer! Palette! Confetti on submit! PARTY!</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
