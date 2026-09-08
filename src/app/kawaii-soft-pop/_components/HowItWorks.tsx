import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Blush · Sparkle · Attempt</div>
        <h2>Cute, <em>cuter, hall.</em></h2>
        <p>Adorable outside. NTA inside.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>♡1</div>
          <h3>Hug the PDF</h3>
          <p>Any pages, squeezed gently.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>doki_doki.pdf</span><span>kawaii bytes</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>♡2</div>
          <h3>Sparkle structure</h3>
          <p>Duration, marking, sections glittering.</p>
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
          <div className={styles["step-num"]}>♡3</div>
          <h3>Brave the hall</h3>
          <p>Timer blushes, palette cheers, submit hugs.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
