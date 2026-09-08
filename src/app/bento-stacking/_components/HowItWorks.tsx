import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three tiers</div>
        <h2>Bottom, <em>middle, top.</em></h2>
        <p>Scones optional. Structure mandatory.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>T1</div>
          <h3>Bottom tier: PDF</h3>
          <p>Savoury base of 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>afternoon.pdf</span><span>3 tiers</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>T2</div>
          <h3>Middle: structure</h3>
          <p>Duration, marking, sections — finger sandwiches.</p>
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
          <div className={styles["step-num"]}>T3</div>
          <h3>Top: hall</h3>
          <p>Timer, palette, auto-submit — the sweet finish.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
