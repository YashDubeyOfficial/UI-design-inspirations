import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>See · Hear · Press</div>
        <h2>Sense, <em>solve, submit.</em></h2>
        <p>All five senses. Six, counting pressure.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>👁</div>
          <h3>See the PDF</h3>
          <p>Any 300 pages in warm amber.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>loud_paper.pdf</span><span>11/10 volume</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>👂</div>
          <h3>Hear structure</h3>
          <p>Duration, marking, sections announced.</p>
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
          <div className={styles["step-num"]}>✋</div>
          <h3>Press start</h3>
          <p>Timer buzzes, palette clicks, submit thunks.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
