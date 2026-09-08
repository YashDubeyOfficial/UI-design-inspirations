import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three planes</div>
        <h2>Far, <em>mid, near.</em></h2>
        <p>Parallax is free. Pressure included.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>FAR</div>
          <h3>Distant PDF</h3>
          <p>All 300 pages on the horizon.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>scrolling.pdf</span><span>3 planes</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>MID</div>
          <h3>Approaching structure</h3>
          <p>Duration, marking, sections draw near.</p>
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
          <div className={styles["step-num"]}>NEAR</div>
          <h3>Foreground hall</h3>
          <p>Timer huge. Palette within reach.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
