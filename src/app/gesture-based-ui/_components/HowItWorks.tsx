import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three gestures</div>
        <h2>Swipe, <em>pinch, tap.</em></h2>
        <p>Mouse users: pretend.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>👆</div>
          <h3>Swipe in PDF</h3>
          <p>Flick 300 pages into the tray.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>touch.pdf</span><span>multi-touch</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>🤏</div>
          <h3>Pinch structure</h3>
          <p>Duration, marking, sections zoomed.</p>
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
          <div className={styles["step-num"]}>👇</div>
          <h3>Tap the hall</h3>
          <p>Timer tapped, palette poked, submit pressed.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
