import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>How to play</div>
        <h2>Insert, <em>blow, play.</em></h2>
        <p>Now blowing into manuals is encouraged.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>LVL1</div>
          <h3>Insert PDF</h3>
          <p>Any cartridge up to 300 pages.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>PARAKH_BROS.nes.pdf</span><span>40KB + DLC</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>LVL2</div>
          <h3>Read save data</h3>
          <p>Duration, marking, sections loaded.</p>
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
          <div className={styles["step-num"]}>BOSS</div>
          <h3>Defeat the hall</h3>
          <p>Timer, palette, auto-submit. No continues.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
