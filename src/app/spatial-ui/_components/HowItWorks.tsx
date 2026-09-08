import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Three axes</div>
        <h2>Spread, <em>stack, solve.</em></h2>
        <p>X for sections, Y for questions, Z for confidence.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>X</div>
          <h3>Scatter the PDF</h3>
          <p>Pages fan out across the room.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>room_scan.pdf</span><span>3D · 90 Qs</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>Y</div>
          <h3>Stack the structure</h3>
          <p>Duration, marking, sections layered.</p>
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
          <div className={styles["step-num"]}>Z</div>
          <h3>Pull the hall close</h3>
          <p>Timer nearer, palette nearest, submit closest.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
