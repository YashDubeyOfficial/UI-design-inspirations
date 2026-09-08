import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Tape counter</div>
        <h2>Three <em>scenes.</em></h2>
        <p>Please do not touch the tape inside.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SCENE 1</div>
          <h3>Insert PDF</h3>
          <p>Any cassette up to 300 pages. Push until it clicks.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>summer_2004_final_FINAL.avi.pdf</span><span>700 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SCENE 2</div>
          <h3>Auto tracking</h3>
          <p>Duration, marking, sections lock with a wobble.</p>
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
          <div className={styles["step-num"]}>SCENE 3</div>
          <h3>Enjoy the hall</h3>
          <p>Timer OSD, palette remote, auto-stop at end.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
