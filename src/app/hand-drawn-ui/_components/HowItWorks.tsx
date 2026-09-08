import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Sketch · Ink · Attempt</div>
        <h2>Three <em>doodles.</em></h2>
        <p>Drawn fast, checked twice.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>~1~</div>
          <h3>Scribble the PDF</h3>
          <p>Any pages, even napkins. Pencil accepted.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>doodle_final_v2.PDF</span><span>lots of eraser dust</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>~2~</div>
          <h3>Ink the structure</h3>
          <p>Duration, marking, sections traced over.</p>
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
          <div className={styles["step-num"]}>~3~</div>
          <h3>Circle start</h3>
          <p>Timer, palette, auto-submit. No erasing.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
