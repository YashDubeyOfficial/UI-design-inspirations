import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Pour · Refract · Attempt</div>
        <h2>Drop it in. <em>Watch it clarify.</em></h2>
        <p>Three fluid steps from murky PDF to crystal hall.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Pour the PDF</h3>
          <p>PYQs, scans, banks. 300 pages, no splash.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>NEET_2020.pdf</span><span>14 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Glass focuses</h3>
          <p>Duration, marking, sections. Bent into view.</p>
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
          <h3>Swim the hall</h3>
          <p>Timer, palette, auto-submit. Perfectly clear.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
