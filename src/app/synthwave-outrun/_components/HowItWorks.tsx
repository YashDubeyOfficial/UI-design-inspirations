import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three gears</div>
        <h2>Drop, <em>downshift, dive.</em></h2>
        <p>Redline the whole paper in forty seconds.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1ST</div>
          <h3>Drop at speed</h3>
          <p>Any 300 pages at 88 miles per hour.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>midnight_drive.pdf</span><span>88 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>2ND</div>
          <h3>Neon parse</h3>
          <p>Duration, marking, sections in chrome.</p>
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
          <div className={styles["step-num"]}>3RD</div>
          <h3>Full throttle hall</h3>
          <p>Timer burns, palette trails, submit at the line.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
