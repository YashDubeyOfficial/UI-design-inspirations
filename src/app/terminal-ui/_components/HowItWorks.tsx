import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>$ cat process</div>
        <h2>Pipe, <em>parse, pass.</em></h2>
        <p>Everything is a file. Including the exam.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>$1</div>
          <h3>cat paper.pdf</h3>
          <p>Any PDF streams through stdin.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>/dev/paper0</span><span>90 blocks</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>$2</div>
          <h3>grep structure</h3>
          <p>Duration, marking, sections matched.</p>
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
          <div className={styles["step-num"]}>$3</div>
          <h3>sudo hall</h3>
          <p>Timer escalates privileges. Submit exits 0.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
