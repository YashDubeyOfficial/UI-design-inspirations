import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Sow · Tend · Reap</div>
        <h2>Grow, <em>gently.</em></h2>
        <p>No two halls alike. All equally exact.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Sow the PDF</h3>
          <p>Any paper takes root quickly.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>seedling.pdf</span><span>heirloom</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Tend structure</h3>
          <p>Duration, marking, sections pruned.</p>
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
          <h3>Reap the hall</h3>
          <p>Timer fruits, palette flowers, submit falls.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
