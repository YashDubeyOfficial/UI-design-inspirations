import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>[ CORRUPTION PROTOCOL ]</div>
        <h2>GLITCH. <em>DECODE.</em></h2>
        <p>Three faults in the matrix. The exam survives all of them.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>E1</div>
          <h3>DROP THE FILE</h3>
          <p>Any PDF enters the static. Even damaged ones.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>corrupted_final.pdf</span><span>6.66 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>E2</div>
          <h3>REASSEMBLE PACKETS</h3>
          <p>Duration, marking, sections — rebuilt from fragments.</p>
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
          <div className={styles["step-num"]}>E3</div>
          <h3>RENDER THE HALL</h3>
          <p>Timer flickers, palette buzzes, submit corrupts at zero.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
