import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Cut lines</div>
        <h2>Three <em>snips.</em></h2>
        <p>Dotted lines show where to cut. Glue sticks provided.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SNIP 1</div>
          <h3>Clip the PDF</h3>
          <p>Cut along the dotted line. All 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>cut_out_coupon.pdf</span><span>2 pages</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>SNIP 2</div>
          <h3>Glue the structure</h3>
          <p>Duration, marking, sections pasted straight.</p>
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
          <div className={styles["step-num"]}>SNIP 3</div>
          <h3>Staple the hall</h3>
          <p>Timer taped on. Palette stapled twice.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
