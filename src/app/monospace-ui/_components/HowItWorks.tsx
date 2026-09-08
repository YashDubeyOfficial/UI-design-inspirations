import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>{'/* three steps */'}</div>
        <h2>Fixed, <em>pitched.</em></h2>
        <p>Proportional fonts were considered and rejected.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>01</div>
          <h3>Fixed input</h3>
          <p>Any PDF. Columns align themselves.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>README.pdf</span><span>80 cols</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>02</div>
          <h3>Fixed parse</h3>
          <p>Duration, marking, sections. Tab stops obeyed.</p>
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
          <h3>Fixed hall</h3>
          <p>Timer, palette, auto-submit. Monospaced pressure.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
