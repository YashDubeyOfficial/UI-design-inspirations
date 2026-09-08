import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Side A · B · C</div>
        <h2>Slow, <em>slower, hall.</em></h2>
        <p>Three tracks, all reverb, all exam.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>A1</div>
          <h3>Drop the tape</h3>
          <p>Any PDF slides into the deck.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>mallsoft_final.mp3.pdf</span><span>84 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>A2</div>
          <h3>Slow + reverb</h3>
          <p>Duration, marking, sections at 0.75x speed.</p>
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
          <div className={styles["step-num"]}>A3</div>
          <h3>Eternal hall</h3>
          <p>Timer loops, palette glows, submit never hurries.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
