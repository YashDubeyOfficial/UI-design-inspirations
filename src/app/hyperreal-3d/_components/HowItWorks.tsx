import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three scenes</div>
        <h2>Shoot. <em>Grade.</em> Screen.</h2>
        <p>From raw footage (your PDF) to final cut (your hall) in forty seconds.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SCENE 01</div>
          <h3>Roll the PDF</h3>
          <p>PYQs, scans, banks. Cameras rolling.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>NEET_2021.pdf</span><span>14 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SCENE 02</div>
          <h3>Light the structure</h3>
          <p>Duration, marking, sections. Lit perfectly.</p>
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
          <div className={styles["step-num"]}>SCENE 03</div>
          <h3>Screen the hall</h3>
          <p>Timer, palette, auto-cut. Action.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
